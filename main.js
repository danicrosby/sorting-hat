console.log("Hello, Beautiful, from main.js");

const houses = [
  "Gryffindor",
  "Hufflepuff",
  "Ravenclaw",
  "Slytherin",
  "Voledemorts Army",
];

const handleButtonClick = (e) => {
  const buttonId = e.target.id;

  if (buttonId === "btn") {
    document.querySelector("#form").innerHTML = `
                <div class="input-group mb-3 mx-auto">
              <input type="text" class="form-control" id="name" placeholder="Student's Name..." aria-label="Recipient's username" aria-describedby="button-addon2">
              <button class="btn btn-outline-secondary" type="button" id="sort">SORT</button>
            </div>`;
  }
};

const buttonEvents = () => {
  document.querySelector("#btn").addEventListener("click", handleButtonClick);
  document.querySelector("#form").addEventListener("click", handleButtonClick);
};

const init = () => {
  buttonEvents();
};

init();
