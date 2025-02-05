import ITourItem from '../types/ITourItem';

const tours: ITourItem[] = [
  {
    title: 'Sunny Beaches of Maldives',
    description:
      'Relax on the pristine white sands and explore crystal-clear waters in this tropical paradise.Relax on the pristine white sands and explore crystal-clear waters in this tropical paradise.Relax on the pristine white sands and explore crystal-clear waters in this tropical paradise.',
    photo:
      'https://www.summerbeachmaldives.com/Upload/resized-Summer-Beach-Maldives-89812e07-78fd-4519-aafa-15b6359d692a.jpg',
    location: 'Maldives',
    price: 1500,
    id: '23131',
    cords: {
      lat: 3.2028,
      lng: 73.2207,
    },
  },
  {
    title: 'Alpine Adventure in Switzerland',
    description:
      'Discover breathtaking mountain peaks and charming villages in the heart of Europe.',
    photo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHkex3i3XqMof_43tNSBgjKb6tPRFUAiiy9g&s',
    location: 'Switzerland',
    price: 2200,
    id: '2asdad',
    cords: {
      lat: 46.8182,
      lng: 8.2275,
    },
  },
  {
    title: 'Safari in Serengeti',
    description:
      'Experience the African wilderness with guided tours through the Serengeti National Park.',
    photo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzJLYpItf-alIPECuotX8N4KwpZJzW9nB5kg&s',
    location: 'Tanzania',
    price: 1800,
    id: '2asdaadadd',
    cords: {
      lat: -6.369,
      lng: 34.8888,
    },
  },
  {
    title: 'Cultural Journey in Kyoto',
    description:
      'Explore ancient temples, vibrant gardens, and traditional tea houses in historic Kyoto.',
    photo:
      'https://www.datocms-assets.com/101439/1700744781-kyoto.jpg?auto=format&fit=crop&h=800&w=1200',
    location: 'Japan',
    price: 1300,
    id: '2adgssgad',
    cords: {
      lat: 36.2048,
      lng: 138.2529,
    },
  },
  {
    title: 'Road Trip Through Iceland',
    description:
      'Drive through Iceland’s dramatic landscapes featuring waterfalls, glaciers, and volcanoes.',
    photo:
      'https://res.cloudinary.com/icelandtours/image/upload/v1667231369/road_through_water_iceland_tanya_grypachevskaya_unsplash_c60b81b29b.jpg',
    location: 'Iceland',
    price: 1700,
    id: '21sf32fad',
    cords: {
      lat: 64.9631,
      lng: -19.0208,
    },
  },
  {
    title: 'Island Hopping in Greece',
    description:
      'Visit stunning Greek islands, including Santorini and Mykonos, with beautiful whitewashed architecture.',
    photo: 'https://www.tiadoestravel.com/wp-content/uploads/2022/02/zakynthos-g979a0e4c1_1920.jpg',
    location: 'Greece',
    price: 1400,
    id: '2asdad2wstfad',
    cords: {
      lat: 39.0742,
      lng: 21.8243,
    },
  },
  {
    title: 'Wildlife Exploration',
    description: "Get up close with orangutans and other exotic wildlife in Borneo's rainforests.",
    photo:
      'https://static.wixstatic.com/media/8a5685_aa444df4b0c84345a11ed3e53569e252~mv2.jpg/v1/fill/w_568,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8a5685_aa444df4b0c84345a11ed3e53569e252~mv2.jpg',
    location: 'Malaysia',
    price: 1600,
    id: '2asda1rwfwste2d',
    cords: {
      lat: 4.2105,
      lng: 101.9758,
    },
  },
  {
    title: 'City Break in New York',
    description:
      'Enjoy the bustling streets, iconic landmarks, and world-class entertainment of NYC.',
    photo:
      'https://www.awwt.co.uk/wp-content/uploads/2024/06/AWWT_-_New_York_-__City_Breaks_-__-_USA_-_Tunbridge_Wells_Travel_-_Holidays_-_USA_Tours_-_NYC-scaled.jpg',
    location: 'USA',
    price: 1100,
    id: '2asdr2f2ae5rfwad',
    cords: {
      lat: 37.0902,
      lng: -95.7129,
    },
  },
  {
    title: 'Romantic Getaway in Paris',
    description:
      'Experience the magic of Paris, from the Eiffel Tower to charming streetside cafes.',
    photo: 'https://miro.medium.com/v2/resize:fit:1000/1*MEbpuyYybEB8GdAn2asSwA.jpeg',
    location: 'France',
    price: 1500,
    id: '2asd2ff2r22421r1ad',
    cords: {
      lat: 46.6034,
      lng: 1.8883,
    },
  },
  {
    title: 'Desert Adventure in Dubai',
    description: 'Enjoy a blend of luxury and adventure in the deserts and skyscrapers of Dubai.',
    photo:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/9c/21/05/caption.jpg?w=500&h=400&s=1',
    location: 'UAE',
    price: 1400,
    id: '2asd1hjkl6lutad',
    cords: {
      lat: 23.4241,
      lng: 53.8478,
    },
  },
  {
    title: 'Trekking in Patagonia',
    description:
      'Explore rugged landscapes and pristine wilderness in this remote South American region.',
    photo:
      'https://skyhookcontentful.imgix.net/10CL7uZg4YKK6BViNoSeSa/ebb99262453253382486003e41471cae/image.png?auto=compress%2Cformat%2Cenhance%2Credeye&ixlib=react-9.7.0',
    location: 'Argentina & Chile',
    price: 2000,
    id: '2asdadwhrenrsfegh',
    cords: {
      lat: -38.4161,
      lng: -63.6167,
    },
  },
  {
    title: 'Ancient Wonders of Egypt',
    description:
      'Discover the Pyramids of Giza, the Sphinx, and the Nile River in this timeless destination.',
    photo:
      'https://travel.home.sndimg.com/content/dam/images/travel/stock/2016/6/27/0/GettyImages-594835943_great-pyramid-of-giza-egypt.jpg.rend.hgtvcom.616.462.suffix/1491841321970.jpeg',
    location: 'Egypt',
    price: 1200,
    id: '2asqegwh4j5k7nyrtbedad',
    cords: {
      lat: 26.8206,
      lng: 30.8025,
    },
  },
  {
    title: 'Rainforest in Costa Rica',
    description: 'Reconnect with nature in Costa Rica’s lush rainforests and pristine beaches.',
    photo:
      'https://res.cloudinary.com/vacationscostarica-com/image/upload/v1654294640/pacuare_lodge_villa_private_plunge_pool_rainforest_view_caribbean_bf79ccee15.jpg',
    location: 'Costa Rica',
    price: 1400,
    id: '2asda2whje4nbwd',
    cords: {
      lat: 9.7489,
      lng: -83.7534,
    },
  },
  {
    title: 'Historic Tour of Rome',
    description:
      'Walk through history as you explore the Colosseum, Vatican City, and Roman Forum.',
    photo: 'https://media.tacdn.com/media/attractions-splice-spp-360x240/12/29/27/c6.jpg',
    location: 'Italy',
    price: 1200,
    id: '2asd12gqwa3jad',
    cords: {
      lat: 41.8719,
      lng: 12.5674,
    },
  },
  {
    title: 'Island Escape in Fiji',
    description: 'Unwind on serene beaches and explore coral reefs in the heart of the Pacific.',
    photo:
      'https://lh6.googleusercontent.com/proxy/3xGSljbsd98IyjrvO2TMMxvXPx2e6hWcrEzQrBNcLJtxleSay9D0YrFr4g0AX1Z-svpMSZZBjK9p58umjVGJbe5ArHvjjA4TbszBJnWL6O7CzPm3qpH8-7021Nu2UVxHzg',
    location: 'Fiji',
    price: 1900,
    id: '2asdqwjenbvwad',
    cords: {
      lat: -17.7134,
      lng: 178.065,
    },
  },
];

export default tours;
