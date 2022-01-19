const fetchRepos = async () => {
  const jsonData = await getRepos();
  buildHtmlElements(jsonData);
};

const buildHtmlElements = (data) => {
  data.forEach((element) => {
    const projectCard = document.createElement("article");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const codeLink = document.createElement("a");
    const webLink = document.createElement("a");

    // add classes and attributes to projectCard elements
    projectCard.classList.add("projectCard");
    title.classList.add("projectCard__title");
    description.classList.add("projectCard__description");
    codeLink.classList.add("projectCard__link");
    codeLink.setAttribute("href", element.html_url);
    codeLink.setAttribute("target", "_blank");
    webLink.classList.add("projectCard__link");
    webLink.setAttribute("href", element.homepage);
    webLink.setAttribute("target", "_blank");

    // add data to html elements
    if (element.name.startsWith("Winc")) {
      title.innerText = element.name.slice(16).replace("_", " ");
    } else {
      title.innerText = element.name.replace("_", " ");
    }

    description.innerText = element.description;
    codeLink.innerText = "code";
    webLink.innerText = "website";

    projectCard.appendChild(title);
    projectCard.appendChild(description);
    projectCard.appendChild(codeLink);

    // only add the websitelink if there is an active website
    if (element.homepage !== "") {
      projectCard.appendChild(webLink);
    }

    // add repo to the right project list (winc or personal)
    if (element.name.includes("Winc")) {
      const wincProjects = document.getElementById("wincProjects");
      wincProjects.appendChild(projectCard);
    } else {
      const otherProjects = document.getElementById("otherProjects");
      otherProjects.appendChild(projectCard);
    }
  });
};

fetchRepos();
