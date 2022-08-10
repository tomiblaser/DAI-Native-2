import PlatosClient from './LogInClient';

export const searchEntry = async (search) => {
  console.log(search)
  return PlatosClient
    .post(`recipes/complexSearch?apiKey=1f3f4b6d1b584efb868d8fad77687cfa&query=${search}`, {
      ...userState
    })
    .then(async(res) => {
    
    })
    .catch((e) => {
      console.log(`error`, e.response);
      throw "error"
    });
};