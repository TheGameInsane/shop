import { NavLink } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import { CartContext } from "../context/CartContext"
import { CartCard } from "../components/Card"
import itemList from "../assets/items"

const Cart = () => {
    const { items, setItems } = useContext(CartContext)
    useEffect(() => {
        document.title = `(${items.length})Cart`
    }, [items])

    return (
        <>
            <div>
                <div className="py-2">
                    <h1 className="text-5xl font-ubuntu text-center text-white">Cart</h1>
                </div>
                <div className={`fixed top-0 left-0 p-4 select-none hover:cursor-pointer ${items.length < 1 ? 'hidden' : 'block'}`}>
                    <NavLink to="/">
                        <div className="relative flex">
                            <img src="./return.svg" alt="" className="w-9 inline" /><span className="text-white font-ubuntu text-2xl">Back to Shop</span>
                        </div>
                    </NavLink>
                </div>
                <div >
                    {items.length >= 1 ?
                        (
                            <>
                                <div className="grid grid-cols-[3fr_1fr] h-[calc(100vh-5rem)] grid-rows-1">
                                    <div className="col-start-2 row-start-1 relative">
                                        <h1 className="text-white text-5xl font-bold">Total</h1>
                                        <div className="absolute top-[10%] right-0 transform -translate-x-1/2">
                                            {items.map(({ id, quantity }, index) => {
                                                let itemInfo = itemList.find((item) => item.id === id)
                                                return (
                                                    <h1 className="text-white text-2xl my-2"><span className={`${quantity > 9 ? 'hidden' : 'inline'}`}>0</span>{quantity} x ₹{itemInfo.price}</h1>
                                                )
                                            })}
                                        </div>
                                        <h1 className="text-white text-4xl font-ubuntu absolute bottom-0 right-0 transform -translate-x-1/2 -translate-y-1/2">
                                            ₹{items.reduce((a, item) => {
                                                let itemInfo = itemList.find((itemObj) => itemObj.id === item.id)
                                                return a + (itemInfo.price * item.quantity)
                                            }, 0)}
                                        </h1>
                                        <div className="absolute bottom-0 left-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 p-2 rounded-2xl hover:cursor-pointer hover:scale-110 transition-all ease-in-out duration-150" onClick={() => {setItems([])}}><h1 className="text-white text-2xl font-ubuntu font-semibold">Clear Cart</h1></div>
                                    </div>
                                    <div className="col-start-1 overflow-auto row-start-1">
                                        {items.map(({ id, quantity }, index) => {
                                            let itemInfo = itemList.find((item) => item.id === id)
                                            return (
                                                <CartCard name={itemInfo.name} price={itemInfo.price} image={itemInfo.image} id={itemInfo.id} index={index} quantity={quantity} />
                                            )
                                        })}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex flex-col justify-around items-center h-full select-none">
                                    <h1 className="text-white font-wsans m-5">No items in the cart.</h1>
                                    <NavLink to='/'>
                                        <div className="flex items-center hover:cursor-pointer hover:scale-x-105 transition-all duration-100 ease-in-out">
                                            <img src="./shopping_cart.svg" alt="" className="w-30 inline" />
                                            <span className="text-white font-wsans text-6xl">Let's get Shopping!</span>
                                        </div>
                                    </NavLink>
                                </div>
                            </>
                        )}
                </div>
            </div>
        </>
    )
}

export default Cart