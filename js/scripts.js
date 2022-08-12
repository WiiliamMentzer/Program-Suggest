function questionareParseAndDisplay() {
  const answer1 = parseInt(document.getElementById("answer1").value);
  const answer2 = parseInt(document.getElementById("answer2").value);
  const answer3 = parseInt(document.getElementById("answer3").value);
  const answer4 = parseInt(document.getElementById("answer4").value);
  const answer5 = parseInt(document.getElementById("answer5").value);
  const answer6 = parseInt(document.getElementById("answer6").value);
  const answer7 = parseInt(document.getElementById("answer7").value);
  const answer8 = parseInt(document.getElementById("answer8").value);
  const answer9 = parseInt(document.getElementById("answer9").value);
  const answer10 = parseInt(document.getElementById("answer10").value);
  const answer11 = parseInt(document.getElementById("answer11").value);
  const answer12 = parseInt(document.getElementById("answer12").value);
  const answer13 = parseInt(document.getElementById("answer13").value);
  const answer14 = parseInt(document.getElementById("answer14").value);
  const answer15 = parseInt(document.getElementById("answer15").value);
  const answer16 = parseInt(document.getElementById("answer16").value);
  const answer17 = parseInt(document.getElementById("answer17").value);
  const answer18 = parseInt(document.getElementById("answer18").value);
  const answer19 = parseInt(document.getElementById("answer19").value);
  const answer20 = parseInt(document.getElementById("answer20").value);

  let answerTotal = 0;

  answerTotal = answerTotal + answer1;
  answerTotal = answerTotal + answer2;
  answerTotal = answerTotal + answer3;
  answerTotal = answerTotal + answer4;
  answerTotal = answerTotal + answer5;
  answerTotal = answerTotal + answer6;
  answerTotal = answerTotal + answer7;
  answerTotal = answerTotal + answer8;
  answerTotal = answerTotal + answer9;
  answerTotal = answerTotal + answer10;
  answerTotal = answerTotal + answer11;
  answerTotal = answerTotal + answer12;
  answerTotal = answerTotal + answer13;
  answerTotal = answerTotal + answer14;
  answerTotal = answerTotal + answer15;
  answerTotal = answerTotal + answer16;
  answerTotal = answerTotal + answer17;
  answerTotal = answerTotal + answer18;
  answerTotal = answerTotal + answer19;
  answerTotal = answerTotal + answer20;

  console.log(answerTotal);

  if (answerTotal >= 16) {
    document.querySelector("div#Python").removeAttribute("class");
  } else if (answerTotal <= 15 || answerTotal >= 8) {
    document.querySelector("div#JavaScript").removeAttribute("class");
  } else if (answerTotal <= 7) {
    document.querySelector("div#C#").removeAttribute("class");
  } else if (null) {
    console.log("MACHINE BROKE");
  };
  
}

window.addEventListener("load", function() {
  const form = document.getElementById("questionareForm");
  form.addEventListener("submit", submitInput);
});

function submitInput(event) {
  event.preventDefault();
  questionareParseAndDisplay();
};