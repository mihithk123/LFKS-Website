import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';


const timelineEvents = [
  {
    year: '2016',
    title: 'Christmas - The Beginning',
    description: 'LFKS was officially founded with Miss Lawanya as President, Miss Manjitha as Secretary, and Master Mihith as Treasurer. We celebrated with Christmas games and gifts.',
    image: 'IMG-20221221-WA0062.jpg'
  },
  {
    year: '2017',
    title: 'New Year',
    description: 'Our first New Year festival featured traditional Awurudu games with gifts for winners. The venue was beautifully decorated and everyone left with happy memories.',
    image: '2017.jpg'
  },
  {
    year: '2017',
    title: 'Vesak',
    description: 'We welcomed Batagalle Gunananda Thero with a procession, held a Dhamma sermon, and lit up the streets with lamp fences. The evening ended with fireworks and a tea party.',
    image: 'IMG-20240524-WA0016.jpg'
  },
  {
    year: '2017',
    title: 'Sarigama',
    description: 'Our first talent concert showcased members\' skills through dances, songs, and dramas. The audience warmly appreciated the performances and the evening concluded with a tea party.',
    image: 'P1020782.JPG'
  },
  {
    year: '2018',
    title: 'New Year - Sahas Ras',
    description: 'Named "Sahas Ras," this festival brought refreshing change to our members with well-planned games, gifts, and community awareness through posters.',
    image: 'IMG-20220413-WA0035.jpg'
  },
  {
    year: '2018',
    title: 'Vesak',
    description: 'We crafted 7 lotus lanterns and decorated streets with pink and white Atapattam lanterns. The lamp fence created a breathtaking sight on Vesak night.',
    image: 'IMG-20240524-WA0031.jpg'
  },
  {
    year: '2018',
    title: 'Trip',
    description: 'A fun-filled day trip to New Saniro Park in Veyangoda. We left Kandy at 5 AM and enjoyed the amusement park attractions before returning at 10 PM.',
    image: ''
  },
  {
    year: '2018',
    title: 'Year End Party',
    description: 'We rang in the new year together on December 31st with party games, laughter, and unforgettable moments shared among friends.',
    image: 'mntgbvf.jpeg'
  },
  {
    year: '2019',
    title: 'Vesak',
    description: 'The community created 20 lotus lanterns and 40 Wesak lanterns. An oil lamp circle was arranged in the morning and lit at night for the celebration.',
    image: 'vesak1.jpg'
  },
  {
    year: '2019',
    title: 'Trip',
    description: 'A memorable two-day journey to Hambantota. We visited Katharagama temple and explored various tourist attractions in the area.',
    image: 'IMG_0340.JPG'
  },
  {
    year: '2020',
    title: 'Book Writing Competition',
    description: 'During the COVID-19 pandemic, we stayed connected through a book writing competition. The best entries were selected and published.',
    image: 'R.jpg'
  },
  {
    year: '2021',
    title: 'New Year - Punchi Ape Bakmaha Ulela',
    description: 'An energetic festival led by new president Poorna Wanasinghe. The event featured challenging games and concluded with a vote of thanks from Secretary Binara Wijesinghe.',
    image: 'IMG-20221221-WA0045.jpg'
  },
  {
    year: '2021',
    title: 'Vesak',
    description: 'Despite pandemic limitations, we organized an online Dhamma talk, held a Wesak Arts and Crafts competition, and introduced a community voting for best-decorated houses.',
    
  },
  {
    year: '2021',
    title: 'Christmas Party',
    description: 'A festive celebration with delicious food, games, dancing, singing, and a movie to end the day on a warm note.',
    image: '2021.jpg'
  },
  {
    year: '2022',
    title: 'New Year',
    description: 'A special collaboration with the elder\'s society featuring games for all ages, creating wonderful intergenerational bonding and teamwork.',
    image: 'IMG-20220413-WA0042.jpg'
  },
  {
    year: '2022',
    title: 'Vesak',
    description: 'Themed "Good Company," we welcomed Batagolle Wijithananda Thero with a procession, held a Dhamma sermon, and enjoyed a tea party together.',
    image: 'IMG-20240517-WA0012.jpg'
  },
  {
    year: '2022',
    title: 'Poson',
    description: 'Our first Poson celebration with 30 children performing 16 Bakthi Geetha songs. Parents and villagers gathered for this special occasion.',
    image: 'IMG-20220613-WA0034.jpg'
  },
  {
    year: '2022',
    title: 'Dansala',
    description: 'Our very first Dansala where we distributed freshly picked star fruit from our village. A joyful moment of sharing with the community.',
    image: 'gu.jpg'
  },
  {
    year: '2022',
    title: 'Little Hearts',
    description: 'Instead of a party, we helped needy families by gathering and gifting essential items. A Christmas filled with the joy of giving.',
    image: 'IMG-20221227-WA0028.jpg'
  },
  {
    year: '2023',
    title: 'New Year',
    description: 'Featured beautiful decorations, a natural oil lamp, Kolam art honoring Tamil culture, traditional Awurudu food, and successful games.',
    image: 'IMG-20230422-WA0013.jpg'
  },
  {
    year: '2023',
    title: 'Vesak',
    description: 'We created many Vesak lanterns and built a fence of oil lamps, creating a beautiful and peaceful atmosphere on Vesak night.',
   
  },
  {
    year: '2024',
    title: 'Vesak',
    description: 'Led by President Tinura Wanasinghe and Secretary Dilsanda Samarasinghe, featuring our traditional Dhamma sermon and a special "LFKS" display in oil lamps.',
    image: '2024.jpg'
  },
  {
    year: '2024',
    title: 'Christmas and Year End Party',
    description: 'A joyful reunion with festive decorations, a Christmas tree, party activities, and a movie. A chance to reconnect with friends after a long time.',
    image: ''
  },
  {
    year: '2025',
    title: 'New Year',
    description: 'A vibrant celebration featuring a traditional Gami Gedara, natural oil lamp, two lively dances, and everyone dressed in sarongs and lungis.',
    image: 'IMG_20230413_123252.jpg'
  },
  {
    year: '2025',
    title: 'Yogurt Dansala - Vesak Project 1',
    description: 'Distributed over 2,000 cups of yogurt to pilgrims waiting in long queues at the Temple of the Tooth Relic, offering comfort and refreshment.',
    image: '2025.jpg'
  },
  {
    year: '2025',
    title: 'Kandy Cleaning - Vesak Project 2',
    description: 'A successful cleaning program on April 28th with many volunteers, helping restore Kandy town\'s beauty after the Tooth Relic exposition.',
    image: '7.jpeg'
  },
   {
    year: '2025',
    title: '2025 Landslide Relief Project',
    description: 'Providing emergency products and safety supplies to families displaced by landslides in the Walapane Distric.',
    image: 'w7.JPG'
  },
];

const Timeline = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: targetRef,
    offset: ["start end", "end start"] 
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

  return (
    <section ref={targetRef} className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          style={{ opacity, y }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Our Journey</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">From our humble beginnings to our vibrant present, trace the path of growth and joy that defines the Little Friends Kids Society.</p>
          </div>
          
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-300 rounded"></div>
            
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center justify-between mb-20 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-5/12 ${isEven ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className={`mb-2 flex items-center ${isEven ? 'justify-end' : 'justify-start'}`}>
                      <span className="text-sm font-bold text-white bg-primary-600 px-4 py-1 rounded-full shadow-md">
                        {event.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{event.title}</h3>
                    <p className="text-gray-700 mb-6">{event.description}</p>
                    
                    {/* Image with hover effect */}
                    <div className={`overflow-hidden rounded-lg shadow-lg ${isEven ? 'ml-auto' : 'mr-auto'}`} style={{ maxWidth: '350px' }}>
                      <img 
                        src={event.image} 
                        alt={`${event.year} - ${event.title}`} 
                        className="w-full transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </div>
                  
                  <div className="z-10">
                    <div className="w-16 h-16 rounded-full border-4 border-primary-200 bg-primary-500 flex items-center justify-center shadow-lg">
                      <div className="w-4 h-4 rounded-full bg-white"></div>
                    </div>
                  </div>
                  
                  <div className="w-5/12"></div> {/* Empty space on the other side */}
                </motion.div>
              );
            })}
          </div>
          
          {/* Future direction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mt-16 max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Continuing Our Story</h3>
            <p className="text-lg text-gray-700">
              As we look to the future, the Little Friends Kids Society remains committed to creating meaningful experiences, fostering friendships, and nurturing the potential of every child. Join us as we write the next chapters of our journey together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg inline-flex items-center gap-2"
            >
              View Event Calendar
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;