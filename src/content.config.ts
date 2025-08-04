import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const audioReview = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/audio-review" }),
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        thumbnail: z.string(),
        type: z.string(),
        tags: z.array(z.string())
    })
});

export const collections = { audioReview };