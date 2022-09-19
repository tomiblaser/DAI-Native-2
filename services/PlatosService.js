import PlatosClient from './PlatosClient';

export const searchEntry = async (search) => {
  console.log("buscar",search)
  return PlatosClient
    .get(`recipes/complexSearch?apiKey=1f3f4b6d1b584efb868d8fad77687cfa&query=${search}`)
    .then(async(res) => {
        return res.data.results
    })
    .catch((e) => {
      console.log(`error`, e.response);
      throw "error"
    });
};


export const getFoodInfo = async (id) => {
  console.log(id)
  return PlatosClient
    .get(`recipes/${id}/information?apiKey=5fbfaca6af9949e48de98190593f70f9`, 
      
    )
    .then(async(res) => {
      
      const info=res.data
      console.log(info)
      return info
    })
    .catch((e) => {
      console.log(`register error`, e.response);
      throw "error"
    });
};