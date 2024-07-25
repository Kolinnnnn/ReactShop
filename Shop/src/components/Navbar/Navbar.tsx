import React from "react"
import { SearchBar } from "../SearchBar/SearchBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

import './Navbar.css'
export function Navbar() {
    return(
        <ul>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><SearchBar></SearchBar></li>
            <li><a href="/login"><FontAwesomeIcon icon={faRightToBracket} /></a></li>
        </ul>
    )
  }