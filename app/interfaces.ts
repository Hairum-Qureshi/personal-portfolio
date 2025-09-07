interface Blog {
	id: string;
	title: string;
	author: string;
	description: string;
	body: string;
	createdAt: string;
}

interface Project {
	project_id: string;
	project_title: string;
	project_description: string;
	project_image: string;
	project_read_more_link: string;
	project_link: string;
	project_tools: string[];
	project_github_link: string;
}

export type { Blog, Project };
