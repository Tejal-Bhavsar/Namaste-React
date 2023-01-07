const heading = React.createElement("h1", null, "JAY HIND")
const heading2 = React.createElement("h1", null, "VANDE MATARAM")

const container = React.createElement("div", {className: "India"}, [heading, heading2])
        
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(container);