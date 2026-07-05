"use client";

import { useState, useEffect } from "react";
import { contact } from "@/data/contact";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Galería", href: "#galeria", icon: "fa-camera" },
    { label: "5 Vistas", href: "#vistas", icon: "fa-eye" },
    { label: "Datos clave", href: "#potencial", icon: "fa-compass" },
    { label: "Geotécnico", href: "#geotecnico", icon: "fa-layer-group" },
    { label: "Calculadora", href: "#calculadora", icon: "fa-calculator" },
    { label: "FAQ", href: "#faq", icon: "fa-circle-question" },
    { label: "Descargas", href: "#descargas", icon: "fa-folder" },
    { label: "Contacto", href: "#contacto", icon: "fa-envelope" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? "bg-dark-950/80 backdrop-blur-md shadow-lg border-b border-slate-800 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-brand-600 to-emerald-400 flex items-center justify-center shadow-lg group-hover:shadow-brand-500/50 transition-all duration-300">
              <i className="fa-solid fa-mountain-sun text-white"></i>
            </div>
            <div>
              <div className="text-lg font-black text-white tracking-tight uppercase leading-none">
                Font del Salt 11
              </div>
              <div className="text-xs text-brand-400 font-medium tracking-widest uppercase">
                Náquera Premium
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {menuItems.map((item, idx) => (
              <a 
                key={idx} 
                href={item.href}
                className="px-3 py-2 text-sm font-semibold text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Button Desktop */}
          <div className="hidden xl:block">
             <a 
                href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-sm font-bold text-white bg-brand-600 hover:bg-brand-500 rounded-xl transition-colors shadow-lg shadow-brand-500/30"
              >
                Hablar por WhatsApp
              </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg bg-slate-800 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`block w-5 h-0.5 bg-white transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-dark-950 border-b border-slate-800 shadow-2xl p-4 flex flex-col gap-2">
          {menuItems.map((item, idx) => (
            <a 
              key={idx} 
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-base font-medium text-slate-300 hover:text-white rounded-xl hover:bg-slate-800"
            >
              <i className={`fa-solid ${item.icon} w-5 text-brand-500`}></i>
              {item.label}
            </a>
          ))}
          <div className="pt-4 mt-2 border-t border-slate-800">
            <a 
                href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-5 py-4 text-base font-bold text-white bg-brand-600 rounded-xl"
              >
                <i className="fa-brands fa-whatsapp mr-2"></i> WhatsApp Directo
              </a>
          </div>
        </div>
      )}
    </header>
  );
}
