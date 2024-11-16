function displayOverView() {
    let view = document.querySelector('.overview');
    view.style.display = "flex"; 
}

window.onload = function () {
  function displayDays() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const daysDiv = document.getElementById("days");
    const hoursDiv = document.getElementById("hours");
    const hours = ["05:00 - 23:00", "08:00 - 21:00"];
  
    for (let i = 0; i < days.length; i++) {
      const dayParagraph = document.createElement("p");
      dayParagraph.textContent = days[i];
  
      if (days[i] === "Saturday" || days[i] === "Sunday") {
        dayParagraph.classList.add("weekend");
      } else {
        dayParagraph.classList.add("working-day");
      }
      daysDiv.appendChild(dayParagraph);

      dayParagraph.addEventListener("mouseover", function () {
        hoursDiv.textContent = ""; 

        const lineBreak1 = document.createElement("br");
        const lineBreak2 = document.createElement("br");
        hoursDiv.appendChild(lineBreak1);
        hoursDiv.appendChild(lineBreak2);

        const hourParagraph = document.createElement("p");
        if (days[i] === "Saturday" || days[i] === "Sunday") {
          hourParagraph.textContent = `Hours: ${hours[1]}`;
        } else {
          hourParagraph.textContent = `Hours: ${hours[0]}`;
        }
        hoursDiv.appendChild(hourParagraph);
      });

      dayParagraph.addEventListener("mouseout", function () {
        hoursDiv.textContent = ""; 
      });
    }
  }

  displayDays();
};

