var count = 3;

function validateForm(){
  var check_name = document.forms["player_name"]["user_name"].value;
  if (check_name == "") 
	  {
		alert("Enter a Name to Continue, or you can click on the dice to generate a random name.");
		return false;
	  }
}

function random_name(){
	const name_list = ["Xiao", "Tien", "Juan", "Pierce", "Ash", "Raiden"];
	var random_name = name_list[Math.floor(Math.random() * name_list.length)];
	document.getElementById('user_name').value = random_name;
}

function store_name(){
	var user = document.getElementById('user_name').value;
	console.log(user);
	sessionStorage.setItem("username", user);
}

window.onload = function show_name(){
	document.getElementById('username').innerHTML = sessionStorage.getItem('username');
}

function refuse_iroh(){
	document.getElementById('refuse_count').innerHTML = count++;
	if (count > 3) 
		{
		  document.getElementById('iroh_message').innerHTML = "Iroh says: You sure are persistent!";
		}
	if (count > 4) 
		{
		  document.getElementById('iroh_message').innerHTML = "Iroh Laughs: Refuse as many times as you want. We train tomorrow!";
		}
}

function technique(learnt){
	sessionStorage.setItem("technique", learnt);
	if (sessionStorage.getItem('technique') === "calm")
		{	
			document.getElementById('technique').innerHTML = " will train to master the breath of fire technique <br> A breathing technique that focuses on control of mind and body. It can also regulate body heat in freezing temperatures. <br>Are you sure you wish to learn this technique?";
		}
		
	if (sessionStorage.getItem('technique') === "rage")
		{	
			document.getElementById('technique').innerHTML = " will train to master the Dragon's Rampage technique. <br> A powerful wide area attack that radiates uncontrollable fire outward. Laying waste to anything and anyone nearby whether friend or foe. <br>Are you sure you wish to learn this technique?";
		}
	
	if (sessionStorage.getItem('technique') === "armour")
		{	
			document.getElementById('technique').innerHTML = "Earth Armour.<br> A common defensive skill that involves coating the user's body in a thick layer of earth to create a rather durable suit of armor at the cost of lower speed and flexibility. <br>Are you sure you wish to learn this technique?";
		}
	
	if (sessionStorage.getItem('technique') === "sense")
		{	
			document.getElementById('technique').innerHTML = "Seismic Sense.<br> Allows the the user to sense even the smallest vibrations in the earth that they're standing on to construct a mental image of their surroundings. <br>Are you sure you wish to learn this technique?";
		}
	
	if (sessionStorage.getItem('technique') === "")
		{	
			document.getElementById('technique').innerHTML = " you did not master any techniques. Thats too bad.";
		}
}

function use_technique(){
	if (sessionStorage.getItem('technique') === "calm")
		{	
			document.getElementById('battle_option').innerHTML = "Your controlled breath of fire technique stealthily raises your internal temperature and allows you to stay in position without freezing";
		}
		
	if (sessionStorage.getItem('technique') === "rage")
		{	
			window.open('endfire1.html', '_self');
		}
		
	if (sessionStorage.getItem('technique') === "sense")
		{	
			window.open('battle_sense.html', '_self');
		}
		
	if (sessionStorage.getItem('technique') === "armour")
	{	
		window.open('battle_armour.html', '_self');
	}
	
	else
		{	
			window.open('no_technique_end.html', '_self');
		}
	
	/*if (sessionStorage.getItem('technique') !== "calm" && sessionStorage.getItem('technique') !== "rage")
		{	
			window.open('endfire2.html', '_self');
		}	*/
}


function clearStorage() {
  sessionStorage.clear();
}