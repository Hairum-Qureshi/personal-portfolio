import self from "../public/assets/me.jpeg";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<div className="mt-3 flex">
				<Image
					src={self}
					width={250}
					alt="Picture of the author"
					className="rounded-md opacity-80 border-2 border-gray-600"
				/>

				<h1 className="text-5xl font-bold m-3">
					Hello, I&apos;m Hairum Qureshi
				</h1>
			</div>
		</div>
	);
}
