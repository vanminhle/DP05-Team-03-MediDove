import axios from 'axios';

export const getHomeServces = async () => {
  const response = await axios.get('https://642cd7c166a20ec9ce8f6e66.mockapi.io/api/medidove/data');
  return response.data[0].departments;
};

export const getTeams = async () => {
  const response = await axios.get('https://642cd7c166a20ec9ce8f6e66.mockapi.io/api/medidove/data');
  return response.data[0].team;
};

export const getPlans = async () => {
  const response = await axios.get('https://642cd7c166a20ec9ce8f6e66.mockapi.io/api/medidove/data');
  return response.data[0].plans;
};

export const getNewsAndFeeds = async () => {
  const response = await axios.get('https://642cd7c166a20ec9ce8f6e66.mockapi.io/api/medidove/data');
  return response.data[0].news;
};

export const getLinks = async () => {
  const response = await axios.get('https://642cd7c166a20ec9ce8f6e66.mockapi.io/api/medidove/data');
  return response.data[0].links;
};

export const getContact = async () => {
  const response = await axios.get('https://642cd7c166a20ec9ce8f6e66.mockapi.io/api/medidove/data');
  return response.data[0].contact;
};

const getAboutUs = async () => {
  const response = await axios.get('https://642cd7c166a20ec9ce8f6e66.mockapi.io/api/medidove/data');
  return response.data[0].aboutUs;
};

export const getChartData = async() => {
  const response = await axios.get('https://642cd7c166a20ec9ce8f6e66.mockapi.io/api/medidove/data');
  return response.data[0].chartData;
}
