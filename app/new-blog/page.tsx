
import BlogForm from "../components/BlogForm";
import BlogFormLayout from "../components/layouts/blogFormLayout";

export default function PostBlog() {
	return (
		<BlogFormLayout title="Post A New Blog">
			<BlogForm />
		</BlogFormLayout>
	);
}
