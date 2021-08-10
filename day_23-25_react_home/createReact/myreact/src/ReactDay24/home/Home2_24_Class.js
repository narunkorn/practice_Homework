import React from "react"
class Home2_24_Class extends React.Component {
    state = {
        userRandom: []
    }
    getdata = async () => {
        let response = await fetch('https://randomuser.me/api/');
        try {
            let data = await response.json();
            this.setState({ userRandom: data.results });
        } catch {
            console.log('error');
        }
    }
    render() {
        const usersList = this.state.userRandom.map((user) => {
            return (
                <div>
                    <img src={user.picture.large} />
                    <div> Email :{user.email}  </div>
                    <div> Gender :{user.gender}  </div>
                    <div> {user.name.title} {user.name.first} {user.name.last} </div>
                </div>
            )
        })
        return (
            <div>
                <h1>setState แบบ class</h1>
                <div>{usersList}</div>
                < button onClick={this.getdata} > Generate User </button >

            </div >
        );

    }

}
export default Home2_24_Class;