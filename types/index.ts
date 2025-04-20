import { z } from 'zod';
import { insertProductSchema } from '@/lib/validate';

export type Product = z.infer<typeof insertProductSchema> & {
    id: string;
    numReviews: number;
    createdAt: Date;
}