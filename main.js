const students = [];

const houses = [
  "Gryffindor",
  "Hufflepuff",
  "Ravenclaw",
  "Slytherin",
  "Voledemort's Army",
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);

  selectedDiv.innerHTML = textToPrint;
};

const createCard = (arr) => {
  let domString = "";
  for (let i = 0; i < arr.length; i++) {
    domString += `
                <div class="card student-card text-center" style="width: 20em; height: 33em; margin: 1em" id="student-card">
                  <h5 class="card-header" style="font-size: 2em">Hogwarts</h5>
                  <div class="card-body">
                    <h5 class="card-title">${arr[i].name}</h5>
                    <p class="card-text">${arr[i].house}</p>
                    <hr>
                    <div class="crest-img"><img src="./images/gryffindor.jpg" alt="House Crest" style="width: 80%"></div>
                    <hr>
                    <button type="button" class="btn btn-dark" id="${arr[i].id}">EXPEL</button>
                  </div>
                </div>`;
  }

  printToDom("#students", domString);
};

const handleButtonClick = (e) => {
  const buttonId = e.target.id;

  if (buttonId === "btn") {
    document.querySelector("#form").innerHTML = `
            <div class="card" id="input-form" style="width: 40em; margin-top: -5em; margin-left: 2em; margin-bottom: 1em">
              <h5 class="card-header m-2">Enter First Year's Student Name</h5>
              <div class="card-body d-flex float-left">
                <input type="text" class="form-control w-30 mr-3" id="name" placeholder="Student's Name..." aria-describedby="button-addon2">
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

  const studentIds = students
    .map((student) => student.id)
    .sort((a, b) => a - b);

  const id = studentIds.length ? studentIds[studentIds.length - 1] + 1 : 1;

  const obj = {
    name,
    house,
    id,
  };

  students.push(obj);
  createCard(students);

  document.querySelector("#name").value = "";
};

const deleteCard = (e) => {
  const targetType = e.target.type;
  const targetId = Number(e.target.id);

  if (targetType === "button") {
    const studentIndex = students.findIndex(
      (student) => student.id === targetId
    );
    students.splice(studentIndex, 1);
  }
  createCard(students);
};

const buttonEvents = () => {
  document.querySelector("#btn").addEventListener("click", handleButtonClick);
  document.querySelector("#students").addEventListener("click", deleteCard);
};

const init = () => {
  buttonEvents();
};

init();co
