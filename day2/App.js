import React from "react"
import  ReactDOM from "react-dom/client"
import Header from './Header'
import SeachBar from './Searchbar'

const heading = React.createElement("h1", null, "JAY HIND")
const heading2 = React.createElement("h1", null, "VANDE MATARAM")

const container = React.createElement("div", {className: "India"}, [heading, heading2])

//JSX
const headings = <h1>Namaste React</h1> 
            
//Headder component
const HeaderComp = () => {
    return <h1> this is header comp</h1>
}

const HeaderCompFun  = () => {
    return <h1> this is header comp</h1>
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Header />);