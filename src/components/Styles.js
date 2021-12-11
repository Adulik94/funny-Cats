import styled from "styled-components";



export const colors = {
    primary: 'black',
    theme: "rgba(118,19,140,0.6)",
    theme2: "rgba(176,134,217,0.58)",
    theme3: "rgb(170,180,206)",


    light1: '#F3F4F6',
    light2: '#868fa5',
    light3: '#100074',
    dark1: '#1F2937',
    dark2: '#4B5563',
    dark3: '#9CA3AF',
}


// styled components
export const StyledContainer = styled.div`
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(249,166,202);
  background: radial-gradient(circle, rgba(249,166,202,0.7547969871542367) 18%, rgba(80,111,149,0.7239846622242647) 100%);
`
export const StyledFilterContainer = styled.div`
  background: rgb(201, 187, 217) 18%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 7px 8px;
  width: 700px;
  margin: 0 auto 20px auto;
`

export const StyledFilter = styled.div`
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
`


export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 25px;
`


export const StyledLabel = styled.p`
  text-align: left;
  font-weight: bold;
  font-size: ${(props) => props.size}px;
  color: ${(props) => (props.color ? props.color : colors.dark2)};
  padding: 2px;
  margin-top: 10px;
`;

export const StyledFromArea = styled.div`
  background-color: ${(props => props.bg || colors.light1)};
  text-align: center;
  padding: 45px 55px;
`;

export const StyledFormButton = styled.button`
  padding: 5px 16px;
  width: 20rem;
  text-transform: uppercase;
  background-color: transparent;
  font-size: 16px;
  border: 2px solid ${colors.theme};
  color: ${colors.theme2};
  transition: ease-in-out 0.3s;
  border-radius: 25px;
  outline: 0;
  &:hover {
    background-color: ${colors.theme3};
    color: ${colors.primary};
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`


export const SelectStyle = styled.select`
  width: 90%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }

`;
export const Wrapper = styled.div`
  background: rgb(201,187,217) 18%;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-gap: 7px 8px;
  width: 700px;
  margin: 0 auto 20px auto;
`;

export const ImageListStyle =styled.img`
  width: 100%;
  height:100%;
  object-fit: scale-down;
  border: 2px solid ${colors.theme2};
  
`