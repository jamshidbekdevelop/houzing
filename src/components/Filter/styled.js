import styled from "styled-components";
import { ReactComponent as homeIcon } from "../../assets/icons/home-icon.svg";
import { ReactComponent as setting } from "../../assets/icons/setting-lines.svg";
import { ReactComponent as search } from "../../assets/icons/search-icon.svg";
export const Container = styled.div`
  display: flex;
  max-width: 1440px;
  width: 100%;
  padding: 0 130px;
  gap: 20px;
  margin: auto;
  height: 64px;
  align-items: center;
`;

export const Icon = styled(homeIcon)`
  width: 20px;
  height: 15px;
`;
Icon.Setting = styled(setting)`
  width: 20px;
  height: 20px;
`;
Icon.Searchs = styled(search)`
  width: 16px;
  height: 16px;
`;

export const Advenced=styled.div`
width: fit-content;
height: fit-content;
background: #ffffff;
border-radius: 5px;
padding: 10px;
`
Advenced.Title=styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #0d263b;
`
export const Section=styled.div`
display: flex;
margin-bottom: 15px;
justify-content: flex-end;
gap: 20px;
`