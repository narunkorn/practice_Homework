import styled from "styled-components";
const Card = (props) => {

    const handleAlert = (color) => {
        alert(color);
    }

    const BoxRandom = styled.div`
    width: 180px;
    height: 180px;
    background-color:${props => props.bgColor}; 
   
    display: flex;
    justify-content:center;
    align-items:center;
    margin:5px;
    `;

    const Box = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 20px;
    width: 1000px;
    `;

    return (
        <div>
            {props.children}

            <Box>
                {props.colors.map((color) => {
                    return (
                        <BoxRandom onClick={() => handleAlert(color)} bgColor={color} />
                    )
                })}
            </Box>


        </div>
    )
}
export default Card;