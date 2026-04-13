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
            <span className="font-serif text-lg font-bold leading-none text-emerald-900">Dr. Farzana Haque Parna</span>
            <span className="text-[10px] uppercase tracking-widest text-teal-600 font-medium">Gynaecologist & Obstetrician</span>
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
          className="md:hidden text-emerald-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
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
    <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-rose-50/50 -z-10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/4" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
            <Award size={14} />
            BCS (Health) | FCPS (Gynae & Obs)
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-emerald-900 leading-[1.1] mb-6">
            Compassionate Care for <br />
            <span className="text-teal-600 italic">Every Woman.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            Dr. Farzana Haque Parna is a dedicated Consultant Gynaecologist & Obstetrician providing expert care in maternal health, infertility, and advanced gynae surgery.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#chamber" className="bg-emerald-900 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-900/20 flex items-center gap-2">
              Book Appointment
              <ChevronRight size={20} />
            </a>
            <a href="#services" className="bg-white text-emerald-900 border border-emerald-100 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-all">
              View Services
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 w-full aspect-square max-w-md mx-auto overflow-hidden organic-shape shadow-2xl shadow-emerald-900/10 border-8 border-white">
            <img 
              src="/dr-parna.jpg" 
              alt="Dr. Farzana Haque Parna"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-rose-50 rounded-full flex items-center justify-center text-rose-500">
              <Heart size={20} fill="currentColor" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase">Specialty</p>
              <p className="text-sm font-bold text-emerald-900">Infertility Care</p>
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
    <section className="px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-4", stat.color)}>
              <stat.icon size={24} />
            </div>
            <p className="text-3xl font-bold text-emerald-900 mb-1">{stat.value}</p>
            <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
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
    <section id="services" className="px-6 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">Expertise & Services</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Providing world-class medical care with a focus on women's health and wellness at every stage of life.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-300"
            >
              <div className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
                service.color === 'rose' ? "bg-rose-100 text-rose-600" : 
                service.color === 'emerald' ? "bg-emerald-100 text-emerald-600" :
                service.color === 'teal' ? "bg-teal-100 text-teal-600" : "bg-slate-200 text-slate-600"
              )}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
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
    <section id="chamber" className="px-6 py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-900 mb-4">Practice Hours</h2>
          <p className="text-slate-500">Find Dr. Farzana at her chambers for consultation and care.</p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl shadow-emerald-900/5 overflow-hidden border border-emerald-50">
          <div className="flex border-b border-slate-100">
            {chambers.map((chamber, i) => (
              <button
                key={chamber.name}
                onClick={() => setActiveTab(i)}
                className={cn(
                  "flex-1 py-6 text-sm font-bold transition-all",
                  activeTab === i ? "bg-emerald-900 text-white" : "text-slate-400 hover:text-emerald-900 hover:bg-emerald-50"
                )}
              >
                {chamber.name}
              </button>
            ))}
          </div>
          
          <div className="p-10">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase mb-1">Location</p>
                    <p className="text-lg font-bold text-emerald-900">{chambers[activeTab].address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase mb-1">Visiting Hours</p>
                    <p className="text-lg font-bold text-emerald-900">{chambers[activeTab].hours}</p>
                    <p className="text-sm text-slate-500">{chambers[activeTab].days}</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 flex flex-col justify-center items-center text-center border border-slate-100">
                <Calendar className="text-emerald-900 mb-4" size={40} />
                <h4 className="text-xl font-bold text-emerald-900 mb-2">Book a Slot</h4>
                <p className="text-sm text-slate-500 mb-6">Call directly to confirm your appointment time.</p>
                <a 
                  href={`tel:${chambers[activeTab].contact}`}
                  className="w-full bg-emerald-900 text-white py-3 rounded-xl font-bold hover:bg-emerald-800 transition-all"
                >
                  {chambers[activeTab].contact}
                </a>
              </div>
            </motion.div>
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

        <div className="pt-10 border-t border-emerald-800 flex flex-col md:row items-center justify-between gap-4 text-sm text-emerald-400">
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
    <div className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Schedule />
        
        {/* About Section */}
        <section id="about" className="px-6 py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-50 rounded-full -z-10 blur-2xl" />
              <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="/dr-parna.jpg" 
                  alt="Dr. Farzana Haque Parna"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-emerald-900 text-white p-8 rounded-3xl shadow-2xl max-w-[200px]">
                <p className="text-4xl font-bold mb-1">10+</p>
                <p className="text-xs font-medium uppercase tracking-widest opacity-70">Years of Clinical Excellence</p>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-8">About Dr. Farzana</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Dr. Farzana Haque Parna is a highly skilled Consultant Gynaecologist and Obstetrician with over a decade of experience in providing comprehensive women's healthcare. 
                </p>
                <p>
                  A member of the prestigious BCS (Health) cadre and a Fellow of the College of Physicians and Surgeons (FCPS) in Gynaecology and Obstetrics, she combines academic excellence with a deep sense of compassion for her patients.
                </p>
                <p>
                  Her expertise spans across normal and high-risk pregnancy management, infertility diagnostics, and advanced laparoscopic surgeries. She is currently serving at the 250 Bedded General Hospital, Moulvibazar, and maintains a private practice at Health Aid Diagnostic.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="font-bold text-emerald-900">MBBS, BCS</p>
                  <p className="text-xs text-slate-500">Medical Degree & Civil Service</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="font-bold text-emerald-900">FCPS (Gynae & Obs)</p>
                  <p className="text-xs text-slate-500">Specialization Fellowship</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Placeholder */}
        <section className="px-6 py-24 bg-rose-50/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-emerald-900 mb-4">Patient Testimonials</h2>
              <p className="text-slate-500">Hear from the women who have trusted Dr. Farzana with their health.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-rose-100/50">
                  <div className="flex gap-1 text-teal-500 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => <Heart key={s} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-600 italic mb-6">"Dr. Farzana is incredibly patient and knowledgeable. She guided me through my entire pregnancy with so much care. I couldn't have asked for a better doctor."</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-full" />
                    <div>
                      <p className="font-bold text-emerald-900 text-sm">Happy Patient {i}</p>
                      <p className="text-xs text-slate-400 font-medium uppercase">Moulvibazar</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / Map Section */}
        <section className="px-6 py-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-emerald-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h2 className="text-4xl font-bold mb-8 relative z-10">Get in Touch</h2>
                <div className="space-y-8 relative z-10">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-emerald-300 text-xs font-bold uppercase tracking-widest mb-1">Call for Appointment</p>
                      <p className="text-2xl font-bold">+880 1700 000000</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-emerald-300 text-xs font-bold uppercase tracking-widest mb-1">Main Chamber</p>
                      <p className="text-xl font-bold">Health Aid Diagnostic, Moulvibazar</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12 pt-12 border-t border-white/10 relative z-10">
                  <p className="text-emerald-200 text-sm italic">"Your health is my priority. Feel free to reach out for any gynaecological concerns or pregnancy care."</p>
                </div>
              </div>
              
              <div className="rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl h-[500px]">
                {/* Google Maps Embed Placeholder */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.567890123456!2d91.76543210987654!3d24.48765432109876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDI5JzE1LjYiTiA5McKwNDUnNTUuNiJF!5e0!3m2!1sen!2sbd!4v1234567890123" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
