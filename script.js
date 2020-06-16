function submitHandler() {
  const name = document.getElementById("name").value;
  const dateOfBirth = document.getElementById("dateOfBirth").value;
  console.log(dateOfBirth);
  let result;

  if (name.length == 0 || dateOfBirth.length == 0) {
  document.getElementById("emptyNotification").style.visibility = "visible";
  document.getElementById("greeting").style.visibility = "hidden";
  document.getElementById("result").style.visibility = "hidden";
  } else {
  greeting = `Hi ${name}!`;
  document.getElementById("greeting").innerHTML = greeting;
  document.getElementById("greeting").style.visibility = "visible";

  result = (isAgeEligible(dateOfBirth)) ? `Congratulation! Your age is met our requirement.` : `Sorry! Your age is not met our requirement.`;
  document.getElementById("result").innerHTML = result;
  document.getElementById("result").style.visibility = "visible";
  
  document.getElementById("emptyNotification").style.visibility = "hidden";
  }
}

function isAgeEligible(d) {
  let year = getYear(d);
  let month = getMonth(d);
  let date = getDate(d)

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