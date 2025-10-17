import Link from "next/link";
import resume from "../../public/data/resume.json";
import { FaDownload } from "react-icons/fa";

interface WorkExperience {
	jobTitle: string;
	college_department: string;
	bullets: string[];
	workTimeline: string;
}

export default function Resume() {
	return (
		<div>
			<div className="my-6 text-white font-garamond flex-grow font-light lg:mx-0 mx-4">
				<h1 className="font-semibold text-center font-garamond text-5xl">
					HAIRUM M. QURESHI
				</h1>
				<div className="lg:space-x-5 my-5 flex lg:flex-row flex-col lg:space-y-0 space-y-3 items-center justify-center">
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
				<div className="space-y-4">
					<div>
						<h3 className="font-garamond text-xl mt-2 font-semibold">
							EDUCATION
						</h3>
						<hr className="-mt-1 mb-1 text-white" />
						<div className="flex">
							<p className="mr-auto">University of Delaware, Newark, DE</p>
							<p className="ml-auto">May 2026</p>
						</div>
						<div className="flex">
							<p className="mr-auto">Bachelor of Computer Science</p>
							<p className="ml-auto">
								GPA: {resume.GPA === 3.0 ? "3.0" : resume.GPA}
							</p>
						</div>
						<p>Concentration: Software Engineering</p>
					</div>
					<div>
						<h3 className="font-garamond text-xl mt-2 font-semibold">
							ACADEMIC PROJECT
						</h3>
						<hr className="-mt-1 mb-1 text-white" />
						<div className="flex">
							<p className="mr-auto">
								University of Delaware - Computer Science Science Capstone
								Course, Senior Group Project
							</p>
							<p className="ml-auto">Newark, DE</p>
						</div>
						<ul className="list-disc ml-5">
							{resume.academicProjects.map(
								(accomplished: string, index: number) => {
									return <li key={index}>{accomplished}</li>;
								}
							)}
						</ul>
					</div>
					<div>
						<h3 className="font-garamond text-xl mt-2 font-semibold">SKILLS</h3>
						<hr className="-mt-1 mb-1 text-white" />
						<div>
							<p>
								<b className="font-semibold">Proficient in:</b>{" "}
								{resume.skills.proficientIn.join(", ")}
							</p>
							<p>
								<b className="font-semibold">Working knowledge of:</b>{" "}
								{resume.skills.workingKnowledgeOf.join(", ")}
							</p>
						</div>
					</div>
					<div>
						<h3 className="font-garamond text-xl mt-2 font-semibold">
							EXPERIENCE
						</h3>
						<hr className="-mt-1 mb-1 text-white" />
						<div className="space-y-4">
							{resume.workExperience.map(
								(workExperience: WorkExperience, index: number) => {
									return (
										<div key={index}>
											<div className="flex">
												<p className="mr-auto">
													{workExperience.college_department}
												</p>
												<p className="ml-auto">{workExperience.workTimeline}</p>
											</div>
											<p>
												<i>{workExperience.jobTitle}</i>
											</p>
											<ul className="list-disc ml-5">
												{workExperience.bullets.map(
													(task: string, index: number) => {
														return <li key={index}>{task}</li>;
													}
												)}
											</ul>
										</div>
									);
								}
							)}
						</div>
					</div>
				</div>
				<div>
					<h3 className="font-garamond text-xl mt-2 font-semibold">PROJECTS</h3>
					<hr className="-mt-1 mb-1 text-white" />
					<div>
						<ul className="list-disc ml-5">
							{resume.projects.map((project: string, index: number) => {
								return <li key={index}>{project}</li>;
							})}
						</ul>
					</div>
				</div>
			</div>
			<div>
				<Link
					href="/Updated Resume (2025).pdf"
					download="HairumQureshiResume.pdf"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button className="p-3 w-full active:bg-sky-900 hover:border-sky-600 border-2 active:border-sky-500 bg-sky-950 border-sky-700 rounded-md text-white hover:cursor-pointer flex items-center justify-center">
						<span className="mr-4">
							<FaDownload />
						</span>
						DOWNLOAD MY RESUME
						<span className="ml-4">
							<FaDownload />
						</span>
					</button>
				</Link>
			</div>
		</div>
	);
}
