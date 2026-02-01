import "./globals.css";

export const metadata = {
  
  title: "Kushagra Gupta | Backend Engineer",
  description: "Backend-focused full-stack engineer working on scalable systems",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-gray-100">{children}</body>
    </html>
  );
}
