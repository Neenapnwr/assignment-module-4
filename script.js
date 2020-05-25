var array = ['Neena','Lalit','Jamuna','Kuldeep','jayoti','Kailash','Jaipur','Ajmer','jodhpur'];


for(var i = 0; i < array.length; i++) {
	
		if(array[i][0] === "j" || array[i][0] === "J"){
			console.log("Goodbye"+" "+array[i]);
		   } 
		else{
			console.log("Hello"+" "+ array[i]);
		    }
	}
  