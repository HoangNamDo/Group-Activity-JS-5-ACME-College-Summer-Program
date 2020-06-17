function submitHandler() {
  let name = document.getElementById("name").value;
  let dateOfBirth = document.getElementById("dateOfBirth").value;
  dateOfBirth = new Date(dateOfBirth);
  let dateForCompare = new Date(2020, 06, 01);
  console.log(dateOfBirth);
  console.log(dateForCompare);
  let result;

  if (dateOfBirth.length == 0) {
  document.getElementById("emptyNotification").style.visibility = "visible";
  document.getElementById("greeting").style.visibility = "hidden";
  document.getElementById("result").style.visibility = "hidden";
  } else {
  greeting = `Hi ${name}!`;
  document.getElementById("greeting").innerHTML = greeting;
  document.getElementById("greeting").style.visibility = "visible";
  console.log(isAgeEligible(dateOfBirth));

  let age = calculateAge(dateOfBirth, dateForCompare);
  console.log(age);

  if(age == 16 || age == 17)
    result = "Congratulation! Your age is met our requirement.";
  else 
    result = "Sorry! Your age is not met our requirement.";

  document.getElementById("result").innerHTML = result;
  document.getElementById("result").style.visibility = "visible";

  document.getElementById("emptyNotification").style.visibility = "hidden";
  }
}

function calculateAge(firstDate, secondDate) {
  var ageDifferenceMillisecond  = secondDate.getTime() - firstDate.getTime();
  var ageDate = new Date(ageDifferenceMillisecond);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}


function isAgeEligible(d) {
  let year = d.getFullYear;
  console.log(year);
  let month = d.getMonth;
  console.log(month);
  let date = d.getDate;
  console.log(date);

  if (year == 2004)
    if ((month < 6) || (month = 6 && date == 1))
      return true;
    else
      return false;

  if (year == 2003)
    if ((month > 6) || (month = 6 && date > 1))
      return true;
    else
      return false;
}