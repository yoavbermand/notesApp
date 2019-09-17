import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inputEmail: "",
            outputEmail: ""
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
                    <input value={this.state.inputEmail} type='text' onChange={event => this.setState({inputEmail: event.target.value})}/>
                    <button onClick={_ => {
                        this.setState({outputEmail: this.state.inputEmail})
                    }}>
                        Click Me
                    </button>


                    {this.state.outputEmail}


                </header>
            </div>
        )
    }
}

export default App;
