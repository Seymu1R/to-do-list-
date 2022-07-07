var btn = document.querySelector("#btn");
var btnDeletes = document.querySelectorAll("#delete");
var checkbox = document.getElementById("check");

var checkBox = (e) => {
  var value = checkbox.value;
  if (value === "on") {
    e.target.previousElementSibling.previousElementSibling.style.display =
      "block";
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



