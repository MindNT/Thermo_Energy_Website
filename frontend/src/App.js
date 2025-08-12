import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import heroImage from './images/imagen1.webp';
import thumbnailImage from './images/thumbnail.webp';
import ButtonGreenRounded from './components/Button-green-rounded-solid';
import ButtonTipo1 from './components/Button-green-rounded-opaque';
import BadgeWhiteBgGreen from './components/Badged-whitebg-green';
import BadgeWhiteBgBlue from './components/Badged-whitebg-blue';
import CarouselGlass from './components/Carousel-glass';
import VideoBlur from './components/Video-blur-player-rounded';
import ButtonWhiteRounded from './components/Button-light-green-rounded-solid';
import ButtonWhiteGhost from './components/Button-white-rounded-ghost';
import camionImage from './images/imagencamion.webp';
import camionImage2 from './images/imagencamion2.webp';
import ButtonBlueRoundedOpaque from './components/Button-blue-rounded-opaque';
import CardInformativeWhiteGreen from './components/Card-informative-white-green';
import CardInformativeWhiteBlue from './components/Card-informative-white-blue';
import CardInformativeWhiteTransparent from './components/Card-informative-transparent-white';
import { IconBattery, IconBolt, IconPower, IconEngine, IconGauge, IconPlug} from '@tabler/icons-react';
import { BiSolidCarBattery } from 'react-icons/bi';
import { TbTruckDelivery } from 'react-icons/tb';
import { HiSpeakerXMark } from 'react-icons/hi2';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import CarouselTestimonials from './components/Carousel-testimonials';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import React from 'react';

import producto1 from './images/producto1.webp';
import producto2 from './images/producto2.webp';
import producto3 from './images/producto3.webp';
import producto4 from './images/producto4.webp';
import Video1 from './videos/Video1.mp4';
import Video2 from './videos/Video2.mp4';
import Video3 from './videos/Video3.mp4';
import user1 from './images/user1.webp';
import user2 from './images/user2.webp';
import user3 from './images/user3.webp';
import user4 from './images/user4.webp';
import img1Vertical from './images/img1.webp';
import img2Vertical from './images/img2.webp';
import img3Vertical from './images/img3.webp';
import img4Vertical from './images/img4.webp';
import img5Vertical from './images/img5.webp';
import img6Vertical from './images/img6.webp';

//import FacebookPixel from './components/FacebookPixel';

function App() {
  // Datos dummy para el carousel
  const carouselItems = [
    {
      image: producto1,
      title: "EKS380E48",
      description: "La unidad de refrigeración totalmente eléctrica Kingtec EKS380-E48 está diseñada para camiones con capacidad de 15 a 25 metros cúbicos. Su estructura integral permite una instalación rápida y económica, mientras que los paneles de aluminio garantizan ligereza. El compresor scroll de 48 V CC ofrece un enfriamiento eficiente y bajo consumo. Funciona con su propia batería de 48 V, sin afectar el kilometraje del vehículo ni la batería del chasis durante el transporte en cadena de frío.",
      url: "https://drive.google.com/file/d/1wmSWdLh6buzMyPdIP5kcwV6T4MZ84wd0/view?usp=drivesdk"
    },
    {
      image: producto2,
      title: "EVL370-E48",
      description: "La unidad de refrigeración totalmente eléctrica Kingtec EVL370-E48 está diseñada para camiones con capacidad de 15 a 25 metros cúbicos. Su estructura integral simplifica la instalación, reduce costos y tiempo, mientras que los paneles de aluminio la hacen ligera. Equipada con un compresor scroll de 48 V CC, ofrece un enfriamiento rápido y eficiente. Funciona con su propia batería de 48 V, sin afectar el kilometraje del vehículo ni la batería del chasis durante el transporte en cadena de frío.",
      url: "https://drive.google.com/file/d/1H647NXw7lmgZqEiwYyOEGCnICOd2OGRS/view?usp=drivesdk"
    },
    {
      image: producto3,
      title: "EKS360- E48",
      description: "La unidad de refrigeración totalmente eléctrica Kingtec EKS360­E48 está diseñada específicamente para camiones refrigerados con una capacidad de 15 a 25 metros cúbicos. Su diseño de estructura integral simplifica la instalación, reduce los pasos, el tiempo y los costos.",
      url: "https://drive.google.com/file/d/11YJMV3fDOpuSCSnCta0LrXLNly3QWp6B/view?usp=drivesdk"
    },
    {
      image: producto4,
      title: "EKS360- E48",
      description: "La unidad de refrigeración totalmente eléctrica Kingtec EKS360­E48 está diseñada específicamente para camiones refrigerados con una capacidad de 15 a 25 metros cúbicos. Su diseño de estructura integral simplifica la instalación, reduce los pasos, el tiempo y los costos.",
      url: "https://drive.google.com/file/d/11YJMV3fDOpuSCSnCta0LrXLNly3QWp6B/view?usp=drivesdk"
    }
  ];

  const transparentCards = [
    {
      title: "Cero Emisiones",
      description: "Alimentado por baterías integradas. La característica única de este sistema APU AC es que no produce emisiones y consume poca energía gracias a un compresor inversor",
      Icon: BiSolidCarBattery   
    },
    {
      title: "Altamente eficiente",
      description: "Funcionamiento totalmente eléctrico para un rendimiento estable y eficiente. Desarrollado sobre una plataforma madura con refrigeración, rendimiento y eficiencia energética probados",
      Icon: TbTruckDelivery
    },
    {
      title: "Silencioso",
      description: "Alta eficiencia energética, estabilidad de almacenamiento integrada en el controlador y ausencia de ruido del motor.",
      Icon: HiSpeakerXMark
    },
    {
      title: "Seguro",
      description: "Diseño integrado con estructura compacta para una instalación rápida y sencilla, funcionamiento sencillo y seguro, bajo voltaje (12 V CC-48 V CC) con múltiples protecciones de seguridad.",
      Icon: AiFillSafetyCertificate
    }
  ];

  const greenCards = [
    {
      title: "100% Eléctrico",
      description: "Operación totalmente independiente del vehículo con sistema de baterías recargables",
      Icon: IconBattery
    },
    {
      title: "Carga Rápida",
      description: "Recarga completa en 5-6 horas con autonomía de 6-8 horas continuas",
      Icon: IconBolt
    },
    {
      title: "Operación Dual",
      description: "Funciona mientras se recarga, ideal para almacenamiento nocturno",
      Icon: IconPower
    }
  ];

  const blueCards = [
    {
      title: "Direct Drive",
      description: "Sistema tradicional que opera con el motor del vehículo mediante banda",
      Icon: IconEngine
    },
    {
      title: "Eficiencia Comprobada",
      description: "Rendimiento óptimo durante la operación del vehículo",
      Icon: IconGauge
    },
    {
      title: "Stand By Opcional",
      description: "Algunos modelos incluyen conexión eléctrica para uso estacionario",
      Icon: IconPlug
    }
  ];

  const imagesVerticals = [
    {
      image: img1Vertical,
      description:  'descripción de la imagen 1'
    },
    {
      image: img2Vertical,
      description:  'descripción de la imagen 2'
    },
    {
      image: img3Vertical,
      description:  'descripción de la imagen 3'  
    },
    {
      image: img4Vertical,
      description:  'descripción de la imagen 4'
    },
    {
      image: img5Vertical,
      description:  'descripción de la imagen 5'
    },
    {
      image: img6Vertical,
      description:  'descripción de la imagen 6'
    }
  ];

  // Estado para las posiciones de las imágenes
  const [imagePositions, setImagePositions] = React.useState([0, 1, 2, 3, 4, 5]);

  // Función para rotar las posiciones
  const shufflePositions = () => {
    const newPositions = [...imagePositions];
    // Mover el último elemento al principio
    newPositions.unshift(newPositions.pop());
    setImagePositions(newPositions);
  };

  // Efecto para mezclar las posiciones cada 1 segundo
  React.useEffect(() => {
    const interval = setInterval(shufflePositions, 1000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      imageUrl: user1,
      comment: "La eficiencia energética de las unidades eléctricas ha reducido significativamente nuestros costos operativos. Excelente inversión.",
      stars: 5
    },
    {
      imageUrl: user2,
      comment: "El sistema de monitoreo en tiempo real nos da total control sobre nuestra flota refrigerada. La calidad del servicio es excepcional.",
      stars: 5
    },
    {
      imageUrl: user3,
      comment: "La autonomía de las unidades eléctricas nos permite mantener la cadena de frío incluso durante las paradas nocturnas.",
      stars: 4
    },
    {
      imageUrl: user4,
      comment: "La instalación fue rápida y el soporte técnico siempre está disponible. Notamos una mejora inmediata en nuestras operaciones.",
      stars: 5
    }
  ];

  // Estado para el video seleccionado (se selecciona una vez al cargar el componente)
  const [selectedVideo] = React.useState(() => {
    const videos = [Video1, Video2, Video3];
    return videos[Math.floor(Math.random() * videos.length)];
  });

  // Animation variants
  const slideInLeft = {
    initial: { 
      opacity: 0,
      x: -50
    },
    whileInView: { 
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.3
      }
    }
  };

  const slideInRight = {
    initial: { 
      opacity: 0,
      x: 50
    },
    whileInView: { 
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.3
      }
    }
  };

  const fadeIn = {
    initial: { 
      opacity: 0
    },
    whileInView: { 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const popUp = {
    initial: { 
      opacity: 0,
      scale: 0.5
    },
    whileInView: { 
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.4
      }
    }
  };

  const staggerChildren = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Nuevas variantes de animación para la sección Soluciones
  const solutionsAnimation = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const titleAnimation = {
    hidden: { 
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const fadeInStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const objectiveAnimations = {
    badge: {
      initial: { scale: 0.5, opacity: 0 },
      whileInView: {
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 0.8
        }
      }
    },
    title: {
      initial: { 
        x: -100,
        opacity: 0,
        rotateX: 45
      },
      whileInView: {
        x: 0,
        opacity: 1,
        rotateX: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 1
        }
      }
    },
    description: {
      initial: { 
        x: 100,
        opacity: 0 
      },
      whileInView: {
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 50,
          damping: 20,
          delay: 0.2,
          duration: 1
        }
      }
    },
    video: {
      initial: { 
        scale: 0.8,
        opacity: 0,
        y: 50
      },
      whileInView: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 70,
          damping: 20,
          delay: 0.4,
          duration: 1.2
        }
      }
    }
  };

  const callToActionAnimations = {
    container: {
      initial: { 
        backgroundColor: "rgba(34, 119, 107, 0)",
      },
      whileInView: {
        backgroundColor: "rgba(34, 119, 107, 1)",
        transition: {
          duration: 0.8,
          ease: "easeOut"
        }
      },
      otherContainer: {
        backgroundColor: "rgba(15, 49, 106, 1)",
        transition: {
          duration: 0.8,
          ease: "easeOut"
        }
      }
    },
    title: {
      initial: { 
        opacity: 0,
        y: 40,
        scale: 0.95
      },
      whileInView: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 20
        }
      }
    },
    description: {
      initial: { 
        opacity: 0,
        x: -30
      },
      whileInView: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          delay: 0.2,
          ease: "easeOut"
        }
      }
    },
    buttons: {
      initial: { 
        opacity: 0,
        y: 20
      },
      whileInView: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: 0.4,
          ease: "easeOut"
        }
      }
    },
    image: {
      initial: { 
        opacity: 0,
        scale: 0.8,
        rotate: -5
      },
      whileInView: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
          duration: 1,
          type: "spring",
          stiffness: 80,
          damping: 20
        }
      },
      otherContainer: {
        opacity: 1,
        scale: 1,
        rotate: -2,
        transition: {
          type: "spring",
          stiffness: 50,
          damping: 20,
          delay: 0.2,
          duration: 1
        }
      }
    }
  };

  const dualityAnimations = {
    container: {
      ...fadeInStagger,
    },
    title: {
      ...titleAnimation,
      visible: {
        ...titleAnimation.visible,
        transition: {
          ...titleAnimation.visible.transition,
          delay: 0.2
        }
      }
    },
    cards: {
      hidden: { 
        opacity: 0,
        y: 30,
        scale: 0.9
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 0.8
        }
      }
    },
    centerImage: {
      ...objectiveAnimations.video,
      whileHover: {
        scale: 1.05,
        transition: { duration: 0.3 }
      }
    }
  };

  const testimonialAnimations = {
    container: {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          staggerChildren: 0.3,
          delayChildren: 0.2,
          ease: [0.6, -0.05, 0.01, 0.99]
        }
      }
    },
    badge: {
      hidden: { scale: 0.8, opacity: 0, y: -20 },
      visible: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 0.6
        }
      }
    },
    title: {
      hidden: { 
        y: 30,
        opacity: 0,
        rotateX: 15 
      },
      visible: {
        y: 0,
        opacity: 1,
        rotateX: 0,
        transition: {
          type: "spring",
          stiffness: 80,
          damping: 20,
          delay: 0.2,
          duration: 0.8
        }
      }
    },
    carousel: {
      hidden: { 
        scale: 0.95,
        opacity: 0,
        y: 30
      },
      visible: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 70,
          damping: 20,
          delay: 0.4,
          duration: 1
        }
      }
    }
  };

  const finalCallToActionAnimations = {
    container: {
      hidden: { 
        opacity: 0,
        y: 60,
        scale: 0.95
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,
          ease: [0.6, -0.05, 0.01, 0.99],
          staggerChildren: 0.15
        }
      }
    },
    item: {
      hidden: { 
        opacity: 0,
        y: 30,
        scale: 0.9
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.6
        }
      },
      hover: {
        scale: 1.03,
        y: -5,
        transition: { 
          type: "spring",
          stiffness: 400,
          damping: 10
        }
      }
    },
    button: {
      hidden: { 
        opacity: 0,
        y: 20,
        scale: 0.9
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 120,
          damping: 15,
          delay: 0.6
        }
      },
      hover: {
        scale: 1.05,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 10
        }
      }
    }
  };

  return (

      <BrowserRouter>
          <div className="min-h-screen bg-[#FAFAFA]">
            
            {/*<FacebookPixel />*/}
            <Navbar />
            {/* Hero Section with enhanced animations */}
            <div id="hero" className="min-h-[calc(100vh-64px)] flex items-center">
              <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center py-8 md:py-16">
                  <motion.div
                    variants={staggerChildren}
                  initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="space-y-6 md:space-y-8 text-center md:text-left mt-8 md:mt-0"
              >
                <motion.h1 
                  variants={slideInLeft}
                  className="text-[32px] md:text-[48px] lg:text-[64px] font-bold text-[#2C9B8B] leading-tight font-inter"
                >
                  POR UN FUTURO VERDE, TRABAJAMOS JUNTOS
                </motion.h1>
                <motion.p 
                  variants={slideInLeft}
                  className="text-[16px] md:text-[20px] lg:text-[24px] text-[#8C8D91] font-inter font-normal"
                >
                  Mantén tu carga a la temperatura ideal, sin importar el destino.
                </motion.p>
                <motion.div 
                  variants={slideInLeft}
                  className="flex space-x-4"
                >
                  <ButtonGreenRounded text="Contactar" url="https://wa.me/529995119234" />
                  <ButtonTipo1 text="Saber más" url="/about" />
                </motion.div>
              </motion.div>
              <motion.div 
                variants={slideInRight}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                <img src={heroImage} alt="Hero" className="w-full h-auto" />
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Soluciones Section */}
        <motion.div 
          id="solutions" 
          className="py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="max-w-7xl mx-auto px-4 flex flex-col items-center"
            variants={fadeInStagger}
          >
            <motion.div
              variants={solutionsAnimation}
            >
              <BadgeWhiteBgGreen text="Soluciones" />
            </motion.div>
            
            <motion.h2 
              variants={titleAnimation}
              className="mt-8 text-[32px] md:text-[64px] font-extrabold text-[#2C9B8B] text-center font-inter"
            >
              Nuestra familia
            </motion.h2>
            
            <motion.p 
              variants={solutionsAnimation}
              className="mt-6 text-[16px] md:text-[20px] text-[#8C8D91] text-center font-normal font-inter max-w-3xl"
            >
              La familia Thermo Energy está creada para satisfacer todas las necesidades del transporte refrigerado. Desde soluciones autónomas hasta equipos accionados por motor, cada miembro de nuestra familia combina tecnología avanzada, durabilidad y eficiencia, diseñado para garantizar que tu carga siempre llegue en óptimas condiciones.
            </motion.p>

            <motion.div 
              className="mt-16 w-full"
              variants={solutionsAnimation}
            >
              <CarouselGlass items={carouselItems} />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Objetivo Section */}
        <div id="objective" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            {/* Badge */}
            <motion.div
              variants={objectiveAnimations.badge}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
            >
              <BadgeWhiteBgGreen text="Nuestro Objetivo" />
            </motion.div>

            {/* Text Columns */}
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <motion.h2 
                variants={objectiveAnimations.title}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="text-[32px] md:text-[64px] font-extrabold text-[#2C9B8B] leading-tight font-inter text-left"
              >
                Mantener tu cargamento siempre fresco
              </motion.h2>
              <motion.p 
                variants={objectiveAnimations.description}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="text-[16px] md:text-[24px] text-[#65666B] font-normal font-inter text-right self-center"
              >
                Conoce en detalle cómo funcionan nuestros equipos de refrigeración, diseñados para ofrecer desempeño, eficiencia y confiabilidad en cada viaje.
              </motion.p>
            </div>

            {/* Video Section */}
            <motion.div 
              className="mt-12"
              variants={objectiveAnimations.video}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <VideoBlur 
                thumbnailUrl={thumbnailImage}
                videoUrl={selectedVideo}
              />
            </motion.div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="py-20 bg-[#FAFAFA]">
          <motion.div 
            className="py-20"
            variants={callToActionAnimations.container}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left Column */}
                <div className="space-y-8">
                  <motion.h2 
                    variants={callToActionAnimations.title}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="text-[32px] md:text-[64px] font-extrabold text-white leading-tight font-inter"
                  >
                    ¿Listo para llevar tu transporte refrigerado al siguiente nivel?
                  </motion.h2>
                  <motion.p 
                    variants={callToActionAnimations.description}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="text-[16px] md:text-[24px] text-white font-normal font-inter"
                  >
                    Descubre cómo nuestra tecnología puede optimizar el control de temperatura en tu flota. Contáctanos hoy y comienza a garantizar cada entrega con la máxima eficiencia.
                  </motion.p>
                  <motion.div 
                    variants={callToActionAnimations.buttons}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="space-x-4 flex"
                  >
                    <ButtonWhiteRounded text="Contactanos" url="https://wa.me/529995119234" />
                    <ButtonWhiteGhost text="Saber más" url="/about" />
                  </motion.div>
                </div>
                {/* Right Column */}
                <motion.div 
                  variants={callToActionAnimations.image}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="flex justify-center items-center"
                >
                  <img 
                    src={camionImage} 
                    alt="Camión Thermo Energy" 
                    className="w-full h-auto object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Products/Dualidad Section */}
        <motion.div 
          id="products"
          className="py-20"
          variants={dualityAnimations.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2 
              variants={dualityAnimations.title}
              className="text-center text-[32px] md:text-[64px] font-bold font-inter mb-16 text-[#2C9B8B] max-w-5xl mx-auto"
            >
              Una <span className="text-[#006BE5]">dualidad</span> perfecta para{' '}
              <span className="text-[#006BE5]">cualquier ocasión</span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Left Column - Green Cards */}
              <motion.div 
                className="space-y-8"
                variants={fadeInStagger}
              >
                <motion.div variants={solutionsAnimation}>
                  <BadgeWhiteBgGreen text="Autonomía" />
                </motion.div>
                
                <div className="space-y-6">
                  {greenCards.map((card, index) => (
                    <motion.div
                      key={index}
                      variants={dualityAnimations.cards}
                      whileHover={{ scale: 1.02 }}
                    >
                      <CardInformativeWhiteGreen {...card} />
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={solutionsAnimation}>
                  <ButtonTipo1 text="Saber más" url="https://drive.google.com/file/d/1uG98lImOL3Ed-cT20n0bfi0BQtYykqRu/view?usp=sharing" />
                </motion.div>
              </motion.div>

              {/* Center Column - Image */}
              <motion.div 
                variants={dualityAnimations.centerImage}
                className="flex items-center justify-center"
                whileHover="whileHover"
              >
                <img 
                  src={camionImage2} 
                  alt="Dualidad Thermo Energy"
                  className="max-w-full h-auto" 
                />
              </motion.div>

              {/* Right Column - Blue Cards */}
              <motion.div 
                className="space-y-8"
                variants={fadeInStagger}
              >
                <motion.div variants={solutionsAnimation}>
                  <BadgeWhiteBgBlue text="Caballos de fuerza" />
                </motion.div>
                
                <div className="space-y-6">
                  {blueCards.map((card, index) => (
                    <motion.div
                      key={index}
                      variants={dualityAnimations.cards}
                      whileHover={{ scale: 1.02 }}
                    >
                      <CardInformativeWhiteBlue {...card} />
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={solutionsAnimation}>
                  <ButtonBlueRoundedOpaque text="Saber más" url="https://drive.google.com/file/d/1r6VMEszLsTCtqruEsNvEtVYg3g_fbO9Q/view?usp=sharing" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Innovation Section */}
        <div className="py-20 bg-transparent">
          <motion.div 
            className="py-20"
            variants={callToActionAnimations.container}
            initial="initial"
            whileInView="otherContainer"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-2 items-center">
                {/* Left Column - Cards */}
              <motion.div 
                className="space-y-8"
                variants={fadeInStagger}
              >
                
                <div className="space-y-6">
                  {transparentCards.map((card, index) => (
                    <motion.div
                      key={index}
                      variants={dualityAnimations.cards}
                      whileHover={{ scale: 1.02 }}
                    >
                      <CardInformativeWhiteTransparent {...card} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

                {/* Right Column */}
                <motion.div 
                  variants={callToActionAnimations.image}
                  initial="initial"
                  whileInView="otherContainer"
                  viewport={{ once: true }}
                  className="grid grid-cols-3 gap-2 w-full h-full"
                >
                  {imagePositions.slice(0, 3).map((position, index) => (
                    <motion.div
                      key={position}
                      className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#0A2043] p-2 w-full h-3/4 my-auto"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.img 
                          src={imagesVerticals[position].image} 
                          alt={imagesVerticals[position].description}
                          className="w-full h-full object-cover"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>


        {/* Testimonials Section */}
        <motion.div 
          id="testimonials" 
          className="py-20 overflow-hidden"
          variants={testimonialAnimations.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
            <motion.div variants={testimonialAnimations.badge}>
              <BadgeWhiteBgGreen text="Testimonios" />
            </motion.div>
            
            <motion.h2 
              variants={testimonialAnimations.title}
              className="mt-8 text-[32px] md:text-[64px] font-bold text-[#2C9B8B] text-center font-inter"
            >
              Lo que dicen nuestros clientes
            </motion.h2>

            <motion.div 
              variants={testimonialAnimations.carousel}
              className="w-full"
            >
              <CarouselTestimonials items={testimonials} />
            </motion.div>
          </div>
        </motion.div>

        {/* Final Call to Action Section */}
        <motion.div 
          id="contact" 
          className="py-20 overflow-hidden"
          variants={finalCallToActionAnimations.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
            <motion.div 
              variants={finalCallToActionAnimations.item}
              whileHover="hover"
            >
              <BadgeWhiteBgGreen text="Comienza ahora" />
            </motion.div>
            
            <motion.h2 
              variants={finalCallToActionAnimations.item}
              className="mt-8 text-[32px] md:text-[64px] font-bold text-[#2C9B8B] text-center font-inter"
            >
              Empecemos a cambiar la frescura de tu cargamento
            </motion.h2>
            
            <motion.p 
              variants={finalCallToActionAnimations.item}
              className="mt-6 text-[16px] md:text-[24px] text-black font-normal font-inter text-center max-w-3xl"
            >
              Únete a la revolución de la cadena de frío y lleva tu negocio al siguiente nivel
            </motion.p>

            <motion.div 
              variants={finalCallToActionAnimations.button}
              whileHover="hover"
              className="mt-8"
            >
              <ButtonGreenRounded text="Comenzar" url="https://wa.me/529995119234" />
            </motion.div>
          </div>
        </motion.div>

        <Footer />
      </div>
      </BrowserRouter>
  );
}

export default App;
