import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const variantSchema = z.object({
  sku: z.string(),
  zhName: z.string(),
  materialZh: z.string(),
  materialEn: z.string(),
  size: z.string(),
  weight: z.string(),
  rmb: z.number(),
  rmbRaw: z.string(),
  tier50: z.string(),
  tier200: z.string(),
  tier500: z.string(),
  colorsEn: z.string(),
  notes: z.string().optional()
});

const productsCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/products' }),
  schema: z.object({
    id: z.string(),
    rowId: z.number(),
    sku: z.string(),
    skuDisplay: z.string(),
    mergedSkus: z.array(z.string()),
    slug: z.string(),
    title: z.string(),
    zhName: z.string(),
    category: z.string(),
    primaryCollection: z.string(),
    primaryCollectionName: z.string(),
    primaryCollectionZh: z.string(),
    crossCollections: z.array(z.string()),
    logoReady: z.boolean(),
    tuningFork: z.boolean(),
    cncExotic: z.boolean(),
    badge: z.string().optional(),
    materialZh: z.string(),
    material: z.string(),
    size: z.string(),
    weight: z.string(),
    magnetsZh: z.string(),
    magnetsEn: z.string(),
    accessoriesZh: z.string(),
    accessoriesEn: z.string(),
    colorsZh: z.string(),
    colorsEn: z.string(),
    notesZh: z.string().optional(),
    desensitizedNote: z.string().optional(),
    rmb: z.number(),
    rmbRaw: z.string(),
    tier50: z.string(),
    tier200: z.string(),
    tier500: z.string(),
    priceRange: z.string(),
    moq: z.string(),
    leadTime: z.string(),
    sampleTime: z.string().optional(),
    toolingFee: z.string(),
    featuredImage: z.string(),
    galleryImages: z.array(z.string()).optional(),
    variants: z.array(variantSchema),
    metaTitle: z.string(),
    metaDescription: z.string(),
    overview: z.string(),
    specs: z.record(z.string()),
    features: z.array(z.string()),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string()
      })
    )
  })
});

const guidesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/guides' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    publishDate: z.string(),
    updatedDate: z.string().optional(),
    author: z.string().default('FidgetSupply Engineering Team'),
    category: z.string(),
    summary: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    featuredImage: z.string(),
    readTime: z.string().default('8 min read'),
    tags: z.array(z.string()).optional(),
    relatedSkus: z.array(z.string()).optional()
  })
});

export const collections = {
  products: productsCollection,
  guides: guidesCollection
};
