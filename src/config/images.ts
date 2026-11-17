import heroPhoto from "../assets/images/hero.jpg";
import aboutPhoto from "../assets/images/about.jpg";
import gallery1 from "../assets/images/gallery-1.jpg";
import gallery2 from "../assets/images/gallery-2.jpg";
import gallery3 from "../assets/images/gallery-3.jpg";
import gallery4 from "../assets/images/gallery-4.jpg";
import gallery5 from "../assets/images/gallery-5.jpg";
import gallery6 from "../assets/images/gallery-6.jpg";
import gallery7 from "../assets/images/gallery-7.jpg";
import gallery8 from "../assets/images/gallery-8.jpg";
import gallery9 from "../assets/images/gallery-9.jpg";
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
    alt: "Cuidadores de perros de Hogar Perruno en Las Rozas con un perro en casa",
    title: "El equipo de Hogar Perruno",
    loading: "lazy" as const,
  },
} as const;

export const galleryImages: SiteImage[] = [
  {
    image: gallery1,
    alt: "Golden retriever sonriente durante un paseo entre amapolas en Las Rozas",
    caption: "Paseos por el campo, adaptados a cada perro",
  },
  {
    image: gallery2,
    alt: "Perro pequeño de pelo blanco con la lengua fuera en un sendero",
    caption: "Rutas tranquilas para los más pequeños",
  },
  {
    image: gallery3,
    alt: "Perro mestizo tumbado panza arriba sobre el césped, relajado",
    caption: "Momentos de juego y relax al aire libre",
  },
  {
    image: gallery4,
    alt: "Perro de pelo rizado color canela descansando en casa en Hogar Perruno",
    caption: "Descanso en casa, como en su propio hogar",
  },
  {
    image: gallery5,
    alt: "Dóberman dormido sobre una manta azul junto a su cuidadora de Hogar Perruno",
    caption: "Mimos y compañía a todas horas",
  },
  {
    image: gallery6,
    alt: "Pomerania sonriente sentado en el suelo de casa",
    caption: "Cada huésped, un miembro más de la familia",
  },
  {
    image: gallery7,
    alt: "Dóberman con arnés durante un paseo por el campo en Las Rozas de Madrid",
    caption: "Ejercicio diario en plena naturaleza",
  },
  {
    image: gallery8,
    alt: "Perro blanco y negro con correa en un jardín con hojas de otoño",
    caption: "Atención individualizada cada día",
  },
  {
    image: gallery9,
    alt: "Dóberman de pie en casa mirando a la cámara",
    caption: "Un hogar seguro y acogedor",
  },
];
