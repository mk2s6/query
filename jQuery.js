"use strict";
$(function () {
	var $orders = $('#orders');
	var $add = $('#add');
	var $name = $('#name');
	var $drink = $('#drink');


	function addOrder(order) {
		$orders.append("<li> Name: "+order.name+", drink: "+ order.drink+"</li>");
	}

	function clear(order) {
		$name ='';
		$drink ='';
	}

	$.ajax({ 
		method: 'GET', 
		dataType: 'json', 
		contentType: 'application/json',
		url: '/orders', 
		success :	function(response) { 
			console.log("success", response); 
			response.orders.forEach(function(orders) { 
				addOrder(orders); 
				console.log(orders);
			}); 
		}, 
		error : function() {
			alert('some error'); 
		} 
	});
	
	$add.on('click', function() {
		//event.preventDefault();

		var order = {
			name  : $name.val(),
			drink : $drink.val()
		};

		$.ajax({
			url: '/orders',
			method: 'POST',
			contentType: 'application/json',
			data : JSON.stringify(order),
			success : function(response) {
				event.preventDefault();
			//	console.log( $name.val());
				console.log(response);
				addOrder(order);
				clear(orders);
				// //$add.click();
				//console.log($name.val());
			},
			error: function(jqXHR) {
				console.log(order);
				alert("error while appending "+jqXHR.statusText+" "+jqXHR.status);
			}
		});
	});
});
