import React from "react";

const reactFunction = () => {
    return (
        <div>
            <div>new Function</div>
        </div>
    )

}
class reactClass extends React.Component {

    render() {
        return (
            <div>
                <div>new Class</div>
            </div>
        )
    }
}
export { reactFunction, reactClass };

