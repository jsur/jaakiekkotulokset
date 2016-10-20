$(function() {

var url = window.location.href

	$(".header-menu").slicknav({});

/*Events*/

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

		var i = $(this).parent().index();
		var id = ($("#sakko" + i).attr('object-id'));

		if(id == undefined) {
		
			var num = new Number($(".kaljasakko").length);
			//Find the largest #sakko and clone it
			var newElem = $("#sakko" + (num - 1)).clone(true).attr("id", "sakko" + num).appendTo(".kaljasakot-list");
			newElem.find(".kaljasakko-name").attr("id", "kaljasakko-name" + num).val("");
			newElem.find(".kaljasakko-subtract").attr("id", "kaljasakko-subtract" + num);
			newElem.find(".kaljasakko-sum").attr("id", "kaljasakko-sum" + num).val("");
			newElem.find(".kaljasakko-add").attr("id", "kaljasakko-add" + num);
		} else {

			_.debounce(putSakko, 1000, {
				'trailing': true,
				'maxWait': 5000
			})(url, id, i);
		}
	});


	$(".kaljasakko-add, .kaljasakko-subtract").click(function() {

		var i = $(this).parent().index();
		var id = ($("#sakko" + i).attr('object-id'));

		if(id != undefined) {

//Here we use debounce because I wanted see how it works

			_.debounce(putSakko, 1000, {
				'trailing': true,
				'maxWait': 5000
			})(url, id, i);
		}

		else {

			_.debounce(postSakko, 1, {
				'trailing': true,
				'maxWait': 5000
			})(url, i);
		}
	})
});

/*AJAX calls*/

postSakko = 

	function postSakko(url, i) { $.ajax({
		type: "POST",
		url: url,
		dataType: "json",
		data: {
			name: $("#kaljasakko-name" + i).val(),
			amount: $("#kaljasakko-sum" + i).val()
		},
		success: function(data, status) {
			($("#sakko" + i).attr('object-id', data));
			},
		error: function(data, status) {
			console.log(data);
			}
		})
	}


putSakko = 			

	function (url, id, i) { $.ajax({
		type: "PUT",
		url: url + id,
		dataType: "json",
		data: {
			_id: id,
			name: $("#kaljasakko-name" + i).val(),
			amount: $("#kaljasakko-sum" + i).val()
		},
		success: function(data, status) {
			console.log(data);
			},
		error: function(data, status) {
			console.log(data);
			}
		})
	}