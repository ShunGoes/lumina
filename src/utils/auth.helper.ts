import axios from "axios";

const baseUrl = "https://lumina-be.onrender.com";

const client = axios.create({
  baseURL: baseUrl,
  headers: {
      "x-subject-type": "standard",
      "content-type": "application/json",
  },
  withCredentials: true,
});

export default client;

export const authenticate_user = async (body: string, url: string) => {
  // sends a userss data to the database for auth purppose
  const fetch_body = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  };

  try {
    const response = await fetch(`${baseUrl}/${url}`, fetch_body);

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    // create an error object
    const error_object = { error: true, message: error };

    return error_object;
  }
};

export const sign_in_with_social = async (body: string, url: string) => {
  const fetch_body = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  };

  try {
    const response = await fetch(`${baseUrl}/${url}`, fetch_body);

    const data = await response.json();

    return data;
  } catch (error) {
    // create an error object
    const error_object = { error: true, message: error };

    return error_object;
  }
};
export const get_passions_array = async () => {
  try {
    const response =await axios.get(`${baseUrl}/get-passions`);

    const data = await response.data;

    return data;
  } catch (error) {
    console.log("Error fetching psassion list. Error: ", error);
  }
};
