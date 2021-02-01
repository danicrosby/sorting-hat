
// let studentCardId = 1;



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
  let domString = '';
    houses.forEach((item, i) => {
      domString = `
                  <div class="card student-card mx-auto text-center" style="width: 20em; height: 20em" id=${i}>
                    <h5 class="card-header">STUDENT</h5>
                    <div class="card-body">
                      <h5 class="card-title">${item.name}</h5>
                      <p class="card-text">${item.house}</p>
                      <button type="button" class="btn btn-dark" id=${i}>EXPEL</button>
                    </div>
                  </div>`;

    });
  
  printToDom("#students", domString);
  // studentCardId++
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

  const item = {
    name,
    house,
  };

  createCard(item);

  document.querySelector("#name").value = "";
};

const deleteCard = (e) => {
  e.target.closest(".student-card").remove();
                                            
};

const buttonEvents = () => {
  document.querySelector("#btn").addEventListener("click", handleButtonClick);
};

const init = () => {
  buttonEvents();
};

init();
