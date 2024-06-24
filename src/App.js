import logo from './logo.svg';
import Intro from "./components/intro/Intro.jsx"
import About from "./components/about/About.jsx"
import Contact from "./components/contact/Contact.jsx"
import ProductList from "./components/productList/ProductList.jsx"
import Header from "./components/header/Header.jsx"
function App() {
  return (
    <div className="App">
     <Header/>
     <Intro id="intro"/>
     <About id="about"/>
     <ProductList id="product_list"/>
     <Contact id="contact"/>

    </div>
  );
}

export default App;
