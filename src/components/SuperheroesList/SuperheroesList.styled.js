import styled from "@emotion/styled";
import { Link } from "react-router-dom";
export const List = styled.ul`
  justify-content: center;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding-top: 10px;
`;

export const StyledLinkk = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 10px;
  padding: 10px;
  font-size: 16px;
  color: #8c6cbd;
  transition: all 0.7s ease-in-out;
  &:hover {
    scale: 1.2;
  }
`;

export const FilmTitle = styled.p`
  margin-bottom: 10px;
`;
