import React from "react";
import { Button } from "./ui/button";
import { db } from "@/db";
import { categories } from "@/db/categories";

type Props = {};

export default function CategoriesMenu({}: Props) {
  return (
    <div className="flex w-fit flex-col gap-3">
      {categories.map((category) => {
        return (
          <Button key={category.title} variant="outline">
            {category.title}
          </Button>
        );
      })}
    </div>
  );
}
