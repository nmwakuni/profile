import { PortableTextBlock } from "@portabletext/types";

export type Project = {
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
};

