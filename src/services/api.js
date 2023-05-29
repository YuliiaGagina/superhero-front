import axios from "axios";
axios.defaults.staticUrl = "http://localhost:8800/";
axios.defaults.baseURL = axios.defaults.staticUrl + "api";

// https://salty-mountain-49103.herokuapp.com/

export const getSuperheroes = async (page) => {
  const { data } = await axios.get(`/superheroes?page=${page}`);

  return data;
};
export const staticFilesUrl = axios.defaults.staticUrl;
export const getFilmsByQuery = async (query) => {
  const { data } = await axios.get(`/search/movie`, {
    params: { query: query },
  });

  return data;
};

export const getFilmInformation = async (_id) => {
  const { data } = await axios.get(`/superheroes/${_id}`);

  return data;
};

export const updateheroInfo = async (_id, formData) => {
  const { data } = await axios.put(`/superheroes/${_id}`, formData);
  return data;
};

export const createNewHero = async (formData) => {
  return axios
    .post(`/superheroes`, formData)
    .then((response) => {
      return response.data; // Return the response data if needed
    })
    .catch((error) => {
      throw error; // Throw an error to be handled by the calling component
    });
};

export const deletehero = async (_id) => {
  const { data } = await axios.delete(`/superheroes/${_id}`);
  return data;
};

export const deleteHeroImg = async (_id, imageId) => {
  const { data } = await axios.delete(`superheroes/${_id}/avatars/${imageId}`);
  return data;
};

export const addImageToHero = async (_id, formData) => {
  const { data } = await axios.post(`superheroes/${_id}/avatars`, formData);
  return data;
};
