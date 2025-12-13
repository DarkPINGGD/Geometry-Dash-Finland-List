export const metadata = {
title: "Finland Demon List",
description: "Geometry Dash Finland Demon List",
};


export default function RootLayout({ children }) {
return (
<html lang="en">
<body className="bg-black text-white">
<header className="p-5 bg-blue-900 shadow-lg mb-6">
<h1 className="text-3xl font-bold text-center">
🇫🇮 Finland Demon List
</h1>
</header>
<main className="container mx-auto p-4">{children}</main>
</body>
</html>
);
}
