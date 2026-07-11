import "./globals.css";

export const metadata = {
  title: "Samreen Khubaib — Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer specializing in the MERN stack, Next.js, and AI-integrated web applications. Builder of ShopSphere — an AI-powered e-commerce platform with NLP chat, AR try-on, and live commerce.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
