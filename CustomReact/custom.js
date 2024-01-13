function customRender(reactElement,container){
    const element = document.createElement(reactElement.type);
    element.innerHTML = reactElement.text;
    // element.setAttribute('href',reactElement.props.href)
    // element.setAttribute('target',reactElement.props.target)
    for (const prop in reactElement.props) {
       if(prop==='children') continue;
       element.setAttribute(prop,reactElement.props[prop]);
    }
    container.appendChild(element);
}

const reactElement = {
    type:'a',
    props:{
        href:"https://www.google.com",
        target : '_blank'
    },
    text:'visit google'
}

const container = document.getElementById('root');
customRender(reactElement,container)