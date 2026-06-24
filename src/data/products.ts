export interface Product {
  id: number;
  nombre: string;
  marca: string;
  precio: number;
  stock: number;
  img: string;
  categoria: string;
}

export const products: Product[] = [
  {
    id: 1,
    nombre: 'Fender Stratocaster American Professional II',
    marca: 'Fender',
    precio: 289999,
    stock: 5,
    img: 'https://images.unsplash.com/photo-1550985616-10810253b84d?w=500',
    categoria: 'Guitarras eléctricas'
  },
  {
    id: 2,
    nombre: 'Gibson Les Paul Standard 60s',
    marca: 'Gibson',
    precio: 415000,
    stock: 3,
    img: 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=500',
    categoria: 'Guitarras eléctricas'
  },
  {
    id: 3,
    nombre: 'Fender Jazz Bass American Professional II',
    marca: 'Fender',
    precio: 245000,
    stock: 4,
    img: 'https://images.unsplash.com/photo-1525201548942-d8c8bc0ddae7?w=500',
    categoria: 'Bajos eléctricos'
  },
  {
    id: 4,
    nombre: 'Gibson SG Standard Heritage Cherry',
    marca: 'Gibson',
    precio: 380000,
    stock: 2,
    img: 'https://images.unsplash.com/photo-1605020420620-20c943cc4669?w=500',
    categoria: 'Guitarras eléctricas'
  },
  {
    id: 5,
    nombre: 'Epiphone Les Paul Custom',
    marca: 'Epiphone',
    precio: 135000,
    stock: 6,
    img: 'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=500',
    categoria: 'Guitarras eléctricas'
  },
  {
    id: 6,
    nombre: 'Ibanez RG421EX',
    marca: 'Ibanez',
    precio: 95000,
    stock: 5,
    img: 'https://images.unsplash.com/photo-1556442291-a6245362bf77?w=500',
    categoria: 'Guitarras eléctricas'
  },
  {
    id: 7,
    nombre: 'Fender CD-60S Dreadnought',
    marca: 'Fender',
    precio: 65000,
    stock: 8,
    img: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=500',
    categoria: 'Guitarras acústicas'
  },
  {
    id: 8,
    nombre: 'Yamaha C40 Guitarra Clásica',
    marca: 'Yamaha',
    precio: 38000,
    stock: 12,
    img: 'https://images.unsplash.com/photo-1549213713-02ae3304104c?w=500',
    categoria: 'Guitarras acústicas'
  },
  {
    id: 9,
    nombre: 'Taylor 114ce Acoustic-Electric',
    marca: 'Taylor',
    precio: 210000,
    stock: 3,
    img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500',
    categoria: 'Guitarras acústicas'
  },
  {
    id: 10,
    nombre: 'Yamaha TRBX174 Black',
    marca: 'Yamaha',
    precio: 78000,
    stock: 7,
    img: 'https://images.unsplash.com/photo-1445985543470-41fba5c3144a?w=500',
    categoria: 'Bajos eléctricos'
  },
  {
    id: 11,
    nombre: 'Music Man StingRay Special',
    marca: 'Music Man',
    precio: 340000,
    stock: 2,
    img: 'https://images.unsplash.com/photo-1561777841-6cdb3e0a5502?w=500',
    categoria: 'Bajos eléctricos'
  },
  {
    id: 12,
    nombre: 'Roland FP-30X Piano Digital',
    marca: 'Roland',
    precio: 329999,
    stock: 4,
    img: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=500',
    categoria: 'Teclados y pianos'
  },
  {
    id: 13,
    nombre: 'Yamaha P-45 Piano Digital',
    marca: 'Yamaha',
    precio: 195000,
    stock: 6,
    img: 'https://images.unsplash.com/photo-1552422535-c45813c61732?w=500',
    categoria: 'Teclados y pianos'
  },
  {
    id: 14,
    nombre: 'Korg Minilogue XD Sintetizador',
    marca: 'Korg',
    precio: 210000,
    stock: 5,
    img: 'https://images.unsplash.com/photo-1612415177114-99edff2f3102?w=500',
    categoria: 'Teclados y pianos'
  },
  {
    id: 15,
    nombre: 'Nord Stage 4 88',
    marca: 'Nord',
    precio: 750000,
    stock: 1,
    img: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=500',
    categoria: 'Teclados y pianos'
  },
  {
    id: 16,
    nombre: 'Pearl Export EXX 5 Piezas Nitro',
    marca: 'Pearl',
    precio: 198500,
    stock: 2,
    img: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=500',
    categoria: 'Baterías y percusión'
  },
  {
    id: 17,
    nombre: 'Yamaha Stage Custom Birch',
    marca: 'Yamaha',
    precio: 310000,
    stock: 3,
    img: 'https://images.unsplash.com/photo-1602161961448-f3d99e5a1b32?w=500',
    categoria: 'Baterías y percusión'
  },
  {
    id: 18,
    nombre: 'Mapex Mars Birch 5 Cuerpos',
    marca: 'Mapex',
    precio: 165000,
    stock: 4,
    img: 'https://images.unsplash.com/photo-1543443374-b6fe10a6ab7b?w=500',
    categoria: 'Baterías y percusión'
  },
  {
    id: 19,
    nombre: 'Roland TD-17KVX V-Drums',
    marca: 'Roland',
    precio: 450000,
    stock: 2,
    img: 'https://images.unsplash.com/photo-1566120536446-aa4933923bb1?w=500',
    categoria: 'Baterías y percusión'
  },
  {
    id: 20,
    nombre: 'Alesis Nitro Max Kit',
    marca: 'Alesis',
    precio: 115000,
    stock: 6,
    img: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=500',
    categoria: 'Baterías y percusión'
  },
  {
    id: 21,
    nombre: 'Yamaha YTR-2330 Trompeta Bb',
    marca: 'Yamaha',
    precio: 124000,
    stock: 6,
    img: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=500',
    categoria: 'Audio y grabación'
  },
  {
    id: 22,
    nombre: 'Shure SM58 Micrófono Vocal',
    marca: 'Shure',
    precio: 45000,
    stock: 15,
    img: 'https://images.unsplash.com/photo-1551817876-0bf1453ef1aa?w=500',
    categoria: 'Audio y grabación'
  },
  {
    id: 23,
    nombre: 'Shure SM57 Micrófono de Instrumento',
    marca: 'Shure',
    precio: 42000,
    stock: 18,
    img: 'https://images.unsplash.com/photo-1516280440614-37939bbacd6a?w=500',
    categoria: 'Audio y grabación'
  },
  {
    id: 24,
    nombre: 'Audio-Technica AT2020',
    marca: 'Audio-Technica',
    precio: 52000,
    stock: 10,
    img: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500',
    categoria: 'Audio y grabación'
  },
  {
    id: 25,
    nombre: 'Focusrite Scarlett 2i2 Gen 4',
    marca: 'Focusrite',
    precio: 89000,
    stock: 8,
    img: 'https://images.unsplash.com/photo-1616149562385-1d84e79478bb?w=500',
    categoria: 'Audio y grabación'
  },
  {
    id: 26,
    nombre: 'Focusrite Scarlett Solo Gen 4',
    marca: 'Focusrite',
    precio: 64000,
    stock: 11,
    img: 'https://images.unsplash.com/photo-1616149562385-1d84e79478bb?w=500',
    categoria: 'Audio y grabación'
  },
  {
    id: 27,
    nombre: 'KRK Rokit 5 G4 (Par)',
    marca: 'KRK',
    precio: 175000,
    stock: 4,
    img: 'https://images.unsplash.com/photo-1615671524827-c1fe3973b648?w=500',
    categoria: 'Audio y grabación'
  },
  {
    id: 28,
    nombre: 'Yamaha HS5 Monitores de Estudio (Par)',
    marca: 'Yamaha',
    precio: 198000,
    stock: 3,
    img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500',
    categoria: 'Audio y grabación'
  },
  {
    id: 29,
    nombre: 'Sennheiser HD 25 Auriculares Dj',
    marca: 'Sennheiser',
    precio: 72000,
    stock: 9,
    img: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500',
    categoria: 'Audio y grabación'
  },
  {
    id: 30,
    nombre: 'Audio-Technica ATH-M50x',
    marca: 'Audio-Technica',
    precio: 85000,
    stock: 7,
    img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500',
    categoria: 'Audio y grabación'
  }
];