import React from 'react'
class Lab4_25 extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {

        const { firstName, lastName, email, phone } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    firstName:
                    <input type='text'
                        name='firstName'
                        value={firstName}
                        required
                        onChange={this.handleChange}
                    />
                    lastName:
                    <input type='text'
                        name='lastName'
                        value={lastName}
                        required
                        onChange={this.handleChange} />
                    <p>
                        email:
                        <input type='text'
                            name='email'
                            value={email}
                            required
                            onChange={this.handleChange} />
                        phone:
                        <input type='text'
                            name='phone'
                            value={phone}
                            required
                            onChange={this.handleChange} />
                    </p>

                    <button>submit</button>

                </form>


            </div>
        )
    }
}
export default Lab4_25;