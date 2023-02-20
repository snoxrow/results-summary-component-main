let scores = document.querySelectorAll(".scr");
let subjects = document.querySelectorAll(".subject");
let button = document.getElementById("btn")


let data = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
  },
];

data.forEach(getScores);

function getScores(object, index) {
  scores[index].innerHTML = object.score;
  let subjectTitle = document.createElement("span");
  let subjectImage = document.createElement("img");

  switch (index) {
    case 0: {
      subjectTitle.className = "red";
      break;
    }
    case 1: {
      subjectTitle.className = "yellow";
      break;
    }
    case 2: {
      subjectTitle.className = "green";
      break;
    }
    case 3: {
      subjectTitle.className = "blue";
      break;
    }
  }

  subjectImage.src = object.icon;
  subjectTitle.innerHTML = object.category;
  subjects[index].appendChild(subjectImage);
  subjects[index].appendChild(subjectTitle);
}

button.onclick = () => {alert('Thank you for clicking continue ')};