(function () {

 var templateString = $('#itemTemplate').text();

 var templateFunction = _.template(templateString);

 _.each(etsydata.results, function (item) {
  var itemHTML = templateFunction(item);
  $('.container').append(itemHTML);

 });

}());

(function () {

$('.container').on('mouseenter', '.itemList', function (event) {
var show = $(this).find('.icons').addClass('.show-icons');
show.css('display', 'inline');
});

$('.container').on('mouseleave', '.itemList', function (event) {
var noShow = $(this).find('.icons').removeClass('.show-icons');
noShow.css('display', 'none');
});

}());
