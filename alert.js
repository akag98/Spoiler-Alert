var array = [];
var count = 1;

chrome.storage.sync.get(['name'], function(result) {
    result.name.forEach(function(item){
        array.push(item);
    });
});

function redirect(){

	$input = document.querySelector("#name");
	var length = $("#name").val().length;
	if (length < 1){
		alert('empty');
		return;
	}

    array.push($input.value);
    var d1 = document.getElementById('items');
	d1.insertAdjacentHTML('beforeend', '<br><div class="remove" id= ' + count + ' size= 2345>' +
											count + ". " + $input.value + 
											'<button id=' + count + '>Remove this item</button>' + 
										'</div>');

	chrome.storage.sync.set({'name':array}, function() {
		//console.log(array);
	});
}





$(document).ready(function(){
	
	chrome.storage.sync.get(['name'], function(result) {
		result.name.forEach(function(item){
			var d1 = document.getElementById('items');
			d1.insertAdjacentHTML('beforeend', '<br><div class="remove" id= ' + count + '>' +
													count + ". " + item + 
													'<button id=' + count + '>Remove this item</button>' + 
												'</div>');
			count++;
		});
		
	});

	document.getElementById('clickme').addEventListener('click', redirect);

	var els = document.getElementsByClassName('remove');
	console.log(els.length);
	for (var i = 0; i < els.length; i++) {
		console.log(elsp[i]);
		els[i].addEventListener('click', function () {
			console.log(els[i].id);
		});
	}
	
});
