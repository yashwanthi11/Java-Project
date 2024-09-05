function save()
{
	var xhttp=new XMLHttpRequest();
	var url="http://localhost:8080/customer/register";
	xhttp.open("POST",url,true);
	xhttp.setRequestHeader('Content-Type','application/json')
	var data=JSON.stringify({
		"uname":t1.value,
		"email":t2.value,
		"password":t3.value,
	});
	
    xhttp.onreadystatechange = function()
    {
		if(this.readyState==4)
		{
		  if(this.status=200)
		  {
			  alert(this.responseText);
		  }	
		  else
		   alert("404: Service Unavailable")
		}
		
	};
    
	xhttp.send(data);
}




