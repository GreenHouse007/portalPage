const apiKey = "2f085957701a406bb0be047817a9d1eb";

const today = new Date().toISOString().split("T")[0];

const thirtyDaysAgo = new Date();
thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
const fromDate = thirtyDaysAgo.toISOString().split("T")[0];

const techTopics = [
  "artificial intelligence",
  "robotics automation",
  "quantum computing",
  "cybersecurity",
];

const randomTopic = techTopics[Math.floor(Math.random() * techTopics.length)];

const news = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
  randomTopic
)}&from=${fromDate}&to=${today}&sortBy=publishedAt&language=en&apiKey=${apiKey}`;

fetch(news)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    for (let a = 0; a < 5; a++) {
      let card = document.getElementById(`newsContainer${a}`);

      if (
        jsObject.articles[a].urlToImage != null &&
        !jsObject.articles[a].urlToImage.startsWith("https://biztoc")
      ) {
        let image = document.createElement("img");
        image.src = jsObject.articles[a].urlToImage;
        image.alt = "Article Image";
        card.appendChild(image);
      } else {
        let image = document.createElement("img");
        image.src = "https://picsum.photos/200/300";
        image.alt = "placeholder Image";
        card.appendChild(image);
      }

      let divTitle = document.createElement("div");
      divTitle.className = "title";
      divTitle.textContent = jsObject.articles[a].title;
      card.appendChild(divTitle);

      let aAuthor = document.createElement("a");
      aAuthor.className = "author";
      aAuthor.href = jsObject.articles[a].url;
      aAuthor.target = "_blank";
      aAuthor.textContent = jsObject.articles[a].author;
      card.appendChild(aAuthor);

      let pDescription = document.createElement("p");
      pDescription.className = "content";
      pDescription.textContent = jsObject.articles[a].description;
      card.appendChild(pDescription);
    }
  });
