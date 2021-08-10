import React from "react";
class Lab3 extends React.Component {
    state = {
        name: 'John',
        age: 30,
        skills: [
            { id: 1, name: 'React' },
            { id: 2, name: 'NodeJS' }
        ]

    }

    handleChangName = () => {
        this.setState(
            { name: 'new' }

        );
    }
    handleChangAge = () => {
        this.setState(
            { age: 80 }

        );
    }
    handleChangSkills = () => {
        this.setState({
            skills: [{ id: 4, name: 'premiere' },
            { id: 5, name: 'after Effect' }]
        }
        );
    }

    render() {
        return (
            <div>
                <p>name: {this.state.name}</p>
                <p>age: {this.state.age}</p>
                <ul>
                    {this.state.skills.map(skill =>
                        <li key={skill.id}>
                            {skill.name}
                        </li>
                    )}
                </ul>
                <button onClick={this.handleChangName}>chang name </button><br />
                <button onClick={this.handleChangAge}>chang age </button><br />
                <button onClick={this.handleChangSkills}>chang skill </button>

            </div>
        )
    }
}
export default Lab3;