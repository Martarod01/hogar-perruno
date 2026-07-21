import { contact, faq, local, seo, services } from "../config/site";
import { siteImages } from "../config/images";

const absoluteUrl = (path: string) => new URL(path, seo.siteUrl).toString();

export function buildStructuredData(description: string, pageUrl: string) {
  const heroImageUrl = absoluteUrl(siteImages.hero.image.src);
  const aboutImageUrl = absoluteUrl(siteImages.about.image.src);
  const logoUrl = absoluteUrl(seo.logo);

  const sameAs = [contact.whatsapp, contact.instagram].filter(
    (url) => url && !url.endsWith("instagram.com/") && !url.endsWith("instagram.com")
  );

  const serviceOffers = services.items.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      areaServed: local.city,
      provider: {
        "@id": `${seo.siteUrl}/#business`,
      },
    },
  }));

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebSite",
      "@id": `${seo.siteUrl}/#website`,
      url: seo.siteUrl,
      name: seo.siteName,
      description,
      inLanguage: "es-ES",
      publisher: {
        "@id": `${seo.siteUrl}/#business`,
      },
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: seo.title,
      description,
      isPartOf: {
        "@id": `${seo.siteUrl}/#website`,
      },
      about: {
        "@id": `${seo.siteUrl}/#business`,
      },
      inLanguage: "es-ES",
    },
    {
      "@type": "LocalBusiness",
      "@id": `${seo.siteUrl}/#business`,
      "@context": "https://schema.org",
      name: seo.siteName,
      description,
      url: seo.siteUrl,
      image: [
        { "@type": "ImageObject", url: heroImageUrl, caption: siteImages.hero.alt },
        { "@type": "ImageObject", url: aboutImageUrl, caption: siteImages.about.alt },
      ],
      logo: { "@type": "ImageObject", url: logoUrl },
      email: contact.email,
      telephone: contact.phone1Href,
      priceRange: "€€",
      areaServed: [
        { "@type": "City", name: local.city },
        { "@type": "AdministrativeArea", name: local.region },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Rozas de Madrid",
        addressRegion: local.region,
        addressCountry: local.country,
      },
      slogan: "Donde tu perro siempre es familia",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de cuidado canino Hogar Perruno",
        itemListElement: serviceOffers,
      },
      ...(sameAs.length ? { sameAs } : {}),
    },
  ];

  const isHome = new URL(pageUrl).pathname === "/";

  if (isHome) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${seo.siteUrl}/#faq`,
      mainEntity: faq.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function buildSocialImageUrl() {
  return absoluteUrl(siteImages.hero.image.src);
}
