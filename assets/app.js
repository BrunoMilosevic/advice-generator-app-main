import "@popperjs/core";
import * as bootstrap from "bootstrap";
import "@/scss/main.scss";
import { getData } from "./request.js";

const advices = document.querySelector("#advice");
const rollBtn = document.querySelector(".roll-btn");

async function updateAdvice() {
  try {
    const adviceTxt = await getData("https://api.adviceslip.com/advice");
    advices.textContent = adviceTxt;
  } catch (err) {
    console.error(err);
  }
}

rollBtn.addEventListener("click", updateAdvice);
