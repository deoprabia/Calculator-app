$(document).ready(function() {
	let collect = "";
	let firstAction = "";
	let secondAction = "";
	let action = null;
	
	
	$("#numbers > button").on("click", function() {
		let pressedButton = $(this).html();
		collect = collect + pressedButton;
		$("#clear").html(collect);
	});

	let operations = {
		        "+": (a, b) => a+b,
		        "-": (a, b) => a-b,
		        "/": (a, b) => a/b,
		        "*": (a, b) => a*b,
    }
			
	$("button.opps").on("click", function(){
			
	        action = $(this).html().trim(); 
	        firstAction = collect;
	        collect = "";
	        
	});
	  
	$("#equals").on("click", function(){
	        secondAction = collect;
	        collect = "";
			let result = operations[action] (parseInt(firstAction), parseInt(secondAction));
	        $("div.cream").html(result);
	        firstAction = "";
	        secondAction = "";

	        
	});
				    
	$("div.cream").on("click", function(){
		$("div.cream").html(0);
		firstAction = "";
		secondAction = "";
		collect = "";        
	});
});
			

	