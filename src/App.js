import Nav from './components/Nav/Nav';
import Header from "./components/Header/Header";
import ProductSpecification from './components/ProductSpecification/ProductSpecification';
import Description from "./components/Description/Description";
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <ProductSpecification/>
      <Description/>
      <RelatedProducts/>
    </div>
  );
}

export default App;
