import React from 'react';

class Lab5_25 extends React.Component {

    state = {
        id: 0,
        datas: [
            {
                id: 0,
                firstName: '',
                lastName: '',
                email: '',
                phone: ''
            }
        ]
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleClick = () => {
        const { datas, id, firstName, lastName, email, phone } = this.state;
        this.setState(
            {
                id: id + 1,
                datas: [
                    ...datas,
                    {

                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        phone: phone
                    }

                ]
            }
        )
        console.log(this.state, '333333')
        console.log(this.state, '4444444')
    }
    removeSkill = (id) => {
        this.setState({
            datas: this.state.datas.filter((data) => {
                return data.id !== id
            })
        })
    }

    render() {
        const { firstName, lastName, email, phone } = this.state;
        return (
            <div>
                firstName
                <input name='firstName'
                    value={firstName}
                    onChange={this.handleChange} />
                lastName
                <input name='lastName'
                    value={lastName}
                    onChange={this.handleChange} />
                email
                <input name='email'
                    value={email}
                    onChange={this.handleChange} />
                Phone
                <input name='phone'
                    value={phone}
                    onChange={this.handleChange} />
                <button onClick={this.handleClick}>add</button>
                <div>
                    {this.state.datas.map((data) => {
                        return (
                            <div key={data.id}>
                                {data.id}
                                {data.firstName}
                                {data.lastName}
                                {data.email}
                                {data.phone}
                                <button>delete</button>
                                <button>edit</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Lab5_25;