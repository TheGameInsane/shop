import { useContext, useState, useEffect } from "react"
import { CartContext } from "../context/CartContext"

export const ShopCard = ({ name, price, image, id }) => {
    const [quantity, setQuantity] = useState(0)
    const { items, setItems } = useContext(CartContext)

    useEffect(() => {
        const item = items.find((item) => item.id === id)
        if (item) {
            setQuantity(item.quantity)
        }
    }, [items, quantity])

    const handleIncrement = () => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        )
    }
    const handleDecrement = () => {
        if (quantity > 1) {
            setItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
            )
        } else {
            setQuantity(0)
            setItems((prevItems) => prevItems.filter((item) => item.id !== id))
        }
    }
    const handleRemove = () => {
        setQuantity(0)
        setItems((prevItems) => prevItems.filter((item) => item.id !== id))
    }

    const handleAddToCart = () => {
        const item = {
            id: id,
            quantity: quantity + 1,
        }
        setItems((prevItems) => [...prevItems, item])
    }

    return (
        <>
            <div className="h-full rounded-4xl overflow-hidden hover:scale-101 transition-all duration-100 ease-in-out bg-white flex flex-col items-start">
                <img src={image} alt={name.slice(0, 15)} className="w-[100%] m-auto" />
                <div className="flex flex-col items-start justify-between h-full">
                    <div>
                        <h1 className="text-2xl p-2 mx-5">{name}</h1>
                        <p className="p-2 mx-5">₹{price}</p>
                    </div>
                    <div className="mx-5 mb-5">
                        <button className={`p-2 rounded-2xl bg-amber-100 hover:cursor-pointer hover:border-black border border-white ${quantity === 0 ? "block" : "hidden"}`} onClick={handleAddToCart}>Add to Cart</button>
                        <div className={`${quantity !== 0 ? "block" : "hidden"} flex items-center justify-between`}>
                            <button onClick={handleRemove}><img src="./delete_black.svg" alt="" className="w-10 bg-gray-100 p-2 rounded-2xl hover:border-black border border-white mx-2" /></button>
                            <button onClick={handleDecrement}><img src="./remove_black.svg" alt="" className="w-10 bg-gray-100 p-2 rounded-2xl hover:border-black border border-white" /></button>
                            <span className="px-2">{quantity}</span>
                            <button onClick={handleIncrement}><img src="./add_black.svg" alt="" className="w-10 bg-gray-100 p-2 rounded-2xl hover:border-black border border-white" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const CartCard = ({ index, name, price, image, id, quantity }) => {
    const { items, setItems } = useContext(CartContext)

    const handleIncrement = () => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        )
    }
    const handleDecrement = () => {
        if (quantity > 1) {
            setItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
            )
        } else {
            setItems((prevItems) => prevItems.filter((item) => item.id !== id))
        }
    }
    const handleRemove = () => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id))
    }

    return (
        <>
            <div className="rounded-4xl overflow-hidden bg-white flex items-center m-3">
                <div className="flex items-center justify-around h-full">
                    <h1 className="p-2">{index + 1}</h1>
                    <img src={image} alt={name.slice(0, 15)} className="w-[50vh] m-auto" />
                </div>
                <div className="flex items-center justify-between w-full h-full">
                    <div>
                        <h1 className="text-2xl md:block hidden p-2 mx-5">{name}</h1>
                        <p className="p-2 mx-5">₹{price}</p>
                    </div>
                    <div className="mx-5 flex items-center justify-between">
                        <button onClick={handleRemove}><img src="./delete_black.svg" alt="" className="w-10 bg-gray-100 p-2 rounded-2xl hover:border-black border border-white mx-2" /></button>
                        <button onClick={handleDecrement}><img src="./remove_black.svg" alt="" className="w-10 bg-gray-100 p-2 rounded-2xl hover:border-black border border-white mx-2" /></button>
                        <span className="px-2">{quantity}</span>
                        <button onClick={handleIncrement}><img src="./add_black.svg" alt="" className="w-10 bg-gray-100 p-2 rounded-2xl hover:border-black border border-white mx-2" /></button>
                    </div>
                </div>
            </div>
        </>
    )
}