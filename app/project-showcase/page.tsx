import Project from "../components/Project";
import projects from "../../public/data/projects.json";
import { Project as ProjectInterface } from "../interfaces";

export default function ProjectShowcase() {
	return (
		<div className="lg:grid lg:grid-cols-2 lg:gap-6">
			{projects.map(
				(project: ProjectInterface) =>
					project.project_github_link && (
						<div
							key={project.project_id}
							className="hover:cursor-pointer mx-2 lg:mx-0"
						>
							<Project project={project} />
						</div>
					)
			)}
		</div>
	);
}
