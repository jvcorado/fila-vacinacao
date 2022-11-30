import styled from "styled-components";

export const Main = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgb(29, 28, 28);
    display: flex;
    align-items: center; 
    flex-direction: column;
     
    
    @media (max-width:560px) {
        flex-direction: column;
        height: calc(100vh - 80px);
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

export const View = styled.form`

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
        } 
`

export const Home = styled.button`
    width: 100%;
    padding: 10px;
    padding-left: 0;
    border: none;
    border-radius: 5px;
    border-bottom: 2px solid black;
    outline: none;
    background-color: black;
    color:white;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.143);
    cursor: pointer;
`

export const Cadastrar = styled.button`
    width: 100%;
    padding: 10px;
    padding-left: 0;
    border: none;
    border-radius: 5px;
    border-bottom: 2px solid black;
    outline: none;
    background-color: blue;
    color:white;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.143);
    cursor: pointer;
`

export const Excluir = styled.button`
    width: 100%;
    padding: 10px;
    padding-left: 0;
    border: none;
    border-radius: 5px;
    border-bottom: 2px solid black;
    outline: none;
    background-color: red;
    color:white;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.143);
    cursor: pointer;
`

export const Visualizar = styled.button`
    width: 100%;
    padding: 10px;
    padding-left: 0;
    border: none;
    border-radius: 5px;
    border-bottom: 2px solid black;
    outline: none;
    background-color: green;
    color:white;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.143);
    cursor: pointer;
`

export const Listar = styled.div`
    width: 90%;
    background-color: rgba(255, 255, 255, 0.945);
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.143);
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`