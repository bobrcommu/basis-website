'use client';

interface ShopifyBuyButtonProps {
  productId: string;
  quantity?: number;
  className?: string;
}

export default function ShopifyBuyButton({ 
  productId = '10153979576584',
  quantity = 1,
  className
}: ShopifyBuyButtonProps) {
  const shopifyUrl = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE}/cart/add?id=${productId}&quantity=${quantity}`;

  return (
    <a
      href={shopifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className || "w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-4 rounded-xl transition duration-200 flex items-center justify-center touch-manipulation"}
    >
      Buy Now ({quantity})
    </a>
  );
}
