import styled from "styled-components";

export const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${(props) => (props.$mode === 'light' ? '#fff' : '#000')};
    color: ${(props) => (props.$mode === 'light' ? '#181818' : '#f9f9f9')};
    align-items: center;
    height: 100%;
`
export const NotFoundImg = styled.img`
    width: 400px;
`
  