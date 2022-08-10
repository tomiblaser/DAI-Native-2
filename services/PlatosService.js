import PlatosClient from './PlatosClient';

export const searchEntry = async (search) => {
  console.log("buscar",search)
  return PlatosClient
    .get(`recipes/complexSearch?apiKey=1f3f4b6d1b584efb868d8fad77687cfa&query=${search}`)
    .then(async(res) => {
        return res.data
    })
    .catch((e) => {
      console.log(`error`, e.response);
      throw "error"
    });
};