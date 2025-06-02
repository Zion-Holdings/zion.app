import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export default async function handler(req, res) {
    if (req.method !== 'GET') {
        res.setHeader('Allow', ['GET']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
    try {
        // Fetch all products
        const products = await prisma.product.findMany();
        // findMany returns an empty array if no products are found, so no special check for !products is needed.
        // If products array is empty, the map will result in an empty array, which is correct.
        // For each product, fetch its review stats
        const productsWithStats = await Promise.all(products.map(async (product) => {
            const reviewStats = await prisma.productReview.aggregate({
                _avg: {
                    rating: true,
                },
                _count: {
                    // Assuming 'id' is a valid field to count for reviews.
                    // Could also use _count: { _all: true } or specific field like userId.
                    id: true,
                },
                where: {
                    productId: product.id,
                },
            });
            // The Product model currently has: id, name, description, reviews[] (relation)
            // The ProductWithReviewStats type aims to bridge this with frontend needs.
            return {
                ...product, // Spreads id, name, description from the Product model
                title: product.name, // Explicitly map name to title
                averageRating: reviewStats._avg.rating, // This can be null if no ratings
                reviewCount: reviewStats._count.id, // This will be 0 if no ratings
                // Placeholder/default values for other fields potentially expected by UI components
                // These would ideally come from an expanded Product model or other data sources
                category: 'Uncategorized', // Default placeholder
                images: product.images || [], // Assuming 'images' might be added to Product model later e.g. as Json: { url: string; alt?: string }[]
                // Or fetched from a related table. For now, default to empty or what product might have.
                price: product.price === undefined ? null : product.price, // Assuming 'price' might be added
                currency: product.currency === undefined ? 'USD' : product.currency, // Assuming 'currency' might be added
                tags: product.tags === undefined ? [] : product.tags, // Assuming 'tags' might be added (e.g. as string[])
            };
        }));
        return res.status(200).json(productsWithStats);
    }
    catch (e) {
        console.error('Error fetching products with stats:', e);
        return res.status(500).json({ error: 'Internal server error while fetching products.' });
    }
    finally {
        await prisma.$disconnect();
    }
}
