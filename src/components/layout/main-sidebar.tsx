import React from "react";
import { ScrollArea } from "../ui/scroll-area";

export default function MainSidebar() {
  return (
    <>
      <aside className="">
        <ScrollArea className="h-screen w-[300px] p-5">
          This is sidebar
        </ScrollArea>
      </aside>
    </>
  );
}
