function checkAnswer(answer) {
  if (answer === "right") {
    document.getElementById("result").innerHTML = "✅ Correct Answer!";
  } else {
    document.getElementById("result").innerHTML = "❌ Wrong Answer. Try again!";
  }
}

function searchContent() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let content = document.getElementById("content");

  if (content && content.innerText.toLowerCase().includes(input)) {
    content.style.display = "block";
  } else if (content) {
    content.style.display = "none";
  }
}