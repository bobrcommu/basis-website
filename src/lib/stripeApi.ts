'use client';

// Stripe API integration for handling payments
// Using Stripe public key from user input: pk_test_51R5emKCZ7tPnIp4t57vecZySqAJC4jUfyYj1dTyP4mioTyNfzpLzRVMxj4DRyPWghG6uvT75YAF1QLxP0m9l40Wh00FzljnY47

// Note: In a production environment, you should use environment variables for API keys
const STRIPE_PUBLIC_KEY = 'pk_test_51R5emKCZ7tPnIp4t57vecZySqAJC4jUfyYj1dTyP4mioTyNfzpLzRVMxj4DRyPWghG6uvT75YAF1QLxP0m9l40Wh00FzljnY47';
// Secret key should only be used on the server side, never exposed in client code
// sk_test_51R5emKCZ7tPnIp4tKc1xBDaivFnqwxs8V9P4KX97B4MHsupqraAkKv1b32U904kYnvWaFPDTJ4ezZBQw0mlOWsDG00w2CKza1V

// Product price IDs - would typically come from your Stripe dashboard
export const PRICE_IDS = {
  PREMIUM_MONTHLY: 'price_premium',
  LIFETIME: 'price_lifetime'
};

// Create a mock Stripe implementation since we don't need the actual Stripe.js for this demo
// In a real implementation, you would install @stripe/stripe-js and use the actual Stripe.js
interface MockStripe {
  redirectToCheckout: (options: { sessionId: string }) => Promise<{ error?: { message: string } }>;
}

const createMockStripe = (publishableKey: string): MockStripe => {
  console.log(`Creating mock Stripe instance with key: ${publishableKey}`);
  return {
    redirectToCheckout: async ({ sessionId }) => {
      console.log(`Mock redirectToCheckout called with session ID: ${sessionId}`);
      return { error: undefined };
    }
  };
};

// Mock loadStripe function
let stripePromise: Promise<MockStripe> | null = null;

export const loadStripe = async (): Promise<MockStripe> => {
  if (!stripePromise) {
    // Create a mock Stripe instance instead of importing the actual library
    stripePromise = Promise.resolve(createMockStripe(STRIPE_PUBLIC_KEY));
  }
  return stripePromise;
};

// Function to create a checkout session
export const createCheckoutSession = async (priceId: string, successUrl: string, cancelUrl: string) => {
  try {
    // In a real implementation, this would call your backend API endpoint
    // that would create a checkout session using the Stripe secret key
    
    // This is a simplified mock implementation for demonstration purposes
    // It simulates the API call and returns a mock response
    
    console.log(`Creating checkout session for price: ${priceId}`);
    console.log('Success URL:', successUrl);
    console.log('Cancel URL:', cancelUrl);
    
    // Simulated API response
    return {
      id: 'cs_test_' + Math.random().toString(36).substring(2, 15),
      url: 'https://checkout.stripe.com/pay/cs_test_' + Math.random().toString(36).substring(2, 15)
    };
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw new Error('Failed to create checkout session');
  }
};

// Function to redirect to Stripe Checkout
export const redirectToCheckout = async (priceId: string) => {
  try {
    // Get the current URL to use for success and cancel URLs
    const baseUrl = window.location.origin || 'https://example.com';
    const successUrl = `${baseUrl}/subscription/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${baseUrl}/subscription/cancel`;
    
    // Create a mock checkout session
    const session = await createCheckoutSession(priceId, successUrl, cancelUrl);
    
    console.log('Created mock checkout session:', session);

    // For our demo, we'll just simulate the checkout process
    // In a real implementation, we would use:
    // const stripe = await loadStripe();
    // await stripe.redirectToCheckout({ sessionId: session.id });
    
    // Instead, we're just logging and returning the session for the demo
    console.log('Simulating redirect to Stripe Checkout:', session.url);
    
    // Return the session for demonstration purposes
    return session;
  } catch (error) {
    console.error('Error redirecting to checkout:', error);
    throw new Error('Payment processing error');
  }
};

// Pricing information
export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  priceId: string;
  frequency: string;
  description: string;
  features: string[];
  mostPopular: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 'Free',
    priceId: '',
    frequency: '',
    description: 'No credit card required',
    features: [
      'No Ads',
      'Beautiful Themes (limited selection)',
      '5 photos',
      'Share Memories',
      'Unlimited Collaborators',
      'Integration with Popular Services',
      'Privacy Controls',
    ],
    mostPopular: false
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '€6.99',
    priceId: PRICE_IDS.PREMIUM_MONTHLY,
    frequency: '/mo',
    description: 'Most flexible option',
    features: [
      'No Ads',
      'Beautiful Themes (full selection)',
      'Unlimited photos',
      'Share Memories',
      'Unlimited Collaborators',
      'Integration with Popular Services',
      'Privacy Controls',
      'Music & Video Galleries',
      'Enhanced Stories',
      'Background Music Playlist',
      'Advanced Privacy Settings',
      'Customizable Access Roles',
      'Manage Guest Notifications',
    ],
    mostPopular: true
  },
  {
    id: 'lifetime',
    name: 'Lifetime',
    price: '€97.00',
    priceId: PRICE_IDS.LIFETIME,
    frequency: '',
    description: 'All features. Best value.',
    features: [
      'No Ads',
      'Beautiful Themes (full selection)',
      'Unlimited photos',
      'Share Memories',
      'Unlimited Collaborators',
      'Integration with Popular Services',
      'Privacy Controls',
      'Music & Video Galleries',
      'Enhanced Stories',
      'Background Music Playlist',
      'Advanced Privacy Settings',
      'Customizable Access Roles',
      'Manage Guest Notifications',
      'Never Expires',
      '2 physical Evere Medallions included',
    ],
    mostPopular: false
  }
];
