"use client";

import Link from "next/link";

export default function Blogs() {
	return (
		<div>
			All blogs
			<br />
			<Link
				href="/new-blog"
				className="text-green-500 underline hover:cursor-pointer"
			>
				New Blog
			</Link>
		</div>
	);
}
