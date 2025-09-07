"use client";

import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import Blog from "../components/Blog";
import { useEffect, useState } from "react";
import { Blog as BlogInterface } from "../interfaces";

export default function Blogs() {
	const [blogs, setBlogs] = useState<BlogInterface[]>([]);

	useEffect(() => {
		const storedBlogs = JSON.parse(localStorage.getItem("blogs") || "[]");
		setBlogs(storedBlogs);
	}, []);

	return (
		<div>
			<div className="flex mt-3">
				<div>
					<h1 className="text-2xl font-semibold">All Blogs</h1>
				</div>
				<div className="flex items-center justify-center ml-auto">
					<Link
						href="/new-blog"
						className="flex items-center justify-center text-green-500 hover:cursor-pointer px-3 py-1 border border-green-600 rounded-md"
					>
						<FaPlus />
						&nbsp;New Blog
					</Link>
				</div>
			</div>
			<div className="flex-col my-5">
				{!blogs?.length
					? "No blogs found"
					: blogs.map(blog => (
							<Link href={`/all-blogs/blog/${blog.id}`} key={blog.id}>
								<Blog blog={blog} />
							</Link>
					  ))}
			</div>
		</div>
	);
}
