import styled from 'styled-components'

const Button = styled.button`
    width: 7rem;
    height: 2rem;
    border-radius:5px;
    color:#f47373;
    background-color:#ffcdd2;
    border-color:#f44336;
    cursor:pointer;
    &:hover{
    background-color:#7bdcb5;
    color:whitesmoke;
    border-color:#2d8662;
    }
`;


const Navbar = (props) => {
    // const { buttonName } = props;


    return (
        <div>
            <Button>{props.buttonName}</Button>
        </div>
    );
}
export default Navbar;