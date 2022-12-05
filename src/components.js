import styled from "styled-components";

export const Main = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgb(29, 28, 28);
    display: flex;
    align-items: center; 
    flex-direction: row;
     
    
    @media (max-width:560px) {
        flex-direction: column-reverse;
        overflow-y: hidden;
    }
`

export const Cont = styled.form`

   display: flex;
   align-items: center;
   flex-direction: column;
   background-color: white;
   gap: 20px;
   width: 55%;
   min-height: 60%;
   max-height: 60%;
   border-radius: 20px;
   padding-top: 50px;
   padding-bottom: 20px;
   color: black;
   margin: auto;
   overflow: auto;

   h1{
      text-align: center;
   }

   @media (max-width:560px) {
      margin-top: 100px;
      padding-top: 20px;
      width: 90%;
      min-height: 60%;
    }
`

export const View = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: white;
    gap: 20px;
    width: 100%;
    height: 100%;
    border-radius: 20px 0 0 20px;
    color: black;
    margin: auto;
    overflow: auto;

    h1{
        text-align: center;
    }

    @media (max-width:560px) {
        width: 100%;
        min-height: 60%;
        border-radius: 0 0 20px 20px;
        }
`

export const Acessar = styled.button`
        width: 50vw;
        padding: 15px;
        outline: none;
        border: none;
        border-radius: 5px;
        background-color: rgb(85,78,164);
        color: white;
        cursor: pointer;

        @media (max-width:560px){
            width: 90%;
        } 
`


export const Excluir = styled.button`
    width: 100%;
    padding: 15px;
    padding-left: 0;
    border: none;
    border-radius: 5px;
    outline: none;
    color:white;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.143);
    cursor: pointer;
    background-color: red;
`

export const Update = styled.button`
    width: 100%;
    padding: 15px;
    padding-left: 0;
    border: none;
    border-radius: 5px;
    outline: none;
    color:white;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.143);
    cursor: pointer;
    background-color: rgb(85,78,164);
`


export const Listar = styled.div`
    width: 50%;
    background-color: #E8F0FE;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.143);
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;

    @media (max-width: 560px) {
        width: 90%;
    }
`