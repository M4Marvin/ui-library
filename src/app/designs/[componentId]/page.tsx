"use client";

import Loader from "@/app/loading";
import { DocumentationDialog } from "@/components/documentation-dialog";
import { ErrorBoundary } from "@/components/error-boundary";
import { DialogTrigger } from "@/components/ui/my-dialog";
import { useComponentLoader } from "@/hooks/use-component-loader";
import { useRouter } from 'next/navigation';
import { useState } from "react";

export default function ComponentPage({
  params,
}: {
  params: { componentId: string };
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { componentId } = params;
  const router = useRouter();

  const { Component, ComponentDoc, error, isLoading } = useComponentLoader(componentId);

  if (error) {
    return <div className="p-4 bg-red-100 border border-red-400 rounded">{error}</div>;
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div>
      <ErrorBoundary onReset={() => router.refresh()}>
        {Component && <Component />}
      </ErrorBoundary>
      <DialogTrigger onClick={() => setIsDialogOpen(true)}>
        Docs
      </DialogTrigger>
      <DocumentationDialog
        isOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        componentId={componentId}
        ComponentDoc={ComponentDoc}
      />
    </div>
  );
}