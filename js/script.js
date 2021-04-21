var count = 3;

function random_name(){
	const name_list = ["Xiao", "Tien", "Yuan", "Jiang", "Shu", "Paku", "Zang", "Gohan", "Krillin", "Ash", "Tom"];
	var random_name = name_list[Math.floor(Math.random() * name_list.length)];
	/*console.log(random_name);*/
	document.getElementById('username').value = random_name;
}

function store_name(){
	var user = document.getElementById('username').value;
	/*console.log(user);*/
	sessionStorage.setItem("username", user);
}


window.onload = function show_name(){
	document.getElementById('username').innerHTML = sessionStorage.getItem('username');
}


function refuse_iroh(){
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

function validateForm(){
  var check_name = document.forms["player_name"]["username"].value;
  if (check_name == "") 
	  {
		alert("Generate or type a Name to Continue");
		return false;
	  }
}

function technique(learnt){
	sessionStorage.setItem("technique", learnt);
	console.log(learnt);
	if (sessionStorage.getItem('technique') === "calm")
		{	
			document.getElementById('technique').innerHTML = "mastered the Calming breath of fire technique";
		}
	if (sessionStorage.getItem('technique') === "rage")
	{	
		document.getElementById('technique').innerHTML = "mastered the Dragon's Rampage technique";
	}
}