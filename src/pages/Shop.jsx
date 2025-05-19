import itemList from "../assets/items"
import { ShopCard } from "../components/Card"
import { useContext, useState, useEffect } from "react"
import { CartContext } from "../context/CartContext"
import { NavLink } from 'react-router-dom'

const Shop = () => {
    const { items, setItems } = useContext(CartContext)

    const [itemCount, setItemCount] = useState(0)

    useEffect(() => {
        const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)
        setItemCount(totalItems)
    }, [items])

    useEffect(() => {
        document.title = 'Shop'
    }, [])

    return (
        <>
            <div className="py-2">
                <h1 className="text-5xl font-ubuntu text-center text-white">Shop</h1>
            </div>
            <div className="fixed top-0 right-0 p-4 select-none hover:cursor-pointer">
                <NavLink to="/shop/cart">
                    <div className="relative">
                        {/* <span className="material-icons-outlined text-white" style={{ fontSize: "40px" }}>
                        shopping_cart
                    </span> */}
                        <img src="/shop/shopping_cart.svg" alt="" className="w-9" />
                        <div className="absolute bottom-1 -left-1 w-4 h-4 bg-gray-500 rounded-full flex items-center justify-center text-white">
                            <span className="text-xs font-bold">{itemCount}</span>
                        </div>
                    </div>
                </NavLink>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10 w-[65%] mx-auto overflow-auto h-[calc(100vh-5rem)]">
                {itemList.map((item) => {
                    return (
                        <div className="m-3">
                            <ShopCard
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                price={item.price}
                                image={item.image}
                            />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Shop