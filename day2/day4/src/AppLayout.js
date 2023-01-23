import React from "react"
import  ReactDOM from "react-dom/client"
import Body from "./Components/Body"
import Header from "./Components/Header"
import '../src/AppLayout.css'
import Footer from "./Components/Footer"

const AppLayout = () => {
    return(
        <>
        <Header />
        <Body />
        <Footer />
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<AppLayout />);