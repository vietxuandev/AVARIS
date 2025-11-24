/**
 * Structured Data (JSON-LD) for SEO
 * This helps search engines understand the business information
 */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AVARIS",
  description:
    "Nước uống đóng chai thủy tinh cao cấp & bền vững. Cam kết 100% chai thủy tinh tái sử dụng.",
  url: "https://avariswater.com",
  logo: "https://avariswater.com/logo.png",
  image: "https://avariswater.com/og-image.jpg",
  telephone: "+84-868-869-910",
  email: "info@avariswater.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "VN",
    addressLocality: "Vietnam",
  },
  sameAs: [
    // Add your social media links here
    // "https://facebook.com/avariswater",
    // "https://instagram.com/avariswater",
    // "https://linkedin.com/company/avariswater",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+84-868-869-910",
    contactType: "Customer Service",
    email: "info@avariswater.com",
    availableLanguage: ["Vietnamese"],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AVARIS",
  url: "https://avariswater.com",
  description:
    "Nước uống đóng chai thủy tinh cao cấp, kết hợp chất lượng vượt trội và trách nhiệm với môi trường",
  publisher: {
    "@type": "Organization",
    name: "AVARIS",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://avariswater.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "AVARIS Premium Glass Bottled Water",
  description:
    "Nước uống cao cấp trong chai thủy tinh tái sử dụng, an toàn cho sức khỏe và thân thiện với môi trường",
  brand: {
    "@type": "Brand",
    name: "AVARIS",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "VND",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AVARIS",
  image: "https://avariswater.com/og-image.jpg",
  "@id": "https://avariswater.com",
  url: "https://avariswater.com",
  telephone: "+84-868-869-910",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressCountry: "VN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
};
