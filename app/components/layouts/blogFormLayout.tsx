import React from "react";

export default function blogFormLayout({
	children,
	title
}: {
	children: React.ReactNode;
	title: string;
}) {
	return (
		<div className="blog-form-container">
			<h1 className="text-2xl font-semibold my-4">{title}</h1>
			{children}
		</div>
	);
}
