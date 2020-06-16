function submitHandler() {
  const name = document.getElementById("name").value;
  const dateOfBirth = document.getElementById("dateOfBirth").value;
  console.log(dateOfBirth);
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

  if(isAgeEligible(dateOfBirth))
    result = "Congratulation! Your age is met our requirement.";
  else 
    result = "Sorry! Your age is not met our requirement.";

  document.getElementById("result").innerHTML = result;
  document.getElementById("result").style.visibility = "visible";

  document.getElementById("emptyNotification").style.visibility = "hidden";
  }
}

function isAgeEligible(d) {
  // let secondDate = new Date("2020-06-01");
  // let age = secondDate - d;
  // console.log(age);
  // return age;

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