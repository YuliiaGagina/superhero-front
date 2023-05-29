import React, { useState } from "react";

import { createNewHero } from "../../services/api";
import { Loader } from "../Loader/Loader";
import { Form, Label, Input, Wrapper, Button, Text } from "./CreateHero.styled";

const NewSuperheroForm = () => {
  const [nickname, setNickname] = useState("");
  const [real_name, setReal_name] = useState("");
  const [origin_description, setOrigin_description] = useState("");
  const [superpowers, setSuperpowers] = useState("");
  const [catch_phrase, setCatch_phrase] = useState("");
  const [images, setImages] = useState([]);
  const [downloading, setDownloading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("nickname", nickname);
      formData.append("real_name", real_name);
      formData.append("origin_description", origin_description);
      formData.append("superpowers", superpowers);
      formData.append("catch_phrase", catch_phrase);

      const imagesArray = Array.from(images);
      imagesArray.forEach((image) => {
        formData.append("images", image);
      });
      setDownloading(true);
      createNewHero(formData).then(({ data }) => {
        console.log(data);
        setDownloading(false);
      });
      setNickname("");
      setReal_name("");
      setOrigin_description("");
      setSuperpowers("");
      setCatch_phrase("");
      setImages([]);
    } catch (error) {
      console.error(error);
      setDownloading(false);
    }
  };

  return (
    <>
      <section>
        {downloading && <Loader />}
        <Form onSubmit={handleSubmit}>
          <Wrapper>
            {" "}
            <Label>Nickname:</Label>
            <Input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </Wrapper>
          <Wrapper>
            {" "}
            <Label>Real Name:</Label>
            <Input
              type="text"
              value={real_name}
              onChange={(e) => setReal_name(e.target.value)}
            />
          </Wrapper>
          <Wrapper>
            {" "}
            <Label>Origin Description:</Label>
            <Text
              value={origin_description}
              onChange={(e) => setOrigin_description(e.target.value)}
            ></Text>
          </Wrapper>
          <Wrapper>
            {" "}
            <Label htmlFor="superpowers">Superpowers:</Label>
            <Text
              value={superpowers}
              onChange={(e) => setSuperpowers(e.target.value)}
            ></Text>
          </Wrapper>
          <Wrapper>
            {" "}
            <Label>Catch Phrase:</Label>
            <Input
              type="text"
              value={catch_phrase}
              onChange={(e) => setCatch_phrase(e.target.value)}
            />
          </Wrapper>
          <Wrapper>
            {" "}
            <Label htmlFor="images">Images:</Label>
            <Input
              type="file"
              multiple
              onChange={(e) => setImages(e.target.files)}
            />
          </Wrapper>

          <Button type="submit">Submit</Button>
        </Form>
      </section>
    </>
  );
};

export default NewSuperheroForm;
