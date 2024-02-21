import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    author: z.string(),
    date: z.string(),
    image: z.string(),
    title: z.string()
  })
});

export const collections = {
  //nome da propriedade deve ser o mesmo da folder
  posts: postsCollection
};
