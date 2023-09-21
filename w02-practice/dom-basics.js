const newParagrah = document.createElement("p");
newParagrah.innerText = "Added with Javascript";
document.body.appendChild(newParagrah);

const newImage = document.createElement("img");
newImage.setAttribute("src","https://picsum.photos/200");
newImage.setAttribute("alt","A random image from picsum");
document.body.appendChild(newImage);

const newSection = document.createElement("section");
newSection.innerHTML = "<h2>CSE 121b</h2><p>Welcome to Javascript Language</p>";
document.body.appendChild(newSection);