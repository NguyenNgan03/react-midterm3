import axios from "axios";

export const getUsers = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${username} `
    );
    return response.data.items;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const getUser = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return {};
  }
};

export const getUserRepos = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return [];
  }
};
