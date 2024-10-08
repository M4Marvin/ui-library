import { Button } from "@/components/ui/button";
import "@/styles/not-found.css";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col not-found-container bg-background text-foreground">
            <div title="404">404</div>
            <Link href="/">
                <Button variant="ghost" className="font-serif tracking-normal">
                    Home
                </Button>
            </Link>
        </div>
    );
}
