import { Nav } from "../../components/App.styled";
import { StyledNavLin } from "../../components/App.styled";
import { Outlet } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>
        <Nav>
          <StyledNavLin to="/">Home</StyledNavLin>
          <StyledNavLin to="/create-superhero">Create Superhero</StyledNavLin>
        </Nav>
      </header>
      <Outlet />
    </>
  );
};
