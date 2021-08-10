import React from "react";

const MyName = (props) => {
    return (
        <div>
            <div>My Name is {props.firstName}</div>
            <div>My age is {props.age}</div>
            {props.children}


        </div>
    )
}


// class MyName extends React.Component {
//     render() {
//         return (
//             <div>
//                 <div>{this.props.firstName}</div>
//                 <div>{this.props.age}</div>
//                 <div>{this.props.nickName}</div>
//                 {this.props.children}


//             </div>
//         )
//     }
// }
export default MyName;

