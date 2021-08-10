import Reaact from 'react'
import AddForm from './AddForm';
//กำหนด state
class Home3_25 extends Reaact.Component {
    state = {
        nextid: 1,
        forms: [
            {
                id: 0,
                firstName: '',
                lastName: ''
            }
        ]

    }
    handleOnChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        // console.log(e.target.value);
    }

    handelSubmit = (e) => {
        e.preventDefault()


        const { nextid, forms, firstName, lastName } = this.state;

        this.setState({
            nextid: nextid + 1,
            forms: [...forms, {
                id: nextid,
                firstName: firstName,
                lastName: lastName

            }]
        })

        console.log(this.state);
    }

    editForm = (id) => {
        const firstname = prompt("Please edit firsname", "")
        const lastname = prompt("Please edit lastname", "")

        this.setState({
            forms: this.state.forms.map(form => (
                (form.id === id)
                    ? {
                        id,
                        firstName: firstname,
                        lastName: lastname,

                    }
                    : form
            ))
        })
    }

    removeSkill = (id) => {
        this.setState({
            forms: this.state.forms.filter(form => form.id !== id)
        })
        console.log('delete')
    }




    render() {
        return (
            <div>
                <AddForm
                    addForms={this.state.forms}
                    Submit={this.handelSubmit}
                    Change={this.handleOnChange}
                    edit={this.editForm}
                    delete={this.removeSkill} />



            </div>
        )

    }
}
export default Home3_25;