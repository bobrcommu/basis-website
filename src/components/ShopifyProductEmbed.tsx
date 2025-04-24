'use client';

import { useEffect, useCallback } from 'react';
import styles from './ShopifyProductEmbed.module.css';
import { trackEvent, trackEcommerceEvent } from '@/lib/analytics';

interface ShopifyProductEmbedProps {
  productId: string;
  componentId: string;
  buttonVariant?: 'primary' | 'secondary';
}

declare global {
  interface Window {
    ShopifyBuy: any;
  }
}

export default function ShopifyProductEmbed({ 
  productId, 
  componentId,
  buttonVariant = 'primary'
}: ShopifyProductEmbedProps) {
  useEffect(() => {
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    
    function loadScript() {
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      script.onload = ShopifyBuyInit;
      document.body.appendChild(script);
    }

    function ShopifyBuyInit() {
      const client = window.ShopifyBuy.buildClient({
        domain: 'pay.evere.io',
        storefrontAccessToken: 'e1b14660cb39e4c19425a945567d7d04',
      });

      // Apply custom styling to the document
      const styleTag = document.createElement('style');
      styleTag.textContent = `
        .shopify-buy__btn {
          font-family: var(--font-geist-sans, sans-serif) !important;
          border-radius: 4px !important;
          font-weight: 500 !important;
          font-size: 16px !important;
          height: 50px !important;
          padding: 0 16px !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          transition: all 0.2s ease !important;
          border: none !important;
          width: 100% !important;
        }
        
        .shopify-buy__btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
        }
        
        .shopify-buy__btn:active {
          transform: translateY(0) !important;
        }
        
        .shopify-buy__btn--view-product {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 8px !important;
        }
        
        .shopify-buy__btn--view-product:before {
          content: '';
          display: inline-block;
          width: 20px;
          height: 20px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'/%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: center;
          margin-right: 6px;
        }
      `;
      document.head.appendChild(styleTag);

      window.ShopifyBuy.UI.onReady(client).then(function (ui: any) {
        // Check if the component node exists before creating
        const node = document.getElementById(componentId);
        if (node && !node.hasChildNodes()) { // Avoid re-initializing if component already exists
          ui.createComponent('product', {
            id: productId,
            node: node,
            moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
            options: {
              "product": {
                "styles": {
                  "product": {
                    "@media (min-width: 601px)": {
                      "max-width": "100%",
                      "margin-left": "0",
                      "margin-bottom": "0"
                    },
                    "text-align": "left"
                  },
                  "button": {
                    "background-color": buttonVariant === 'primary' ? "#000000" : "#ffffff",
                    "color": buttonVariant === 'primary' ? "#ffffff" : "#000000",
                    "border": buttonVariant === 'primary' ? "none" : "1px solid #000000",
                    ":hover": { 
                      "background-color": buttonVariant === 'primary' ? "#222222" : "#f6f6f6",
                      "color": buttonVariant === 'primary' ? "#ffffff" : "#000000",
                    },
                    ":focus": { 
                      "background-color": buttonVariant === 'primary' ? "#222222" : "#f6f6f6",
                      "color": buttonVariant === 'primary' ? "#ffffff" : "#000000",
                    },
                    "border-radius": "4px",
                    "font-weight": "500", 
                    "font-size": "16px",
                    "padding-top": "16px",
                    "padding-bottom": "16px",
                    "height": "50px",
                    "width": "100%",
                    "display": "flex",
                    "justify-content": "center",
                    "align-items": "center",
                    "box-shadow": "0 2px 4px rgba(0, 0, 0, 0.05)",
                    "transition": "all 0.2s ease"
                  },
                  "quantityInput": {
                    "font-size": "16px",
                    "padding-top": "0.5rem",
                    "padding-bottom": "0.5rem",
                    "border-color": "#e5e5e5",
                    "border-radius": "4px",
                    "margin-bottom": "0.5rem"
                  },
                  "price": {
                    "font-size": "18px",
                    "font-weight": "600",
                    "color": "#111111"
                  }
                },
                "buttonDestination": "cart",
                "contents": {
                  "img": false,
                  "title": false, 
                  "price": false,
                  "options": false,
                  "quantityInput": true,
                  "button": true,
                  "buttonWithQuantity": false
                },
                "text": {
                  "button": "Add to cart",
                  "outOfStock": "Out of stock",
                  "unavailable": "Unavailable"
                }
              },
              "cart": {
                "styles": {
                  "button": {
                    "background-color": "#000000",
                    "color": "#ffffff",
                    ":hover": { "background-color": "#222222", "color": "#ffffff" },
                    ":focus": { "background-color": "#222222", "color": "#ffffff" },
                    "border-radius": "4px",
                    "font-weight": "500"
                  },
                  "title": {
                    "color": "#111111"
                  },
                  "header": {
                    "color": "#111111"
                  },
                  "lineItems": {
                    "color": "#111111"
                  },
                  "subtotalText": {
                    "color": "#111111"
                  },
                  "subtotal": {
                    "color": "#111111"
                  },
                  "notice": {
                    "color": "#111111"
                  },
                  "currency": {
                    "color": "#111111"
                  },
                  "close": {
                    "color": "#111111",
                    ":hover": {
                      "color": "#111111"
                    }
                  },
                  "empty": {
                    "color": "#111111"
                  },
                  "noteDescription": {
                    "color": "#111111"
                  },
                  "discountText": {
                    "color": "#111111"
                  },
                  "discountIcon": {
                    "fill": "#111111"
                  },
                  "discountAmount": {
                    "color": "#111111"
                  }
                },
                "text": {
                  "total": "Subtotal",
                  "button": "Checkout",
                  "empty": "Your cart is empty",
                  "notice": "Shipping and taxes calculated at checkout."
                },
                "popup": false
              },
              "toggle": {
                "styles": {
                  "toggle": {
                    "background-color": "#000000",
                    ":hover": {
                      "background-color": "#222222"
                    },
                    ":focus": {
                      "background-color": "#222222"
                    }
                  },
                  "count": {
                    "font-size": "16px"
                  }
                }
              },
              "modalProduct": {
                "styles": {
                  "product": {
                    "@media (min-width: 601px)": {
                      "max-width": "100%",
                      "margin-left": "0px",
                      "margin-bottom": "0px"
                    }
                  },
                  "button": {
                    "background-color": "#000000",
                    "color": "#ffffff",
                    ":hover": {
                      "background-color": "#222222",
                      "color": "#ffffff"
                    },
                    ":focus": {
                      "background-color": "#222222",
                      "color": "#ffffff"
                    }
                  }
                }
              },
              "modal": {
                "styles": {
                  "modal": {
                    "background-color": "#ffffff"
                  }
                }
              },
              "lineItem": {
                "styles": {
                  "variantTitle": {
                    "color": "#111111"
                  },
                  "title": {
                    "color": "#111111"
                  },
                  "price": {
                    "color": "#111111"
                  },
                  "fullPrice": {
                    "color": "#111111"
                  },
                  "discount": {
                    "color": "#111111"
                  },
                  "discountIcon": {
                    "fill": "#111111"
                  },
                  "quantity": {
                    "color": "#111111"
                  },
                  "quantityIncrement": {
                    "color": "#111111",
                    "border-color": "#111111"
                  },
                  "quantityDecrement": {
                    "color": "#111111",
                    "border-color": "#111111"
                  },
                  "quantityInput": {
                    "color": "#111111",
                    "border-color": "#111111"
                  }
                }
              },
              "events": {
                "afterInit": function(component: any) {
                  if (component.model && component.model.selectedVariant) {
                    trackEcommerceEvent('view_item', [{
                      id: component.model.selectedVariant.id,
                      title: component.model.selectedVariant.title,
                      price: component.model.selectedVariant.price,
                      quantity: 1
                    }]);
                  }
                },
                "addVariantToCart": function(component: any, evt: any) {
                  if (evt.detail && evt.detail.variant) {
                    trackEcommerceEvent('add_to_cart', [{
                      id: evt.detail.variant.id,
                      title: evt.detail.variant.title,
                      price: evt.detail.variant.price,
                      quantity: evt.detail.quantity || 1
                    }]);
                  }
                },
                "updateQuantity": function(component: any, evt: any) {
                  const variant = component.model && component.model.selectedVariant;
                  if (evt.detail.quantity > 0 && variant) {
                    trackEvent('update_cart_quantity', {
                      product_id: variant.id,
                      product_title: variant.title,
                      quantity: evt.detail.quantity,
                      price: variant.price
                    });
                  }
                }
              }
            },
          });
        }
      });
    }

    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }

    return () => {
      const scriptElement = document.querySelector(`script[src="${scriptURL}"]`);
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
      
      // Also clean up the style tag when unmounting
      const styleElement = document.querySelector('style[data-shopify-buy-id]');
      if (styleElement && styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement);
      }
    };
  }, [productId, componentId, buttonVariant]); 

  return (
    <div id={componentId} className={`shopify-buy-button w-full max-w-full ${styles.container}`}></div>
  );
}
