import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="bg-gray-950 text-gray-300 w-full h-screen flex justify-center">
				<header>
					<Navbar />
				</header>
				<main className="w-3/5 p-2">{children}</main>
			</body>
		</html>
	);
}
