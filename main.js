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
                <div class="card student-card mx-auto text-center" style="width: 20em; height: 20em">
                  <h5 class="card-header">STUDENT</h5>
                  <div class="card-body">
                    <h5 class="card-title">${arr[i].name}</h5>
                    <p class="card-text">${arr[i].house}</p>
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

  // get all the student IDs and create a new array and sort them lowest to highest
  const studentIds = students
    .map((student) => student.id)
    .sort((a, b) => a - b);

  // ternary operator: if the students array is not empty, create an ID that is +1 of the last item in the array. Otherwise make the id 1
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
    const studentIndex = students.findIndex((student) => student.id === targetId);
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

init();

    // this method returns the index of the object you are trying to remove in the array (85_)
    // this removes the item from the array - NOTE: this modifies the original array 86
