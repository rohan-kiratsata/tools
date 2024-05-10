export type Category = "colors" | "api" | "books" | "ai";

export type Resource = {
  name: string;
  url: string;
  description: string;
  tags?: Array<string>;
};
