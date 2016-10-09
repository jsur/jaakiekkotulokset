$(function() {

	$(".kaljasakko-add").click(function(){

		var index = $(this).parent().index() + 1;
		var count = $("#kaljasakko-sum" + index).val();

		console.log(count);

		if (count + 1 > 0) {
			$("#kaljasakko-subtract" + index).prop("disabled", false);
		} 

		count++;
		$("#kaljasakko-sum" + index).val(count);
	
	});

	$(".kaljasakko-subtract").click(function(){

		var index = $(this).parent().index() + 1;
		var count = $("#kaljasakko-sum" + index).val();
		
		if (count <= 0) {
			$("#kaljasakko-subtract" + index).prop("disabled", true);
		} else {

		count--;
		$("#kaljasakko-sum" + index).val(count);
		}

	});

	$(".kaljasakko-name").change(function(){
		
		var num = $(".kaljasakko").length,
		newNum  = new Number(num + 1),
		newElem = $("#sakko" + num).clone(true).attr("id", "sakko" + newNum).appendTo(".kaljasakot-list");

		newElem.find(".kaljasakko-name").attr("id", "kaljasakko-name" + newNum).val("");
		newElem.find(".kaljasakko-subtract").attr("id", "kaljasakko-subtract" + newNum);
		newElem.find(".kaljasakko-sum").attr("id", "kaljasakko-sum" + newNum).val("");
		newElem.find(".kaljasakko-add").attr("id", "kaljasakko-add" + newNum);

	});
});