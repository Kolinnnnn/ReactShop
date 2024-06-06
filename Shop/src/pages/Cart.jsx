import { useContext } from "react";
import { Cart } from "../components/Cart/Cart"
import { ProductContext } from "../ProductContext";

export function CartPage() {
    const contextValue = useContext(ProductContext)
    contextValue.showProducts()
    return <div><Cart></Cart></div>
}