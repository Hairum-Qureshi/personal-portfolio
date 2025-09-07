"use client";

import React, { use, useEffect, useState } from "react";
import { Blog as BlogInterface } from "../../../interfaces";
import moment from "moment";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { redirect } from "next/navigation";
import MarkdownPreview from "@uiw/react-markdown-preview";
import "../../../globals.css";

export default function BlogDetails({
	params
}: {
	params: Promise<{ blogID: string }>;
}) {
	const [blog, setBlog] = useState<BlogInterface | string>("");
	const { blogID } = use(params);

	// TODO - make edit button work

	useEffect(() => {
		const blogData: BlogInterface[] | null = JSON.parse(
			localStorage.getItem("blogs") || "[]"
		);

		if (blogData) {
			const blog = blogData.find(b => b.id === blogID);
			setBlog(blog || "Blog not found");
		}
	}, [blogID]);

	function deleteBlog() {
		const confirmation = confirm("Are you sure you want to delete this blog?");
		if (confirmation) {
			const blogs: BlogInterface[] = JSON.parse(
				localStorage.getItem("blogs") || "[]"
			);
			const updatedBlogs = blogs.filter(b => b.id !== blogID);
			localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
			redirect("/all-blogs");
		}
	}

	return (
		<div className="text-white">
			{typeof blog === "string" ? (
				blog
			) : blog ? (
				<div className="my-4 w-[85%] m-auto">
					<h2 className="text-3xl font-semibold">{blog.title}</h2>
					<p className="flex text-sm text-slate-500 my-3">
						Published on: {moment(blog.createdAt).format("MMMM Do YYYY")}
						<span className="ml-auto">
							<button
								className="mr-3 text-xl hover:cursor-pointer text-yellow-300"
								title="Edit Blog"
								onClick={() => redirect(`/all-blogs/blog/${blogID}/edit`)}
							>
								<FaEdit />
							</button>
							<button
								className="text-lg hover:cursor-pointer text-red-600"
								onClick={() => deleteBlog()}
								title="Delete Blog"
							>
								<FaTrash />
							</button>
						</span>
					</p>
					<div className="prose prose-invert">
						<MarkdownPreview
							source={blog.body}
							style={{ backgroundColor: "transparent" }}
							className="markdownContainer"
						/>
					</div>
				</div>
			) : null}
		</div>
	);
}
