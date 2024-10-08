import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Design } from '@/types/design';
import Link from 'next/link';

interface DesignCardProps {
  design: Design;
}

export function DesignCard({ design }: DesignCardProps) {
  return (
    <Link href={`/${design.id}`}>
      <Card>
        <CardHeader>
          <CardTitle>{design.title}</CardTitle>
        </CardHeader>
        <CardContent>
          Click to view this design component
        </CardContent>
      </Card>
    </Link>
  );
}