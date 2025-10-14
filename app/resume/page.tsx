import Link from "next/link";
import resume from "../../public/data/resume.json";

export default function Resume() {
	return (
		<div className="my-6 text-white font-semibold">
			<h1 className="font-semibold text-center font-garamond text-5xl">
				HAIRUM M. QURESHI
			</h1>
			<div className="lg:space-x-5  my-5 text-sm flex lg:flex-row flex-col lg:space-y-0 space-y-3 items-center justify-center">
				{resume.links.map((link: string, index: number) => {
					return (
						<span key={index}>
							<Link href={link} target="_blank">
								{link}
							</Link>
						</span>
					);
				})}
			</div>
			<div className="w-full flex items-center">
				<span className="mr-auto lg:ml-0 ml-3">{resume.phoneNumber}</span>
				<span className="ml-auto lg:mr-0 mr-3">{resume.email}</span>
			</div>
			<hr className="my-3" />
			<div>
				<h3 className="text-center font-garamond text-xl">EDUCATION</h3>
			</div>
		</div>
	);
}
