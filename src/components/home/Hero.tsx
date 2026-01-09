import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

// WebGL Background Component
const WebGLBackground = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400 rounded-full"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  const navigateToMission = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, "", "/vision");
    window.dispatchEvent(new Event('popstate'));
  };
  
  const navigateToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, "", "/projects");
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <div 
      ref={ref}
      className="relative h-screen flex items-center overflow-hidden bg-white"
    >
      <WebGLBackground />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white z-10" />
      
      {/* Animated Floating Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-primary-300/20 to-accent-300/20 rounded-full blur-3xl z-10"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-secondary-300/20 to-primary-300/20 rounded-full blur-3xl z-10"
      />

      {/* Decorative Elements */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-20 w-20 h-20 border-4 border-primary-200/30 rounded-full z-10"
      />
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 left-20 w-16 h-16 border-4 border-accent-200/30 rounded-lg z-10"
      />
      
      <motion.div 
        style={{ y, opacity, scale }}
        className="container mx-auto px-4 md:px-6 relative z-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.6,
              ease: [0.34, 1.56, 0.64, 1],
              delay: 0.2
            }}
            className="mb-8 flex justify-center"
          >
            <motion.div 
              whileHover={{ scale: 1.08, rotate: [0, -2, 2, 0] }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-50 via-accent-50 to-secondary-50 px-6 py-2.5 rounded-full text-primary-700 font-semibold text-sm shadow-lg shadow-primary-200/50 border-2 border-primary-100/50 backdrop-blur-sm"
            >
              <Sparkles size={16} className="text-primary-500" />
              Empowering the next generation
            </motion.div>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.4
            }}
            className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              Little Friends
            </motion.span>
            <motion.span 
              className="block text-gray-900 mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Kids Society
            </motion.span>
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.7
            }}
            className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto font-light"
          >
            Building a <span className="font-semibold text-primary-600">compassionate community</span> where charity inspires friendship, and members learn to work together as a team to create a <span className="font-semibold text-accent-600">positive impact</span>.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.9
            }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(99, 102, 241, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={navigateToMission}
              className="group relative bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 text-white font-semibold py-4 px-10 rounded-2xl shadow-2xl shadow-primary-500/40 flex items-center justify-center gap-3 transition-all duration-300 overflow-hidden border border-primary-400/20"
            >
              <span className="relative z-10 text-lg">Explore our mission</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight size={20} />
              </motion.span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={navigateToProjects}
              className="group relative bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 font-semibold py-4 px-10 rounded-2xl shadow-xl flex items-center justify-center gap-3 transition-all duration-300 border-2 border-gray-200 hover:border-primary-300 overflow-hidden"
            >
              <span className="relative z-10 text-lg">Learn more</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary-50 to-accent-50"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>

          {/* Stats or Features */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 1.1
            }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { value: "35+", label: "Members" },
              { value: "11+", label: "Projects" },
              { value: "100%", label: "Impact" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600 mt-1 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col items-center"
        >
          <motion.p 
            className="text-sm text-gray-500 mb-3 font-medium tracking-wider uppercase"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to explore
          </motion.p>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-7 h-12 border-2 border-gray-400 rounded-full flex justify-center p-2 bg-white/50 backdrop-blur-sm"
          >
            <motion.div 
              className="w-2 h-2 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full shadow-lg" 
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};


export default Hero;
