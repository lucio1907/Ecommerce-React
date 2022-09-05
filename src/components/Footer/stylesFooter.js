import styled from "styled-components";

export const ContainerFooter = styled.footer`
  width: 100%;
  height: 200px;
  margin-top: 90px;
  background-color: #fffdfd;
`;

export const PhraseContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const H4 = styled.h4`
  text-transform: uppercase;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 13px;
  margin-top: 15px;
  &::before {
    content: "~ ";
  }
  &::after {
    content: " ~";
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const ContainerSocials = styled.div`
  margin-top: 1.75rem;
  background-color: #f2f2f2;
  padding: 30px 0;

  @media (min-width: 768px) {
    height: 170px;
  }
`;

export const FollowUs = styled.p`
  font-family: "Inter", sans-serif;
  text-transform: capitalize;
  padding-left: 15px;
  font-size: 17px;
  font-weight: 600;
  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 20px;
    font-size: 21px;
  }
`;

export const Socials = styled.div`
  margin-top: 10px;
  height: 27px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 6px;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: center;
    gap: 100px;
  }
`;

export const ContainerGitHub = styled.div`
  position: relative;
  left: 85%;
  top: 25px;
  width: 37px;

  @media (min-width: 768px) {
    left: 96%;
  }
`;
