import React from "react"
import { Route,Routes } from "react-router-dom"
import Login from "./Login/Login"
import Register from "./Register/Register"
import Users from "./Users/Users"
import ListProducts from "./ListProducts/ListProducts"
import Checkout from "./checkout/checkout"
import CommonLayout from "./Layout/CommonLayout"
function App() {
  return (
    <>
      <Routes>
         <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          
          <Route element={<CommonLayout />}>
          <Route path="/products" element={<ListProducts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/checkout" element={<Checkout/>} />
          </Route>
      </Routes>
    </>
  )
}
export default App
