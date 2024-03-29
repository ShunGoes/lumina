const baseUrl = "https://lumina-be.onrender.com";

export const authenticate_user = async (
  body: string
) => {
  
    // sends a userss data to the database for auth purppose
  const fetch_body = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  };

  try {
    const response = await fetch(`${baseUrl}/register`, fetch_body);

    const data = await response.json();
    console.log(data)
    return data;

  } catch (error) {
    // create an error object
    let error_object = { error: true, message: error };

    return error_object;
  }
};

export const sign_in_with_social = async (body: string) => {

  const fetch_body = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  };

  try {
    const response = await fetch(`${baseUrl}/auth-login`, fetch_body);

    const data = await response.json();

    console.log(data)
    return data

  } catch (error) {
    // create an error object
    let error_object = { error: true, message: error };

    return error_object;
  }
}