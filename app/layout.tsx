import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<title>Hairum Qureshi&apos;s Portfolio</title>
			</head>
			<body className="relative bg-gray-950 text-gray-300 lg:w-3/5 h-screen flex flex-col m-auto p-2">
				<header className="w-full">
					<Navbar />
				</header>
				<main>{children}</main>
				<footer className="absolute bottom-0 my-2 w-full p-2">
					<Footer />
				</footer>
			</body>
		</html>
	);
}
