# Al Palo

Ecommerce de instrumentos musicales hecho para el Trabajo Práctico Integrador N°1 de Desarrollo IV (React con TSX y UseContext).

Integrantes: Jazmín Rodríguez, Tiziano Lopez y Joaquín Shugt.

## Qué hace

- Muestra un catálogo de instrumentos (guitarras, bajos, teclados, baterías, audio) con imagen, marca, precio y stock.
- Se puede elegir la cantidad y agregar productos al carrito.
- El carrito muestra los productos agregados, el subtotal de cada uno y el total. Se pueden sacar productos o vaciar todo.
- Tiene un botón de "Finalizar compra" que simula el pedido y muestra un cartelito de compra exitosa.
- Página de contacto con un formulario (nombre, mail y mensaje).
- El carrito se maneja con Context API (CartContext) para que cualquier componente pueda acceder sin pasar props de un lado a otro.

## Tecnologías

- React + TypeScript (TSX)
- Vite
- React Router DOM
- Bootstrap
- Context API / useContext

## Cómo correrlo

Clonar el repo y entrar a la carpeta:

```
git clone https://github.com/Jazzzpro/Integrador-Musica.git
cd Integrador-Musica
```

Instalar las dependencias:

```
npm install
```

Levantar el modo desarrollo:

```
npm run dev
```

Esto abre el proyecto en `http://localhost:5173` (o el puerto que muestre la consola).

Para generar el build de producción:

```
npm run build
```

## Estructura

```
src/
 ├─ context/CartContext.tsx   -> contexto del carrito
 ├─ Components/               -> Header, Footer, Home, Products, ProductList, ProductCard, Cart, Contact
 ├─ data/products.ts          -> catálogo de productos
 └─ App.tsx / main.tsx        -> rutas y punto de entrada
```