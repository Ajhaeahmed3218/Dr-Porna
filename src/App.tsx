import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MapPin, Clock, Award, Users, Calendar, ChevronRight, Stethoscope, Heart, Baby } from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Chamber', href: '#chamber' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "glass py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-800 to-teal-700 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-900/20 transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <Stethoscope size={22} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-lg font-bold leading-none text-emerald-900">Dr. Farzana Haque Parna</span>
            <span className="text-[8px] sm:text-[10px] uppercase tracking-widest text-teal-600 font-medium">Gynaecologist & Obstetrician</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-emerald-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:+880123456789" 
            className="bg-emerald-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-800 transition-all flex items-center gap-2 shadow-lg shadow-emerald-900/20"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-emerald-900 p-2 hover:bg-teal-50 rounded-xl transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-600"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:+880123456789" 
              className="bg-emerald-900 text-white px-6 py-4 rounded-xl text-center font-semibold flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-40 pb-32 px-6 overflow-hidden">
      {/* Dynamic Background Elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-100/30 -z-10 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" 
      />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-50/40 -z-10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-teal-50 text-teal-700 text-xs font-black uppercase tracking-[0.2em] mb-8 shadow-sm border border-teal-100"
          >
            <Award size={16} className="animate-pulse" />
            BCS (Health) | FCPS (Gynae & Obs)
          </motion.div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-emerald-900 leading-tight sm:leading-[0.95] mb-8 tracking-tighter">
            Modern Care for <br />
            <span className="text-teal-500 italic relative">
              Every Woman.
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-2 left-0 h-3 bg-teal-100 -z-10" 
              />
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-lg leading-relaxed font-medium">
            Dr. Farzana Haque Parna provides expert gynaecological care with a focus on empathy, precision, and modern medical excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <motion.a 
              href="#chamber" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-900 text-white px-8 md:px-10 py-4 md:py-5 rounded-[2rem] font-bold hover:bg-emerald-800 transition-all shadow-2xl shadow-emerald-900/30 flex items-center justify-center gap-3 text-base md:text-lg"
            >
              Book Appointment
              <ChevronRight size={24} />
            </motion.a>
            <motion.a 
              href="#services" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-emerald-900 border-2 border-emerald-50 px-8 md:px-10 py-4 md:py-5 rounded-[2rem] font-bold hover:bg-teal-50 transition-all text-base md:text-lg shadow-xl shadow-teal-900/5 text-center"
            >
              View Services
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "backOut" }}
          className="relative"
        >
          <div className="relative z-10 w-full aspect-[4/5] max-w-md mx-auto overflow-hidden rounded-[4rem] shadow-2xl shadow-teal-900/20 border-[12px] border-white group">
            <img 
              src="/dr-parna.jpg" 
              alt="Dr. Farzana Haque Parna"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          {/* Floating Badges - Hidden on small mobile */}
          <motion.div 
            animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 bg-white p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl z-20 flex items-center gap-3 sm:gap-4 border border-teal-50 scale-90 sm:scale-100"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-rose-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-rose-500 shadow-inner">
              <Heart size={20} className="sm:w-6 sm:h-6" fill="currentColor" />
            </div>
            <div>
              <p className="text-[8px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest">Specialist</p>
              <p className="text-base sm:text-lg font-bold text-emerald-900">Infertility Care</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 bg-white p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl z-20 flex items-center gap-3 sm:gap-4 border border-teal-50 scale-90 sm:scale-100"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-teal-600 shadow-inner">
              <Stethoscope size={20} className="sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="text-[8px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest">Expertise</p>
              <p className="text-base sm:text-lg font-bold text-emerald-900">Gynae Surgery</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Years Experience', value: '10+', icon: Clock, color: 'bg-emerald-50 text-emerald-600' },
    { label: 'Happy Patients', value: '5000+', icon: Users, color: 'bg-teal-50 text-teal-600' },
    { label: 'BCS Health Cadre', value: 'Verified', icon: Award, color: 'bg-rose-50 text-rose-600' },
    { label: 'Successful Surgeries', value: '1200+', icon: Stethoscope, color: 'bg-slate-50 text-slate-600' },
  ];

  return (
    <section className="px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white/80 backdrop-blur-xl p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border border-white shadow-xl shadow-teal-900/5 group transition-all"
          >
            <div className={cn("w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:rotate-12 transition-transform", stat.color)}>
              <stat.icon size={24} className="sm:w-7 sm:h-7" />
            </div>
            <p className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-1 sm:mb-2 tracking-tighter">{stat.value}</p>
            <p className="text-[10px] sm:text-sm text-slate-500 font-bold uppercase tracking-widest">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Antenatal Care',
      desc: 'Comprehensive pregnancy monitoring and support for a healthy journey to motherhood.',
      icon: Baby,
      color: 'rose'
    },
    {
      title: 'Laparoscopic Surgery',
      desc: 'Minimally invasive surgical procedures for faster recovery and minimal scarring.',
      icon: Stethoscope,
      color: 'emerald'
    },
    {
      title: 'Infertility Treatment',
      desc: 'Advanced diagnostic and therapeutic options for couples seeking to conceive.',
      icon: Heart,
      color: 'teal'
    },
    {
      title: 'High-Risk Pregnancy',
      desc: 'Specialized management for complex pregnancies ensuring safety for both mother and baby.',
      icon: Award,
      color: 'slate'
    }
  ];

  return (
    <section id="services" className="px-6 py-32 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-teal-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block"
          >
            Our Expertise
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-emerald-900 mb-6">Medical Excellence</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg">Providing world-class care with a focus on women's health and wellness at every stage of life.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -15 }}
              className="group p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] border border-teal-50 bg-white hover:shadow-2xl hover:shadow-teal-900/10 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50/50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700" />
              
              <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all group-hover:scale-110 group-hover:rotate-6 shadow-lg",
                service.color === 'rose' ? "bg-rose-100 text-rose-600 shadow-rose-200/50" : 
                service.color === 'emerald' ? "bg-emerald-100 text-emerald-600 shadow-emerald-200/50" :
                service.color === 'teal' ? "bg-teal-100 text-teal-600 shadow-teal-200/50" : "bg-slate-200 text-slate-600 shadow-slate-300/50"
              )}>
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">{service.title}</h3>
              <p className="text-slate-500 text-base leading-relaxed mb-8">{service.desc}</p>
              
              <div className="flex items-center gap-2 text-teal-600 font-bold text-sm group-hover:gap-4 transition-all">
                Learn More <ChevronRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Schedule = () => {
  const [activeTab, setActiveTab] = useState(0);

  const chambers = [
    {
      name: 'Health Aid Diagnostic',
      location: 'Moulvibazar',
      address: 'Sreemangal Road, Moulvibazar',
      hours: '4:00 PM - 8:00 PM',
      days: 'Saturday - Thursday',
      contact: '+880 1700 000000'
    },
    {
      name: 'Government Hospital',
      location: 'Sadar',
      address: '250 Bedded General Hospital, Moulvibazar',
      hours: '9:00 AM - 2:00 PM',
      days: 'Sunday - Thursday',
      contact: 'Official Visit'
    }
  ];

  return (
    <section id="chamber" className="px-6 py-32 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-emerald-900 mb-4">Practice Hours</h2>
          <p className="text-slate-500 text-base sm:text-lg">Find Dr. Farzana at her chambers for consultation and care.</p>
        </div>

        <div className="bg-white rounded-[2.5rem] sm:rounded-[4rem] shadow-2xl shadow-teal-900/10 overflow-hidden border border-teal-50">
          <div className="flex flex-col sm:row p-3 sm:p-4 gap-3 sm:gap-4 bg-slate-50/50">
            {chambers.map((chamber, i) => (
              <button
                key={chamber.name}
                onClick={() => setActiveTab(i)}
                className={cn(
                  "flex-1 py-4 sm:py-6 rounded-[1.5rem] sm:rounded-[2.5rem] text-[10px] sm:text-sm font-black uppercase tracking-widest transition-all",
                  activeTab === i ? "bg-emerald-900 text-white shadow-xl shadow-emerald-900/30" : "text-slate-400 hover:text-emerald-900 hover:bg-white"
                )}
              >
                {chamber.name}
              </button>
            ))}
          </div>
          
          <div className="p-8 sm:p-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-2 gap-10 sm:gap-16"
              >
                <div className="space-y-8 sm:space-y-10">
                  <div className="flex items-start gap-4 sm:gap-6 group">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                      <MapPin size={24} className="sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <p className="text-[8px] sm:text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1 sm:mb-2">Location</p>
                      <p className="text-xl sm:text-2xl font-bold text-emerald-900 leading-tight">{chambers[activeTab].address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 sm:gap-6 group">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600 shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                      <Clock size={24} className="sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <p className="text-[8px] sm:text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1 sm:mb-2">Visiting Hours</p>
                      <p className="text-xl sm:text-2xl font-bold text-emerald-900">{chambers[activeTab].hours}</p>
                      <p className="text-sm sm:text-base text-slate-500 font-medium mt-1">{chambers[activeTab].days}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-teal-50/50 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-10 flex flex-col justify-center items-center text-center border border-teal-100 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-500/5 to-transparent pointer-events-none" />
                  <motion.div 
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="mb-4 sm:mb-6"
                  >
                    <Calendar className="text-teal-600 w-10 h-10 sm:w-14 sm:h-14" />
                  </motion.div>
                  <h4 className="text-xl sm:text-2xl font-bold text-emerald-900 mb-2 sm:mb-3">Book a Slot</h4>
                  <p className="text-sm sm:text-base text-slate-500 mb-6 sm:mb-8 font-medium">Call directly to confirm your appointment time.</p>
                  <motion.a 
                    href={`tel:${chambers[activeTab].contact}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-emerald-900 text-white py-4 sm:py-5 rounded-[1.5rem] sm:rounded-[2rem] font-bold hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-900/20 text-base sm:text-lg"
                  >
                    {chambers[activeTab].contact}
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white border border-white/20 shadow-xl transform -rotate-3">
                <Stethoscope size={28} strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold leading-none">Dr. Farzana Haque Parna</span>
                <span className="text-[10px] uppercase tracking-widest text-teal-400 font-medium">Gynaecologist & Obstetrician</span>
              </div>
            </div>
            <p className="text-emerald-100/70 leading-relaxed max-w-sm">
              Providing expert medical care with compassion and excellence. Specialist in Obstetrics, Infertility, and Gynae Surgery.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-emerald-100/70">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Dr. Parna</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Medical Services</a></li>
              <li><a href="#chamber" className="hover:text-white transition-colors">Chamber Schedule</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Emergency Contact</h4>
            <div className="bg-emerald-800/50 p-6 rounded-2xl border border-emerald-700">
              <p className="text-sm text-emerald-300 mb-2">For urgent appointments:</p>
              <a href="tel:+8801700000000" className="text-2xl font-bold block mb-4 hover:text-teal-300 transition-colors">+880 1700 000000</a>
              <div className="flex items-center gap-2 text-sm text-emerald-300">
                <MapPin size={16} />
                Moulvibazar, Bangladesh
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-emerald-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-emerald-400 text-center md:text-left">
          <p>© {new Date().getFullYear()} Dr. Farzana Haque Parna. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Mobile FAB */}
      <a 
        href="tel:+8801700000000"
        className="fixed bottom-6 right-6 w-16 h-16 bg-emerald-600 text-white rounded-full shadow-2xl flex items-center justify-center md:hidden z-50 animate-bounce"
      >
        <Phone size={28} />
      </a>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-teal-100 selection:text-teal-900 bg-mesh">
      <Navbar />
      <main>
        <Hero />
        
        {/* Stats Section */}
        <div className="relative mt-24 z-20">
          <Stats />
        </div>

        <Services />
        
        {/* About Section with Parallax-like reveal */}
        <section id="about" className="px-6 py-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-mint-100/50 rounded-full blur-3xl -z-10 translate-x-1/2" />
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative mb-12 md:mb-0"
              >
                <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-full h-full border-2 border-teal-200 rounded-[2rem] sm:rounded-[3rem] -z-10" />
                <div className="rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white">
                  <img 
                    src="/dr-parna.jpg" 
                    alt="Dr. Farzana Haque Parna"
                    className="w-full h-auto hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 bg-white p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] shadow-2xl border border-teal-50 scale-90 sm:scale-100"
                >
                  <p className="text-3xl sm:text-5xl font-bold text-teal-600 mb-1">10+</p>
                  <p className="text-[8px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Years Excellence</p>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-teal-600 font-bold uppercase tracking-widest text-xs sm:text-sm mb-4 block">The Specialist</span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-emerald-900 mb-6 sm:mb-8 leading-tight">Dedicated to <br /><span className="text-teal-500 italic">Your Wellbeing.</span></h2>
                <div className="space-y-4 sm:space-y-6 text-slate-600 leading-relaxed text-base sm:text-lg">
                  <p>
                    Dr. Farzana Haque Parna is a highly skilled Consultant Gynaecologist and Obstetrician with over a decade of experience in providing comprehensive women's healthcare. 
                  </p>
                  <p>
                    A member of the prestigious BCS (Health) cadre and a Fellow of the College of Physicians and Surgeons (FCPS) in Gynaecology and Obstetrics, she combines academic excellence with a deep sense of compassion.
                  </p>
                </div>
                <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-[2rem] bg-white shadow-xl shadow-teal-900/5 border border-teal-50"
                  >
                    <Award className="text-teal-500 mb-3" size={28} />
                    <p className="font-bold text-emerald-900 text-lg sm:text-xl">MBBS, BCS</p>
                    <p className="text-xs sm:text-sm text-slate-500">Medical Excellence</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-[2rem] bg-white shadow-xl shadow-teal-900/5 border border-teal-50"
                  >
                    <Stethoscope className="text-teal-500 mb-3" size={28} />
                    <p className="font-bold text-emerald-900 text-lg sm:text-xl">FCPS (Gynae)</p>
                    <p className="text-xs sm:text-sm text-slate-500">Specialized Care</p>
                  </motion.div>
                </div>
              </motion.div>
          </div>
        </section>

        <Schedule />
        
        {/* Testimonials with Animated Cards */}
        <section className="px-6 py-32 bg-teal-900 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full" />
            <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-white rounded-full" />
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12 sm:mb-20">
              <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6 italic">Voices of Trust</h2>
              <p className="text-teal-100/60 max-w-xl mx-auto text-base sm:text-lg">Real stories from women who found care and comfort with Dr. Farzana.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {[1, 2, 3].map((i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -15, rotate: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white/10 backdrop-blur-xl p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] border border-white/10"
                >
                  <div className="flex gap-1 text-teal-400 mb-6 sm:mb-8">
                    {[1, 2, 3, 4, 5].map((s) => <Heart key={s} size={18} className="sm:w-5 sm:h-5" fill="currentColor" />)}
                  </div>
                  <p className="text-teal-50 text-lg sm:text-xl italic leading-relaxed mb-8 sm:mb-10">"Dr. Farzana is incredibly patient and knowledgeable. She guided me through my entire pregnancy with so much care."</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-500/20 rounded-full border border-teal-500/30" />
                    <div>
                      <p className="font-bold text-white text-sm sm:text-base">Happy Patient {i}</p>
                      <p className="text-[10px] text-teal-400 font-bold uppercase tracking-widest">Moulvibazar</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section with Bento Layout */}
        <section className="px-6 py-20 sm:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="lg:col-span-2 bg-emerald-900 rounded-[2.5rem] sm:rounded-[4rem] p-8 sm:p-16 text-white relative overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 sm:mb-12 relative z-10 leading-tight">Let's Prioritize <br /><span className="text-teal-400">Your Health.</span></h2>
                <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 relative z-10">
                  <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4 sm:gap-6 group">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-teal-500 transition-colors">
                      <Phone size={24} className="sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <p className="text-teal-300 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-1">Direct Line</p>
                      <p className="text-xl sm:text-2xl font-bold">+880 1700 000000</p>
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4 sm:gap-6 group">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-teal-500 transition-colors">
                      <MapPin size={24} className="sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <p className="text-teal-300 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-1">Location</p>
                      <p className="text-lg sm:text-xl font-bold">Health Aid, Moulvibazar</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden border-4 sm:border-8 border-white shadow-2xl h-[300px] sm:h-full min-h-[300px] sm:min-h-[400px]"
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.567890123456!2d91.76543210987654!3d24.48765432109876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDI5JzE1LjYiTiA5McKwNDUnNTUuNiJF!5e0!3m2!1sen!2sbd!4v1234567890123" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
