$('textarea').val('');
$(window).on('keyup keypress', function(e) {
   if (e.type=="keyup") {
   	switch (e.which){
   	case 8:
   	  $('#realtime').html(function (_,txt) {
   	    return txt.slice(0, -1);
   	  });
   	  break;
   	case 46:
   	  alert('Please use BackSpace');
   	  break;
   	}
   } else {
   	var splitted = $('textarea').val().split("\n"); 
   	var splitted_div = $('#realtime').text().split("\n")
   	switch (e.which){
   	case 13:
      debugger
 			splitted.forEach(function (value, index) {
 				if (value.startsWith('###')){
	 		  	$('#realtime').html(function (i, t) {
	 		  		if (splitted_div[index] != "" && splitted_div[index] != '###'){
	 		  			replaced = '<h3>' + splitted[index].replace(/#/g, '') + '</h3>'
	 		  	  	return t.replace(splitted_div[index], replaced)
	 		  		}
	 		  	})
 		  	}else if (value.startsWith('##')){
 		  		$('#realtime').html(function (i, t) {
	 		  		if (splitted_div[index] != "" && splitted_div[index] != '##'){
	 		  			replaced = '<h2>' + splitted_div[index].replace(/#/g, '') + '</h2>'
	 		  	  	return t.replace(splitted_div[index], replaced)
	 		  		}
	 		  	})
 		  	}else if (value.startsWith('#')){
 		  		$('#realtime').html(function (i, t) {
	 		  		if (splitted_div[index] != "" && splitted_div[index] != '#'){
	 		  			replaced = '<h1>' + splitted_div[index].replace(/#/g, '') + '</h1>'
	 		  	  	return t.replace(splitted_div[index], replaced)
	 		  		}
	 		  	})
 		  	}else if (value.startsWith('**')){
 		  		$('#realtime').html(function (i, t) {
	 		  		if (splitted_div[index] != "" && splitted_div[index] != '**'){
	 		  			replaced = '<b>' + splitted_div[index].replace(/\*/g, '') + '</b>'
	 		  	  	return t.replace(splitted_div[index], replaced)
	 		  		}
	 		  	})
 		  	}else if (value.startsWith('*')){
 		  		$('#realtime').html(function (i, t) {
	 		  		if (splitted_div[index] != "" && splitted_div[index] != '*'){
	 		  			replaced = '<em>' + splitted_div[index].replace(/\*/g, '') + '</em>'
	 		  	  	return t.replace(splitted_div[index], replaced)
	 		  		}
	 		  	})
 		  	}

 			});
   	  $('#realtime').append('</br>');
   	  break;
   	}
 		
    $('#realtime').append(String.fromCharCode(e.which));
   }
});

function saveFile() {
    var textToSave = document.getElementById("textarea").value,
        textToSaveAsBlob = new Blob([textToSave], { type: "application/md" }),
        textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob),
        downloadLink = document.createElement("a");

    countClicks++;

    if (typeof(Storage) !== "undefined") {
      localStorage.setItem("document " + countClicks, textToSave);
    } else {
 
    }

    downloadLink.download = "document " + countClicks + ".md";
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    downloadLink.click();
}

var countClicks = 0;