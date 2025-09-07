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
	project_link: string;
}

export type { Blog, Project }
