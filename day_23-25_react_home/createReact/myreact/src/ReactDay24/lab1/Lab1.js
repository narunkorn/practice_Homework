import Myname from './MyName'
const Lab1 = () => {
    const age = (yearBirthday, now) => {
        return now - yearBirthday
    }
    const myAge = age(1989, 2021)
    const myAge2 = age(1900, 20281)

    const handleClick = (e) => {
        alert(e.target.name)

    }
    const handleChange = (e) => {
        console.log(e.target.value)

    }
    const handleKeyUp = (e) => {
        if (e.key === 'Enter') {
            alert('okจร้าาา')
        } else {
            alert('ไม่ Ok นะจ๊ะ')
        }

    }
    const buttons = ['b1', 'b2', 'b3']

    return (
        <div>
            <Myname
                firstName={'Narunkorn'}
                age={myAge}
                nickName={'New'}
            />
            <Myname
                firstName={'Jiravadee'} age={myAge2} nickName={'Nine'}
            >
                <br />
                This is Props.children
                <br />
                <Myname>Ins Component Props.Children</Myname>
                {buttons.map((b) => {
                    return <button
                        onClick={(e) =>
                            alert((b))
                        }
                    >ลองกดดูสิจ๊ะ</button>
                })}
                <br />
                Chang <br />
                <input name='input' onChange={handleChange}></input><br />
                keyup<br />
                <input name='keyUp' onKeyUp={handleKeyUp}></input>
            </Myname>



        </div>

    )
}
export default Lab1;