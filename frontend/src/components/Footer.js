import React from 'react';
import { Link } from 'react-router-dom';
import { 
  IconBrandFacebook, 
  IconBrandInstagram, 
  IconBrandWhatsapp,
  IconMail,
  IconPhone,
  IconMapPin
} from '@tabler/icons-react';
import LogoThermo from '../images/LogoThermo.webp';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <img 
              src={LogoThermo} 
              alt="Thermo Energy" 
              className="h-8"
            />
            <p className="text-[#65666B] text-sm">
              Innovación en refrigeración para transporte, 
              manteniendo la cadena de frío en movimiento.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#2C9B8B] font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#objective" className="text-[#65666B] hover:text-[#2C9B8B]">Nosotros</a></li>
              <li><a href="#products" className="text-[#65666B] hover:text-[#2C9B8B]">Productos</a></li>
              <li><a href="#contact" className="text-[#65666B] hover:text-[#2C9B8B]">Contacto</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#2C9B8B] font-bold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-[#65666B]">
                <IconPhone size={20} />
                <span>+52 999 511 9234</span>
              </li>
              <li className="flex items-center gap-2 text-[#65666B]">
                <IconMail size={20} />
                <span>thermoenergy.oficial@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-[#65666B]">
                <IconMapPin size={20} />
                <span>Ciudad de México, México</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-[#2C9B8B] font-bold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/16JBDJHuH6/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-[#2C9B8B] flex items-center justify-center
                          hover:bg-[#006BE5] transition-colors">
                <IconBrandFacebook size={20} className="text-white" />
              </a>
              <a href="https://www.instagram.com/thermo.energy_?igsh=MWVsbG5qcWt1aXA1Zw==" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-[#2C9B8B] flex items-center justify-center
                          hover:bg-[#006BE5] transition-colors">
                <IconBrandInstagram size={20} className="text-white" />
              </a>
              <a href="https://wa.me/529995119234" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-[#2C9B8B] flex items-center justify-center
                          hover:bg-[#006BE5] transition-colors">
                <IconBrandWhatsapp size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-[#65666B] text-sm">
            © {new Date().getFullYear()} Thermo Energy. Todos los derechos reservados.
          </p>
          <p className="text-center text-xs mt-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600">
              Powered by <a href="https://mindnt.github.io/MindNT/" target="_blank" rel="noopener noreferrer" className="ml-1 font-medium hover:text-blue-800">MindNT</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
