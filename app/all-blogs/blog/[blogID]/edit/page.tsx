import EditBlogForm from "@/app/components/EditBlogForm";
import BlogFormLayout from "@/app/components/layouts/blogFormLayout";
import React from "react";

export default function page() {
	return (
		<BlogFormLayout title="Edit Blog">
			<EditBlogForm />
		</BlogFormLayout>
	);
}
