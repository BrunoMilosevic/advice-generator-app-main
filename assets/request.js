import axios from "axios";
const url = "https://api.adviceslip.com/advice";

export async function getData(url) {
  try {
    const { data } = await axios.get(url);
    console.log(data);
    return data.slip.advice;
  } catch (err) {
    console.log(err);
  }
}
