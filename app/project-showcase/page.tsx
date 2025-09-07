import Project from "../components/Project";
import projects from "../../public/data/projects.json";
import { Project as ProjectInterface } from "../interfaces";

export default function ProjectShowcase() {
	return (
		<div className="grid grid-cols-2 gap-6">
			{projects.map((project: ProjectInterface) => (
				<div key={project.project_id} className="hover:cursor-pointer">
					<Project project={project} />
				</div>
			))}
		</div>
	);
}
