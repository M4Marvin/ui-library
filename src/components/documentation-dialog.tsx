"use client";

import { Dialog, DialogDescription, DialogTitle } from "@/components/ui/my-dialog";
import { ErrorBoundary } from "./error-boundary";

interface DocumentationDialogProps {
  isOpen: boolean;
  setIsDialogOpen: (isOpen: boolean) => void;
  componentId: string;
  ComponentDoc: React.ComponentType | null;
}

export function DocumentationDialog({
  isOpen,
  setIsDialogOpen,
  componentId,
  ComponentDoc
}: DocumentationDialogProps) {
  return (
    <Dialog isOpen={isOpen} onClose={() => setIsDialogOpen(false)}>
      <DialogTitle>{componentId}</DialogTitle>
      <DialogDescription>
        <div className="prose-foreground prose lg:prose-xl max-h-[70vh] overflow-auto text-foreground">
          {ComponentDoc ? (
            <ErrorBoundary onReset={() => setIsDialogOpen(false)}>
              <ComponentDoc />
            </ErrorBoundary>
          ) : (
            <p>Documentation not available.</p>
          )}
        </div>
      </DialogDescription>
      <style jsx>
        {`
        h1 {
          color: var(hsl(--foreground))
        }
        `}
      </style>
    </Dialog>
  );
}