import React from 'react';
import styled from 'styled-components'

const Imge = styled.img`
    width: 200px;
    height:100px;
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

const Img = (props) => {
    // const { img, date, Like, comment } = props;

    return (
        <Box>

            <Imge src={props.img} />
            <p>Id={props.id}</p>
            <p>createBy {props.createBy}</p>
            <p>วันที่ {props.date}</p>
            <p>จำนวน Like {props.Like}</p>
            <p>จำนวน Comment {props.comment}</p>

        </Box>

    );
}

export default Img;


