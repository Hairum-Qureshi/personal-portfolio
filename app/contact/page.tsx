"use client";

import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";

export default function Contact() {
	const [name, setName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [body, setBody] = useState("");

	async function sendEmail(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (!name?.trim() || !subject?.trim() || !body?.trim()) {
			alert("Please make sure all fields are filled in");
			return;
		}

		const formData = new FormData(event.target as HTMLFormElement);

		formData.append("access_key", "c19a5dca-c958-41ff-a729-2f70660813de");
		formData.append("subject", `You've received a new email! [${subject}]`);
		formData.append("name", name);
		formData.append("content", body);
		formData.append("user Email", userEmail.toLowerCase());
		formData.append("from_name", "Hairum's Portfolio Website");

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData
		});

		const data = await response.json();

		if (data.success) {
			alert("Message sent successfully!");
			setName("");
			setUserEmail("");
			setSubject("");
			setBody("");
		} else {
			console.log("Error", data);
			alert("There was an error sending your message. Please try again later.");
		}
	}

	return (
		<div className="h-screen text-white">
			<div className="w-full h-1/3 text-left flex flex-col items-center justify-center my-5">
				<h1 className="text-7xl font-semibold text-slate-300">
					Thanks for checking out <br /> my portfolio!
				</h1>
				<p className="m-7 text-gray-400 text-lg">
					I really appreciate you spending time to view my site. If you&apos;d
					like to connect, either to collaborate on a project or just to chat,
					feel free to reach out!
				</p>
			</div>
			<div className="w-full flex my-7">
				<div className="w-1/2">
					<h3 className="font-semibold text-xl text-gray-400">
						You can also reach me at: <br />
						<p className="text-cyan-400 font-light">hairumqureshi@gmail.com</p>
					</h3>
					<h3 className="font-semibold text-xl text-gray-400 mt-5">
						Find me elsewhere:
					</h3>
					<ul className="mt-2 space-y-3 font-light">
						<li className="flex items-center space-x-2 mt-8 mb-10">
							<FaXTwitter className="text-2xl text-gray-300" />
							<span className="text-gray-300">@personal_hq</span>
						</li>
						<li className="flex items-center space-x-2 mb-10">
							<FaInstagram className="text-2xl text-pink-500" />
							<span className="text-gray-300">@hq_personal</span>
						</li>
						<li>
							<Link
								href="https://github.com/Hairum-Qureshi"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center space-x-2 mb-10 text-gray-300 hover:text-gray-400 transition-colors"
							>
								<FaGithub className="text-2xl" />
								<span>Hairum-Qureshi</span>
							</Link>
						</li>
						<li>
							<Link
								href="https://www.linkedin.com/in/hairum-qureshi/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center space-x-2 mb-10 text-gray-300 hover:text-blue-400 transition-colors"
							>
								<FaLinkedin className="text-2xl" />
								<span>Hairum Qureshi</span>
							</Link>
						</li>
					</ul>
				</div>
				<form className="w-1/2 h-1/2" onSubmit={sendEmail}>
					<input
						type="text"
						placeholder="Name"
						className="w-full outline-none bg-transparent p-2 border border-slate-500 rounded-md my-3"
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<input
						type="email"
						placeholder="Your email"
						className="w-full outline-none bg-transparent p-2 border border-slate-500 rounded-md my-3"
						value={userEmail}
						onChange={e => setUserEmail(e.target.value)}
					/>
					<input
						type="text"
						placeholder="Subject"
						className="w-full outline-none bg-transparent p-2 border border-slate-500 rounded-md my-3"
						value={subject}
						onChange={e => setSubject(e.target.value)}
					/>

					<textarea
						placeholder="Body"
						className="border resize-none my-2 border-slate-600 rounded-md p-2 text-base w-full bg-transparent outline-none h-60"
						value={body}
						onChange={e => setBody(e.target.value)}
					/>

					<button
						type="submit"
						className="w-full border-2 border-green-600 rounded-md px-10 py-1 my-6 bg-green-800 hover:cursor-pointer"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}
