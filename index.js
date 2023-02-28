const getActivityButton = document.getElementById("getActivityButton");
getActivityButton.addEventListener("click", getRandomActivity);

function getRandomActivity(){ fetch("https://apis.scrimba.com/bored/api/activity")
.then((response) => response.json())
  .then((data) => {
  
    document.getElementById("activity").textContent = data.activity


  })};

