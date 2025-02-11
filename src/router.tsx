import { Route, Routes } from "react-router-dom";
import Categorias from "./Pages/Categorias";
import ProductPage from "./Pages/Product";
import Home from "./Pages/Home";
import Promocoes from "./Pages/Promocoes";



const Rotas = ()=> (

  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/categorias" element={<Categorias/>}/>
    <Route path="/promocoes" element={<Promocoes/>}/>
    <Route path="/product/:id" element={<ProductPage/>}/>
  </Routes>
)

export default Rotas;
