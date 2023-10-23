import { armorListElement, messageElement } from "./project-elements.js"

/* Create a function that resets the armor list and message */
export const reset = function () {
    armorListElement.innerHTML = "";
    messageElement.textContent = "";
};