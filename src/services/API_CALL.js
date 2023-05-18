import { Log } from './Log';
const BASE_URL = 'http://localhost:5001';

export const CallAPI = async (body, endPoint, methodType) => {

  const headers = {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${token}`
  };

  const requestOptionsPost = {
    method: methodType,
    headers,
    body: JSON.stringify(body)
  };
  const requestOptionsGet = {
    method: methodType,
    headers
  };
  try {
    const response = await fetch(BASE_URL + endPoint,methodType==='GET'? requestOptionsGet:requestOptionsPost);
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      Log(`API call failed! Returned null, API end point : ${BASE_URL + endPoint}`);
      return null;
    }
  } catch (error) { console.error('Error:', error); }
};
