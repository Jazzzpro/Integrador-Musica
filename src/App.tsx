import {CarritoProvider} from './context/CartContext';

const App = () => {
    return (
        <>
        <CarritoProvider>
            {/* Aquí irían los componentes de la aplicación que necesitan acceder al contexto del carrito, como el componente de productos, el carrito de compras, etc. */}
        </CarritoProvider>
        </>
    );
    };

    export default App;