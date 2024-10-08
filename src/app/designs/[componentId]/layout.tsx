"use client";

import { Button } from "@/components/ui/button"
import { ArrowLeftIcon } from "@radix-ui/react-icons"
import Link from "next/link"

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <main className="flex-1 good">
        <div className="fixed bottom-2 right-2">
          <Link href='/showcase'>
            <Button className="bg-background text-foreground">
              <ArrowLeftIcon />
            </Button>
          </Link>
        </div>
        {children}
      </main>
    </>
  )
}