
import { useState } from "react";
const Todo = () => {
    const [inputs, setInput] = useState('');
    const [inputList, setInputList] = useState([]);

    const inputChange = (e) => {
        setInput(e.target.value)
    }
    const inputSubmit = (e) => {
        e.preventDefault();
        setInputList([...inputList,

        {
            id: inputList.length + 1,
            data: inputs
        }

        ])
        setInput('')

    }
    const deleteData = (dataId) => {
        const remove = inputList.filter((input) => {
            return input.id !== dataId
        })
        setInputList(remove)
        console.log('delete Completed')
    }
    const [isEditInput, setIsEditInput] = useState(false);
    const [updateInput, setUpdateInput] = useState({});

    const editInputChange = (e) => {
        setUpdateInput({ ...updateInput, data: e.target.value });
    }
    const editInputClick = (Input) => {
        setIsEditInput(true);
        setUpdateInput({ ...Input })
    }

    const updateEditInput = (id, inputUpdate) => {
        const update = inputList.map((input) => {
            return input.id === id ? inputUpdate : input
        })
        setIsEditInput(false);
        setInputList(update);
    }

    const editInputSubmit = (e) => {
        e.preventDefault();
        updateEditInput(updateInput.id, updateInput);
        console.log('editsubmit ok')
    }
    console.log('inputlist', inputList);

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>ฝึก Add Edit Delete กัน!!!!</h1>
            {isEditInput ? (
                <form onSubmit={editInputSubmit} >
                    <h1>แก้ไขจร้า</h1>
                    <label>พิมพ์เลยเพื่อน!!</label>
                    <input
                        placeholder="พิมม์สิจ๊ะ"
                        type='text'
                        value={updateInput.data}
                        onChange={editInputChange}
                    />
                    <button type='submit'>แก้เสร็จละ</button>
                    <button onClick={() => setIsEditInput(false)}>ไม่แก้ละ</button>
                </form>
            ) : (
                <form onSubmit={inputSubmit}>
                    <label>พิมพ์เลยเพื่อน!!</label>
                    <input
                        placeholder="พิมม์สิจ๊ะ"
                        type='text'
                        value={inputs}
                        onChange={inputChange}
                    />
                    <button type='submit'>Addขอมูลจร้า</button>
                </form>
            )}

            <div>
                {inputList.map((input) => {
                    return (
                        <div key={input.id}>
                            {input.data}
                            <button onClick={() => editInputClick(input)}>Edit</button>
                            <button onClick={() => deleteData(input.id)}>Delete</button>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}
export default Todo;