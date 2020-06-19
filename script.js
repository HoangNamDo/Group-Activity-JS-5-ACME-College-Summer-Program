checkEligibilityButton.addEventListener("click", checkEligibility);

function checkEligibility() {
  let dateOfBirth = document.getElementById("dateOfBirth").value;
  dateOfBirth = new Date(dateOfBirth);
  let dateStamp = new Date(2020, 06, 01);

  let age = calculateAge(dateOfBirth, dateStamp);
  let name = document.getElementById("name").value;

  let greeting = "Hi " + name + "! You are " + age + " years of age as of July 1, 2020.";
  document.getElementById("greeting").innerHTML = greeting;

  let result = "";
  if (age == 16 || age == 17) {
    result = "Congratulation! You are allowed to take classes during Summer Quarter by the ACME College Summer Program.";
  } else {
    result = "Sorry! You are NOT allowed to take classes during Summer Quarter by the ACME College Summer Program.";
  }
  document.getElementById("result").innerHTML = result;
}

function calculateAge(firstDate, secondDate) {
  let diffYear = secondDate.getFullYear() - firstDate.getFullYear();
  let diffMonth = secondDate.getMonth() - firstDate.getMonth();
  let diffDate = secondDate.getDate() - firstDate.getDate();
  let _age;
  if ((diffMonth > 0) || (diffMonth == 0 && diffDate > 0)) {
    _age = diffYear;
  } else {
    _age = diffYear - 1;
  }
  return _age;
}