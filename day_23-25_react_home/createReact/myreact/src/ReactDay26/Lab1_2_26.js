import React from 'react'
// class Lab1_2_26 extends React.Component {
//     textInput = React.createRef();
//     handleClick = () => {
//         console.log(this.textInput.current.files);
//     }

//     render() {
//         return (
//             <div>
//                 <input type='file' ref={this.textInput} />
//                 <button onClick={this.handleClick}>Get Value!</button>

//             </div>
//         )
//     }
// }


//Lab2
// เขียน ref แบบ callback ref
class Lab1_2_26 extends React.Component {
    handleClick = () => {
        console.log(this.textInput.files);
    }
    render() {
        return (
            <div>
                <input type='file' ref={(input) => this.textInput = input} />
                <button onClick={this.handleClick}>Get Value!</button>

            </div>
        )
    }
}
export default Lab1_2_26;