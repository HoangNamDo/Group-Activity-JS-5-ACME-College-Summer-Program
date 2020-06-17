checkEligibilityButton.addEventListener("click", checkEligibility);

function checkEligibility() {
  const name = document.getElementById("name").value;
  let dateOfBirth = document.getElementById("dateOfBirth").value;
  dateOfBirth = new Date(dateOfBirth);
  let dateStamp = new Date(2020, 06, 01);

  age = calculateAge(dateOfBirth, dateStamp);

  console.log(dateOfBirth);
  console.log(dateStamp);
  console.log(age);

  let greeting = `Hi ${name}! You are ${age} years of age as of July 1, 2020.`;
  let result = "";

  if (age == 16 || age == 17)
    result = "Congratulation! You are allowed to take classes during Summer Quarter by the ACME College Summer Program.";
  else
    result = "Sorry! You are NOT allowed to take classes during Summer Quarter by the ACME College Summer Program.";

  document.getElementById("greeting").innerHTML = greeting;
  document.getElementById("result").innerHTML = result;
}

function calculateAge(firstDate, secondDate) {
  diffYear = secondDate.getFullYear() - firstDate.getFullYear();
  diffMonth = secondDate.getMonth() - firstDate.getMonth();
  diffDate = secondDate.getDate() - firstDate.getDate();

  if ((diffMonth > 0) || (diffMonth = 0 && diffDate > 0))
    return diffYear;
  else;
  return diffYear - 1;
}