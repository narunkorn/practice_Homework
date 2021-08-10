import styled from "styled-components";
const dataimages = [{
    img: <img src="Mountain/Mountain1.jpg" alt="p1" />,
    date: '24 Dec 1995',
    Like: 'จำนวนLike 25',
    comment: 'จำนวนCommetn 888'
},
{
    img: <img src="Mountain/Mountain2.jpg" alt="p1" />,
    date: '20 Dec 1990',
    Like: 'จำนวนLike 90',
    comment: 'จำนวนCommetn 45'
},

{
    img: <img src="Mountain/Mountain3.jpg" alt="p1" />,
    date: '10 Dec 1590',
    Like: 'จำนวนLike 40',
    comment: 'จำนวนCommetn 38'
}, {
    img: <img src="Mountain/Mountain4.jpg" alt="p1" />,
    date: '20 Dec 1990',
    Like: 'จำนวนLike 30',
    comment: 'จำนวนCommetn 9'
}]
const Image = styled.div`
     display: flex;
     justify-content:space-around;
     flex-wrap: wrap;
     `;
const P = styled.div`
    width: 20px;
    height:10px;
`;
const Box = styled.div`
    border-style:solid;
    border-color:#d27f79;
    color:#f47373;
    padding:5px;
    &:hover{
    border-color:#7bdcb5;
    }
`;

const Test_img = () => {

    return (
        <div>
            {dataimages.map((datamage) => {
                return (
                    <P>{datamage.img}</P>
                )

            })}
        </div>














    )
}
export default Test_img;