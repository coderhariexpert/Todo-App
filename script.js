const input = document.getElementById("input-box");
const list = document.getElementById("list-container");
document.getElementById("input-box").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (input.value === "") {
      alert("You Must Write Something");
    } else {
      let li = document.createElement("li");
      li.innerHTML = input.value;
      list.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
      saveDate();
    }
    input.value = "";
  }
});
function AddTask() {
  if (input.value === "") {
    alert("You Must Write Something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveDate();
  }
  input.value = "";
}

list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveDate();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveDate();
    }
  },
  false
);

function saveDate() {
  localStorage.setItem("data", list.innerHTML);
}
function showList()
{
    list.innerHTML=localStorage.getItem("data");
}
showList();