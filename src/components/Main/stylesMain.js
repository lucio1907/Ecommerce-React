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
  
  z-index: ${({menuHide}) => menuHide ? '-1' : '1'};
  &:hover {
    border-bottom: ${({ count }) => (count <= 0 ? "" : "0px")};
    background-color: ${({ count }) => (count <= 0 ? "aliceblue" : "#e2e8f0")};
    cursor: ${({ count }) => count <= 0 && "not-allowed"};
  }
`;
