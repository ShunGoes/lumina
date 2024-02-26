export const baseUrl = "";


export const authenticate_user = async (
  url: string,
  body: string
) => {
  
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

    return data;

  } catch (error) {
    // create an error object
    let error_object = { error: true, message: error };

    return error_object;
  }
};
