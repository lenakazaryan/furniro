import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Description from "./components/Description/Description";
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";
import ProductSpecification from "./components/ProductSpecification/ProductSpecification";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <ProductSpecification />
      <Description />
      <RelatedProducts />
      <Footer />
    </div>
  );
}

export default App;
