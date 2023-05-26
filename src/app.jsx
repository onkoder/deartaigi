import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

class Blog extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (<div>

            carregando...
        </div>)
    }
}


const root = ReactDOM.createRoot(document.getElementById("app"))
root.render(React.createElement(
    Blog
));