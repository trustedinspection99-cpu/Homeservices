export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window === 'undefined') return;
  
  // Google Analytics
  if (window.gtag && process.env.NEXT_PUBLIC_GA_ID) {
    window.gtag('event', eventName, eventData);
  }
  
  // Console log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', eventName, eventData);
  }
};

export const trackPageView = (url: string) => {
  if (typeof window === 'undefined') return;
  
  if (window.gtag && process.env.NEXT_PUBLIC_GA_ID) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }
};

// TypeScript declaration for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
