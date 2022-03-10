const dietList = [];
let globalId = 0;

module.exports = {
  addItem: (req, res) => {
    const {
      fname,
      gender,
      ageInput,
      heightInput,
      weightInput,
      wantsGoal,
      goalWeightInput,
      bdFatInput,
      activity,
    } = req.body;
    let genderNum = parseFloat(gender);
    console.log(req.body);
    let wantsGoalNum = parseFloat(wantsGoal);

    let weightKg = parseFloat(weightInput) * 0.45;
    console.log(weightKg);

    let heightCm = parseFloat(heightInput) * 2.5;
    console.log(heightCm);

    const bmi =
      10 * weightKg + 6.25 * heightCm - 5 * parseFloat(ageInput) + genderNum;
    console.log(bmi);

    let caloriesNeed = bmi * parseFloat(activity);
    console.log(caloriesNeed);

    // INFO I WANT TO DISPLAY
    let finalCalories = Math.round(caloriesNeed + wantsGoalNum);
    console.log(finalCalories);

    let protienGrams = Math.round(parseFloat(goalWeightInput) * 1);
    console.log(protienGrams);

    let fatGrams = Math.round((finalCalories * 0.4) / 9);
    console.log(fatGrams);

    let carbs = finalCalories - fatGrams * 9 - protienGrams * 4;

    let carbGrams = Math.round(carbs / 4);
    console.log(carbGrams);

    let newItem = {
      fname,
      gender,
      ageInput,
      heightInput,
      weightInput,
      wantsGoal,
      goalWeightInput,
      bdFatInput,
      activity,
      Id: globalId,
    };

    dietList.push(newItem);
    let infoReturn = {
      fname,
      finalCalories,
      protienGrams,
      fatGrams,
      carbGrams,
    };
    res.status(200).send(infoReturn);
    globalId++;
  },
};
