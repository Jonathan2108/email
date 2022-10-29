import React, { useState } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
background-color: yellow;
height:100vh;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`


const Title = styled.h1`
font-size: 24px;
color:black;
padding-top: 30px;
border: 1px solid black;
border-radius: 50px;
width: 300px;
`
//TODO: create new div and introduce your 

const Introduce = styled.div`
font-size: 24px;
color:black;
`


const AppleImage = styled.img`
width: 300px;
height: 200px;
margin-top: 50px;
border: px black solid;
margin-left:200px;`;

const Button = styled.button`
width: 200px;
height: 80px;
color: blue;
font-size: 30px;
border-radius: 20px;
border: 10px blue solid;
`





const Number = styled.div`
color: green;
font-size: 100px;
`;


function PageOne() {
    const [number, setNumber] = useState(1);
    function hello() {
        setNumber(number + 1);
        }
    function hello2() {
            setNumber(number - 1);
    }
    
    return (
    <Wrapper>
        <Number>{number}</Number>
        <Title>
        Jonathan <br></br> 8th grade <br></br>SFS
        </Title>
        <Introduce>I like NBA</Introduce>
        <AppleImage src="https://world-schools.com/wp-content/uploads/2016/02/SFS-Logo-300x300.jpg"></AppleImage>
        <Button onClick={hello}>Click Me!!</Button>
        </Wrapper>
        );
        
    
        

}

export default PageOne