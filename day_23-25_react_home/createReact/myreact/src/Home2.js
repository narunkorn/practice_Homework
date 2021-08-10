import styled from 'styled-components';
import Navbar from './home2/Navbar'
import Img from './home2/Img';
const Home2 = () => {
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
                <Img img='Mountain/Mountain1.jpg'
                    date='30 December 2002'
                    Like='1,800'
                    comment='2,000 ' />
                <Img img='Mountain/Mountain2.jpg'
                    date='27 January 1998'
                    Like='3,850'
                    comment='1,678,234' />
                <Img img='Mountain/Mountain3.jpg'
                    date='19 March 1998'
                    Like='2,000'
                    comment='500' />
                <Img img='Mountain/Mountain4.jpg'
                    date='18 September 2018'
                    Like='600'
                    comment='7,000' />
            </Image>

        </div>

    );
}

export default Home2;