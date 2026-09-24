import React, { useState } from 'react';
import PublicLayout from './PublicLayout.tsx';
import { productos as initialProductos, type Product } from '../data/products.ts';

const ModuloAdmin: React.FC = () => {
  const [productList, setProductList] = useState<Product[]>(initialProductos);
  const [searchTerm, setSearchTerm] = useState('');
  const [newProduct, setNewProduct] = useState({
    nombre: '',
    marca: '',
    precio: 0,
    stock: 0,
    categoria: 'Guitarras eléctricas',
    img: '/public/images/logo.png',
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.nombre || !newProduct.marca || newProduct.precio <= 0) {
      alert('Por favor complete todos los campos obligatorios correctamente.');
      return;
    }
    const createdProduct: Product = {
      id: Date.now(),
      ...newProduct,
    };
    setProductList([createdProduct, ...productList]);
    setNewProduct({
      nombre: '',
      marca: '',
      precio: 0,
      stock: 0,
      categoria: 'Guitarras eléctricas',
      img: '/public/images/logo.png',
    });
    alert('Producto agregado exitosamente.');
  };

  const handleDeleteProduct = (id: number) => {
    if (window.confirm('¿Está seguro de eliminar este producto?')) {
      setProductList(productList.filter((p) => p.id !== id));
    }
  };

  const filteredProducts = productList.filter(
    (p) =>
      p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.marca.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PublicLayout>
      <div className="container py-4">
        <h2 className="mb-4">Módulo de Administración</h2>

        {/* Resumen / Estadísticas */}
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card bg-dark text-white p-3 mb-3 border-secondary">
              <h5>Total Productos</h5>
              <p className="fs-3 fw-bold mb-0">{productList.length}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-dark text-white p-3 mb-3 border-secondary">
              <h5>Stock Total</h5>
              <p className="fs-3 fw-bold mb-0">
                {productList.reduce((acc, curr) => acc + curr.stock, 0)}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-dark text-white p-3 mb-3 border-secondary">
              <h5>Categorías</h5>
              <p className="fs-3 fw-bold mb-0">
                {new Set(productList.map((p) => p.categoria)).size}
              </p>
            </div>
          </div>
        </div>

        {/* Formulario para Agregar Producto */}
        <div className="card bg-dark text-white p-4 mb-4 border-secondary">
          <h4 className="card-title mb-3">Agregar Nuevo Producto</h4>
          <form onSubmit={handleAddProduct} className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                value={newProduct.nombre}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, nombre: e.target.value })
                }
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Marca</label>
              <input
                type="text"
                className="form-control"
                value={newProduct.marca}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, marca: e.target.value })
                }
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Precio ($)</label>
              <input
                type="number"
                className="form-control"
                value={newProduct.precio || ''}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    precio: Number(e.target.value),
                  })
                }
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Stock</label>
              <input
                type="number"
                className="form-control"
                value={newProduct.stock || ''}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    stock: Number(e.target.value),
                  })
                }
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Categoría</label>
              <select
                className="form-select"
                value={newProduct.categoria}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, categoria: e.target.value })
                }
              >
                <option value="Guitarras eléctricas">Guitarras eléctricas</option>
                <option value="Guitarras acústicas">Guitarras acústicas</option>
                <option value="Bajos eléctricos">Bajos eléctricos</option>
                <option value="Teclados y pianos">Teclados y pianos</option>
                <option value="Baterías y percusión">Baterías y percusión</option>
                <option value="Audio y grabación">Audio y grabación</option>
              </select>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Guardar Producto
              </button>
            </div>
          </form>
        </div>

        {/* Búsqueda y Lista de Productos */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4>Listado de Productos</h4>
          <input
            type="text"
            className="form-control w-50"
            placeholder="Buscar por nombre, marca o categoría..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className="table-responsive">
          <table className="table table-dark table-striped align-middle">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Marca</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.nombre}</td>
                  <td>{p.marca}</td>
                  <td>{p.categoria}</td>
                  <td>${p.precio.toLocaleString('es-AR')}</td>
                  <td>{p.stock}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDeleteProduct(p.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PublicLayout>
  );
};

export default ModuloAdmin;
