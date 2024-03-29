// add this at the top of the file (line 1)
import { BittElement } from "../src/bitt-element.js";

export function postBitt() {
    let username = document.getElementById("usernameBittInput").value;
    let text = document.getElementById("textBittArea").value;

    let jsonData = JSON.stringify({"username": username, "text": text});

    fetch("/create-bitt", {
            method: 'post',
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: jsonData
        })
        .then(response => response.json())
        .then(function (bitt) {
            let container = document.getElementById("bittsContainer");

        let bittElement = new BittElement(bitt.text, bitt.username);
    container.prepend(bittElement);

            container.prepend(bittElement); // put the bitt at the top of the page (prepend)

            // prepend element to bitts list in local storage
            let storedBitts = JSON.parse(localStorage.bitts);
            storedBitts.unshift(bitt);
            localStorage.bitts = JSON.stringify(storedBitts);

            document.getElementById("createBittModal").click(); // close the modal
        })
        .catch(function (error) {
            console.log('Request failed', error);
        });
}