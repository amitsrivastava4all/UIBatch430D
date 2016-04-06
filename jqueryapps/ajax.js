$(document).ready(function(){
$("#getBt").click(function(event){
	$("#spinner").show();
	var uid = $("#userid").val();
	var pwd = $("#pwd").val();
	console.log("Userid "+userid+" Password "+pwd);
	//alert("Userid is "+userid+" Password is "+pwd);
	  var promiseObj = $.get("../DataServlet",{ userid: uid, pwd: pwd }); // Get end and it's chain call back method success and error call
	promiseObj.success(function(result) {
		  console.log("Result is "+result);
		  //alert("Result is "+result);
		  $("#spinner").hide();
		  $("#msgDiv").html(result);
		  $("#divId").fadeOut(2000);
		  
		 //alert("success "+result); 
	  })
	promiseObj.error(function(jqXHR, textStatus, errorThrown) {
    	 $("#spinner").hide();
    	 $("#msgDiv").html("Error "+jqXHR +" textStatus "+textStatus+" errorThrown "+errorThrown);
     });
     event.preventDefault();  // prevent to submit the form
	});  //Click Close

$("#postBt").click(function(event){
	//console.log("Form "+$( "#loginform" ).serialize());
	  $.post("../DataServlet",$( "#loginform" ).serialize()) // Post end and it's chain call back method success and error call
	  .success(function(result) {
		  $("#msgDiv").html(result);
		  $("#divId").fadeOut(2000);
		  
		 //alert("success "+result); 
	  })
     .error(function(jqXHR, textStatus, errorThrown) { 
    	 $("#msgDiv").html("Error "+jqXHR +" textStatus "+textStatus+" errorThrown "+errorThrown);
     });
     event.preventDefault();  // prevent to submit the form
	});  //Click Close

$("#ajaxBt").click(function(event){
try{
	var ajaxObject = {
		type: "POST", //The type of HTTP method (post, get, etc)
		url: "../Jsonresult", //The URL from the form element where the AJAX request will be sent
		data: $( "#loginform" ).serialize(), //All the data from the form serialized
		dataType: "json", //The type of response to expect from the server
		success: function ( data, statusCode, xhr ) { //Triggered after a successful response from server
			console.log("JSON Coming from Server is "+data);
			if ( data && data.message ) {
				if(data.status=="login-success"){
					$("#msgDiv").html("welcome "+data.userid +" "+data.message);
					$("#divId").fadeOut(2000);
				}
				else
				if(data.status=="login-fail"){
					$("#msgDiv").html(data.message);
				}


			}
		},
		error: function ( xhr, errorType, exception ) { //Triggered if an error communicating with server
			var errorMessage = exception || xhr.statusText; //If exception null, then default to xhr.statusText

			alert( "There was an error creating your contact: " + errorMessage );
		}

	};
$.ajax(ajaxObject); // Ajax close
}
catch(e){
alert(e);	
}


event.preventDefault();  // prevent to submit the form
});	// Click close
	

var count = 1;
$("#loginBt").click(function(event){
	try{	
	$.ajax({  
	        type: "POST", //The type of HTTP method (post, get, etc)  
	        url: "../shopping", //The URL from the form element where the AJAX request will be sent  
	        data: $( "#loginform" ).serialize(), //All the data from the form serialized  
	        /*dataType: "json", //The type of response to expect from the server  
*/	        success: function ( data, statusCode, xhr ) { //Triggered after a successful response from server  
			$("#msgDiv").html($("#msgDiv").html()+data);
	/*if ( data && data.message ) { 
	            	if(data.status=="login-success"){
	            	$("#msgDiv").html("welcome "+data.userid +" "+data.message);
	            	$("#divId").fadeOut(2000);
	            	}
	            	else
	            	if(data.status=="login-fail"){
	            		$("#msgDiv").html(data.message);
	            	}
	            	
	                  
	            }  */
	        },  
	        error: function ( xhr, errorType, exception ) { //Triggered if an error communicating with server  
	            var errorMessage = exception || xhr.statusText; //If exception null, then default to xhr.statusText  
	  
	            alert( "There was an error creating your contact: " + errorMessage );  
	        }  
	        
	    }); // Ajax close
	}
	catch(e){
	alert(e);	
	}


	event.preventDefault();  // prevent to submit the form
	});	// Click close
		
});// Ready Close
