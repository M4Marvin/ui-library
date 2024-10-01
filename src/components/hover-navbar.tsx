import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export type NavItem = {
	name: string;
	path: string;
};

export default function HoverNavbar({
	items,
	pathname,
	className,
}: {
	items: NavItem[];
	pathname: string;
	className?: string;
}) {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<nav className={cn("flex items-center gap-4 text-sm lg:gap-6", className)}>
			{items.map((item, idx) => (
				<Link
					key={item.name}
					href={item.path}
					className={cn(
						"transition-colors hover:text-foreground/80 relative",
						pathname === item.path ? "text-foreground" : "text-foreground/60",
					)}
					onMouseEnter={() => setHoveredIndex(idx)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					<AnimatePresence>
						{hoveredIndex === idx && (
							<motion.span
								className="absolute inset-0 bg-primary dark:bg-primary-800/[0.8] rounded-md"
								layoutId="hoverBackground"
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { duration: 0.15 },
								}}
								exit={{
									opacity: 0,
									transition: { duration: 0.15, delay: 0.2 },
								}}
								style={{
									top: "-2px",
									bottom: "-2px",
									left: "-0.5rem",
									right: "-0.5rem",
									zIndex: -1,
								}}
							/>
						)}
					</AnimatePresence>
					<span className="relative z-10">{item.name}</span>
				</Link>
			))}
		</nav>
	);
}
