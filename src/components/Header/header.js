import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: auto;
    background-color: white;
    color: black;
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 10px;
    position: sticky;
    top: 0;
    border-radius: 0 0px 0px 0;
    
    button{
        width: 100%;
        padding: 8px;
        cursor: pointer;
    }

    @media (max-width:560px) {
        justify-content: space-around;
        background-color: white;
        width: 100%;
        height: 80px;
        flex-direction: row;
        padding-top: 0px;
        border-radius: 0 0 30px 30px;

        button{
            width: 200px;
            height: 30px;
            padding: 0 5px;
            cursor: pointer;
        }
    }
`