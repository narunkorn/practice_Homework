import styled from "styled-components";
const RandomBox = () => {
    const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
    `;
    const BoxRandom = styled.div`
    width: 200px;
    height: 200px;
    background-color:${() => randombox};   
    font-size:${props => props.font};
    color:${props => props.color === 'white' ? 'white' : 'back'};
    display: flex;
    justify-content:center;
    align-items:center;
    `;

    const randombox = () => {
        const color = ['red', 'blue', 'green', 'purple', 'pink'];
        const box = Math.floor(Math.random() * 5);
        // if (box === 0) return color[0];
        // else if (box === 1) return color[1];
        // else if (box === 2) return color[2];
        // else if (box === 3) return color[3];
        // else return color[4];
        return color[box];
    }
    const randomfont = () => {
        const pixel = ['5px', '10px', '35px', '60px', '90px'];
        const size = Math.floor(Math.random() * 5);
        return pixel[size];
    }

    return (
        <Box>
            <BoxRandom color='white' font={randomfont}>
                <p >RandomBoxสิจ๊ะ</p>
            </BoxRandom>
        </Box>
    );
}
export default RandomBox;

