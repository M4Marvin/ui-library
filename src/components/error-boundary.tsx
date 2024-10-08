"use client";

import type React from 'react';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  onReset: () => void;
}

export function ErrorBoundary({ children, onReset }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (hasError) {
      console.error("Unhandled error in component");
    }
  }, [hasError]);

  if (hasError) {
    return (
      <div className="p-4 bg-red-100 border border-red-400 rounded">
        <h2 className="text-lg font-semibold text-red-800">Something went wrong</h2>
        <Button
          onClick={() => {
            setHasError(false);
            onReset();
          }}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Try again
        </Button>
      </div>
    );
  }

  return <>{children}</>;
}