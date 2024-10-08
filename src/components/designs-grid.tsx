import type { Design } from "@/types/design";
import { DesignCard } from "./design-card";

interface DesignGridProps {
  designs: Design[];
}

export function DesignsGrid({ designs }: DesignGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {designs.map((design) => (
        <DesignCard key={design.id} design={design} />
      ))}
    </div>
  );
}