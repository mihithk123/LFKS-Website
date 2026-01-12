import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const leaders = [
  {
    name: 'Tinura Wanasinghe ',
    role: 'Current President',
    department: '',
    image: '/z4.jpeg',
    bio: 'Chandananda School Kandy',
  },

  {
    name: 'Dilsada Samarasinghe ',
    role: 'Current secretrary',
    department: '',
    image: '/dil.jpeg',
    bio: 'Kingswood College Kandy',
  },


  {
    name: 'Lawanya Wanasinghe',
    role: 'Chairman and Founder',
    department: '',
    image: '/lawa1.jpg',
    bio: 'Good Shepherd Convent Kandy',
  },

  {
    name: 'Manjitha Rajakaruna',
    role: 'Secretary and Co - founder',
    department: '',
    image: '/man.jpg',
    bio: 'Girls\' High School Kandy',
  },

  {
    name: 'Mihith Kodagda',
    role: 'Creator',
    department: '',
    image: '/mihith.jpg',
    bio: 'St.Sylverster College Kandy',
  },

  {
    name: 'Methmika Dissanayake ',
    role: 'Co-creator',
    department: '',
    image: 'meth.jpg',
    bio: 'Dharmaraja College Kandy '
  },
  {
    name: 'Ravindu Dissanayake ',
    role: 'Current Trasurer ',
    department: '',
    image: 'a1.jpeg',
    bio: 'Vidyartha College Kandy'
  },
  {
    name: 'Thinugi Wijesinghe',
    role: 'Member',
    department: '',
    image: 'a2.jpeg',
    bio: 'Hillwood College Kandy'
  },
  {
    name: 'Chamodya Dissanayake',
    role: 'Chief Administrator',
    department: '',
    image: 'z2.jpeg',
    bio: 'Poramadulla Central College '
  },

  {
    name: 'Poorna Wanasinghe',
    role: 'Former Secretary ',
    department: '',
    image: 'a7.jpeg',
    bio: 'Dharmaraja College Kandy'
  },

  {
    name: 'Navitha',
    role: 'Assistant Treasurer ',
    department: '',
    image: 'a6.jpeg',
    bio: 'St. Sylvesters College Kandy'
  },
  {
    name: 'Sulochana',
    role: 'Member ',
    department: '',
    image: 'a3.jpeg',
    bio: 'Viharamahadevi Girls College Kandy'
  },

  {
    name: 'Binara Wejesinha',
    role: 'Former President ',
    department: '',
    image: 'binara.jpg',
    bio: 'St. Anthony\'s College Kandy',
  },
  {
    name: 'Isuri Nanayakkara',
    role: 'Chief Organizer',
    department: '',
    image: 'isuri.jpg',
    bio: 'Mahamaya Girls College Kandy'
  },
  {
    name: 'Chathuni Dissanayake',
    role: 'Chief Coordinator',
    department: '',
    image: 'chathuni.jpg',
    bio: 'Girls\' High School Kandy',
  },
  {
    name: 'Anuhas Alagalla',
    role: 'Member',
    department: '',
    image: 'z6.jpeg',
    bio: 'Gurudeniya Maha Vidyalaya Gurudeniya',
  },
  {
    name: 'Sanuli Alagalla',
    role: 'Member',
    department: '',
    image: 'z7.jpeg',
    bio: 'Gurudeniya Maha Vidyalaya Gurudeniya',
  },
  {
    name: 'Dulneth Wanasinghe',
    role: 'Member',
    department: '',
    image: 'z3.jpeg',
    bio: 'Sri Chandananda Buddhist College',
  },
  {
    name: 'Mindula Dahanayaka',
    role: 'Member',
    department: '',
    image: 'z1.jpeg',
    bio: 'Dharmaraja College Kandy',
  },
   {
    name: 'Vinudi Alagalla',
    role: 'Member',
    department: '',
    image: 'z5.jpeg',
    bio: 'Mahamaya Girls College Kandy',
  },
   {
    name: 'Keshan Gaveesha ',
    role: 'Member',
    department: '',
    image: 'z8.jpeg',
    bio: 'Darmaraja college knady',
  },
   {
    name: 'Matheesha Pamodh',
    role: 'Member',
    department: '',
    image: 'z9.jpeg',
    bio: 'Kandy Royal international college kandy',
  },
   {
    name: 'Maneth Sooriyaarachchi',
    role: 'Member',
    department: '',
    image: 'z10.jpeg',
    bio: ' St Sylvesters College, Kandy',
  },
   {
    name: 'Sasith Kodagoda',
    role: 'Member',
    department: '',
    image: '19.jpeg',
    bio: 'Darmaraja college knady',
  },
   {
    name: 'Gayeli Dilruu Bandara',
    role: 'Member',
    department: '',
    image: 'h3.jpeg',
    bio: ' Girls High School ',
  },
   {
    name: 'Binuthi Nihansa Weerasinghe ',
    role: 'Member',
    department: '',
    image: 'h4.jpeg',
    bio: ' Goothami College',
  },
   {
    name: 'Madeesha Hettiarachchi',
    role: 'Member',
    department: '',
    image: 'h5.jpeg',
    bio: ' D.S Senanayaka College ',
  },
   {
    name: 'Minoli Ayansa Wimalarathne',
    role: 'Member',
    department: '',
    image: 'h6.jpeg',
    bio: 'Gurudeniya Maha Vidyalaya',
  },
   {
    name: 'Nethsarani Jayathilake ',
    role: 'Member',
    department: '',
    image: 'h7.jpeg',
    bio: ' Pre school',
  },
   {
    name: 'Ayansa Methsuki Rathnayake',
    role: 'Member',
    department: '',
    image: 'h8.jpeg',
    bio: ' Hilwood college ',
  },
   {
    name: 'Disuwa Bandara',
    role: 'Member',
    department: '',
    image: 'h9.jpeg',
    bio: ' Chandhananda college ',
  },
   {
    name: 'Ruheli Onaya Dissanayake ',
    role: 'Member',
    department: '',
    image: 'h10.jpeg',
    bio: ' Pre school',
  },
   {
    name: 'Nelinsa Dilsisi Samarasinghe ',
    role: 'Member',
    department: '',
    image: '11.jpeg',
    bio: ' Seethadevi college',
  },
   {
    name: 'K.J.M Damsarani T. Jayathilaka',
    role: 'Member',
    department: '',
    image: '12.jpeg',
    bio: ' K/ Gothami Girls College',
  },
   {
    name: 'Minula Rathnayake',
    role: 'Member',
    department: '',
    image: '13.jpeg',
    bio: ' Darwin college Kandy',
  },
   {
    name: 'W.M Yenuki Dinara Wijesinghe ',
    role: 'Member',
    department: '',
    image: '14.jpeg',
    bio: 'Apollo international  school',
  },
   {
    name: 'Kenuth Sasnindu Gedarakumbura ',
    role: 'Member',
    department: '',
    image: '15.jpeg',
    bio: ' Kingswood collage',
  },
  {
    name: 'Methuli Dissanayake ',
    role: 'Member',
    department: '',
    image: '20.jpeg',
    bio: ' Hilwood college',
  },
 
  
  
];

const departments = ['All', 'Members','Organize', 'Technology', 'Events'];

const LeadershipGrid = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLeader, setSelectedLeader] = useState<null | (typeof leaders)[0]>(null);

  const filteredLeaders = selectedDepartment === 'All' 
    ? leaders 
    : leaders.filter(leader => leader.department === selectedDepartment);

  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Team</h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {departments.map(department => (
            <motion.button
              key={department}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedDepartment(department)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedDepartment === department
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {department}
            </motion.button>
          ))}
        </div>
      </div>
      
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence>
          {filteredLeaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              onClick={() => setSelectedLeader(leader)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-900">{leader.name}</h3>
                <p className="text-primary-600 mb-1">{leader.role}</p>
                <p className="text-sm text-gray-500 mb-3">{leader.department}</p>
                <p className="text-gray-700 line-clamp-2">{leader.bio}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {/* Modal for detailed view */}
      <AnimatePresence>
        {selectedLeader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
            onClick={() => setSelectedLeader(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-xl overflow-hidden max-w-2xl w-full shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-64 md:h-auto">
                  <img 
                    src={selectedLeader.image} 
                    alt={selectedLeader.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{selectedLeader.name}</h3>
                  <p className="text-primary-600 mb-1">{selectedLeader.role}</p>
                  <p className="text-sm text-gray-500 mb-4">{selectedLeader.department} Department</p>
                  <p className="text-gray-700 mb-6">{selectedLeader.bio}</p>
                  <button 
                    className="text-primary-600 hover:text-primary-800 font-medium"
                    onClick={() => setSelectedLeader(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


export default LeadershipGrid;







