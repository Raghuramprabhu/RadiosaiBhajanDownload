$( document ).ready(function() {
  $("#playStopAudio").html("Play Radiosai Bhajan Stream");
  $("#audioControl").show();
  $( "#download" ).click(function() {
	var dateObj = new Date($("#date").val);
	var date = $('#date').val().split("-");
	console.log(date);
var option = $("#option").val();
	
	var urlFirstPart ="http://dl.radiosai.org/LIVE_";
	var day = date[2];
  var month = date[1];
 var  year = date[0];
 console.log(day);
 var url;
 if(option ==='AM'){
 
	 var urlFinalPart = "_AM_BHAJAN.mp3";
	 var underScore="_"
	 url=urlFirstPart+year+underScore+month+underScore+day+urlFinalPart;
 }
 else{
	var urlFinalPart = "_PM_BHAJAN.mp3";
	var underScore="_"
	url=urlFirstPart+year+underScore+month+underScore+day+urlFinalPart;
 }
	window.location.href = url;


 
});

$("#playBhajanControl").click(function(){	
		if($(this).hasClass("play"))
		{
			
			$("#audioControl").html('<div id="livebhajan"> <audio controls  autoplay="false" name="media" id="audioSoure"><source src="http://stream.radiosai.org:8000/" type="audio/mpeg"></audio></div>');
			$(this).removeClass('play');
			$(this).addClass('stop');
			$("#playStopAudio").html("Stop Radiosai Bhajan Stream");
		}
		else
		{
			$("#livebhajan").remove();
			$(this).removeClass('stop');
			$(this).addClass('play');
			$(this).html("Play Radiosai Bhajan Stream");
		}
		
});
});

