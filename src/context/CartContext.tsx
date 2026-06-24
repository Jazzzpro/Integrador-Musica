//CreateContext sirve para crear un contexto para el carrito y una función para agregar productos al carrito. useState se utiliza para manejar el estado del carrito,
//  que es un array de objetos que representan los productos y sus cantidades. El contexto proporciona funciones para agregar, eliminar, actualizar cantidades y calcular precios en el carrito de compras.
import {useState, createContext, useContext} from 'react';

const CartContext = createContext();
// Creación del contexto del carrito de compras utilizando createContext. Este contexto se utilizará para compartir el estado del carrito y las funciones relacionadas a lo largo de la aplicación.

// Definición de la interfaz para el contexto del carrito, que incluye los ítems del carrito y las funciones para agregar, eliminar, actualizar cantidades y calcular precios.
export const useCarritoContext = () => useContext(CarritoContext); 
//Hook para utilizar el carrito 

export const CarritoProvider = {props} => {
    const [carrito, setCarrito] = useState([]);
    //Estado del carrito, que es un array de objetos que representan los productos y sus cantidades. El estado inicial es un array vacío.
    const isInCart = (id) => {
        return carrito.some((producto) => producto.id === id);
    }

    const addToCart = (product, quantity) => {
        if (isInCart(product.id)) { //si el producto ya está en el carrito, se actualiza la cantidad sumando la nueva cantidad a la existente.
            const indice = carrito.findIndex(producto => producto.id === product.id); //Encuentra el índice del producto en el carrito
                if (indice !== -1) { //Si el producto se encuentra en el carrito
                    const newCarrito = [...carrito]; //Crea una copia del carrito actual
                    if(quantity > product.stock){
                        console.log("No hay suficiente stock disponible"); //Muestra un mensaje de error si la cantidad solicitada supera el stock disponible
                    }else {
                        newCarrito[indice].quantity = quantity; //Actualiza la cantidad del producto en el carrito sumando la nueva cantidad a la existente
                        setCarrito(newCarrito); //Actualiza el estado del carrito con la nueva cantidad
                    }
                    
                }else { //si el producto no está en el carrito, se agrega un nuevo ítem al carrito con el producto y la cantidad especificada.
            const newProduct = {...product, quantity}; //operador sirve para hacer copias
            setCarrito([...carrito, newProduct]); //Agregar el nuevo producto al carrito
        }
    }
    const removeItem = (id) => {
        setCarrito(carrito.filter(producto => producto.id !== id)); //Elimina un producto del carrito filtrando el array y manteniendo solo los productos cuyo id no coincide con el id proporcionado. Sacame a todos menos a lo que no sean x
        }

    const emptyCart = () => { //funcion para vaciar el carrito
        setCarrito([]); //Vacía el carrito estableciendo el estado del carrito a un array vacío.
    }
    const getItemQuantiy = () => {
        return carrito.reduce((acum, producto) => acum + producto.quantity, 0);//Calcula la cantidad total de ítems en el carrito sumando las cantidades de cada producto utilizando reduce.
    }
    const getTotalPrice = () => {
        return carrito.reduce((acum, producto) => acum + producto.price * producto.quantity, 0); //Calcula el precio total del carrito sumando el precio de cada producto multiplicado por su cantidad utilizando reduce.
    }
    return (

    )
}
}