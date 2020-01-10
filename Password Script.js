
var URL = "http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/"

	
//Sets lights to change - Requires the colour and the actual light id - So it knows which light and what colour
//If the colour is green, set light to green
function lightChange (lightId, colour)
{
		//Getting entire url
		var fullUrl = URL + lightId + "/state/";

		if(colour == "green")
		{
				var lightCode = {"on":true, "sat":254, "bri":254,"hue":25555};
		}
		else if(colour == "red")				
		{
			var lightCode = {"on":true, "sat":254, "bri":254,"hue":65555};
		}
		
		//Actually send the code to the light
		$.ajax({
			url: fullUrl,
			type: "PUT",
			data: JSON.stringify(lightCode)
		})
}

function passCheck()
{
	//Setting the variables to be used		
	pwd = document.getElementById("pwd").value;
	var strength = 0;
	var specialChars = "!£$%^&*()@?-_#~";
	var length = pwd.length;
	

	for (var i = 0; i < length; i++)
	{

		if(specialChars.indexOf(pwd.charAt(i)) > -1)
		{
			strength = strength + 1;
		}
	}
	
	//If there is a lower case letter, plus one strength
	if(/[a-z]/.test(pwd))
	{
		strength = strength +1;	
	}
	
	//If there is an upper case letter, plus one strength
	if(/[A-Z]/.test(pwd))
	{
		strength = strength +1;	
	}
	
	//If there is a number present in the password, plus one strength
	if(/[0-9]/.test(pwd))
	{
		strength = strength +1;	
	}
	
	//If the password is greater than 8 characters, plus one strength
	if(pwd.length > 10) 
	{
		strength = strength + 1;
		if(pwd.length > 18)
		{
			strength = strength + 1;
		}	
	}
	

	
	
	
	switch(strength)
	{
		case 0:
			lightChange(1, "red");
			lightChange(2, "red");
			lightChange(3, "red");
			lightChange(4, "red");
			lightChange(5, "red");
			lightChange(6, "red");			
			break;
		case 1:
			lightChange(1, "green");
			lightChange(2, "red");
			lightChange(3, "red");
			lightChange(4, "red");
			lightChange(5, "red");
			lightChange(6, "red");
			break;
		case 2:
			lightChange(1, "green");
			lightChange(2, "green");
			lightChange(3, "red");
			lightChange(4, "red");
			lightChange(5, "red");
			lightChange(6, "red");
			break;
		case 3:
			lightChange(1, "green");
			lightChange(2, "green");
			lightChange(3, "green");
			lightChange(4, "red");
			lightChange(5, "red");
			lightChange(6, "red");
			break;
		case 4:
			lightChange(1, "green");
			lightChange(2, "green");
			lightChange(3, "green");
			lightChange(4, "green");
			lightChange(5, "red");
			lightChange(6, "red");
			break;
		case 5:
			lightChange(1, "green");
			lightChange(2, "green");
			lightChange(3, "green");
			lightChange(4, "green");
			lightChange(5, "green");
			lightChange(6, "red");
			break;
		case 6:
			lightChange(1, "green");
			lightChange(2, "green");
			lightChange(3, "green");
			lightChange(4, "green");
			lightChange(5, "green");
			lightChange(6, "green");
			break;
	}
}