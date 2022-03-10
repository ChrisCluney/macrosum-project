const marcoForm = document.getElementById("macroForm");
//getting the value for male or female
const gender = document.querySelector('input[name="gender"]:checked');
console.log(gender);

//getting the value of age,height,weight,goal weight, and body fat

const fname = document.getElementById("fname");
console.log(fname);

const ageInput = document.getElementById("ageInput");
console.log(ageInput);

const heightInput = document.getElementById("heightInput");
console.log(heightInput);

const weightInput = document.getElementById("weightInput");
console.log(weightInput);

const wantsGoal = document.querySelector('input[name="wantsGoal"]:checked');
console.log(wantsGoal);

const goalWeightInput = document.getElementById("goalWeightInput");
console.log(goalWeightInput);

const bdFatInput = document.getElementById("bdFatInput");
console.log(bdFatInput);

//getting selected value from a drop down list

const activity = document.querySelector("#activity");
console.log(activity);

const resultSection = document.getElementById("resultDiv");

const deleteItem = (id) => {
  axios.delete(`http://localhost:5000/macros/${id}`).then((res) => {
    displayItems(res.data);
    console.log(res.data);
  });
};

const createItem = (item) => {
  const newItem = document.createElement("div");

  newItem.className = "resultDiv";
  newItem.innerHTML = `<div class="userDiv">
                          <div class="userResults" id="jump">
                              <div class="userName">Thanks <span> &nbsp;${item.fname}</span>, here are your macros!</div>
                              <div class="finaleCalories"><img src="pics/calories.png" alt="protein picture">${item.finalCalories}</div>
                              <div class="protienGrams"><img src="pics/protein.png" alt="protein picture">${item.protienGrams}g</div>
                              <div class="fatGrams"><img src="pics/fats.png" alt="fats picture">${item.fatGrams}g</div>
                              <div class="carbGrams"><img src="pics/Carbs.png" alt="carbs picture">${item.carbGrams}g</div>
                          </div>
                          <div class="startOver">
                              <a href="index.html"><button class="startOverBtn">Start Over</button></a>
                          </div>
                      </div>`;

  resultSection.appendChild(newItem);

  let deleteBtns = document.getElementsByClassName("delete-btn");

  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", deleteItem);
  }
};
//makes the cards to display the items
const displayItems = (item) => {
  // console.log(arr);
  while (resultSection.firstChild) {
    resultSection.removeChild(resultSection.firstChild);
  }

  createItem(item);
  console.log(item);
};

macroForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newItem = {
    fname: fname.value,
    gender: gender.value,
    ageInput: ageInput.value,
    heightInput: heightInput.value,
    weightInput: weightInput.value,
    wantsGoal: wantsGoal.value,
    goalWeightInput: goalWeightInput.value,
    bdFatInput: bdFatInput.value,
    activity: activity.value,
  };
  console.log(newItem);
  axios.post("http://localhost:5000/macros", newItem).then((res) => {
    displayItems(res.data);
    console.log(res.data);
  });

  fname.value = "";
  gender.value = "";
  ageInput.value = "";
  heightInput.value = "";
  weightInput.value = "";
  wantsGoal.value = "";
  goalWeightInput.value = "";
  bdFatInput.value = "";
  activity.value = "";
});
