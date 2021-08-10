import React, { Component } from 'react'


class Learn extends Component {
    state = {

        text: '',
        nextId: 3,
        skills: [
            {
                id: 1,
                name: 'React'
            },
            {
                id: 2,
                name: 'NodeJS'
            }
        ]
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleClick = () => {
        const { skills, text, nextId, } = this.state
        this.setState({

            skills: [
                ...skills,
                {
                    id: nextId,
                    name: text,
                }
            ],

            nextId: nextId + 1,
            text: '',

        })
        console.log(this.state)
    }

    removeSkill = (id) => {
        this.setState({
            skills: this.state.skills.filter(skill => skill.id !== id)
        })
    }

    editSkill = (id) => {
        const text = prompt("Please enter skill name", "")
        this.setState({
            skills: this.state.skills.map(skill => (
                (skill.id === id)
                    ? { id, name: text }
                    : skill
            ))
        })
    }

    render() {
        return (
            <div>text
                <input value={this.state.text} name='text' onChange={this.handleChange} /> <br />

                <button onClick={this.handleClick}>add</button>
                <ul>

                    {this.state.skills.map(skill =>
                        <li key={skill.id}>
                            {skill.name}

                            <button onClick={() => this.removeSkill(skill.id)}> x</button>
                            <button onClick={() => this.editSkill(skill.id)}> edit</button>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Learn;


