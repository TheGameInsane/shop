import { Route, Routes } from "react-router-dom"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"

function App() {

  return (
    <>
      <Routes>
        <Route path="/shop" element={<Shop/>} />
        <Route path="/shop/cart" element={<Cart/>} />
      </Routes>
    </>
  )
}

export default App
