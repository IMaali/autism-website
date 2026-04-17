import Footer from "./components/Footer";
import Header from "./components/Header";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-gray-50 text-black">

        {/* HEADER */}
                 <Header />


        {/* CONTENT */}
        <main className="p-6">{children}</main>

        {/* FOOTER */}
              <Footer />


      </body>
    </html>
  );
}