$(document).ready(function(){
var count = 0;

$(".kaljasakot-add").click(function(){
	count++;
	$(".kaljasakot-sum").val(count);
});

$(".kaljasakot-remove").click(function(){
	count--;
	$(".kaljasakot-sum").val(count);
});

})