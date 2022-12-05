import styled from "styled-components";

export const Header = styled.header`
    width: 10%;
    height: 100%;
    color: black;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 10px;
    
    border-radius: 0 0px 0px 0;
    
    button{
        width: 100%;
        padding: 10px;
        outline: none;
        cursor: pointer;
        color:white;
        background-color: transparent;
        border: none;
        transition: background ease 0.5s;
        border-radius: 5px;
        
    }



    @media (max-width:560px) {
        justify-content: space-around;
        width: 100%;
        height: 80px;
        flex-direction: row;
        padding-top: 0px;

        button{
            width: 200px;
            height: 30px;
            padding: 0 5px;
            cursor: pointer;
        }


    }
`