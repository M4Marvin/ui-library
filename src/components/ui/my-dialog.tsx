import { Cross1Icon } from "@radix-ui/react-icons";
import type React from "react";
import { type ReactNode, useEffect, useRef } from "react";

interface DialogProps {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

interface DialogTriggerProps {
  onClick: () => void;
  children: ReactNode;
}

interface DialogTitleProps {
  className?: string;
  children: ReactNode;
}

interface DialogDescriptionProps {
  children: ReactNode;
}

const Dialog: React.FC<DialogProps> = ({
  className,
  children,
  isOpen,
  onClose,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 bg-background/80 ${className}`}>
      <div
        ref={dialogRef}
        className="fixed left-1/2 top-1/2 z-60 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 space-y-4 rounded-[var(--radius)] border border-border bg-background p-6 shadow-lg"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          aria-label="Close dialog"
        >
          <Cross1Icon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        {children}
      </div>
    </div>
  );
};

const DialogTrigger: React.FC<DialogTriggerProps> = ({ onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    className="fixed bottom-2 left-2 rounded-[var(--radius)] border border-input bg-background px-4 py-2 text-sm font-medium text-foreground shadow-md ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  >
    {children}
  </button>
);

const DialogTitle: React.FC<DialogTitleProps> = ({ className, children }) => (
  <h2 className={`text-lg font-semibold leading-none tracking-tight ${className}`}>{children}</h2>
);

const DialogDescription: React.FC<DialogDescriptionProps> = ({ children }) => (
  <div className="text-sm text-muted-foreground">{children}</div>
);

export { Dialog, DialogTrigger, DialogTitle, DialogDescription };