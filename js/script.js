var count = 3;
var userinput = localStorage.getItem("uinput");


function refuse_iroh() {
	document.getElementById('refuse_count').innerHTML = count++;
	if (count > 5) 
		{
		  document.getElementById('iroh_message').innerHTML = "Iroh says: You sure are persistent!";
		}
	if (count > 10) 
		{
		  document.getElementById('iroh_message').innerHTML = "Iroh laughs heartily: Fine then I am no longer asking you. This is a command. Come train!";
		}
}

function store_name()
{
	var user = document.getElementById('username').value;
	console.log(user);
	sessionStorage.setItem("username", user);
}


window.onload = function show_name(){
	document.getElementById('username').innerHTML = sessionStorage.getItem('username');
}