import React from "react"
import { useState } from "react"

const Home2_24_function = () => {

    const [datas, setData] = useState([]);

    async function getdata() {
        let myResult = await fetch('https://randomuser.me/api/')
        try {
            let respon = await myResult.json()
            console.log(respon, "res")
            setData(respon.results)
            console.log(datas, "my data")
        } catch { console.log("error") }
    }
    return (
        <div>
            <h1>setState แบบ function(Hooks)</h1>
            {datas.map((data) => {
                return (
                    <div>
                        <img src={data.picture.large} />
                        <div> Email :{data.email}  </div>
                        <div> Gender :{data.gender}  </div>
                        <div> {data.name.title} {data.name.first}  {data.name.last} </div>
                    </div>
                )
            })}
            <div>
                <button onClick={getdata}> Generate User  </button>
            </div>
        </div>
    )

}
export default Home2_24_function;