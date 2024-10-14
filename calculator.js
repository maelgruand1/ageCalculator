function calculateAge(event) {
  event.preventDefault(); // Prevents the page from reloading when the form is submitted

  // Get the name and birthdate input values
  const nameInput = document.getElementById("name").value;
  const birthDate = new Date(document.getElementById("dateNaiss").value);

  // Get the current date and time
  const today = new Date();

  // Check if the birth date is in the future
  if (birthDate > today) {
    alert("Today's date cannot be earlier than your birth date.");
    return;
  }

  // Calculate the difference in milliseconds
  const diffInMilliseconds = today - birthDate;

  // Convert milliseconds into seconds, minutes, hours, and days
  const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  // Calculate the age in years
  let years = today.getFullYear() - birthDate.getFullYear();

  // Adjust the year count if the birthday has not occurred this year
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    years--;
  }

  // Calculate the number of months
  let months = today.getMonth() - birthDate.getMonth();
  if (dayDiff < 0) {
    months--;
  }
  if (months < 0) {
    months += 12;
  }

  // Calculate the number of days
  let days = dayDiff;
  if (days < 0) {
    const previousMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    days += previousMonth;
  }

  // Calculate the number of hours
  const preciseHours = diffInHours % 24;

  // Display the result
  const resultDisplay = document.getElementById("result");
  resultDisplay.textContent = `${nameInput}, vous avez ${years} ans, ${months} mois, ${days} jours, et ${preciseHours} heures`;
}

// Add the submit event to calculate age
document.getElementById("ageForm").onsubmit = calculateAge;

// Add the reset event listener to clear the result text
document.getElementById("ageForm").onreset = function () {
  const resultDisplay = document.getElementById("result");
  resultDisplay.textContent = ""; // Clear the result display area
};
