import { DesignsGrid } from '@/components/designs-grid';
import { useDesigns } from '@/hooks/use-designs';
import { Suspense } from 'react';

export default function DesignsShowcase() {
  return (
    <div className="container mx-auto px-4 py-8 bg-background">
      <h1 className="text-3xl font-bold mb-6">Design Showcase</h1>
      <Suspense fallback={<div>Loading designs...</div>}>
        <DesignGridWrapper />
      </Suspense>
    </div>
  );
}

function DesignGridWrapper() {
  const designs = useDesigns();
  return <DesignsGrid designs={designs} />;
}