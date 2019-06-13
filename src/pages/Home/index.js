import React, { Component } from 'react';
import './style.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1>React Tutorial</h1>
                <p>The first thing you're gonna wanna do is download create-react-app from npm like this: <span className="highlight" >npm i -g create-react-app</span></p>
                <p>To start your new app, you use the command: <span className="highlight">create-react-app 'your-project-name' </span> </p>
                <p>Some other npm packges you might need or want are <span className="highlight">React Router DOM</span> and <span className="highlight">Redux</span></p>
                <h1 style={{paddingTop: '36px'}}>A Couple Things</h1>
                <p>
                    1. React in my mind is a functional approach to we programming, so if you want to do something fancy, you'll probably use a function. 
                    There are no directives like v-for or ng-if, you handle all those things yourself programatically. It's not too hard but it helps to have someone show you.
                </p>
                <p>
                    2. There are two types of components, Pure Funcitonal and a React Component. To make a React component, you need to include React and Component from react
                    at the top of your file. A React Component is an object, so everything in it is a data member or method that you can call. It 
                    has a state, has access to lifecycle hooks and also can have methods in contained in the object. This file and the Dialog are examples of React Components, 
                    the Header component and App.js are examples of pure functional components.
                </p>
                <p>
                    3. JSX is the system React uses by default and it looks almost identical to HTML. React takes in the JSX and interperates it as an object which is later rendered
                    as HTML. That is what is in the 'render' function. Some caviats: a). class has been replaced with className for complicated reasons and b). style is passed in as an object.
                    All the style elements are the same, just instead of hyphanating them, use pascal case (flex-direction = felxDirection).
                </p>
                <p>
                    4. Style is not scoped. Anything in any css file will apply to all components in the entire project. That being said, don't forget to inculde every css file in at least one js file
                </p>
                <p>
                    There is a lot more to know, but I'm not gonna go over it here. Check out the Facebook docs (they are really good) for React if you want to know more.
                    Go to the Examples page to continue.
                </p>
            </div>
         );
    }
}
 
export default Home;