const inputBox = document.getElementById("input-box")
const todoList = document.getElementById("todo-list")

function add() {
	
	if (inputBox.value === '') {
		alert("please add task")
	}else{
		let li = document.createElement("li")
		li.innerHTML = inputBox.value;
		todoList.appendChild(li);
		let span = document.createElement("span")
		span.innerHTML = "<img width='50' height='50' src='https://img.icons8.com/bubbles/50/full-trash.png' alt='full-trash'/>"
		li.appendChild(span)
	}
	inputBox.value = ""
}

todoList.addEventListener("click", (event) => {
	if(event.target.tagName === "LI"){
		event.target.classList.toggle("checked")
	} else if (event.target.tagName === "IMG") {
		event.target.closest("li").remove();
  }
},false)


function formatDate(date) {
	const options = { month: 'long', day: 'numeric', year: 'numeric' };
	return date.toLocaleDateString('en-US', options);
  }


  const currentDate = new Date();

document.getElementById('currentDate').textContent = `${formatDate(currentDate)}`;


document.querySelector("button").addEventListener('click', add)
inputBox.addEventListener('keypress', (event) => {
	if (event.key === 'Enter') {
	  add();
	}
});

function history(){
	todoList.innerHTML = localStorage.getItem("data")
}
history();




