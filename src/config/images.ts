import heroPhoto from "../assets/images/hero.jpg";
import aboutPhoto from "../assets/images/about.jpg";
import gardenPhoto from "../assets/images/garden.jpg";

export const siteImages = {
  hero: {
    image: heroPhoto,
    alt: "Perro feliz en Hogar Perruno, alojamiento familiar en Las Rozas de Madrid",
    title: "Hogar Perruno · Alojamiento familiar para perros en Las Rozas",
    loading: "eager" as const,
    fetchPriority: "high" as const,
  },
  about: {
    image: aboutPhoto,
    alt: "Los cuidadores de Hogar Perruno con un perro en casa",
    title: "El equipo de Hogar Perruno con sus huéspedes",
    loading: "lazy" as const,
  },
  garden: {
    image: gardenPhoto,
    alt: "Jardín privado vallado de Hogar Perruno en Las Rozas donde los perros juegan libremente",
    title: "Jardín vallado privado de Hogar Perruno",
    caption:
      "Jardín privado completamente vallado donde los perros pueden correr y jugar con total seguridad.",
    loading: "lazy" as const,
  },
} as const;

export const featuredImages = [siteImages.garden];
