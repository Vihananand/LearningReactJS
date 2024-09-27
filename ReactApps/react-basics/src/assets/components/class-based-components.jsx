// Class based components are not used anymore and the companies that used the class components are also shifting to functional components

import { Component } from "react";

class ClassBasedComponents extends Component {
    render(){
        return(
            <div>
                <h3>Class Based Component</h3>
            </div>
        );
    }
}

export default ClassBasedComponents; //We always need to export class component so that it can be imported in App.jsx