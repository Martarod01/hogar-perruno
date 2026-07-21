import heroPhoto from "../assets/images/hero.jpg";
import aboutPhoto from "../assets/images/about.jpg";
import gallery1 from "../assets/images/gallery-1.jpg";
import gallery2 from "../assets/images/gallery-2.jpg";
import gallery3 from "../assets/images/gallery-3.jpg";
import gallery4 from "../assets/images/gallery-4.jpg";
import gallery5 from "../assets/images/gallery-5.jpg";
import gallery6 from "../assets/images/gallery-6.jpg";
import type { ImageMetadata } from "astro";

export type SiteImage = {
  image: ImageMetadata;
  alt: string;
  title?: string;
  caption?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  span?: "wide" | "tall" | "normal";
};

export const siteImages = {
  hero: {
    image: heroPhoto,
    alt: "Perro feliz en Hogar Perruno, alojamiento familiar en Las Rozas de Madrid",
    title: "Hogar Perruno · Alojamiento familiar para perros",
    loading: "eager" as const,
    fetchPriority: "high" as const,
  },
  about: {
    image: aboutPhoto,
    alt: "Cuidadores de Hogar Perruno con un perro en un ambiente familiar",
    title: "El equipo de Hogar Perruno",
    loading: "lazy" as const,
  },
} as const;

export const galleryImages: SiteImage[] = [
  {
    image: gallery1,
    alt: "Perro jugando en el jardín vallado de Hogar Perruno",
    caption: "Juegos al aire libre en nuestro jardín privado",
    span: "wide",
  },
  {
    image: gallery2,
    alt: "Perro descansando cómodamente en el sofá de casa",
    caption: "Descanso en casa, como en su propio hogar",
    span: "tall",
  },
  {
    image: gallery3,
    alt: "Paseo con perro por Las Rozas de Madrid",
    caption: "Paseos adaptados a cada perro",
    span: "normal",
  },
  {
    image: gallery4,
    alt: "Perro con juguetes de enriquecimiento mental",
    caption: "Juegos y estimulación mental",
    span: "normal",
  },
  {
    image: gallery5,
    alt: "Perro recibiendo cariño y atención personalizada",
    caption: "Atención individualizada cada día",
    span: "tall",
  },
  {
    image: gallery6,
    alt: "Dos perros conviviendo tranquilamente en Hogar Perruno",
    caption: "Convivencia tranquila y segura",
    span: "wide",
  },
];
