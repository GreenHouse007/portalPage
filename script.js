// updates date in the footer
let currentDate = new Date().toLocaleDateString();
let date = document.querySelector("#date");

date.textContent = currentDate;

//ads the year to the footer next to name
let currentYear = new Date().getFullYear();
let year = document.querySelector("#year");

year.textContent = currentYear;

// card creation

const myProjects = [
  {
    title: "Travel Homepage",
    name: "Beach City",
    link: "beachCity/index.html",
    description: "A simple 3 page website that ueses html and css.",
    image: "Images/beachCity.png",
  },
  {
    title: "Small Website",
    name: "Mario Club",
    link: "marioClub/index.html",
    description:
      "This is a simple HTML project that showcases a Mario-themed club page.",
    image: "Images/marioClub.png",
  },
  {
    title: "API Practice",
    name: "Weather & News",
    link: "weatherNews/index.html",
    description: "Using APIs to gather weather and News information.",
    image: "Images/weatherNews.png",
  },
  {
    title: "JavaScript Game",
    name: "Card Match Game",
    link: "matchGame/index.html",
    description: "A fun use of javascript for a memory match card game.",
    image: "Images/matchGame.png",
  },
];

let myCards = document.getElementById("cards");

let projectList = myProjects.map((item) => {
  let myCard = document.createElement("div");
  myCard.className = "card";

  let myInnerCard = document.createElement("div");
  myInnerCard.className = "card-inner";
  myCard.appendChild(myInnerCard);

  let myCardFront = document.createElement("div");
  myCardFront.className = "card-front";
  myInnerCard.appendChild(myCardFront);

  let myImage = document.createElement("img");
  myImage.className = "card-img";
  myImage.src = item.image;
  myImage.alt = `Image for ${item.title}`;
  let myH2 = document.createElement("h2");
  myH2.className = "card-title";
  myH2.innerHTML = item.title;
  myCardFront.append(myImage, myH2);

  let myCardBack = document.createElement("div");
  myCardBack.className = "card-back";
  myInnerCard.appendChild(myCardBack);

  let myH3 = document.createElement("h3");
  myH3.className = "card-name";
  myH3.innerHTML = item.name;
  let myA = document.createElement("a");
  myA.innerHTML = "Project Link";
  myA.href = item.link;
  let myP = document.createElement("p");
  myP.className = "card-desc";
  myP.innerHTML = item.description;
  myCardBack.append(myH3, myA, myP);

  return myCard;
});

projectList.forEach((card) => myCards.appendChild(card));
