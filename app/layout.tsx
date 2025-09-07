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
			<body className="bg-gray-950 text-gray-300 lg:w-3/5 min-h-screen flex flex-col m-auto p-2 break-all">
				<header className="w-full">
					<Navbar />
				</header>
				<main className="flex-grow">{children}</main>
				<footer className="w-full p-2 my-5">
					<Footer />
				</footer>
			</body>
		</html>
	);
}
