// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.svg";
import sketch from "./assets/images/Skills/sketch.svg";
import ps from "./assets/images/Skills/ps.svg";
import reactjs from "./assets/images/Skills/react.svg";
import nodejs from "./assets/images/Skills/node.svg";
import python from "./assets/images/Skills/python.svg";

import services_logo1 from "./assets/images/Services/logo1.svg";
import services_logo2 from "./assets/images/Services/logo2.svg";
import services_logo3 from "./assets/images/Services/logo3.svg";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import person_project from "./assets/images/Projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram, BsYoutube, BsFacebook, BsInfoCircle } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "bio",
      icon: BsInfoCircle,
      external: true,
      url: "https://naceunaestrellacr.fandom.com/es/wiki/Rodrigo_Lagunas",
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Rodrigo Lagunas",
    firstName: "RODRIGO",
    LastName: "LAGUNAS",
    btnText: "Solicitar Cotización Gratis",
    image: Hero_person,
    hero_content: [
      {
        count: "15+",
        text: "Años de experiencia en Arte Escénico",
      },
      {
        count: "1000+",
        text: "Eventos realizados con éxito",
      },
    ],
  },
  skills: {
    title: "Habilidades",
    subtitle: "Lo que hago",
    skills_content: [
      {
        name: "Ambiente Musical",
        para: "Me aseguro de que el ambiente sea el adecuado para cada evento",
        logo: figma,
      },
      {
        name: "Gestión de Musicos",
        para: "Organizo y coordino talentos",
        logo: nodejs,
      },
      {
        name: "Sonido de alta Calidad",
        para: "Bose S1 Pro, Bose S1 Pro+, Bose L1 Compact",
        logo: ps,
      },
      {
        name: "Arreglista Musical",
        para: "Preparo música solicitada por el cliente",
        logo: reactjs,
      },
      {
        name: "Contratos y Acuerdos",
        para: "Redacto contratos y acuerdos para eventos y presentaciones",
        logo: sketch,
      },
      {
        name: "Ceremonias Católicas",
        para: "Preparo música para ceremonias católicas",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Servicios",
    subtitle: "Lo que ofrecemos",
    service_content: [
      {
        title: "Ceremonias de Boda",
        para: "Ofrecemos un servicio exclusivo para ceremonias de bodas, creando un ambiente elegante y emotivo. Incluye ambientación musical previa para recibir a sus invitados, así como la interpretación de piezas seleccionadas para cada momento especial de la ceremonia. ",
        logo: services_logo1,
      },
      {
        title: "Coctel/Recepción",
        para: "Ofrecemos un servicio de Música en vivo para cócteles y recepciones, creando un ambiente cálido y sofisticado mientras sus invitados disfrutan del evento. Interpretamos un repertorio versátil que abarca desde música moderna hasta piezas solicitadas por el cliente, adaptándonos a la atmósfera que desea para su celebración.",
        logo: services_logo2,
      },
      {
        title: "Corporativos",
        para: "Elevamos la elegancia de sus eventos corporativos con un servicio de Música en vivo, ideal para recepciones, inauguraciones, cenas de gala y celebraciones empresariales. Ofrecemos un repertorio cuidadosamente seleccionado que se adapta a la imagen y el tono de su evento, creando una experiencia distinguida y memorable para sus invitados.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Proyectos",
    subtitle: "Lo que he hecho",
    image: person_project,
    project_content: [
      {
        title: "Acompañar momentos especiales",
        image: project1,
      },
      {
        title: "Agrupaciones musicales",
        image: project2,
      },
      {
        title: "Director de Bandas",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonios",
    subtitle: "Lo que dicen los clientes",
    testimonials_content: [
      {
        review:
          "\"Mis respetos y admiración para Rodrigo, sus músicos y cantantes. Un orgullo nacional. Gracias\"",
        img: avatar1,
        name: "anacemonge2211 - Instagram",
      },
      {
        review:
          "\"Excelente Rodrigo!!!!!! El trabajo que realizas es increíble como te lo dije en el Jazz Café!!! Que Dios te siga bendiciendo!!\"",
        img: avatar2,
        name: "marienf - INSTAGRAM",
      },
      {
        review:
          "\"Excelentes músicos y grandes personas 🔥\"",
        img: avatar3,
        name: "jeffuriel -INSTAGRAM",
      },
      {
        review:
          "\"El talento definitivamente es más que evidente, me encanta #JuanNUE el mejor y la banda espectacular 👌\"",
        img: avatar4,
        name: "kimta_miranda - INSTAGRAM",
      },
    ],
  },
  Hireme: {
    title: "Contratenos",
    subtitle: "Para su Evento",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Cada nota que interpreto es el resultado de años de dedicación y perfeccionamiento, con el propósito de crear experiencias únicas en cada evento. Mi trayectoria musical es un viaje de crecimiento y descubrimiento, donde cada melodía refleja la riqueza de diversas culturas y el poder universal de la música. Llene el formulario para ponerme en contacto con usted.",
    btnText: "Solicitar Cotización Gratis",
  },
  Contact: {
    title: "Formulario para Eventos",
    subtitle: "Cotización y Reservación",
    social_media: [
      {
        text: "rodrigolagunasmusic@gmail.com",
        icon: GrMail,
        link: "mailto:rodrigolagunasmusic@gmail.com",
      },
      {
        text: "+506 8338 4214",
        icon: MdCall,
        link: "https://wa.me/50683384214",
      },
      {
        text: "YouTube Channel",
        icon: BsYoutube,
        link: "https://www.youtube.com/@rodrigolagunasmusico9689",
      },
      {
        text: "RodrigoLagunasMusic",
        icon: BsInstagram,
        link: "https://www.instagram.com/RodrigoLagunasMusic",
      },
      {
        text: "Facebook Page",
        icon: BsFacebook,
        link: "https://www.facebook.com/RodrigoLagunasMusic",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2025",
  },
};
