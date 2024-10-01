import Image from "next/image";
import Logo from "public/logo_t.png";

export default function SiteFooter() {
	return (
		<footer className="pt-5 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 bg-background py-8 flex flex-col text-foreground mt-auto">
			<div className="flex flex-col lg:flex-row justify-between items-center text-sm lg:text-base">
				<div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-8">
					<Image src={Logo} alt="DU" width={40} height={40} />
					<div className="text-center lg:text-left">
						<p>Design by @m4marvin</p>
						<p>&copy; M4Marvin 2022</p>
					</div>
				</div>
				<p className="mt-4 lg:mt-0">&copy; ACBR Ankalan 2024</p>
			</div>
		</footer>
	);
}
