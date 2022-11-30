import styled from "styled-components";


export const Container = styled.form`
    width: 80vw;
    height: 70%;
    border-radius: 20px;
    border: 2px solid black;
    display: flex;
    margin: auto;

    @media (max-width:560px){
        flex-direction: column;
        width: 90vw;
    }  

`
export const BoxOne = styled.div`
    flex: 1;
    background-color: white;
    border-radius: 20px 0 0 20px ;
    display: flex;
    align-items: center;
    border-right: 2px solid black;
    justify-content: space-evenly;
    flex-direction: column;

    input{
        width: 80%;
        padding: 10px;
        padding-left: 0;
        outline: none;
        background-color: transparent;
        border: none;
        font-size: 1rem;
        border-bottom: 3px solid rgb(85,78,164);;

        @media (max-width:560px){
            width: 90%;
        } 
    }

    input::placeholder{
        color: black;
        font-size: 1rem;
    }


    @media (max-width:560px){
        border-radius: 20px ;
        
    } 

`

export const Acessar = styled.button`
        width: 80%;
        padding: 15px;
        outline: none;
        border: none;
        border-radius: 5px;
        background-color: rgb(85,78,164);
        color: white;
        cursor: pointer;

        @media (max-width:560px){
            width: 90%;
            font-size: 1rem;
        } 
`

export const Sair = styled.button`
        width: 80%;
        padding: 15px;
        outline: none;
        border: none;
        border-radius: 5px;
        background-color: red;
        color: white;
        cursor: pointer;

        @media (max-width:560px){
            width: 90%;
            font-size: 1rem;
        }
`

export const BoxTwo = styled.div`
    flex: 1;
    background-color: rgb(85,78,164);
    border-radius: 0 20px  20px 0  ;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
 
    @media (max-width:560px){
        display: none;
    } 

`



