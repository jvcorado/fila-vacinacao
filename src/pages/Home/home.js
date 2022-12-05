import styled from "styled-components";

export const Container = styled.div`
  color: white;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: white;
  gap: 10px;
  width: 100%;
  height: 100%;
  border-radius: 20px 0 0 20px;
  color: black;
  margin: auto;
  overflow: auto;
  padding: 10px;

  img{
    width: 15%;
    margin: auto;
  }

  @media (max-width:560px) {
    width: 100%;
    min-height: 60%;
    border-radius: 0 0 20px 20px;
    

    img{
      margin-top: 60px;
      width: 50%;
    }

  }
`
export const Card = styled.div`
  width: 100%;
  height: auto;
  background-color: rgb(29, 28, 28);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  color: white;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 1.203);
  padding: 15px;
  gap: 15px;
 
  div{
    display: flex;
    width: auto;
    flex-direction: column;
    gap: 10px;
   

    

    div{
      display: flex;
      flex-direction: row;
      align-items: center;
    }

  }

  @media (max-width:560px) {
    justify-content: space-around;

    
  }

`

