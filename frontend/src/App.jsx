import {BrowserRouter,Route,Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Product from "./pages/Product"
import Category from "./pages/Category"
import Footer from "./Components/Footer";
import Cart from "./pages/Cart";
import OrderPlaced from "./pages/OrderPlaced";
export default function App() {
  return (
    <main className="text-tertiary">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blocs" element={<Category category={"blocs"}/>}/>
        <Route path="/agregats" element={<Category category={"agregats"}/>}/>
        <Route path="/aciers" element={<Category category={"aciers"}/>}/>
        <Route path="/coffrage" element={<Category category={"coffrage"}/>}/>
        <Route path="/poudre" element={<Category category={"poudre"}/>}/>
        <Route path="/ceramique" element={<Category category={"ceramique"}/>}/>
        <Route path="/sanitaire" element={<Category category={"sanitaire"}/>}/>
        <Route path="/product" element={<Product/>}>
        <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/final" element={<OrderPlaced/>}/>
        {/*<Route path="/login" element={<Login/>}/>*/}
      </Routes>
      <Footer/>

      </BrowserRouter>
    </main>
  )
}
