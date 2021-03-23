function waterTribe() 
	{
	  document.getElementById("waterTribe").innerHTML = "Water is the element of change. The people of the Water Tribes are capable of adapting to many things. They have a sense of community and love that holds them together through anything.";
	}

function earthKingdom() 
	{
	  document.getElementById("earthKingdom").innerHTML = "Earth is the element of substance. The people of the Earth Kingdom are diverse and strong. They are persistent and enduring.";
	}

function fireNation() 
	{
	  document.getElementById("fireNation").innerHTML = "Fire is the element of power. The people of the Fire Nation have desire and will and the energy and drive to achieve what they want.";
	}

function airNomad() 
	{
	  document.getElementById("airNomad").innerHTML = "Air is the element of freedom. The Air Nomads detached themselves from worldly concerns and found peace and freedom.";
	}
	
	
hide {
  display: none;
}
    
myDIV:hover + .hide {
  display: block;
  color: red;
}

var audio1 = document.getElementById("audioID");


function playAudio() {
  audio1.play();
}