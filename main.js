// Setup a simple application with just index.html and main.js (no browserify/grunt and no React).

// 1) This application should display the current date & time on the DOM
// 2) There should be a button that when clicked, updates the current date & time on the DOM
// 3) Push it up to Github
// 4) Once you are finished, slack Emily or Leah your repo link

// *notes: this is a simple web application, so you will need to run the http server
let output = document.querySelector("#output");
let article = document.createElement("article");
let button = document.createElement("button");
output.appendChild(article)
getDate();

function getDate () {
    let date = new Date();
    let day = date.getUTCDate();
    let month= date.getUTCMonth() + 1;
    let year = date.getFullYear();
    let displayDate = `Today's Date: ${month} / ${day} / ${year}`
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let timestamp = ` Current Time: ${hours}:${minutes}`;
    let combo = `${displayDate} <br>${timestamp}<br />`
    article.innerHTML = combo;

    button.textContent="Get Time & Date"
    article.appendChild(button);
}

button.addEventListener("click", () => {
getDate();
})