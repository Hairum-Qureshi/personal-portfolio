import timeline from "../../public/data/timeline.json";
import TimeLineSection from "../components/TimeLineSection";

export default function About() {
	return (
		<div className="mx-5 my-5">
			<h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
				About Me
			</h1>
			<p className="mb-5 text-gray-300 break-normal">
				Hello! I&apos;m Hairum Qureshi, a passionate aspiring software developer
				with a keen interest in building web applications and exploring new
				technologies. I love creating efficient and scalable solutions that make
				a difference.
			</p>
			<h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
				My Journey:
			</h1>
			<ol className="relative border-s border-gray-200 dark:border-gray-700 break-normal">
				{timeline.map((period, index) => {
					return (
						<TimeLineSection
							key={index}
							date={period.date}
							title={period.title}
							body={period.body}
						/>
					);
				})}
				{/* <li className="mb-10 ms-4">
					<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						February 2022
					</time>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
						TITLE HERE
					</h3>
					<p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
						Body content here
					</p>
				</li>
				<li className="mb-10 ms-4">
					<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						March 2022
					</time>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
						TITLE HERE
					</h3>
					<p className="text-base font-normal text-gray-500 dark:text-gray-400">
						Body content here
					</p>
				</li>
				<li className="ms-4">
					<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						April 2022
					</time>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
						TITLE HERE
					</h3>
					<p className="text-base font-normal text-gray-500 dark:text-gray-400">
						Body content here
					</p>
				</li> */}
			</ol>
		</div>
	);
}
