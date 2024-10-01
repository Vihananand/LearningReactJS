// Class based components are not used anymore and the companies that used the class components are also shifting to functional components

import { Component } from "react";

class ClassBasedComponents extends Component {

    state = {
        showText: false,
    };

    handleClick = ()=>{
        this.setState({
            showText: !this.state.showText,
        })
    }

    render(){
        return(
            <div className='flex flex-col justify-center items-center'>
                {
                    this.state.showText ? (<h3 className='text-white text-3xl font-bold'>Class Based Component</h3>) : null
                }
                <button onClick={this.handleClick} className='border-2 mb-10 mt-8 rounded-2xl text-white p-3'>Click Me!</button>
            </div>
        );
    }
}

export default ClassBasedComponents; //We always need to export class component so that it can be imported in App.jsx