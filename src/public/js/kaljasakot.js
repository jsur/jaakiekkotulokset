$(function() {

	var count = $(".kaljasakko-sum").val();

	$(".kaljasakko-add").click(function(){

		count++;
		$(".kaljasakko-sum").val(count);
	
	});

	$(".kaljasakko-remove").click(function(){

		count--;
		$(".kaljasakko-sum").val(count);
	
	});

	$(".kaljasakko-name").change(function(){
		
		var num = $(".kaljasakko").length;
		console.log(num);
		newNum  = new Number(num + 1);
		console.log(newNum);
		$("#sakko" + num).clone(true).attr("id", "sakko" + newNum).appendTo(".kaljasakot-list");
	
	});
});