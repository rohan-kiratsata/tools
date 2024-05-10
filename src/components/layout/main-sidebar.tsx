import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "@/components/ui/button";
import CategoriesMenu from "../categories-menu";

export default function MainSidebar() {
  return (
    <>
      <aside className="">
        <ScrollArea className="h-screen w-[300px] p-5">
          <h1 className="mb-5 scroll-m-20 text-xl font-bold tracking-tight lg:text-xl">
            Categories
          </h1>
          <CategoriesMenu />
        </ScrollArea>
      </aside>
    </>
  );
}
