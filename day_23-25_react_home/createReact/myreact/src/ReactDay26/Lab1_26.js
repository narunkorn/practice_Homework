import React from "react"
// class Lab1_26 extends React.Component {
//     textInput = React.createRef();
//     handdleClick = () => {
//         this.textInput.current.focus();
//         console.log(this.textInput);
//     }

//     render() {
//         return (
//             <div>
//                 <input ref={this.textInput} />
//                 <button onClick={this.handdleClick}>Focus!</button>

//             </div>
//         )
//     }
// }

//Lab2
// เขียน ref แบบ callback ref
class Lab1_26 extends React.Component {
    handdleClick = () => {
        this.textInput.focus();
        console.log(this.textInput);
    }
    render() {
        return (
            <div>
                <input ref={(input) => this.textInput = input} />
                <button onClick={this.handdleClick}>Focus!</button>

            </div>
        )
    }
}






export default Lab1_26