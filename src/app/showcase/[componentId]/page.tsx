"use client";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import dynamic from "next/dynamic";

export default function ComponentPage({ params }: { params: { componentId: string } }) {
    const { componentId } = params;
    const Component = dynamic(() =>
        import(`@/designs/${componentId}/component.tsx`)
    );

    const ComponentDoc = dynamic(() =>
        import(`@/designs/${componentId}/doc.mdx`)
    );

    if (!Component) {
        return <div>Design not found.</div>
    }

    return (
        <div className="p-0">
            <Component />
            <Drawer>
                <DrawerTrigger asChild>
                    <Button variant="outline" className="fixed bottom-1 left-10">Docs</Button>
                </DrawerTrigger>
                <DrawerContent>
                    <div className="mx-auto w-full max-w-sm">
                        <DrawerHeader>
                            <DrawerTitle>{componentId}</DrawerTitle>
                        </DrawerHeader>
                        <DrawerDescription>
                            <div className="prose lg:prose-xl overflow-scroll max-h-[30vh]">
                                <ComponentDoc />
                            </div>
                        </DrawerDescription>
                        <DrawerFooter>
                            <Button>Submit</Button>
                            <DrawerClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </div>
                </DrawerContent>
            </Drawer>
        </div>
    )
}