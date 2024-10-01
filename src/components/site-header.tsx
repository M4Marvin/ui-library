"use client";
import Link from "next/link";
import Logo from 'public/logo_t.png';

import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import HoverNavbar from "./hover-navbar";

const navItems = [
	{
		name: "Showcase",
		path: "/showcase"
	},
	{
		name: "Visual Screening",
		path: "/screening"
	},
	{
		name: "Team",
		path: "/team"
	},
	{
		name: "Help",
		path: "/help"
	},
]

export default function SiteHeader() {
    const pathname = usePathname();
	return (
		<header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 max-w-screen-2xl items-center p-4 justify-between">
				<div className="mr-4 hidden md:flex">
					<Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
						<Image
							src={Logo}
							alt="DU"
							height={40}
						/>
						<span className="hidden font-bold lg:inline-block text-primary">
							{siteConfig.name}
						</span>
					</Link>
				</div>
				<div className="flex flex-1 items-center space-x-2 justify-left">
					<nav className="flex items-center gap-4 text-sm lg:gap-6">
						<HoverNavbar
							items={navItems}
							pathname={pathname}
						/>
					</nav>
				</div>
				<div className="flex flex-1 items-center space-x-2 justify-end">
					<nav className="flex items-center">
						<Link
							href={siteConfig.url}
							target="_blank"
							rel="noreferrer"
						>
							<div className="h-8 w-8 px-0 flex items-center">
								<Icons.twitter className="h-3 w-3 fill-current" />
								<span className="sr-only">Twitter</span>
							</div>
						</Link>
						<ModeToggle />
					</nav>
				</div>
			</div>
		</header>
	);
}
