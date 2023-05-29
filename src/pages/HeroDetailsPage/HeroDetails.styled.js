import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  align-items: start;
`;

export const Section = styled.section`
  padding-top: 30px;
  padding-bottom: 60px;
  padding-left: 15px;
  margin-bottom: 30px;
`;
export const TextContainer = styled.div`
  max-width: 450px;
  padding-bottom: 60px;
`;
export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
  color: grey;
`;

export const ButtonLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  background-color: black;
  color: white;
  margin-bottom: 20px;
`;

export const ImageWrap = styled.div`
  object-fit: contain;
  box-shadow: 10px 5px 5px black;
`;
export const Button = styled.button`
  margin-top: 30px;
  background-color: #c15166;
  padding: 10px 60px;
  margin: 0 auto;
  border-radius: 20px;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid black;
  }
`;
export const Text = styled.p`
  margin-bottom: 20px;
`;

export const SmallButton = styled.button`
  background-color: #c15166;
  padding: 5px 15px;
  border-radius: 5px;
`;
