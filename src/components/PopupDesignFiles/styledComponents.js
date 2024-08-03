import {  styled} from "styled-components";

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* Ensures the popup is above other content */
`
export const Msg = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
`
export const CancelBtn = styled.button`
background-color: aliceblue;
outline: 1px #3a3b3b;
  color: #3a3b3b;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
`
export const ButtonContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const ConfirmBtn = styled.button`
  background-color: rgb(0, 119, 255);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
`