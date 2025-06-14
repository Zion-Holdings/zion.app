export function sendMessage({ productId, sellerId, subject, message }: {
    productId: any;
    sellerId: any;
    subject: any;
    message: any;
}): Promise<{
    data: any;
    error: string | null;
}>;
