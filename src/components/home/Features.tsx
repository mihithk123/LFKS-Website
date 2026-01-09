import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, BookOpen, Users, Award, Lightbulb, Globe, ArrowRight, Check, Sparkles, HandHeart, Target } from 'lucide-react';

const BenefitsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-purple-100 via-pink-50 to-red-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative mx-auto px-4 md:px-8 z-10">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6"
            >
              <Sparkles size={18} />
              <span>Empowering the next generation</span>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-purple-800 bg-clip-text text-transparent">
                  Little Friends
                </span>
                <br />
                <span className="text-gray-900">Kids Society</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Building a <span className="text-purple-600 font-semibold">compassionate community</span> where charity inspires friendship, and members learn to work together as a team to create a <span className="text-pink-600 font-semibold">positive impact</span>.
              </p>
              
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/2025.jpg"
                  alt="Kids Society Activities"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 -z-10 blur-2xl opacity-60"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-gradient-to-br from-pink-400 to-red-400 -z-10 blur-2xl opacity-60"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: '35+', label: 'Members' },
              { number: '11+', label: 'Projects' },
              { number: '100%', label: 'Impact' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50" ref={ref}>
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Why Join Our Community?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the benefits of being part of a compassionate community dedicated to making a difference
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Heart,
                title: 'Learn Compassion',
                description: 'Develop empathy and kindness through hands-on charity work and community service projects.',
                color: 'from-pink-500 to-red-500'
              },
         
              {
                icon: Users,
                title: 'Build Friendships',
                description: 'Connect with like-minded peers who share your passion for making a positive impact in the world.',
                color: 'from-purple-600 to-purple-800'
              },
              {
                icon: HandHeart,
                title: 'Community Service',
                description: 'Get involved in meaningful projects that directly help those in need in our local community.',
                color: 'from-pink-600 to-red-600'
              },
           
              {
                icon: Target,
                title: 'Leadership Skills',
                description: 'Develop confidence and leadership abilities by taking initiative in team projects and events.',
                color: 'from-red-500 to-pink-500'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6`}>
                  <benefit.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Journey Together</h2>
            <p className="text-xl text-gray-600">Moments of joy, learning, and making a difference</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Community Outreach', desc: 'Helping local families', img: 'w1.JPG' },
              { title: 'Learning Workshop', desc: 'Creative arts session', img: '22.jpeg' },
              { title: 'Charity Drive', desc: 'Food donation event', img: 'w3.JPG' },
              { title: 'Team Building', desc: 'Fun activities together', img: 'vp2.jpg' },
              { title: 'Environmental Care', desc: 'Beach cleanup day', img: 'w5.JPG' },
              { title: 'Cultural Celebration', desc: 'Festival of giving', img: 'w9.JPG' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-video rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <img
                  src={`/${item.img}`}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-purple-200 text-sm">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">What Makes Us Special?</h2>
              <div className="space-y-4">
                {[
                  'Child-centered approach to charity work',
                  'Safe and supportive environment',
                  'Experienced mentors and guidance',
                  'Regular community impact projects',
                  'Fun and educational activities',
                  'Building lifelong values and friendships'
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-pink-300 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check size={16} className="text-purple-700" />
                    </div>
                    <span className="text-lg text-purple-100">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/w8.JPG"
                  alt="Happy Kids"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Get In Touch</h2>
              <p className="text-xl text-gray-600">
                Want to learn more or get your child involved? We'd love to hear from you!
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold mb-6 text-lg">
                  <Globe size={24} />
                  <span>lfks.society@gmail.com</span>
                </div>
                <p className="text-gray-600">
                  Our team typically responds within 24-48 hours
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-purple-50 rounded-2xl">
                  <Users className="mx-auto mb-3 text-purple-600" size={32} />
                  <h4 className="font-bold text-gray-900 mb-2">Join Us</h4>
                  <p className="text-sm text-gray-600">Become a member</p>
                </div>
                <div className="text-center p-6 bg-pink-50 rounded-2xl">
                  <Heart className="mx-auto mb-3 text-pink-600" size={32} />
                  <h4 className="font-bold text-gray-900 mb-2">Volunteer</h4>
                  <p className="text-sm text-gray-600">Help our cause</p>
                </div>
                <div className="text-center p-6 bg-red-50 rounded-2xl">
                  <Award className="mx-auto mb-3 text-red-600" size={32} />
                  <h4 className="font-bold text-gray-900 mb-2">Partner</h4>
                  <p className="text-sm text-gray-600">Collaborate with us</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default BenefitsPage;
