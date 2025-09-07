"use client";

import React, { use, useEffect, useState } from "react";
import { Blog as BlogInterface } from "../../../interfaces";

export default function BlogDetails({
	params
}: {
	params: Promise<{ blogID: string }>;
}) {
	const [blog, setBlog] = useState<BlogInterface | string>("");
	const { blogID } = use(params);

	useEffect(() => {
		const blogData: BlogInterface[] | null = JSON.parse(
			localStorage.getItem("blogs") || "[]"
		);

		if (blogData) {
			const blog = blogData.find(b => b.id === blogID);
			setBlog(blog || "Blog not found");
		}
	}, [blogID]);

	return (
		<div className="text-white">
			Details for blog with ID: {blogID} <br />
			{typeof blog === "string" ? (
				blog
			) : blog ? (
				<div>
					<h2>{blog.title}</h2>
					<p>{blog.body}</p>
				</div>
			) : null}
		</div>
	);
}
