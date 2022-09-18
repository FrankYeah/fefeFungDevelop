export default function () {

//load header/footer
document.onSelectStart=function(){return false;};
// document.body.oncopy = function(){event.returnValue=false;}

$(function () {
	var includes = $('[data-include]')
	$.each(includes, function () {
	  var file = 'layout/' + $(this).data('include') + '.html'
	  $(this).load(file)
	})
});

$('#CRclose').on('click', function(){
    $('.copyright-alert').hide();
});

$('#PopImg').hide();

$('.thumbnail-click').on('click', function(){
    $('#PopImg').show();
});

$('.close-img').on('click', function(){
    $('#PopImg').hide();
});





}
