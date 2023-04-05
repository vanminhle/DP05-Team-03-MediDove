import axios from 'axios';

const getHomeServces = async () => {
  const response = await axios.get('https://642cd7c166a20ec9ce8f6e66.mockapi.io/api/medidove/data');
  return response.departments;
};

const getTeams = async () => {
  const response = await axios.get('https://642cd7c166a20ec9ce8f6e66.mockapi.io/api/medidove/data');
  return response.team;
};

const getPlans = async () => {
  const response = await axios.get('https://642cd7c166a20ec9ce8f6e66.mockapi.io/api/medidove/data');
  return response.plans;
};

const getNewsAndFeeds = async () => {
  const response = await axios.get('https://642cd7c166a20ec9ce8f6e66.mockapi.io/api/medidove/data');
  return response.news;
};

const getLinks = async () => {
  const response = await axios.get('https://642cd7c166a20ec9ce8f6e66.mockapi.io/api/medidove/data');
  return response.links;
};

const getContact = async () => {
  const response = await axios.get('https://642cd7c166a20ec9ce8f6e66.mockapi.io/api/medidove/data');
  return response.contact;
};

const getAboutUs = async () => {
  const response = await axios.get('https://642cd7c166a20ec9ce8f6e66.mockapi.io/api/medidove/data');
  return response.aboutUs;
};

module.exports = {
  getHomeServces,
  getTeams,
  getPlans,
  getNewsAndFeeds,
  getLinks,
  getContact,
  getAboutUs,
};
