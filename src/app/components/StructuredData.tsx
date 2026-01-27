import React from 'react';

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://oyoeats.lk/#localbusiness",
        "name": "Oyo Eats",
        "description": "Food delivery service in Nawalapitiya offering restaurants, bakeries, pharmacies, and pet supplies delivery",
        "url": "https://oyoeats.lk",
        "telephone": "+94 72 878 7872",
        "email": "support@oyoeats.lk",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "17 Owita",
          "addressLocality": "Nawalapitiya",
          "addressRegion": "Central Province",
          "postalCode": "20000",
          "addressCountry": "LK"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "7.0367",
          "longitude": "80.5236"
        },
        "openingHours": "Mo-Su 10:00-23:00",
        "priceRange": "$$",
        "image": "https://oyoeats.lk/landing-app.png",
        "logo": "https://oyoeats.lk/logo.png",
        "sameAs": []
      },
      {
        "@type": "FoodEstablishment",
        "@id": "https://oyoeats.lk/#foodservice",
        "name": "Oyo Eats Food Delivery",
        "description": "Restaurant and food delivery service in Nawalapitiya, Sri Lanka",
        "url": "https://oyoeats.lk",
        "servesCuisine": ["Sri Lankan", "Indian", "Chinese", "Western"],
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Nawalapitiya",
          "addressRegion": "Central Province",
          "addressCountry": "LK"
        }
      },
      {
        "@type": "Service",
        "@id": "https://oyoeats.lk/#deliveryservice",
        "name": "Food Delivery Service",
        "description": "Fast delivery of food, pharmacy items, and pet supplies in Nawalapitiya (30km radius)",
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://oyoeats.lk/#localbusiness"
        },
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "7.0367",
            "longitude": "80.5236"
          },
          "geoRadius": "30000"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Delivery Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Restaurant Delivery",
                "description": "Delivery from local restaurants in Nawalapitiya"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Pharmacy Delivery",
                "description": "Medicine and pharmacy items delivery"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Pet Supplies Delivery",
                "description": "Pet food and supplies delivery service"
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://oyoeats.lk/#website",
        "url": "https://oyoeats.lk",
        "name": "Oyo Eats",
        "description": "Food delivery app for Nawalapitiya - restaurants, bakeries, pharmacies, and pet supplies",
        "publisher": {
          "@type": "LocalBusiness",
          "@id": "https://oyoeats.lk/#localbusiness"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://oyoeats.lk/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://oyoeats.lk/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://oyoeats.lk"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://oyoeats.lk/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is Oyo Eats available in my area?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oyo Eats currently covers a 30km radius around Nawalapitiya. You can check the app or contact us to confirm if your location is within our delivery zone."
            }
          },
          {
            "@type": "Question",
            "name": "How do I track my order?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Once you place an order, you'll receive real-time updates via push notifications."
            }
          },
          {
            "@type": "Question",
            "name": "What restaurants are listed on Oyo Eats?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We partner with 15+ local restaurants in Nawalapitiya, including traditional Sri Lankan cuisine and fast food. New restaurants are added regularly."
            }
          },
          {
            "@type": "Question",
            "name": "What are the delivery fees?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Delivery fees vary based on distance starting at LKR 150. Check the app for current pricing."
            }
          },
          {
            "@type": "Question",
            "name": "How long does delivery take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Delivery times range from 15-45 minutes depending on your location. Central Nawalapitiya: 15-25 min, Suburbs: 25-35 min, Surrounding villages: 35-45 min."
            }
          },
          {
            "@type": "Question",
            "name": "Can I pay with cash?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We accept both cash on delivery and digital payments including credit cards, debit cards, and LankaQR for your convenience."
            }
          },
          {
            "@type": "Question",
            "name": "What if I'm not satisfied with my order?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We have a 100% satisfaction guarantee. If you're not happy with your order, contact our support team within 30 minutes of delivery and we'll make it right."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer customer support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Our support team is available 24/7 through the app's chat feature, email, and phone. We're here to help with any questions or issues."
            }
          },
          {
            "@type": "Question",
            "name": "Can I schedule orders in advance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can schedule orders in advance for special occasions and events."
            }
          },
          {
            "@type": "Question",
            "name": "How do I become a restaurant partner?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Interested restaurants can contact us at partner@oyoeats.lk or fill out our partnership form on our website. We'll guide you through the onboarding process."
            }
          }
        ]
      },
      {
        "@type": "MobileApplication",
        "@id": "https://oyoeats.lk/#app",
        "name": "Oyo Eats",
        "operatingSystem": "Android, iOS",
        "applicationCategory": "FoodDeliveryApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "LKR"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.5",
          "ratingCount": "3000"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;

