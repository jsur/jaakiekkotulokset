$(function() {

	$(".kaljasakko-add").click(function(){

		var index = $(this).parent().index();
		var count = $("#kaljasakko-sum" + index).val();

		if (count + 1 > 0) {
			$("#kaljasakko-subtract" + index).prop("disabled", false);
		}
			count++;
			$("#kaljasakko-sum" + index).val(count);
	});

	$(".kaljasakko-subtract").click(function(){

		var index = $(this).parent().index();
		var count = $("#kaljasakko-sum" + index).val();
		
		if (count <= 0) {
			$("#kaljasakko-subtract" + index).prop("disabled", true);
		} else {
			count--;
			$("#kaljasakko-sum" + index).val(count);
		}
	});

	$(".kaljasakko-name").change(function(){
		
		var num = new Number($(".kaljasakko").length);
		//Find the largest #sakko and clone it
		var newElem = $("#sakko" + (num - 1)).clone(true).attr("id", "sakko" + num).appendTo(".kaljasakot-list");
		newElem.find(".kaljasakko-name").attr("id", "kaljasakko-name" + num).val("");
		newElem.find(".kaljasakko-subtract").attr("id", "kaljasakko-subtract" + num);
		newElem.find(".kaljasakko-sum").attr("id", "kaljasakko-sum" + num).val("");
		newElem.find(".kaljasakko-add").attr("id", "kaljasakko-add" + num);

	});

	$(".header-menu").slicknav({});
});












