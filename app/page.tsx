"use client";
import { Menu } from "./ui/Menu";
import { PageContent } from "./ui/PageContent";
import PageIndexContextProvider from "./ui/PageIndexContext";

export default function Home() {
  return (
    <main>
      <PageIndexContextProvider>
        <div className="hero bg-base-200   min-h-screen flex flex-col">
          <Menu />
          <div className="main-box">
            <PageContent />
          </div>
        </div>
      </PageIndexContextProvider>
    </main>
  );
}
