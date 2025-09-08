"use client";

import Link from "next/link";
import { redirect, useParams } from "next/navigation";
import {
	englishDataset,
	englishRecommendedTransformers,
	RegExpMatcher
} from "obscenity";
import { useEffect, useState } from "react";
import { Blog } from "../interfaces";

export default function EditBlogForm() {
	const params = useParams<{ blogID: string }>();

	const [blogTitle, setBlogTitle] = useState("");
	const [blogBody, setBlogBody] = useState("");
	const [blogAuthor, setBlogAuthor] = useState("");
	const [blogDescription, setBlogDescription] = useState("");

	useEffect(() => {
		const blogsFromStorage = JSON.parse(localStorage.getItem("blogs") || "[]");
		const blogData: Blog = blogsFromStorage.find(
			(b: { id: string }) => b.id === params.blogID
		);

		if (!blogData || !blogData.id) {
			redirect("/all-blogs");
		}

		setBlogTitle(blogData?.title || "");
		setBlogBody(blogData?.body || "");
		setBlogAuthor(blogData?.author || "");
		setBlogDescription(blogData?.description || "");
	}, [params.blogID]);

	// TODO - add character limits to all the inputs and textareas

	function editBlog() {
		const matcher = new RegExpMatcher({
			...englishDataset.build(),
			...englishRecommendedTransformers
		});

		const matches = [
			...(matcher.getAllMatches(blogTitle, true) || []),
			...(matcher.getAllMatches(blogBody, true) || []),
			...(matcher.getAllMatches(blogAuthor, true) || []),
			...(matcher.getAllMatches(blogDescription, true) || [])
		];

		for (const match of matches) {
			const { phraseMetadata } =
				englishDataset.getPayloadWithPhraseMetadata(match);

			if (phraseMetadata?.originalWord) {
				alert(
					"Please refrain from including profanity or other inappropriate language"
				);
				return;
			}
		}

		if (
			!blogTitle?.trim() ||
			!blogBody?.trim() ||
			!blogAuthor?.trim() ||
			!blogDescription?.trim()
		) {
			alert("Please make sure all fields are filled in");
			return;
		}

		const existingBlogs = JSON.parse(localStorage.getItem("blogs") || "[]");
		const blogs = existingBlogs.map((b: { id: string }) =>
			b.id === params.blogID
				? {
						...b,
						title: blogTitle,
						body: blogBody,
						author: blogAuthor,
						description: blogDescription
				  }
				: b
		);

		localStorage.setItem("blogs", JSON.stringify(blogs));

		setBlogTitle("");
		setBlogBody("");
		setBlogAuthor("");
		setBlogDescription("");

		redirect(`/all-blogs/blog/${params.blogID}`);
	}

	return (
		<div>
			<div className="flex flex-col gap-3 w-full">
				<div className="w-4/5 m-auto my-3">
					<input
						type="text"
						placeholder="Title"
						className="border border-slate-600 rounded-md p-2 mb-2 text-base w-full bg-transparent outline-none"
						value={blogTitle}
						onChange={e => setBlogTitle(e.target.value)}
					/>
					<input
						type="text"
						placeholder="Author"
						className="border border-slate-600 rounded-md p-2 my-3 text-base w-full bg-transparent outline-none"
						value={blogAuthor}
						onChange={e => setBlogAuthor(e.target.value)}
					/>
					{/* <input
                        type="text"
                        placeholder="Tags"
                        className="border mt-5 border-slate-600 rounded-md p-2 text-base w-full bg-transparent outline-none"
                    /> */}
					<textarea
						placeholder="Description"
						className="border resize-y my-2 border-slate-600 rounded-md p-2 text-base w-full bg-transparent outline-none h-30 max-h-30 min-h-40"
						value={blogDescription}
						onChange={e => setBlogDescription(e.target.value)}
					/>
					<textarea
						placeholder="Body"
						className="border resize-y my-2 border-slate-600 rounded-md p-2 text-base w-full bg-transparent outline-none h-80 max-h-60 min-h-40"
						value={blogBody}
						onChange={e => setBlogBody(e.target.value)}
					/>
					<p className="text-sky-500 text-sm">
						This textarea supports{" "}
						<Link
							href="https://www.markdownguide.org/"
							target="_blank"
							className="underline"
						>
							markdown
						</Link>
					</p>

					<button
						className="flex ml-auto border border-green-600 rounded-md px-10 py-1 mt-3 bg-green-800 hover:cursor-pointer"
						onClick={() => editBlog()}
					>
						Edit
					</button>
				</div>
			</div>
		</div>
	);
}
