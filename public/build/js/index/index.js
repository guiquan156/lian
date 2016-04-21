$(function(){
	$('#fileupload').fileupload({
		dataType: 'json',
		url: '/upload'
	});
})