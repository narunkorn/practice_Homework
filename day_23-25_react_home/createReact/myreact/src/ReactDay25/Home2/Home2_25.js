import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ButtonBar from './ButtonBar'
import Display from './Display'

class Home2_25 extends Component {
    state = {
        count: 0
    }

    incrementCount = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }))
    }

    decrementCount = () => {
        this.setState(prevState => ({ count: prevState.count - 1 }))
    }

    resetCount = () => {
        this.setState(() => ({ count: 0 }))
    }

    render() {
        return (
            <div className="container">
                <div className="border border-secondary rounded">
                    <Display count={this.state.count} />
                    <ButtonBar
                        clickPlus={this.incrementCount}
                        clickDelete={this.decrementCount}
                        clickReset={this.resetCount}
                    />
                </div>
            </div>
        )
    }
}

export default Home2_25;
