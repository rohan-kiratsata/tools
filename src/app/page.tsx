"use client";

import Header from "@/components/layout/header";
import MainSidebar from "@/components/layout/main-sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="bg-slate-800 grid-layout box-border">
        <MainSidebar />
        <div className="w-full p-5">
          <Header />
        </div>

        <style jsx>
          {`
            .grid-layout {
              display: grid;
              grid-template-columns: min-content auto;
            }
          `}
        </style>
      </main>
    </>
  );
}
