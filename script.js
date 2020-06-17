function checkEligibility() {
  const name = document.getElementById("name").value;
  let dateOfBirth = document.getElementById("dateOfBirth").value;
  dateOfBirth = new Date(dateOfBirth);
  dateOfBirth.setDate(dateOfBirth.getDate() + 1);
  let dateStamp = new Date(2020, 06, 01);

  console.log(dateOfBirth);
  console.log(dateStamp);

  age = calculateAge(dateOfBirth, dateStamp);

  console.log(age);

  greeting = `Hi ${name}! You are ${age} years old.`;
  document.getElementById("greeting").innerHTML = greeting;

  if (age == 16 || age == 17)
    let result = "Congratulation! You are allowed to take classes during Summer Quarter by the ACME College Summer Program.";
  else
    result = "Sorry! You are NOT allowed to take classes during Summer Quarter by the ACME College Summer Program.";

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


function isAgeEligible(firstDate) {
  let year = firstDate.getFullYear();
  console.log(year);

  let month = firstDate.getMonth();
  console.log(month);
  let date = firstDate.getDate();
  console.log(date);
  diffYear = 2020 - year;
  diffMonth = 06 - month;
  diffDate = Math.abs(01 - date);

  if (diffYear == 16)
    if ((diffMonth > 0) || (diffMonth = 0 && diffDate > 0))
      return true;
    else
      return false;

  if (diffYear == 2007)
    if ((diffMonth < 0) || (diffMonth = 0 && date < 0))
      return true;
    else
      return false;
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