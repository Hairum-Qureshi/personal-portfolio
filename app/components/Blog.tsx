import { Blog as BlogInterface } from "../interfaces";

export default function Blog({ blog }: { blog: BlogInterface }) {
	return (
		<div className="my-3 border border-sky-800 rounded-md p-2 hover:cursor-pointer shadow-[0_0_10px_rgba(56,189,248,0.4)] ">
			<h2 className="text-xl mb-2 font-semibold">{blog.title}</h2>
			<p className="text-slate-500">
				Posted on: <span className="font-semibold">{blog.createdAt}</span>
			</p>
			<p className="text-slate-500">Written by: {blog.author}</p>
			<hr className="my-3 text-sky-700" />
			<p className="text-gray-500">{blog.description}</p>
		</div>
	);
}
