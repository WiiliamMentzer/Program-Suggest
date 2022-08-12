function questionareParseAndDisplay() {
  let answerQuestion1 = parseInt(document.querySelector('input[name="questionOne"]:checked').value);
  console.log(answerQuestion1);
  let answerQuestion2 = parseInt(document.querySelector('input[name="questionTwo"]:checked').value);
  console.log(answerQuestion2);
  let answerQuestion3 = parseInt(document.querySelector('input[name="questionThree"]:checked').value);
  console.log(answerQuestion3);
  let answerQuestion4 = parseInt(document.querySelector('input[name="questionFour"]:checked').value);
  console.log(answerQuestion4);
  let answerQuestion5 = parseInt(document.querySelector('input[name="questionFive"]:checked').value);
  console.log(answerQuestion5);

  let answerTotal = 0;

  answerTotal = answerTotal + answerQuestion1;
  answerTotal = answerTotal + answerQuestion2;
  answerTotal = answerTotal + answerQuestion3;
  answerTotal = answerTotal + answerQuestion4;
  answerTotal = answerTotal + answerQuestion5;
  
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