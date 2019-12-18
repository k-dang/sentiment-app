import axios from 'axios';

export default axios.create({
  baseURL: 'https://sentiment-twitter-api.herokuapp.com/api/',
  timeout: 3000
});

// export const postSentimentRange = async (company, from, to) => {
//   const response = await instance.post(company + '/sentiment/range', {
//     from: from,
//     to: to
//   });
//   return response.data.sentiments;
// };

// export const getSentimentAverage = async company => {
//   const response = await instance.get(company + '/sentiment/average');
//   return response.data.average;
// };
