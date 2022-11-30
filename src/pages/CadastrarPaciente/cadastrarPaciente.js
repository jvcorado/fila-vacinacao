import styled from "styled-components";

export const Container = styled.form`

   display: flex;
   align-items: center;
   flex-direction: column;
   background-color: white;
   gap: 15px;
   width: 55%;
   height: 60%;
   padding-top: 50px;
   border-radius: 20px;
   color: black;
   margin: auto;

   input,button{
      width: 50vw;
      padding: 10px;
      padding-left: 0;
      border: none;
      border-bottom: 2px solid black;
      outline: none;   
   }

   button{
      border: none;
   }

   input::placeholder{
      color: black;
      font-size: 1rem;
    }


   h1{
      margin-bottom: 20px;
   }

   @media (max-width:560px) {
      justify-content: center;
      margin-top: 100px;
      width: 90%;
      height: auto;
      padding-bottom: 30px;
      
      
      input{
         border-radius: 0;
      }

      button{

      }
      
      input,button{
         width: 90%;
         font-size: 1rem;
      }

   }
`



