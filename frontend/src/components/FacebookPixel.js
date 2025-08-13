// components/FacebookPixel.js
import { useEffect } from 'react';

function FacebookPixel() {
  useEffect(() => {
    // Declare fbq as a global variable
    window.fbq = window.fbq || function() {
      (window.fbq.q = window.fbq.q || []).push(arguments);
    };
    
    window._fbq = window._fbq || window.fbq;
    window.fbq.push = window.fbq;
    window.fbq.loaded = true;
    window.fbq.version = '2.0';
    window.fbq.queue = [];

    // Load Facebook Pixel script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);

    // Initialize Pixel
    window.fbq('init', '1386421879357506');
    window.fbq('track', 'PageView');

    // Cleanup
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src="https://www.facebook.com/tr?id=1386421879357506&ev=PageView&noscript=1"
        alt=""
      />
    </noscript>
  );
}

export default FacebookPixel;