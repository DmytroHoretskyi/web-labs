const BASE_URL = 'http://localhost:5000/';
const RESOURCE_URL = `${BASE_URL}posts`;

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
  try {
    const reqParams = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      reqParams.body = JSON.stringify(body);
    }

    return await fetch(`${RESOURCE_URL}${urlPath}`, reqParams);
  } catch (error) {
    console.error("HTTP ERROR: ", error);
  }
};

// public functionality

export const getAllProducts = async () => {
  const rawResponse = await baseRequest({ method: "GET" });

  return await rawResponse.json();
};
export const postProduct = (body) => baseRequest({ method: "POST", body });

export const updateProduct = (id, body) =>
    baseRequest({ urlPath: `/${id}`, method: "PATCH", body });

export const deleteProduct = (id) =>
    baseRequest({ urlPath: `/${id}`, method: "DELETE" });