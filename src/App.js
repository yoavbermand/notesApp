import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: ""
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.

                    </p>
                    <input id='myinput' type='text'/>
                    <button onClick={_ => {
                        this.setState({email: document.getElementById('myinput').value})
                    }}>
                        Click Me
                    </button>


                    {this.state.email}


                </header>
            </div>
        )
    }
}

export default App;
