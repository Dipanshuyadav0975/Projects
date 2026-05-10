import Banner from "./sections/Banner"
import Category from "./sections/Category"
import Footer from "./sections/Footer"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Insta from "./sections/Insta"
import Productsgrid from "./sections/Productsgrid"

import Services from "./sections/Services"
import Types from "./sections/Types"
import Reviews from './sections/Reviews';
import About from "./pages/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./sections/Login";
import ProtectedRoute from "./sections/ProtectedRoute";
// import Home from "./Home";
import Cart from "./pages/Cart";



export default function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <>
                  <Header />
                  <Hero />
                  <Category />
                  <Types />
                  <Services />
                  <Productsgrid />
                  <Banner />
                  <Reviews />
                  <Insta />
                  <Footer />
                </>
              </ProtectedRoute>
            }
          />

        </Routes>
      </BrowserRouter>
    </>
  )
}