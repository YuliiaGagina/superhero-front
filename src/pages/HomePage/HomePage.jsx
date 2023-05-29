import React, { useEffect, useState } from "react";
import { getSuperheroes, staticFilesUrl } from "../../services/api";

import {
  Section,
  SectionTitle,
  SmallButton,
  ButtonWrap,
} from "./HomePage.styled";
import { SuperheroesList } from "./../../components/SuperheroesList/SuperheroesList";

function HomePage() {
  const [superHeroes, setSuperHeroes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    getSuperheroes(currentPage)
      .then(({ data }) => {
        setSuperHeroes(
          data.result.map((it) => {
            it.images = it.images.map((img) => {
              if (img.includes("https")) {
                return img;
              }
              return staticFilesUrl + img;
            });
            return it;
          })
        );
        setTotalPages(data.totalPages);
      })
      .catch((error) => error.message);
  }, [currentPage, totalPages]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <Section>
        <SectionTitle>
          The most popular Superheroes! You are welcome 😀
        </SectionTitle>
        {superHeroes && <SuperheroesList superHeroes={superHeroes} />}
        <ButtonWrap>
          <SmallButton
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </SmallButton>
          <SmallButton
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </SmallButton>
        </ButtonWrap>
      </Section>
    </>
  );
}

export default HomePage;
