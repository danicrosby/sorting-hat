const students = [];
const voldemortArmy = [];

const houses = [
  "Gryffindor",
  "Hufflepuff",
  "Ravenclaw",
  "Slytherin",
];

const Gryffindor = "https://i.pinimg.com/564x/52/f6/a3/52f6a3ab31c18f05bb820a4c2d3ae7be.jpg";
const Hufflepuff = "https://i.pinimg.com/564x/1e/da/bb/1edabbdae3522af14d88885d3d4a9d96.jpg";
const Slytherin = "https://i.pinimg.com/564x/70/8d/52/708d520bfcb166221752314daf91b0f0.jpg";
const Ravenclaw = "https://i.pinimg.com/564x/39/c7/9c/39c79c53ba35087545586d5865bb44f4.jpg";


const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);

  selectedDiv.innerHTML = textToPrint;
};


const createCard = (arr) => {
  let domString = "";
  for (let i = 0; i < arr.length; i++) {
    domString += `
                <div class="card student-card text-center" style="width: 20em; height: 30em; margin: 1em" id="student-card">
                  <h5 class="card-header" id="card-header">${arr[i].house}</h5>
                  <div class="card-body">
                    <h5 class="card-title">${arr[i].name}</h5>
                    <div class="crest-img"><img src="${arr[i].crest}" alt="Crest" style="width: 100%" id="crest-img"></div>
                    <button type="button" class="btn btn-dark expel-btn" id="${arr[i].id}" style="margin-top: .8em">EXPEL</button>
                  </div>
                </div>`;
  }

  printToDom("#students", domString);
};





// EXPELLED

const expelledCard = (arr) => {
  let domString = "";
  for (let i = 0; i < arr.length; i++) {
    domString += `
                  <div class="card expelled-student-card text-center" style="width: 20em; height: 30em; margin: 1em" id="expelled-card">
                    <h5 class="expelled-card-header" id="expelled-card-header"> Voldemort's Army </h5>
                    <hr>
                    <div class="expelled-card-body">
                      <h5 class="expelled-card-title">${arr[i].name}</h5>
                      <div class="expelled-crest-img"><img src="https://i.pinimg.com/originals/97/f5/e8/97f5e8f5f26735339fdd152e76d8d293.jpg?epik=dj0yJnU9OUtyX3MxdEpmbEY3YkJiNXBhttps://i.pinimg.com/originals/97/f5/e8/97f5e8f5f26735339fdd152e76d8d293.jpg?epik=dj0yJnU9OUtyX3MxdEpmbEY3YkJiNXBoMWdSSUdDaFViV1VOMWomcD0wJm49QXRabjJoVDNwNlJtNVp1VVY4X25sQSZ0PUFBQUFBR0FhUXVzoMWdSSUdDaFViV1VOMWomcD0wJm49QXRabjJoVDNwNlJtNVp1VVY4X25sQSZ0PUFBQUFBR0FhUXVz" alt="Crest" style="width: 100%"></div>
                    </div>
                  </div>`;         
  }

  printToDom("#expelled", domString);
};





const handleButtonClick = (e) => {
  const buttonId = e.target.id;

  if (buttonId === "btn") {
    document.querySelector("#form-container").innerHTML = `
                <div class="card" id="input-form"">
                  <h5 class="card-header m-2" id="form-header">Enter First Year's Student Name</h5>
                  <div class="card-body d-flex float-left">
                    <input type="text" class="form-control w-30 mr-3" id="name" placeholder="Student's Name..." required>
                    <button class="btn btn-outline-secondary fade-in-btn" type="submit" id="sort">SORT</button>
                  </div>
                </div>`;

    document.querySelector("#sort").addEventListener("click", getFormInfo);
  }
};

const getFormInfo = (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value;

  if (name === '') {
    alert('         * PLEASE ENTER A NAME TO GET SORTED *')
    return;
  }

  const crest = '';

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
    crest,
  };

  if (house === "Gryffindor") {
    obj.crest = Gryffindor;
  } else if (house === "Slytherin") {
    obj.crest = Slytherin;
  } else if (house === "Hufflepuff") {
    obj.crest = Hufflepuff;
  } else if (house === "Ravenclaw") {
    obj.crest = Ravenclaw;
  }

  students.push(obj);
  createCard(students);

  document.querySelector("#name").value = '';
};

const deleteCard = (e) => {
  const targetType = e.target.type;
  const targetId = Number(e.target.id);

  if (targetType === "button") {
    const studentIndex = students.findIndex(
      (student) => student.id === targetId
    );
    let expelledStudent = students.splice(studentIndex, 1);
    voldemortArmy.push(...expelledStudent);
  }

  createCard(students);
  expelledCard(voldemortArmy);
};

const buttonEvents = () => {
  document.querySelector("#btn").addEventListener("click", handleButtonClick);
  document.querySelector("#students").addEventListener("click", deleteCard);
};

const init = () => {
  buttonEvents();
};

init();
