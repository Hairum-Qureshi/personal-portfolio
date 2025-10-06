// import self from "../public/assets/me.jpeg";
// import Image from "next/image";
import projects from "../public/data/projects.json";

// TODO - list tech stack

export default function Home() {
	return (
		<div>
			<div className="mt-3">
				<h2 className="font-semibold text-3xl ml-left lg:px-0 px-3">
					Hello, I&apos;m
				</h2>
				<h1 className="font-semibold lg:text-8xl text-7xl lg:p-0 px-3">
					Hairum Qureshi
				</h1>
				<div>
					<h3 className="my-10 text-xl text-yellow-500 font-semibold text-center">
						This website is still a work in progress so please bear with me as I
						continue to improve this website and add more features!
					</h3>
				</div>
				{/* <div className="mt-10 w-full flex space-x-10 justify-center">
					<div className="my-3 font-semibold flex items-center justify-center text-green-500">
						<h3 className="text-5xl">{new Date().getFullYear() - 2004}</h3>
						<h3 className="text-xl text-center ml-3">AGE</h3>
					</div>
					<div className="my-3 font-semibold flex items-center justify-center text-yellow-500">
						<h3 className="text-5xl">{new Date().getFullYear() - 2019}</h3>
						<h3 className="text-xl text-center ml-3">YEARS CODING</h3>
					</div>	
				</div> */}
			</div>
		</div>
	);
}

// import self from "../public/assets/me.jpeg";
// import Image from "next/image";

// export default function Home() {
// 	return (
// 		<div>
// 			<div className="mt-3 flex">
// 				<Image
// 					src={self}
// 					width={150}
// 					height={150}
// 					alt="Picture of the author"
// 					className="rounded-md opacity-90 border-2 border-sky-600 object-cover shadow-[0_0_12px_#0ea5e9]"
// 				/>

// 				<h1 className="text-5xl font-bold ml-3">
// 					Hello, I&apos;m Hairum Qureshi
// 				</h1>
// 			</div>
// 		</div>
// 	);
// }
