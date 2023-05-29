import { useState, useEffect } from "react";

import {
  addImageToHero,
  deleteHeroImg,
  deletehero,
  getFilmInformation,
  staticFilesUrl,
} from "../../services/api";
import { useParams, useLocation } from "react-router-dom";

import {
  Wrapper,
  Section,
  ButtonLink,
  ImageWrap,
  TextContainer,
  Button,
  Text,
  SmallButton,
} from "./HeroDetails.styled";
import { Outlet } from "react-router-dom";
import UpdateHero from "../../components/UpdateHero/UpdateHero";
import { Loader } from "../../components/Loader/Loader";

const HeroDetails = () => {
  const [hero, setHero] = useState(null);
  // const [isDeleting, setIsDeleting] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [images, setImages] = useState([]);
  const { _id } = useParams();

  const location = useLocation();

  const goBackLink = location?.state?.from ?? "/";

  const handleSubmitImages = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }
      const imagesArray = Array.from(images);
      imagesArray.forEach((image) => {
        formData.append("images", image);
      });
      addImageToHero(_id, formData).then(({ data }) => {
        window.location.reload();
        setImages([]);
        return data;
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handledeleteImage = async (_id, imageId) => {
    deleteHeroImg(_id, imageId)
      .then(({ data }) => {
        console.log(data);
        setIsUploading(false);
        window.location.reload();
      })
      .catch((err) => err.message);
  };

  const handleDeleteHero = async (_id) => {
    deletehero(_id)
      .then(({ data }) => {
        setDownloading(false);
        setSelectedImage(null);

        window.location.reload();
        return data;
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getFilmInformation(_id)
      .then(({ data }) => {
        setHero(data.superhero);
      })
      .catch((err) => err.message);
  }, [_id]);

  return (
    <Section>
      <ButtonLink to={goBackLink}>Go back</ButtonLink>
      {downloading && <Loader />}
      {hero && (
        <Wrapper>
          <ImageWrap>
            {hero.images.map((image, idx) => (
              <>
                <img
                  key={image._id}
                  width="600"
                  src={
                    image.includes("https")
                      ? image
                      : `${staticFilesUrl}${image}`
                  }
                  alt="avatar"
                />
                <SmallButton onClick={() => handledeleteImage(_id, idx)}>
                  delete img
                </SmallButton>
              </>
            ))}
            <form onSubmit={handleSubmitImages}>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => setImages(e.target.files)}
              />
              <button disabled={!selectedImage || isUploading}>
                {isUploading ? "Uploading..." : "Upload Image"}
              </button>
              {selectedImage && (
                <div>
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Selected"
                  />
                </div>
              )}
              <Button type="submit">save</Button>
            </form>
          </ImageWrap>
          <TextContainer>
            <h1>{hero.nickname}</h1>

            <p>
              {" "}
              <b>Main Phrase: </b> {hero.catch_phrase}
            </p>
            <p>
              {" "}
              <b>Real name: </b> {hero.real_name}
            </p>
            <p>
              {" "}
              <b> Description: </b> {hero.origin_description}
            </p>
            <Text>
              {" "}
              <b>Power: </b> {hero.superpowers}
            </Text>
            <Button onClick={() => handleDeleteHero(_id)}>delete hero</Button>
          </TextContainer>
          <UpdateHero heroImages={hero.images} />
        </Wrapper>
      )}

      <Outlet />
    </Section>
  );
};

export default HeroDetails;
