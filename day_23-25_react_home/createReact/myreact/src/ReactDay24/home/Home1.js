import styled from 'styled-components';
import Navbar from './Navbar'
import Img from './Img';

const myCard = [
    {
        img: 'Mountain/Mountain1.jpg',
        id: '01',
        createBy: 'New',
        date: '30 December 2002',
        Like: '1,800',
        comment: '2,000 '
    },
    {
        img: 'Mountain/Mountain2.jpg',
        id: '02',
        createBy: 'Narunkorn',
        date: '27 January 1998',
        Like: '3,850',
        comment: '1,678,234'

    },
    {
        img: 'Mountain/Mountain3.jpg',
        id: '03',
        createBy: 'Obama',
        date: '19 March 1998',
        Like: '2,000',
        comment: '500'

    },
    {
        img: 'Mountain/Mountain4.jpg',
        id: '04',
        createBy: 'Joe',
        date: '18 September 2018',
        Like: '600',
        comment: '7,000'

    }
];
const Home1 = () => {
    const Box = styled.div`
    display: flex;
    justify-content:center;
    margin:3rem;
    `;

    const Logo = styled.img`
    width:100px;
    height:50px;
    padding-right: 1rem;
    `;

    const Nav = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    `;

    const Image = styled.div`
     display: flex;
     justify-content:space-around;
     flex-wrap: wrap;
     `;


    return (
        <div>
            <Box>
                <Logo src='pikkanode.png' />
                <Nav>
                    <Navbar buttonName="create pikka" />
                    <Navbar buttonName="singup" />
                    <Navbar buttonName="singin" />
                    <Navbar buttonName="singout" />
                </Nav>

            </Box>

            <Image>
                {myCard.map((card) => {
                    return <Img
                        img={card.img}
                        id={card.id}
                        createBy={card.createBy}
                        date={card.date}
                        Like={card.Like}
                        comment={card.comment} />
                })}
            </Image>

        </div>

    );
}

export default Home1;