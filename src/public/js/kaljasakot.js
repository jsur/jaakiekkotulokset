$(function() {

var url = window.location.href

/*Events*/

	$(".kaljasakko-add").click(function(){

		var i = $(this).parent().index();
		var count = $("#kaljasakko-sum" + i).val();

		if (count + 1 > 0) {
			$("#kaljasakko-subtract" + i).prop("disabled", false);
		}
			count++;
			$("#kaljasakko-sum" + i).val(count);
	});

	$(".kaljasakko-subtract").click(function(){

		var i = $(this).parent().index();
		var count = $("#kaljasakko-sum" + i).val();
		
		if (count <= 0) {
			$("#kaljasakko-subtract" + i).prop("disabled", true);
		} else {
			count--;
			$("#kaljasakko-sum" + i).val(count);
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
			newElem.find(".kaljasakko-reason-toggle").attr("id", "kaljasakko-reason-toggle" + num);
			newElem.find(".kaljasakko-reason").attr("id", "kaljasakko-reason" + num);
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

		if($("#kaljasakko-name" + i).val().length == 0) {

			console.log("Name empty, nothing done.")

		} else {

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
		}
	})

	$(".kaljasakko-reason").blur(function() {

		var i = $(this).parent().index();
		var id = ($("#sakko" + i).attr('object-id'));

		if(id != undefined) {

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

	$(".kaljasakko-reason-toggle").click(function() {

		var i = $(this).parent().index();
		$("#kaljasakko-reason" + i).slideToggle("fast");
	});

});

/*AJAX calls*/

postSakko = 

	function postSakko(url, i) { $.ajax({
		type: "POST",
		url: url,
		dataType: "json",
		data: {
			name: $("#kaljasakko-name" + i).val(),
			amount: $("#kaljasakko-sum" + i).val(),
			reason: $("#kaljasakko-reason" + i).val()
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
			amount: $("#kaljasakko-sum" + i).val(),
			reason: $("#kaljasakko-reason" + i).val()
		},
		success: function(data, status) {
			console.log(data);
			},
		error: function(data, status) {
			console.log(data);
			}
		})
	}