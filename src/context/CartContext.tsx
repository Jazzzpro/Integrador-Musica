// CreateContext: contexto para el carrito. UseContext en componentes que lo necesiten.
import { useState, createContext, useContext} from 'react'
import type { Product } from '../data/products.ts' 


// Tipado del contexto
interface CarritoItem extends Product {
 quantity: number
}


//Genero una interface del carrito para tipar el contexto, con las funciones que va a tener el carrito y el estado del mismo
interface CarritoContextType {
 carrito: CarritoItem[]
 addToCart: (product: Product, quantity: number) => void
 removeItem: (id: number) => void
 emptyCart: () => void
 getItemQuantity: () => number
 getTotalPrice: () => number
}


const CarritoContext = createContext<CarritoContextType | undefined>(undefined)


// Hook para utilizar el carrito
export const useCarritoContext = (): CarritoContextType => {
 const context = useContext(CarritoContext)
 if (!context) throw new Error('useCarritoContext debe usarse dentro de CarritoProvider')
 return context
}


export const CarritoProvider = ({ children }: { children: React.ReactNode }) => {
 // Estado del carrito
 const [carrito, setCarrito] = useState<CarritoItem[]>([])


 // Verifica si un producto ya está en el carrito
 const isInCart = (id: number): boolean => carrito.some(p => p.id === id)


 // Agrega o actualiza la cantidad de un producto en el carrito
const addToCart = (product: Product, quantity: number): void => {
  if (quantity <= 0) return console.warn('Cantidad inválida')

  const idProd = carrito.findIndex(p => p.id === product.id)
  const cantidadEnCarrito = isInCart(product.id) ? carrito[idProd].quantity : 0

  // Valida que la cantidad nueva no supere el stock disponible
  if (quantity > product.stock - cantidadEnCarrito) {
    return console.warn('No hay stock suficiente')
  }

  if (isInCart(product.id)) {
    const aux = [...carrito]
    aux[idProd] = { ...aux[idProd], quantity: cantidadEnCarrito + quantity }
    setCarrito(aux)
  } else {
    setCarrito(aux => [...aux, { ...product, quantity }])
  }
}
 
 // Elimina un producto del carrito por id
 const removeItem = (id: number): void => setCarrito(aux => aux.filter(p => p.id !== id))


 // Vacía el carrito
 const emptyCart = (): void => setCarrito([])


 // Suma la cantidad de todos los productos en el carrito
 const getItemQuantity = (): number => carrito.reduce((acum, p) => acum + p.quantity, 0)


 // Suma el precio total de todos los productos en el carrito
 const getTotalPrice = (): number => carrito.reduce((acum, p) => acum + p.precio * p.quantity, 0)


 return (
   <CarritoContext.Provider value={{ carrito, addToCart, removeItem, emptyCart, getItemQuantity, getTotalPrice }}>
     {children}
   </CarritoContext.Provider>
 )
}
