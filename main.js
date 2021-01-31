console.log("Hello, Beautiful, from main.js");

const houses = [
  "Gryffindor",
  "Hufflepuff",
  "Ravenclaw",
  "Slytherin",
  "Voledemorts Army",
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const createCard = (obj) => {
  let domString = "";
  domString += `
                <div class="card d-flex mx-auto text-center" style="width: 20em; height: 20em" id=${Math.random}>
                <h5 class="card-header">STUDENT</h5>
                <div class="card-body">
                  <h5 class="card-title">${obj.name}</h5>
                  <p class="card-text">${obj.house}</p>
                  <a href="#" class="btn btn-dark">EXPEL</a>
                </div>
              </div>`;

  printToDom("#students", domString);
};

const handleButtonClick = (e) => {
  const buttonId = e.target.id;

  if (buttonId === "btn") {
    document.querySelector("#form").innerHTML = `
            <div class="card mx-auto" id="input-form" style="width: 40em">
              <h5 class="card-header">Enter First Year's Student Name</h5>
              <div class="card-body d-flex float-left">
                <input type="text" class="form-control mr-3" style="width: 30em" id="name" placeholder="Student's Name..." aria-label="Recipient's username" aria-describedby="button-addon2">
                <br>
                <button class="btn btn-outline-secondary" type="submit" style=""id="sort">SORT</button>
              </div>
            </div>
                `;

    document.querySelector("#sort").addEventListener("click", getFormInfo);
  }
};

const getFormInfo = (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value;

  const randomHouseIndex = Math.floor(Math.random() * houses.length);
  const house = houses[randomHouseIndex];

  const obj = {
    name,
    house,
  };

  createCard(obj);
  document.querySelector("#name").value = " ";
};

const buttonEvents = () => {
  document.querySelector("#btn").addEventListener("click",handleButtonClick);
};

const init = () => {
  buttonEvents();
};

init();
