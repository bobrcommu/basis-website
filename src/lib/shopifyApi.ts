import Shopify from 'shopify-api-node';

export const shopifyClient = new Shopify({
  shopName: process.env.NEXT_PUBLIC_SHOPIFY_STORE!,
  apiKey: process.env.SHOPIFY_API_KEY!,
  password: process.env.SHOPIFY_API_SECRET!,
  apiVersion: '2024-04'
});

export async function getProducts() {
  return shopifyClient.product.list();
}

export async function getProduct(id: number) {
  return shopifyClient.product.get(id);
}

export async function createOrder(orderData: any) {
  return shopifyClient.order.create(orderData);
}
