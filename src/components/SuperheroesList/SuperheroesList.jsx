import { useLocation } from "react-router-dom";
import { List } from "./SuperheroesList.styled";
import { StyledLinkk, FilmTitle } from "./SuperheroesList.styled";

export const SuperheroesList = ({ superHeroes }) => {
  const location = useLocation();

  return (
    <>
      {superHeroes && (
        <List>
          {superHeroes.map((superhero) => (
            <StyledLinkk
              key={superhero._id}
              to={`/superheroes/${superhero._id}`}
              state={{ from: location }}
            >
              <FilmTitle> {superhero.nickname}</FilmTitle>

              <img width="300" src={superhero.images[1]} alt="heroesPhoto" />
            </StyledLinkk>
          ))}
        </List>
      )}
    </>
  );
};
