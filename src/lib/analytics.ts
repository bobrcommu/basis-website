declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
  }
}

// Analytics implementation
export function pageview(url: string) {
  if (typeof window !== 'undefined') {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID as string, {
      page_path: url,
    });
  }
}

export function event({ action, category, label, value }: {
  action: string;
  category: string;
  label: string;
  value: number;
}) {
  if (typeof window !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

// Overloaded trackEvent function to handle both formats
export function trackEvent(eventName: string, eventData: Record<string, any>): void;
export function trackEvent(action: string, { action: eventAction, ...params }: Record<string, any>): void {
  if (typeof window !== 'undefined') {
    window.gtag('event', action, {
      ...params,
      event_action: eventAction
    });
  }
}

// E-commerce event tracking
export function trackEcommerceEvent(action: string, params: {
  currency?: string;
  value?: number;
  items?: Array<{
    item_id: string;
    item_name: string;
    price?: number;
    quantity?: number;
  }>;
}) {
  if (typeof window !== 'undefined') {
    window.gtag('event', action, {
      ...params,
      send_to: process.env.NEXT_PUBLIC_GA_ID
    });
  }
}
