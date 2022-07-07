var btn = document.querySelector("#btn");
var btnDeletes = document.querySelectorAll("#delete");

var checkBox = (e) => {
  var checkbox = document.getElementById("check").checked;

  if (checkbox === true) {
    console.log("value");
    e.target.previousElementSibling.previousElementSibling.style.display =
      "block";
  }
  else{
    e.target.previousElementSibling.previousElementSibling.style.display =
    "none";
  }
};

var delEte = (e) => {
  e.target.parentElement.remove();
};

btn.addEventListener("click", () => {
  value = document.querySelector("#value").value;
  var content = document.querySelector(".to-do");
  content.innerHTML += ` <div class="content">
  <div class="done"></div>
    <span>${value}</span>
    <input onclick="checkBox(event)" id="check" type="checkbox"><button onclick="delEte(event)" id="delete">delete</button>
</div>`;
});
