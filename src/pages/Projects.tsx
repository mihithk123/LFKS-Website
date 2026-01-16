import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Users, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  objectives: string[];
  startDate: string;
  endDate: string | null;
  location: string;
  status: 'ongoing' | 'completed' | 'upcoming';
  images: string[];
  impact: {
    numbers: string[];
    stories: string[];
  };
  team: {
    name: string;
    role: string;
    avatar?: string;
  }[];
  category: string;
}

const projects: Project[] = [
 {
    id: '1',
    title: '2025 Landslide Relief Project',
    summary: 'Emergency aid to families displaced by landslides in Walapane District',
    description: 'In response to the recent landslide crisis, our initiative focuses on delivering critical aid to displaced communities in Walapane. We provide essential food rations, medical supplies, and protective gear to help families navigate these challenging times.',
    startDate: '2025-12-02',
    location: 'Walapane District',
    status: 'completed',
    images: ['/w8.JPG', '/w1.JPG', '/w5.JPG', '/w6.JPG', '/w7.JPG', '/w0.JPG'],
    impact: {
      numbers: ['Over 20 participants', 'Emergency kits distributed', 'Back-to-School kits for 15 children'],
      stories: ['Successfully delivered emergency kits, safety gear, and warm bedding to displaced families. Distributed "Back-to-School" kits to 15 displaced children including waterproof backpacks and stationery.']
    },
    team: [
      { name: 'Lawanya', role: 'Lead', avatar: '/lawa.jpg' },
      { name: 'Mihith', role: 'Lead', avatar: '/mihith.jpg' },
      { name: 'Chamodya', role: 'Lead', avatar: '/z2.jpeg' },
      { name: 'Tinura', role: 'Organizer', avatar: '/tinu.jpg' }
    ],
    category: 'Charity',
    year: 2025
  },
  {
    id: '2',
    title: '2025 New Year Festival',
    summary: 'Traditional celebration with "Gami Gedara" village house and cultural performances',
    description: 'This year\'s New Year festival was a great success. A highlight was the "Gami Gedara"—a traditional Sri Lankan village house we built to celebrate our heritage. We crafted a beautiful oil lamp using natural materials and performed two lively dances. Everyone wore sarongs and lungis, making the event colorful, vibrant, and truly memorable.',
    startDate: '2025-04-15',
    location: 'Village',
    status: 'completed',
    images: ['/ny1.jpg', '/ny2.jpg', '/ny3.jpg'],
    impact: {
      numbers: ['Community-wide participation', 'Traditional village house built', '2 cultural dances performed'],
      stories: ['Successfully celebrated Sri Lankan heritage with authentic decorations, traditional attire, and cultural performances']
    },
    team: [
      { name: 'Tinura', role: 'President', avatar: '/tinu.jpg' },
      { name: 'Dilsanda', role: 'Secretary' }
    ],
    category: 'Community',
    year: 2025
  },
  {
    id: '3',
    title: '2025 Yogurt Dansala (Vesak Project 1)',
    summary: 'Distributed 2000+ yogurt cups to pilgrims at Temple of the Tooth',
    description: 'This charity initiative distributed over 2,000 cups of yogurt to pilgrims waiting in long queues to witness the Tooth Relic exposition on April 23, 2025. The effort offered comfort and refreshment to devotees enduring long hours under the sun at Sri Lanka\'s sacred Temple of the Tooth Relic.',
    startDate: '2025-04-23',
    location: 'Ampitya Road, Temple of the Tooth',
    status: 'completed',
    images: ['/vp.jpg', '/vp1.jpg', '/vp2.jpg', '/vp3.jpg'],
    impact: {
      numbers: ['Over 30 participants', '2000+ yogurt cups distributed'],
      stories: ['Brought relief and refreshment to hundreds of pilgrims waiting under the sun']
    },
    team: [
      { name: 'Lawanya', role: 'Lead', avatar: '/lawa.jpg' },
      { name: 'Chathuni', role: 'Lead', avatar: '/chathuni.jpg' }
    ],
    category: 'Charity',
    year: 2025
  },
  {
    id: '4',
    title: '2025 Kandy Cleaning (Vesak Project 2)',
    summary: 'Community cleanup restoring beauty to Kandy town',
    description: 'Due to improper garbage disposal by pilgrims during the Tooth Relic exposition, Kandy town became polluted. We organized a cleaning program on April 28th. With many volunteers, the initiative was a great success, and we managed to clean a large area, restoring some of the town\'s beauty.',
    startDate: '2025-04-28',
    location: 'Kandy Town',
    status: 'completed',
    images: ['1.jpeg', '2.jpeg', '4.jpeg', '6.jpeg', '7.jpeg', '9.jpeg', '10.jpeg'],
    impact: {
      numbers: ['Large area cleaned', 'Many volunteers participated'],
      stories: ['Successfully restored beauty to Kandy town through community effort and environmental awareness']
    },
    team: [
      { name: 'Lawanya', role: 'Lead', avatar: '/lawa.jpg' },
      { name: 'Mihith', role: 'Coordinator', avatar: '/mihith.jpg' }
    ],
    category: 'Charity',
    year: 2025
  },
  {
    id: '5',
    title: '2024 Christmas and Year End Party',
    summary: 'Festive celebration with decorations, games, and reunions',
    description: 'We celebrated Christmas and the end of 2024 together with joy and warmth. The premises were beautifully decorated with Christmas ornaments and a festive tree. We enjoyed a fun-filled party, watched a movie, and cherished the chance to reunite with our friends after a long time.',
    startDate: '2024-12-25',
    location: 'Village',
    status: 'completed',
    images: ['WhatsApp Image 2026-01-16 at 12.00.00 PM.jpeg','WhatsApp Image 2026-01-16 at 12.00.01 PM (1).jpeg','WhatsApp Image 2026-01-16 at 12.00.01 PM.jpeg'],
    impact: {
      numbers: ['All members participated'],
      stories: ['Created warm memories and strengthened friendships through festive celebration']
    },
    team: [
      { name: 'Tinura', role: 'President', avatar: '/tinu.jpg' },
      { name: 'Dilsanda', role: 'Secretary' }
    ],
    category: 'Community',
    year: 2024
  },
  {
    id: '6',
    title: '2024 Vesak Project',
    summary: 'LFKS oil lamp display, Dhamma sermon, and journey video',
    description: 'Celebrated under President Tinura Wanasinghe and Secretary Dilsanda Samarasinghe. The celebration included traditional Dhamma sermon and beautifully decorated streets with Vesak lanterns. A special highlight was the display of "LFKS" visualized with oil lamps. We showcased a video of our journey, reflecting on how far we\'ve come.',
    startDate: '2024-05-10',
    location: 'Village',
    status: 'completed',
    images: ['{75909786-2DF4-4A27-ABEE-8799FE58736B}.png','IMG-20240524-WA0016.jpg', 'IMG-20240524-WA0031.jpg','WhatsApp Image 2026-01-16 at 12.25.35 PM (1).jpeg','WhatsApp Image 2026-01-16 at 12.25.35 PM (2).jpeg','WhatsApp Image 2026-01-16 at 12.25.36 PM.jpeg' ],
    impact: {
      numbers: ['All members participated', 'LFKS oil lamp display', 'Journey video showcased'],
      stories: ['Successfully showcased our journey and achievements through creative oil lamp display']
    },
    team: [
      { name: 'Poorna', role: '', avatar: 'a7.jpeg' },
      { name: 'Chathuni', role: '', avatar: 'chathuni.jpg' },
      { name: 'Isuri', role: '', avatar: 'isuri.jpg' }
    ],
    category: 'Community',
    year: 2024
  },
  {
    id: '7',
    title: '2023 Vesak',
    summary: 'Handmade lanterns and oil lamp fence',
    description: 'We made many Vesak lanterns and lit them on Vesak night, creating a beautiful and peaceful atmosphere. We also built a fence of oil lamps that added to the charm of the evening. Everyone put in a lot of effort, and seeing it all come to life made it truly worth it.',
    startDate: '2023-05-10',
    location: 'Village',
    status: 'completed',
    images: ['IMG-20240524-WA0016.jpg', 'IMG-20240524-WA0031.jpg'],
    impact: {
      numbers: ['Many lanterns created', 'Oil lamp fence built'],
      stories: ['Created a beautiful and peaceful Vesak night atmosphere through collective effort']
    },
    team: [
      { name: 'Poorna', role: 'President' },
      { name: 'Binara', role: 'Secretary' }
    ],
    category: 'Community',
    year: 2023
  },
  {
    id: '8',
    title: '2023 New Year',
    summary: 'Kolam art, traditional food, and Awurudu games',
    description: 'We beautifully decorated the entrance and crafted an oil lamp using natural materials. To honor Tamil culture, we created Kolam art. A large table was filled with traditional Awurudu food, and the games were a great success. Everyone had a wonderful time.',
    startDate: '2023-04-15',
    location: 'Village',
    status: 'completed',
    images: ['Snapchat-692348776.jpg','Snapchat-372398602.jpg','Snapchat-384671232.jpg','IMG_20230413_162132.jpg','IMG_20230413_104157.jpg','IMG_20230413_100502_1.jpg','IMG_20230413_090514.jpg','IMG_20230413_074632.jpg','IMG-20230422-WA0016.jpg','IMG-20230422-WA0017.jpg','IMG-20230422-WA0018.jpg','IMG-20230422-WA0021.jpg','IMG-20230422-WA0025.jpg','IMG-20230414-WA0008.jpg','IMG-20230414-WA0009.jpg','IMG-20230414-WA0018.jpg','IMG-20230422-WA0007.jpg'],
    impact: {
      numbers: ['Community-wide participation', 'Kolam art created'],
      stories: ['Successfully preserved cultural traditions and honored Tamil heritage']
    },
    team: [
      { name: 'Poorna', role: 'President' },
      { name: 'Binara', role: 'Secretary' }
    ],
    category: 'Community',
    year: 2023
  },
  {
    id: '9',
    title: '2022 Little Heart Donetion',
    summary: 'Christmas charity supporting needy families',
    description: 'Instead of partying, we decided to help those in need for Christmas. We selected needy families and gathered essential items from our members. With parents\' help, we carefully packed and gifted items to those families. It turned out to be the best Christmas ever, filled with the joy of giving.',
    startDate: '2022-12-25',
    location: 'Village',
    status: 'completed',
    images: ['2022.jpg','IMG-20221225-WA0085.jpg','IMG-20221225-WA0086.jpg','IMG-20221225-WA0092.jpg','IMG-20221225-WA0101.jpg','IMG-20221225-WA0083.jpg','IMG-20221225-WA0104.jpg','Snapchat-320848217.jpg','Snapchat-400278434.jpg','Snapchat-295827332.jpg','IMG_20221224_125710.jpg','awG02aB2u34gitPT5S7HVCHJnV2H6TG1xUnn5_bmeIY=_plaintext_638077483327420248.jpg'],
    impact: {
      numbers: ['Several families supported', 'Essential items distributed'],
      stories: ['Made meaningful difference in lives of needy families, creating the most fulfilling Christmas']
    },
    team: [
      
    ],
    category: 'Charity',
    year: 2022
  },
  {
    id: '10',
    title: '2022 Dansala',
    summary: 'First-ever Dansala with fresh village star fruit',
    description: 'We held our very first Dansala, giving away freshly picked star fruit from our village. It was a joyful experience, and everyone thoroughly enjoyed the fruits. We were all very happy to share this special moment with the community.',
    startDate: '2022-06-15',
    location: 'Village',
    status: 'completed',
    images: ['{A0191746-B98C-436D-8322-7F3F00FE1F16}.png','{C02A9B59-C5D5-4464-82F3-CBA2414DC0E5}.png','{C3E11967-4D92-4E01-B9C4-8CD3DC025E38}.png','{467FEBA7-92F0-4008-8D9C-4EE454A63629}.png'],
    impact: {
      numbers: ['First Dansala held', 'Fresh fruits distributed'],
      stories: ['Successfully launched our Dansala tradition, bringing joy to the community']
    },
    team: [
     
    ],
    category: 'Charity',
    year: 2022
  },
  {
    id: '11',
    title: '2022 Poson',
    summary: '30 children performed 16 Bakthi Geetha songs',
    description: 'For the first time, we celebrated the Poson festival. All members participated in singing Bakthi Geetha, with practices starting three weeks in advance. We performed 16 songs, and 30 children took part. Our parents and villagers gathered to witness the event, making it special and meaningful.',
    startDate: '2022-06-24',
    location: 'Village',
    status: 'completed',
    images: ['IMG-20220613-WA0034.jpg','IMG_20220613_194640.jpg','20220613_205112.jpg','20220613_205130.jpg','IMG-20220614-WA0035.jpg','20220613_194038.jpg','20220613_194023.jpg','IMG-20220616-WA0024.jpg'],
    impact: {
      numbers: ['30 children participated', '16 songs performed'],
      stories: ['First-ever Poson celebration created meaningful occasion for children, parents, and villagers']
    },
    team: [
      
    ],
    category: 'Community',
    year: 2022
  },
  {
    id: '12',
    title: '2022 Vesak',
    summary: 'Theme "Good Company" with Dhamma sermon',
    description: 'The theme was "Good Company". We welcomed Batagolle Wijithananda Thero with a respectful procession, followed by a meaningful Dhamma sermon. After the program, everyone enjoyed a tea party together, marking a warm and memorable Vesak.',
    startDate: '2022-05-15',
    location: 'Village',
    status: 'completed',
    images: ['IMG-20240517-WA0006.jpg','IMG-20240517-WA0005.jpg','IMG-20240517-WA0006.jpg','IMG-20240517-WA0007.jpg','IMG-20240517-WA0009.jpg','IMG-20240517-WA0013.jpg','IMG-20240517-WA0003.jpg','IMG-20240517-WA0014.jpg'],
    impact: {
      numbers: ['Community attended', 'Tea party held'],
      stories: ['Created warm memories through meaningful Dhamma teachings and community gathering']
    },
    team: [
      { name: 'Poorna', role: 'President' },
      { name: 'Binara', role: 'Secretary' }
    ],
    category: 'Community',
    year: 2022
  },
  {
    id: '13',
    title: '2022 New Year',
    summary: 'Intergenerational celebration with elder\'s society',
    description: 'We celebrated in collaboration with the elder\'s society. While we organized, elders contributed gifts and provided lunch. The event featured games for both children and elders, creating wonderful intergenerational bonding and teamwork.',
    startDate: '2022-04-14',
    location: 'Village',
    status: 'completed',
    images: ['IMG-20220413-WA0023.jpg','IMG-20220413-WA0017.jpg','IMG-20220413-WA0020.jpg','IMG-20220413-WA0021.jpg','IMG-20220413-WA0022.jpg','IMG-20220413-WA0023.jpg','IMG-20220413-WA0028.jpg','IMG-20220413-WA0039.jpg','IMG-20220413-WA0040.jpg','IMG-20220413-WA0043.jpg','IMG-20220411-WA0005.jpg','IMG-20220413-WA0035.jpg','IMG-20220413-WA0036.jpg'],
    impact: {
      numbers: ['Children and elders participated', 'Community collaboration'],
      stories: ['Fostered intergenerational bonding and community unity through collaborative celebration']
    },
    team: [
      
    ],
    category: 'Community',
    year: 2022
  },
  {
    id: '14',
    title: '2021 Christmas Party',
    summary: 'Food, games, dancing, singing, and movie',
    description: 'On December 25th, we celebrated Christmas with delicious food. The day was filled with games, dancing, singing, and joyful moments. We concluded by watching a movie, ending the day on a warm and cheerful note.',
    startDate: '2021-12-25',
    location: 'Village',
    status: 'completed',
    images: ['211.png'],
    impact: {
      numbers: ['All members participated'],
      stories: ['Created warm Christmas memories through games, food, and entertainment']
    },
    team: [
      { name: 'Poorna', role: 'President' },
      { name: 'Binara', role: 'Secretary' }
    ],
    category: 'Community',
    year: 2021
  },
  {
    id: '15',
    title: '2021 Vesak',
    summary: 'Online Dhamma talk and house decorating contest',
    description: 'Despite Covid-19 limitations, LFKS organized an online Dhamma talk. We held a Wesak Arts and Crafts competition. For the first time, we conducted a community competition to select the best-decorated house for Wesak, judged by public votes.',
    startDate: '2021-05-26',
    location: 'Online/Village',
    status: 'completed',
    images: ['{FF594009-D0B2-4342-A01D-64B443C58AEF}.png'],
    impact: {
      numbers: ['Online participation', 'Arts competition held'],
      stories: ['Successfully adapted Vesak celebration to pandemic restrictions through innovative online format']
    },
    team: [
      
    ],
    category: 'Community',
    year: 2021
  },
  {
    id: '16',
    title: '2021 New Year - Punchi Ape Bakmaha Ulela',
    summary: 'Energetic festival with enthusiastic speeches',
    description: 'The "Punchi Ape Bakmaha Ulela" New Year festival took place in April 2021. New president Poorna Wanasinghe delivered an enthusiastic welcome speech, and the event was energetic and challenging. Secretary Binara Wijesinghe concluded the day with a vote of thanks.',
    startDate: '2021-04-14',
    location: 'Village',
    status: 'completed',
    images: ['IMG-20221221-WA0045.jpg','{7E8BB43D-9AE3-4B35-9BDE-D1F0B8DD5DC2}.png','{A6A2C3FD-6CD0-4488-944A-D2DE72FABF71}.png','IMG-20221221-WA0045.jpg','{59036B78-0B19-4FC0-A593-5EBC93DF8022}.png',''],
    impact: {
      numbers: ['Energetic participation'],
      stories: ['Marked new leadership era with enthusiastic and memorable celebration']
    },
    team: [
      
    ],
    category: 'Community',
    year: 2021
  },
  {
    id: '17',
    title: '2019 Trip to Hambantota',
    summary: 'Two-day journey to Katharagama temple and tourist attractions',
    description: 'Our destination was Hambantota—a long but worthwhile journey. The trip lasted two days. On the first day, we visited Katharagama temple and rested. The next day, we explored several tourist attractions, making it a truly wonderful and memorable journey.',
    startDate: '2019-08-15',
    location: 'Hambantota',
    status: 'completed',
    images: ['IMG_0342.JPG','IMG_0338.JPG','IMG_0343.JPG','IMG_0336.JPG','IMG_0346.JPG','IMG_0344.JPG',''],
    impact: {
      numbers: ['2-day trip', 'Multiple attractions visited'],
      stories: ['Created wonderful memories through exploration and cultural experiences']
    },
    team: [
      
    ],
    category: 'Community',
    year: 2019
  },
  {
    id: '18',
    title: '2019 Vesak',
    summary: '20 lotus lanterns and 40 Wesak lanterns',
    description: 'Three weeks before Wesak, the LFKS community, including parents, began preparing decorations. They created 20 lotus lanterns and 40 Wesak lanterns. On Vesak day, they arranged an oil lamp circle in the morning and lit the lamps and lanterns at night.',
    startDate: '2019-05-18',
    location: 'Village',
    status: 'completed',
    images: ['{2E5B1126-F66E-4E85-81DD-E395BE855148}.png','2018.jpg','vesak1.jpg'],
    impact: {
      numbers: ['20 lotus lanterns', '40 Wesak lanterns'],
      stories: ['Community and parents collaborated for three weeks creating beautiful Vesak decorations']
    },
    team: [
     
    ],
    category: 'Community',
    year: 2019
  },
  {
    id: '19',
    title: '2018 Year End Party',
    summary: 'New Year celebration with party games',
    description: 'The best moments are shared with friends, and our get-together on December 31st was no exception. We played party games, laughed, and had an amazing time together, creating unforgettable memories to ring in the new year.',
    startDate: '2018-12-31',
    location: 'Village',
    status: 'completed',
    images: ['PXL_20230910_135310614.MP.jpg','PXL_20230910_135613986.MP.jpg'],
    impact: {
      numbers: ['All members participated'],
      stories: ['Created unforgettable memories through games and friendship']
    },
    team: [
      
    ],
    category: 'Community',
    year: 2018
  },
  {
    id: '20',
    title: '2018 Trip to New Saniro Park',
    summary: '5-hour journey to Veyangoda amusement park',
    description: 'To give everyone a break from school exhaustion, we organized a trip during August vacation to "New Saniro Park" in Veyangoda. It was a 5-hour journey from Kandy. We started at 5 AM, reached by 11:30 AM. After a fun-filled day, we returned to Kandy by 10 PM.',
    startDate: '2018-08-15',
    location: 'New Saniro Park, Veyangoda',
    status: 'completed',
    images: ['2016-01-02.jpg','maxresdefault.jpg'],
    impact: {
      numbers: ['5-hour journey', 'Full day at park'],
      stories: ['Gave students a refreshing break with fantastic amusement park experience']
    },
    team: [
     
    ],
    category: 'Community',
    year: 2018
  },
  {
    id: '21',
    title: '2018 Vesak',
    summary: '7 lotus lanterns and pink-white Atapattam decorations',
    description: 'We crafted 7 lotus lanterns to symbolize Buddha\'s birth and displayed them with pride. Our street was beautifully decorated with pink and white "Atapattam" Vesak lanterns. We created our usual lamp fence and lit it on Vesak day, creating a breathtaking sight.',
    startDate: '2018-04-29',
    location: 'Village',
    status: 'completed',
    images: ['{2E5B1126-F66E-4E85-81DD-E395BE855148}.png'],
    impact: {
      numbers: ['7 lotus lanterns', 'Street decorated'],
      stories: ['Created breathtaking Vesak display symbolizing Buddha\'s birth']
    },
    team: [
      { name: 'Lawanya', role: 'President', avatar: '/lawa.jpg' },
      { name: 'Manjitha', role: 'Secretary', avatar: '/man.jpg' }
    ],
    category: 'Community',
    year: 2018
  },
  {
    id: '22',
    title: '2018 New Year - Sahas Ras',
    summary: 'Meticulously planned festival with neighborhood awareness',
    description: 'The New Year festival was named "Sahas Ras". We meticulously planned the games, bought and packed gifts, and created an agenda. Posters were made to raise neighborhood awareness. The festival was a great success and brought much-needed change for members confined to home, school, and tuition.',
    startDate: '2018-04-14',
    location: 'Village',
    status: 'completed',
    images: ['IMG-20220413-WA0036.jpg'],
    impact: {
      numbers: ['Neighborhood engaged'],
      stories: ['Provided much-needed break from routine, creating refreshing and enjoyable experience']
    },
    team: [
      
    ],
    category: 'Community',
    year: 2018
  },
  {
    id: '23',
    title: '2017 Sarigama Concert',
    summary: 'Talent showcase with dances, songs, and dramas',
    description: 'In August 2017, we organized a concert to showcase member talents, with practices starting weeks in advance. The event began with welcoming chief guests and lighting the oil lamp. Miss Manjitha delivered the welcome speech, followed by performances including dances, solo and group songs, and dramas. Miss Lawanya gave the vote of thanks. The audience, especially adults, warmly appreciated our talents.',
    startDate: '2017-08-15',
    location: 'Village',
    status: 'completed',
    images: ['P1020781.JPG','1503209661778.jpg','P1020788.JPG','P1020800.JPG','1503497532012.jpg','1503497528455.jpg','1503497532012.jpg'],
    impact: {
      numbers: ['Multiple performances', 'Audience appreciation'],
      stories: ['Successfully showcased member talents through diverse performances warmly received by adults and community']
    },
    team: [
      { name: 'Lawanya', role: 'President', avatar: '/lawa.jpg' },
      { name: 'Manjitha', role: 'Secretary', avatar: '/man.jpg' }
    ],
    category: 'Community',
    year: 2017
  },
  {
    id: '24',
    title: '2017 Vesak',
    summary: 'Lamp fences, Dhamma sermon, and fireworks',
    description: 'In May 2017, we celebrated Vesak with great enthusiasm. With parents\' help, we set up fences of lamps along the streets and decorated the premises. Batagalle Gunananda Thero was welcomed with a procession. A Dhamma sermon was held at 4:30 PM, followed by a fireworks display and tea party. The evening concluded with lighting of lamps, illuminating the entire path.',
    startDate: '2017-05-10',
    location: 'Village',
    status: 'completed',
    images: ['{B47C08B1-4FA7-4F5F-9488-6CE7E9AA359F}.png', '{A367F2CE-037A-411B-B9C3-1D5C49AE0BAE}.png'],
    impact: {
      numbers: ['Lamp fences built', 'Dhamma sermon held'],
      stories: ['Created beautiful Vesak celebration with illuminated paths, meaningful sermon, and community gathering']
    },
    team: [
      { name: 'Lawanya', role: 'President', avatar: '/lawa.jpg' },
      { name: 'Manjitha', role: 'Secretary', avatar: '/man.jpg' },
      { name: 'Mihith', role: 'Treasurer', avatar: '/mihith.jpg' }
    ],
    category: 'Community',
    year: 2017
  },
  {
    id: '25',
    title: '2017 New Year',
    summary: 'First New Year festival with traditional Awurudu games',
    description: 'Our first New Year festival took place in April 2017. A week prior, all members worked together to buy gifts and gather necessary items. The venue was beautifully decorated the day before. On the festival day, we enjoyed playing traditional Awurudu games, and winners were awarded gifts. The day ended with everyone leaving happily.',
    startDate: '2017-04-14',
    location: 'Village',
    status: 'completed',
    images: ['{174EC3D3-1923-4F88-A16E-258D288C4172}.png','{ED29B673-4728-4A9E-A29C-0B9C8E9D8D08}.png','{9CB68725-11C6-4230-8F6F-E2C34CC1F4C7}.png','{1F5C8741-3E36-43F7-B33A-94E7BB8E11F7}.png','{8BB9E142-E0FD-458D-80A5-4CE5B565E7C5}.png','{59D80B65-6E8C-49C6-B035-8FB0B82540D2}.png','{D0B1F0D4-CED7-469F-872C-50EB1EB00079}.png','{818BED7A-DBD6-46C9-846F-06B92B1A322B}.png'],
    impact: {
      numbers: ['First festival held', 'All members participated'],
      stories: ['Successfully launched our first New Year festival with traditional games and joyful celebrations']
    },
    team: [
      { name: 'Lawanya', role: 'President', avatar: '/lawa.jpg' },
      { name: 'Manjitha', role: 'Secretary', avatar: '/man.jpg' },
      { name: 'Mihith', role: 'Treasurer', avatar: '/mihith.jpg' }
    ],
    category: 'Community',
    year: 2017
  },
  {
    id: '26',
    title: '2016 Christmas - Society Foundation',
    summary: 'Official establishment of Little Friends Kids Society',
    description: 'On December 25th, 2016, the "Little Friends Kids Society" was officially established. Miss Lawanya was elected president, Miss Manjitha as secretary, and Master Mihith as treasurer. The day ended joyfully with Christmas celebrations, games, gift-giving, and cheerful moments together.',
    startDate: '2016-12-25',
    location: 'Village',
    status: 'completed',
    images: ['{8D6A5096-70AE-4047-83D8-F251A1E8B585}.png'],
    impact: {
      numbers: ['Society officially established', '3 founding members elected'],
      stories: ['Successfully founded Little Friends Kids Society, marking the beginning of our journey with joyful Christmas celebration']
    },
    team: [
      { name: 'Lawanya', role: 'President', avatar: '/lawa.jpg' },
      { name: 'Manjitha', role: 'Secretary', avatar: '/man.jpg' },
      
    ],
    category: 'Community',
    year: 2016
  }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ['All', 'Charity', 'Community'];

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' || project.category === selectedCategory
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing': return 'bg-emerald-500';
      case 'completed': return 'bg-blue-500';
      case 'upcoming': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const openLightbox = (image: string, index: number) => {
    setLightboxImage(image);
    setCurrentImageIndex(index);
  };

  const nextImage = () => {
    if (selectedProject) {
      const nextIndex = (currentImageIndex + 1) % selectedProject.images.length;
      setCurrentImageIndex(nextIndex);
      setLightboxImage(selectedProject.images[nextIndex]);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      const prevIndex = (currentImageIndex - 1 + selectedProject.images.length) % selectedProject.images.length;
      setCurrentImageIndex(prevIndex);
      setLightboxImage(selectedProject.images[prevIndex]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header */}
      <div className="relative overflow-hidden bg-white py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">Our Impact</h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Transforming communities through meaningful initiatives
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-12">
          {categories.map(category => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className={`absolute top-4 right-4 ${getStatusColor(project.status)} text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide`}>
                    {project.status}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.summary}</p>
                  
                  <div className="space-y-2 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(project.startDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{project.team.length} Organizers</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-indigo-600 font-medium text-sm group-hover:text-purple-600 transition-colors">
                      View Details →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-6xl w-full bg-white rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-20 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Hero Image */}
              <div className="relative h-96 bg-gradient-to-br from-indigo-600 to-purple-600">
                <img
                  src={selectedProject.images[0]}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className={`inline-block ${getStatusColor(selectedProject.status)} px-3 py-1 rounded-full text-xs font-semibold mb-3`}>
                    {selectedProject.status}
                  </div>
                  <h2 className="text-4xl font-bold mb-2">{selectedProject.title}</h2>
                  <div className="flex items-center gap-6 text-white/90">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(selectedProject.startDate).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {selectedProject.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">About This Project</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedProject.description}</p>
                </div>

                {/* Photo Gallery */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Photo Gallery</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {selectedProject.images.map((img, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                        onClick={() => openLightbox(img, idx)}
                      >
                        <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                          <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Impact</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                      <h4 className="text-lg font-medium mb-3 text-gray-900">By the Numbers</h4>
                      <ul className="space-y-3 text-gray-700">
                        {selectedProject.impact.numbers.map((number, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="mt-1 min-w-4 h-4 rounded-full bg-blue-500"></div>
                            <span>{number}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                      <h4 className="text-lg font-medium mb-3 text-gray-900">Success Stories</h4>
                      <ul className="space-y-3 text-gray-700">
                        {selectedProject.impact.stories.map((story, index) => (
                          story && (
                            <li key={index} className="flex items-start gap-2">
                              <div className="mt-1 min-w-4 h-4 rounded-full bg-green-500"></div>
                              <span>{story}</span>
                            </li>
                          )
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Team */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Team</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {selectedProject.team.map((member, idx) => (
                      <div key={idx} className="flex flex-col items-center text-center bg-gray-50 p-4 rounded-lg shadow-sm">
                        {member.avatar ? (
                          <img src={member.avatar} alt={member.name} className="w-16 h-16 rounded-full object-cover mb-3" />
                        ) : (
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold mb-3">
                            {member.name.charAt(0)}
                          </div>
                        )}
                        <div className="font-semibold text-gray-900">{member.name}</div>
                        <div className="text-xs text-gray-500">{member.role}</div>
                      </div>
                    ))}
                  </div>
                </div>


              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Lightbox */}
      <AnimatePresence>
        {lightboxImage && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <motion.img
              key={lightboxImage}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={lightboxImage}
              alt="Full size"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm">
              {currentImageIndex + 1} / {selectedProject.images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;