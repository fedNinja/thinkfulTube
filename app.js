var getDataFromApi = function(searchstr, fxn){
	var url= 'https://www.googleapis.com/youtube/v3/search';
	var param ={
		part:'snippet',
		key: 'AIzaSyBfU1Pdwvz81GpN2MaYjh3qkbK0_phWE9s',
		q:searchstr
	};
	$.getJSON(url, param, fxn);
}

var displayData= function(data){

	data.items.forEach(function(item, index){
		var targetUrl="https://www.youtube.com/watch?v=" + item.id.videoId;
		var img=$("<img />").attr("src",item.snippet.thumbnails.medium.url);
		$('.row').append('<a href="'+targetUrl+'"><div class="col-sm-4"><div class="thumbnailDiv" id="imgDiv'+index+'"></div><p class="titleItem">'+item.snippet.title+'</p></div></a>');
		img.appendTo($("#imgDiv"+index));

	});
}


var searchSubmit = function(){
	$('#search').click(function(e){
		$('.row').text('');
		e.preventDefault();
		var ipText= $('.inputText').val();
		getDataFromApi(ipText, displayData);
	});
}


$(function(){
	searchSubmit();
});


























