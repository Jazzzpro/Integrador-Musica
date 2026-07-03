


export interface Product {
  id: number;
  nombre: string;
  marca: string;
  precio: number;
  stock: number;
  img: string;
  categoria: string;
}

export const productos: Product[] = [
  {
    id: 1,
    nombre: 'Fender Stratocaster American Professional II',
    marca: 'Fender',
    precio: 289999,
    stock: 5,
    img: '/public/images/Fender Stratocaster American Professional II.png',
    categoria: 'Guitarras eléctricas'
  },
  {
    id: 2,
    nombre: 'Gibson Les Paul Standard 60s',
    marca: 'Gibson',
    precio: 415000,
    stock: 3,
    img: '/public/images/Gibson Les Paul Standard 60s.png',
    categoria: 'Guitarras eléctricas'
  },
  {
    id: 3,
    nombre: 'Fender Jazz Bass American Professional II',
    marca: 'Fender',
    precio: 245000,
    stock: 4,
    img: '/public/images/Fender Jazz Bass American Professional II.png',
    categoria: 'Bajos eléctricos'
  },
  {
    id: 4,
    nombre: 'Gibson SG Standard Heritage Cherry',
    marca: 'Gibson',
    precio: 380000,
    stock: 2,
    img: '/public/images/Gibson SG Standard Heritage Cherry.png',
    categoria: 'Guitarras eléctricas'
  },
  {
    id: 5,
    nombre: 'Epiphone Les Paul Custom',
    marca: 'Epiphone',
    precio: 135000,
    stock: 6,
    img: '/public/images/Epiphone Les Paul Custom.png',
    categoria: 'Guitarras eléctricas'
  },
  {
    id: 6,
    nombre: 'Ibanez RG421EX',
    marca: 'Ibanez',
    precio: 95000,
    stock: 5,
    img: '/public/images/Ibanez RG421EX.png',
    categoria: 'Guitarras eléctricas'
  },
  {
    id: 7,
    nombre: 'Fender CD-60S Dreadnought',
    marca: 'Fender',
    precio: 65000,
    stock: 8,
    img: '/public/images/Fender CD-60S Dreadnought.png',
    categoria: 'Guitarras acústicas'
  },
  {
    id: 8,
    nombre: 'Yamaha C40 Guitarra Clásica',
    marca: 'Yamaha',
    precio: 38000,
    stock: 12,
    img: '/public/images/Yamaha C40 Guitarra Clásica.png',
    categoria: 'Guitarras acústicas'
  },
  {
    id: 9,
    nombre: 'Taylor 114ce Acoustic-Electric',
    marca: 'Taylor',
    precio: 210000,
    stock: 3,
    img: '/public/images/Taylor 114ce Acoustic-Electric.png',
    categoria: 'Guitarras acústicas'
  },
  {
    id: 10,
    nombre: 'Yamaha TRBX174 Black',
    marca: 'Yamaha',
    precio: 78000,
    stock: 7,
    img: '/public/images/Yamaha TRBX174 Black.png',
    categoria: 'Bajos eléctricos'
  },
  {
    id: 11,
    nombre: 'Music Man StingRay Special',
    marca: 'Music Man',
    precio: 340000,
    stock: 2,
    img: '/public/images/Music Man StingRay Special.png',
    categoria: 'Bajos eléctricos'
  },
  {
    id: 12,
    nombre: 'Roland FP-30X Piano Digital',
    marca: 'Roland',
    precio: 329999,
    stock: 4,
    img: '/public/images/Roland FP-30X Piano Digital.png',
    categoria: 'Teclados y pianos'
  },
  {
    id: 13,
    nombre: 'Yamaha P-45 Piano Digital',
    marca: 'Yamaha',
    precio: 195000,
    stock: 6,
    img: '/public/images/Yamaha P-45 Piano Digital.png',
    categoria: 'Teclados y pianos'
  },
  {
    id: 14,
    nombre: 'Korg Minilogue XD Sintetizador',
    marca: 'Korg',
    precio: 210000,
    stock: 5,
    img: '/public/images/Korg Minilogue XD Sintetizador.png',
    categoria: 'Teclados y pianos'
  },
  {
    id: 15,
    nombre: 'Nord Stage 4 88',
    marca: 'Nord',
    precio: 750000,
    stock: 1,
    img: '/public/images/Nord Stage 4 88.png',
    categoria: 'Teclados y pianos'
  },
  {
    id: 16,
    nombre: 'Pearl Export EXX 5 Piezas Nitro',
    marca: 'Pearl',
    precio: 198500,
    stock: 2,
    img: '/public/images/Pearl Export EXX 5 Piezas Nitro.png',
    categoria: 'Baterías y percusión'
  },
  {
    id: 17,
    nombre: 'Yamaha Stage Custom Birch',
    marca: 'Yamaha',
    precio: 310000,
    stock: 3,
    img: '/public/images/Yamaha Stage Custom Birch.png',
    categoria: 'Baterías y percusión'
  },
  {
    id: 18,
    nombre: 'Mapex Mars Birch 5 Cuerpos',
    marca: 'Mapex',
    precio: 165000,
    stock: 4,
    img: '/public/images/Mapex Mars Birch 5 Cuerpos.png',
    categoria: 'Baterías y percusión'
  },
  {
    id: 19,
    nombre: 'Roland TD-17KVX V-Drums',
    marca: 'Roland',
    precio: 450000,
    stock: 2,
    img: '/public/images/Roland TD-17KVX V-Drums.png',
    categoria: 'Baterías y percusión'
  },
  {
    id: 20,
    nombre: 'Alesis Nitro Max Kit',
    marca: 'Alesis',
    precio: 115000,
    stock: 6,
    img: '/public/images/Alesis Nitro Max Kit.png',
    categoria: 'Baterías y percusión'
  },
  {
    id: 21,
    nombre: 'Yamaha YTR-2330 Trompeta Bb',
    marca: 'Yamaha',
    precio: 124000,
    stock: 6,
    img: '/public/images/Yamaha YTR-2330 Trompeta Bb.png',
    categoria: 'Audio y grabación'
  },
  {
    id: 22,
    nombre: 'Shure SM58 Micrófono Vocal',
    marca: 'Shure',
    precio: 45000,
    stock: 15,
    img: '/public/images/Shure SM58 Micrófono Vocal.png',
    categoria: 'Audio y grabación'
  },
  {
    id: 23,
    nombre: 'Shure SM57 Micrófono de Instrumento',
    marca: 'Shure',
    precio: 42000,
    stock: 18,
    img: '/public/images/Shure SM57 Micrófono de Instrumento.png',
    categoria: 'Audio y grabación'
  },
  {
    id: 24,
    nombre: 'Audio-Technica AT2020',
    marca: 'Audio-Technica',
    precio: 52000,
    stock: 10,
    img: '/public/images/Audio-Technica AT2020.png',
    categoria: 'Audio y grabación'
  },
  {
    id: 25,
    nombre: 'Focusrite Scarlett 2i2 Gen 4',
    marca: 'Focusrite',
    precio: 89000,
    stock: 8,
    img: '/public/images/Focusrite Scarlett 2i2 Gen 4.png',
    categoria: 'Audio y grabación'
  },
  {
    id: 26,
    nombre: 'Focusrite Scarlett Solo Gen 4',
    marca: 'Focusrite',
    precio: 64000,
    stock: 11,
    img: '/public/images/Focusrite Scarlett Solo Gen 4.png',
    categoria: 'Audio y grabación'
  },
  {
    id: 27,
    nombre: 'KRK Rokit 5 G4 (Par)',
    marca: 'KRK',
    precio: 175000,
    stock: 4,
    img: '/public/images/KRK Rokit 5 G4 (Par).png',
    categoria: 'Audio y grabación'
  },
  {
    id: 28,
    nombre: 'Yamaha HS5 Monitores de Estudio (Par)',
    marca: 'Yamaha',
    precio: 198000,
    stock: 3,
    img: '/public/images/Yamaha HS5 Monitores de Estudio (Par).png',
    categoria: 'Audio y grabación'
  },
  {
    id: 29,
    nombre: 'Sennheiser HD 25 Auriculares Dj',
    marca: 'Sennheiser',
    precio: 72000,
    stock: 9,
    img: '/public/images/Sennheiser HD 25 Auriculares Dj.png',
    categoria: 'Audio y grabación'
  },
  {
    id: 30,
    nombre: 'Audio-Technica ATH-M50x',
    marca: 'Audio-Technica',
    precio: 85000,
    stock: 7,
    img: '/public/images/Audio-Technica ATH-M50x.png',
    categoria: 'Audio y grabación'
  }
];