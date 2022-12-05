import styled from "styled-components";

export const Container = styled.form`

   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   background-color: white;
   gap: 15px;
   width: 100%;
   height: 100%;
   border-radius: 20px 0 0 20px;
   color: black;
   margin: auto;

   input{
      width: 50vw;
      padding: 15px;
      padding-left: 6px;
      border: none;
      border-radius: 5px;
      outline: none;   
      background-color: #E8F0FE;
      font-size: 1.2rem;
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
      padding-top: 30px;
      justify-content: flex-start;
      width: 100%;
      height: 100%;
      border-radius: 0 0 20px 20px;
   
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



