"use client";

import { useState } from "react";

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
			<div className="w-full h-1/2 my-7">
				<form className="w-3/4 m-auto" onSubmit={sendEmail}>
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
