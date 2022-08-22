import styled from "styled-components";

export const ContainerItemCount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 6px;
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;

export const ButtonAdd = styled.button`
  padding: 20px 0;
  margin-top: 20px;
  background-color: aliceblue;
  border-bottom: 2px solid #838383;
  border-radius: 6px;
  opacity: ${({ count }) => (count <= 0 ? ".5" : "1")};

  transition: all 300ms ease;

  z-index: ${({ menuHide }) => (menuHide ? "-1" : "1")};
  &:hover {
    border-bottom: ${({ count }) => (count <= 0 ? "" : "0px")};
    background-color: ${({ count }) => (count <= 0 ? "aliceblue" : "#e2e8f0")};
    cursor: ${({ count }) => count <= 0 && "not-allowed"};
  }
`;


export const ContainerFatherItem = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(1, minmax(0, 1fr));
  justify-items: center;
  margin-top: 8vh;
  gap: 20px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1095px) {
    gap: 0;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`


export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: calc(320 / 2);
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border: 1px solid #f2f2f2;
  z-index: 1;

  --tw-shadow: 0 2px 1px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color),
    0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

  @media (min-width: 600px) {
    width: 250px;
  }

  @media (min-width: 768px) {
    width: 350px;
    
  }
`;

export const ContentImage = styled.img`
  width: 100%;
  height: 100%;
  vertical-align: top;
  object-fit: cover;
  z-index: 1;
`;


export const ContainerDetails = styled.div` 
  width: 110%;
  display: flex;
  justify-content: space-between;
  z-index: 1;

  @media (min-width: 768px) {
    width: 100%;
  }
`

export const InputDetail = styled.input`
  width: 100px;
  background-color: #f0f8ff;
  padding: 8px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 400ms ease;
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  z-index: 1;

  
  --tw-shadow: 0 2px 1px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color),
    0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

  &:hover {
    background-color: #D0D7E4;
  }

  @media (min-width: 768px) {
    width: 140px;
  }
`

export const PriceDetail = styled.p `
  padding: 8px;
  color: ${({stock}) => stock > 0 ? '#008A7B' : 'red'};
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  z-index: 1;
`

export const TextStock = styled.span`
  font-size: 17px;
  color: ${({stock}) => stock ? '#00C6B1' : 'red'};
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  white-space: nowrap;
  z-index: 1;

  @media (min-width: 768px) {
    margin-top: 15px;
  }
`