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
        "logo": "https://oyoeats.lk/logo.png"
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
