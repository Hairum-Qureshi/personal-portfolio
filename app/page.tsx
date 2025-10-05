import self from "../public/assets/me.jpeg";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<div className="mt-3 flex">
				<Image
					src={self}
					width={150}
					height={150}
					alt="Picture of the author"
					className="rounded-md opacity-80 border-2 border-sky-800 object-cover"
				/>

				<h1 className="text-5xl font-bold ml-3">
					Hello, I&apos;m Hairum Qureshi
				</h1>
			</div>
		</div>
	);
}
