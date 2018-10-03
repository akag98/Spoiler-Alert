jQuery.expr[':'].contains = function(a, i, m) {
    return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
}; 

//IMPORTANT
// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         var name = request.greeting;
//         highlight(name);
//     //   console.log(sender.tab ?
//     //               "from a content script:" + sender.tab.url :
//     //               "from the extension");
//     //   if (request.greeting == "hello")
//     //     sendResponse({farewell: "goodbye"});
//     }

// );


chrome.storage.onChanged.addListener(function(changes, namespace) {
    chrome.storage.sync.get(['name'], function(result) {
        //console.log('Array Values currently are  ' + result.name);
        highlight( result.name[result.name.length - 1] );
    });
});


chrome.storage.sync.get(['name'], function(result) {
    //console.log('Value currently is ' + result.name);
    result.name.forEach(function(item){
        console.log(item);
        highlight(item);
    });
});
  
function highlight(name){
   
    var element = $("span:contains(" + name + ")");
	for (i = 0; i < element.length; i++) {
        element[i].parentNode.removeChild(element[i]);
	}
	
    var element = $("table:contains(" + name + ")");
    for (i = 0; i < element.length; i++) {
        element[i].parentNode.removeChild(element[i]);
	}
	
    var element = $("a:contains(" + name + ")");
    for (i = 0; i < element.length; i++) {
        element[i].parentNode.removeChild(element[i]);
	}
	
    var element = $("p:contains(" + name + ")");
    for (i = 0; i < element.length; i++) {
        //console.log(element[i]);
        // var x = document.createElement("BUTTON");
        // var t = document.createTextNode("Show");
        // x.appendChild(t);
        // x.setAttribute("onclick", "hideOrShow(element[i])");
        // element[i].appendChild(x);
        element[i].parentNode.removeChild(element[i]);
        //$(element[i]).parent().closest('div').css("background-color", "red");
    }

    var element = $("h1:contains(" + name + ")");
    for (i = 0; i < element.length; i++) {
        element[i].parentNode.removeChild(element[i]);
    }
    var element = $("h2:contains(" + name + ")");
    for (i = 0; i < element.length; i++) {
        element[i].parentNode.removeChild(element[i]);
    }
    var element = $("h3:contains(" + name + ")");
    for (i = 0; i < element.length; i++) {
        element[i].parentNode.removeChild(element[i]);
    }
    var element = $("h4:contains(" + name + ")");
    for (i = 0; i < element.length; i++) {
        element[i].parentNode.removeChild(element[i]);
    }
    var element = $("h5:contains(" + name + ")");
    for (i = 0; i < element.length; i++) {
        element[i].parentNode.removeChild(element[i]);
    }
    var element = $("h6:contains(" + name + ")");
    for (i = 0; i < element.length; i++) {
        element[i].parentNode.removeChild(element[i]);
    }
    var element = $("li:contains(" + name + ")");
    for (i = 0; i < element.length; i++) {
        element[i].parentNode.removeChild(element[i]);
	}
}