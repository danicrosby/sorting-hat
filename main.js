
const houses = [
  "Gryffindor",
  "Hufflepuff",
  "Ravenclaw",
  "Slytherin",
  "Voledemort's Army",
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);

  selectedDiv.innerHTML += textToPrint;
  document.querySelector(".student-card").addEventListener("click", deleteCard);
};

const createCard = (obj) => {
  let domString = `
                <div class="card student-card mx-auto text-center" style="width: 20em; height: 20em">
                  <h5 class="card-header">STUDENT</h5>
                  <div class="card-body">
                    <h5 class="card-title">${obj.name}</h5>
                    <p class="card-text">${obj.house}</p>
                    <button type="button" class="btn btn-dark" id="expel">EXPEL</button>
                  </div>
                </div>`;
  
  printToDom("#students", domString);
};

const handleButtonClick = (e) => {
  const buttonId = e.target.id;

  if (buttonId === "btn") {
    document.querySelector("#form").innerHTML = `
            <div class="card mx-auto" id="input-form" style="width: 40em">
              <h5 class="card-header m-2">Enter First Year's Student Name</h5>
              <div class="card-body d-flex float-left">
                <input type="text" required class="form-control w-30 mr-3" id="name" placeholder="Student's Name..." aria-describedby="button-addon2">
                <br>
                <button class="btn btn-outline-secondary" type="submit" id="sort">SORT</button>
              </div>
            </div>`;

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

  document.querySelector("#name").value = "";
};

const deleteCard = (e) => {
  e.target.closest(".student-card").remove();  //need to change this function- need to make and access unique id's in createCard function
                                              
};

const buttonEvents = () => {
  document.querySelector("#btn").addEventListener("click", handleButtonClick);
};

const init = () => {
  buttonEvents();
};

init();

