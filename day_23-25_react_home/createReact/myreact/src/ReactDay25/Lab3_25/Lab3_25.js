import React from 'react'
import List from './List'
class Lab3_25 extends React.Component {
    state = {
        theam: 'orange'
    }

    showAlert = () => {
        alert('หวัดดีชาวโลก')
    }

    render() {
        return (
            <div>
                <List
                    buttonTheme={this.state.theam}
                    buttonOnClick={this.showAlert} />

            </div>
        )
    }
}
export default Lab3_25;