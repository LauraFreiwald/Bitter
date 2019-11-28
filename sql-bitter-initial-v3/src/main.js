import { getBitts } from "../src/get-bitts.js";
import { postBitt } from "../src/post-bitts.js";

getBitts();  // initial run (before the interval)

setInterval(getBitts, 180*1000);  // 180 * 1000 miliseconds = 3 min

let bittSubmit = document.getElementById("bittSubmit");
bittSubmit.addEventListener("click", postBitt);