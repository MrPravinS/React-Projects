function customRender (createElement,container){
    /*const domElement = document.createElement(createElement.type)
    domElement.innerHTML = createElement.children
    domElement.setAttribute("href",createElement.props.href)
    domElement.setAttribute("target",createElement.props.target)

    container.appendChild(domElement)*/
    
}
const createElement = {     // this is how react babel is compile our jsx code in simple js code and render on the body
    type:'a',
    props:{
        href:"https://google.com",
        target:'_blank'
    },
    children:"Click here to visit Google"
}

const mainContainer = document.querySelector("#root")

customRender(createElement,mainContainer)