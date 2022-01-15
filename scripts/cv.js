const createInfoBlock = (target, targetArray) => {
  const parentSection = document.getElementById(target);

  targetArray.forEach((element) => {
    // create infoBlock elements
    const infoBlock = document.createElement("article");
    const period = document.createElement("span");
    const title = document.createElement("h3");
    const location = document.createElement("h4");
    const extraInfo = document.createElement("span");

    // add classes to infoBlock elements
    infoBlock.classList.add("infoBlock");
    period.classList.add("infoBlock__period");
    title.classList.add("infoBlock__title");
    location.classList.add("infoBlock__location");
    extraInfo.classList.add("infoBlock__extraInfo");

    // add data to infoBlock elements
    period.innerText = element.period;
    title.innerText = element.title;
    location.innerText = element.location;
    extraInfo.innerText = element.extraInfo;

    // build infoBlock
    infoBlock.appendChild(period);
    infoBlock.appendChild(title);
    infoBlock.appendChild(location);
    infoBlock.appendChild(extraInfo);

    parentSection.appendChild(infoBlock);
  });
};

const createInfoList = (target, targetArray) => {
  const parentSection = document.getElementById(target);

  const listElement = document.createElement("ul");
  listElement.classList.add("cv__list");

  targetArray.forEach((element) => {
    const listItem = document.createElement("li");
    listItem.classList.add("cv__list--item");
    listItem.innerText = element;

    listElement.appendChild(listItem);
  });

  parentSection.appendChild(listElement);
};

createInfoBlock("education", education);
createInfoBlock("experience", experience);
createInfoList("skills", skills);
createInfoList("interests", interests);
