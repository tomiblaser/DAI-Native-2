import LogInClient from './LogInClient';

export const loginEntry = async (userState) => {
  console.log(userState)
  return LogInClient
    .post(``, {
      ...userState
    })
    .then(async(res) => {
    
    })
    .catch((e) => {
      console.log(`error`, e.response);
      throw "error"
    });
};