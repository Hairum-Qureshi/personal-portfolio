import timeline from "../../public/data/timeline.json";
import TimeLineSection from "../components/TimeLineSection";

export default function About() {
	return (
		<div className="mx-5 my-5 text-white">
			<h1 className="text-2xl font-bold">About Me</h1>
			<div className="max-w-4xl mx-auto space-y-7">
				{/* Intro */}
				<section>
					<p className="leading-relaxed">
						Hello! I&apos;m Hairum Qureshi, a {new Date().getFullYear() - 2004}{" "}
						year old passionate aspiring software developer with a keen interest
						in building web applications and exploring new technologies.
					</p>
				</section>

				{/* Early Beginnings */}
				<section>
					<h2 className="text-2xl font-semibold mb-3">Early Beginnings</h2>
					<p className="mb-4 leading-relaxed">
						My journey into programming began when I first started learning
						HTML, CSS, and JavaScript. From the very start, I was fascinated by
						the idea of creating my own websites that mirrored the ones I
						frequently visited online. I recreated basic sign-in and sign-up
						functionality using local storage, and my curiosity often led me to
						questions like: “Why do my HTML pages end with &apos;.html&apos;
						while the websites I visit don&apos;t?” This curiosity eventually
						led me to discover Node.js.
					</p>
					<p className="mb-4 leading-relaxed">
						Of course, my path wasn&apos;t always smooth. Still a novice, I once
						attempted to follow a full-stack WhatsApp clone tutorial but quickly
						became overwhelmed with setup errors, project structure, and syntax
						issues. Although frustrating, the experience taught me the
						importance of building strong fundamentals before tackling complex
						projects.
					</p>
					<p className="leading-relaxed">
						During high school, I supplemented my learning with programming
						books and mobile apps to practice JavaScript. Later, I used my
						school Chromebook to build small projects on Repl.it, such as
						Hangman, Tic-Tac-Toe, calculators, and converters. I didn&apos;t
						prioritize CSS much, focusing more on HTML and JavaScript, and even
						avoided Python initially because I disliked its syntax. Today, while
						Python isn&apos;t my first choice, I can use it effectively when
						needed.
					</p>
				</section>

				{/* First Major Project */}
				<section>
					<h2 className="text-2xl font-semibold mb-3">
						My First Major Project: Novice ink.
					</h2>
					<p className="mb-4 leading-relaxed">
						Novice Ink. was a writing club at my high school that my best friend
						and I ran. When the idea of creating a website was suggested, I
						volunteered to build it from scratch instead of using WordPress. The
						initial version was a static site built with HTML, CSS, JavaScript,
						and Firebase for authentication and data storage. Building it was
						exciting, but it came with significant challenges.
					</p>

					{/* Challenges */}
					<div className="space-y-6">
						<div>
							<h3 className="text-xl font-semibold mb-2">Key Issues:</h3>
							<ul className="list-disc list-inside space-y-2">
								<li>
									<span className="font-medium">
										Weak authentication middleware:
									</span>{" "}
									Users could bypass login due to my lack of understanding about
									cookies and sessions.
								</li>
								<li>
									<span className="font-medium">
										Poor mobile responsiveness:
									</span>{" "}
									The site wasn&apos;t optimized for smaller screens.
								</li>
								<li>
									<span className="font-medium">
										Flawed admin-only functionality:
									</span>{" "}
									Admin restrictions were handled on the frontend, allowing
									non-admins to access admin features.
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-xl font-semibold mb-2">The Redesign</h3>
							<p className="leading-relaxed">
								During the COVID-19 pandemic, I rebuilt the site with Node.js
								and Express.js, adding a proper backend and mobile-friendly
								design. However, I struggled with concepts like API endpoints,
								authentication, memory in Node.js, and properly using Firebase.
								My backend was crammed into a single app.js file, and
								authentication state was poorly handled by storing the
								&quot;current user&quot; in memory, which was unreliable.
							</p>
						</div>

						<div>
							<h3 className="text-xl font-semibold mb-2">Experiments</h3>
							<p className="leading-relaxed">
								I attempted advanced features like notifications and a messaging
								system. While I built a messaging feature, it wasn&apos;t fully
								functional—lacking real-time responsiveness and aesthetic
								integration. I tried Firebase&apos;s real-time database and
								experimented with Socket.io, but struggled to get it working
								reliably. Over time, bugs increased, and by deployment, the site
								wasn&apos;t stable enough to sustain future club members. Still,
								the entire process was a major learning experience.
							</p>
						</div>
					</div>
				</section>
				<section>
					<h2 className="text-2xl font-semibold mb-3">
						Exploring React and the MERN Stack
					</h2>
					<p className="mb-4 leading-relaxed">
						I first encountered React.js when it was primarily class-based,
						which intimidated me since I wasn&apos;t strong in OOP. After
						setting it aside to focus on Node.js and Express.js, I revisited
						React once functional components became the norm. This shift made
						React approachable, and I learned it through tutorials on state,
						components, and basic UI building. My first deployed React project
						was a simple blog site using Supabase as the backend.
					</p>
					<p className="mb-4 leading-relaxed">
						Though I didn&apos;t explore Supabase deeply, I found it
						beginner-friendly thanks to its JavaScript methods. Eventually, I
						sought to connect React with an Express.js backend, which led me to
						the MERN stack—MongoDB, Express.js, React.js, and Node.js.
						Initially, MongoDB&apos;s model-based approach confused me, but over
						time I grew comfortable, and it became my go-to database.
					</p>
					<p className="leading-relaxed">
						Today, the MERN stack is where I have the most experience. My skills
						have since expanded with Socket.io for real-time communication, and
						through college web development courses I&apos;ve begun exploring
						frameworks like Next.js and Nest.js.
					</p>
				</section>
			</div>
			<h1 className="text-2xl font-bold my-7">My Journey:</h1>
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
			</ol>
		</div>
	);
}
