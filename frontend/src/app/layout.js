import "./globals.css";

export const metadata = {
  title: "InternCraft Academy | Premium Student Internship Program",
  description:
    "InternCraft Academy is a premium internship platform for students with live classes, recorded sessions, projects, certificates, and support.",
  keywords: [
    "internship",
    "student internship",
    "internship program",
    "AI internship",
    "digital marketing internship",
    "editing internship",
    "business internship",
    "InternCraft Academy",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <script src="https://sdk.cashfree.com/js/v3/cashfree.js"></script>
    </html>
  );
}