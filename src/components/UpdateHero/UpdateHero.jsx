import React, { useState } from "react";
import { updateheroInfo } from "../../services/api";
import { useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { Form, Label, Input, Wrapper, Button, Text } from "./UpdateHero.styled";

const UpdateHero = ({ heroImages }) => {
  const [nickname, setNickname] = useState("");
  const [real_name, setReal_name] = useState("");
  const [origin_description, setOrigin_description] = useState("");
  const [superpowers, setSuperpowers] = useState("");
  const [catch_phrase, setCatch_phrase] = useState("");
  const [images, setImages] = useState([]);
  const { _id } = useParams();
  const [downloading, setDownloading] = useState(false);

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const handleRealNameChange = (event) => {
    setReal_name(event.target.value);
  };

  const handleOriginDescriptionChange = (event) => {
    setOrigin_description(event.target.value);
  };

  const handleSuperpowersChange = (event) => {
    setSuperpowers(event.target.value);
  };

  const handleCatchPhraseChange = (event) => {
    setCatch_phrase(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("nickname", nickname);
      formData.append("real_name", real_name);
      formData.append("origin_description", origin_description);
      formData.append("superpowers", superpowers);
      formData.append("catch_phrase", catch_phrase);

      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }
      const imagesArray = Array.from(images);
      imagesArray.forEach((image) => {
        formData.append("images", image);
      });
      setDownloading(true);
      updateheroInfo(_id, formData).then(({ data }) => {
        setDownloading(false);
        console.log(data);
        window.location.reload();
      });
      setNickname("");
      setReal_name("");
      setCatch_phrase("");
      setOrigin_description("");
      setSuperpowers("");
      setImages([]);
    } catch (error) {
      console.error("Error:", error);
      setDownloading(true);
    }
  };

  return (
    <>
      {downloading && <Loader />}
      <Form onSubmit={handleSubmit}>
        <h2>Hero Profile</h2>
        <Wrapper>
          {" "}
          <Label>
            Nickname:
            <Input
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
            />
          </Label>
        </Wrapper>

        <Wrapper>
          {" "}
          <Label>
            Real Name:
            <Input
              type="text"
              value={real_name}
              onChange={handleRealNameChange}
            />
          </Label>
        </Wrapper>

        <Wrapper>
          {" "}
          <Label>
            Origin Description:
            <Text
              value={origin_description}
              onChange={handleOriginDescriptionChange}
            ></Text>
          </Label>
        </Wrapper>

        <Wrapper>
          {" "}
          <Label>
            Superpowers:
            <Text value={superpowers} onChange={handleSuperpowersChange}></Text>
          </Label>
        </Wrapper>

        <Wrapper>
          {" "}
          <Label>
            Catch Phrase:
            <Input
              type="text"
              value={catch_phrase}
              onChange={handleCatchPhraseChange}
            />
          </Label>
        </Wrapper>

        <Wrapper>
          {" "}
          <Label>
            Upload Image:
            <Input
              type="file"
              multiple
              onChange={(e) => setImages(e.target.files)}
            />
          </Label>
        </Wrapper>

        <Button type="submit">Update</Button>
      </Form>
    </>
  );
};

export default UpdateHero;
