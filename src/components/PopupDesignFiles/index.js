import React from 'react'
import {PopupContainer, Msg, CancelBtn, ConfirmBtn, Button, ButtonContainer} from './styledComponents'

export default function PopupDesignFiles({onCancel, onConfirm}) {
  
  return (
    <>
    <PopupContainer role="alert">
    <ButtonContainer >
        <Msg>Are you sure you want to logout?</Msg>
        <Button>
        <CancelBtn onClick={onCancel}>Cancel</CancelBtn>
        <ConfirmBtn onClick={onConfirm}>Confirm</ConfirmBtn>
        </Button>
    </ButtonContainer>
    </PopupContainer>
    </>
  )
}
