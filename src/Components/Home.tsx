import ProductList from "./ProductList.tsx";

const Home = () => {
  return (
    <div className="home-layout">
      <header className="store-header text-center py-4 bg-light">
        <h1 className="store-brand__name">Al palo</h1>
      </header>

      <div className="home-content container py-4">
        <main className="home-main">
          <ProductList />
        </main>
      </div>
    </div>
  );
};

export default Home;