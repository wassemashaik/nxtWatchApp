import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  padding-top: 10px;
  padding-bottom: 50px;
  width: 100vw;
  height: 100%;
  padding: 20px;
  color: ${(props) => (props.$mode === 'light' ? '#181818' : '#f9f9f9')};
  background-color: ${(props) => (props.$mode === 'light' ? '#f9f9f9' : '#181818' )};
`
export const IconImage = styled.img`
  height: 40px;
  width: 30px;
  margin: 5px;
  padding: 5px;
`
export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const CustomLink = styled(Link)`
  // color: grey;
  text-decoration: none;

  &:hover {
    color: red;
  }
`
export const HomeContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  margin: 10px;
`
export const SidebarContainer = styled.div`
  min-width:20%; 
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
  box-shadow:  0 5px rgba(0, 0, 0, 0.5);
`
export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  font-size: 24px;
`;
export const MenuItemContainer = styled.div`
`
export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #383838;
    color: red;
  }

  svg {
    margin-right: 15px;
  }
`
export const Divider = styled.div`
  height: 1px;
  background-color: #383838;
  margin: 10px 0;
`
export const ContactUs = styled.h4`
  font-weight: bold;
 
`
export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  justigy-content: center;
  positon: absolute;
  min-width: 75%;
  min-height: 100%;
  padding: 10px;
`
export const BottomContainer = styled.div``
export const Para = styled.p`
  font-size: 20px;
  
`
export const Home = styled.div``

export const VideosContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100%;
  min-height: fit-content;
  padding: 10px;
`
export const ProductsErrorViewContainer = styled.div``
export const FaiureImage = styled.img``