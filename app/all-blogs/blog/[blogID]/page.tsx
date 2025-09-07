"use client";

import React, { use, useEffect, useState } from "react";
import { Blog as BlogInterface } from "../../../interfaces";
import moment from "moment";

export default function BlogDetails({
	params
}: {
	params: Promise<{ blogID: string }>;
}) {
	const [blog, setBlog] = useState<BlogInterface | string>("");
	const { blogID } = use(params);

	// TODO - need to add delete and maybe edit functionality

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
			{typeof blog === "string" ? (
				blog
			) : blog ? (
				<div className="my-4">
					<h2 className="text-3xl font-semibold">{blog.title}</h2>
					<p className="text-sm text-slate-500 my-3">
						Published on: {moment(blog.createdAt).format("MMMM Do YYYY")}
					</p>
					<p className="my-3">{blog.body}</p>
				</div>
			) : null}
		</div>
	);
}
