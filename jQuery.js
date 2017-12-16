"use strict";
$(function () {
	var $orders = $('#orders');
	var $name = $('#name');
	var $drink = $('#drink');
	var $add = $('#add');

	function addOrder(order) {
		$orders.append("<li> Name: "+order.name+", drink: "+ order.drink+"</li>");
	}

	$.ajax({
		method: 'GET',
		dataType: 'json',
		url: 'orders1.json',
		success : function(data) {
			console.log("success", data);
			$.each(data, function(i,order) {
				addOrder(order);
			});
		},
		error : function() {
			alert('some error');
		}
	});
	
	$add.on('click', function() {
		var order = {
			name : $name.val(),
			drink : $drink.val()
		};
		$.ajax({
			method: 'post',
			url: 'orders1.json',
			contentType: 'application/json; charset=utf-8',
			data : order,
			success : function(newOrder) {
				addOrder(newOrder);
			},
			error: function(jqXHR) {
				//console.log(newOrder);
				alert("error while appending "+jqXHR.statusText);
			}
		});
	});
});
