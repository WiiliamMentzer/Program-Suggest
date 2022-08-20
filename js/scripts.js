function questionareParseAndDisplay(event) {
  event.preventDefault();

  let answerQuestion1 = parseInt(document.querySelector('input[name="questionOne"]:checked').value);
  let answerQuestion2 = parseInt(document.querySelector('input[name="questionTwo"]:checked').value);
  let answerQuestion3 = parseInt(document.querySelector('input[name="questionThree"]:checked').value);
  let answerQuestion4 = parseInt(document.querySelector('input[name="questionFour"]:checked').value);
  let answerQuestion5 = parseInt(document.querySelector('input[name="questionFive"]:checked').value);

  let answerTotal = 0;

  answerTotal += answerQuestion1;
  answerTotal += answerQuestion2;
  answerTotal += answerQuestion3;
  answerTotal += answerQuestion4;
  answerTotal += answerQuestion5;

  let pythonDisplay = document.getElementById("Python");
  pythonDisplay.setAttribute("class", "hidden");

  let javascriptDisplay = document.getElementById("JavaScript");
  javascriptDisplay.setAttribute("class", "hidden");

  let cDisplay = document.getElementById("C");
  cDisplay.setAttribute("class", "hidden");

  if (answerTotal >= 16) {
    document.querySelector("div#Python").removeAttribute("class");
  } else if (answerTotal <= 15 && answerTotal >= 8) {
    document.querySelector("div#JavaScript").removeAttribute("class");
  } else if (answerTotal <= 7) {
    document.querySelector("div#C").removeAttribute("class");
  } else if (null) {
    console.log("MACHINE BROKE");
  };

  document.querySelector('input[name="questionOne"]:checked').checked = false;
  document.querySelector('input[name="questionTwo"]:checked').checked = false;
  document.querySelector('input[name="questionThree"]:checked').checked = false;
  document.querySelector('input[name="questionFour"]:checked').checked = false;
  document.querySelector('input[name="questionFive"]:checked').checked = false;
  
  const resetQuestion1 = document.getElementById("answer1");
  resetQuestion1.checked = true

  const resetQuestion2 = document.getElementById("answer5");
  resetQuestion2.checked = true

  const resetQuestion3 = document.getElementById("answer9");
  resetQuestion3.checked = true

  const resetQuestion4 = document.getElementById("answer13");
  resetQuestion4.checked = true

  const resetQuestion5 = document.getElementById("answer17");
  resetQuestion5.checked = true
}

window.addEventListener("load", function() {
  const form = document.getElementById("questionareForm");
  form.addEventListener("submit", questionareParseAndDisplay);
});