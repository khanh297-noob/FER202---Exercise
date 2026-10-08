const animals = [
  {
    name: 'Lion',
    scientificName: 'Panthero leo',
    size: 140,
    diet: ['meat'],
    image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=500&auto=format&fit=crop&q=60'
  },
  {
    name: 'Gorilla',
    scientificName: 'Gorilla beringei',
    size: 205,
    diet: ['plants', 'insects'],
    additional: {
      notes: 'This is the eastern gorilla. There is also a western gorilla that is a different species.'
    },
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500&auto=format&fit=crop&q=60'
  },
  {
    name: 'Zebra',
    scientificName: 'Equus quagga',
    size: 322,
    diet: ['plants'],
    additional: {
      notes: 'There are three different species of zebra.',
      link: 'https://en.wikipedia.org/wiki/Zebra'
    },
    image: 'https://images.unsplash.com/photo-1501705388883-4ed8a543392c?w=500&auto=format&fit=crop&q=60'
  }
];

export default animals;