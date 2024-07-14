import React from "react"
import { SearchBar } from "../SearchBar/SearchBar"

import './Navbar.css'
export function Navbar() {
    return(
        <ul>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><SearchBar></SearchBar></li>
        </ul>
    )
  }