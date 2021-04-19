var count = 3;


function refuse_iroh() {
  document.getElementById("refuse_count").innerHTML = count++;
  if (count > 5) 
  {
	  document.getElementById("iroh_message").innerHTML = "Iroh says: You sure are persistent!";
  }
  if (count > 10) 
  {
	  document.getElementById("iroh_message").innerHTML = "Iroh laughs heartily: Fine then I am no longer asking you. This is a command. Come have tea with me!";
  }
}