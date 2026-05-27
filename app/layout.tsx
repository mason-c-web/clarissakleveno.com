import type { Metadata } from "next";
import "./globals.css";
import pageData from "./ui/websiteData";
import { Menu } from "./ui/Menu";

export const metadata: Metadata = {
  title: pageData.websiteTitle,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="hero bg-base-200   min-h-screen flex flex-col">
          <Menu />
          <div className="main-box">
            <div className={"hero-content flex-col lg:flex-row"}>
              <div>{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
