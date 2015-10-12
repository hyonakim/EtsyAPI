(function () {

let etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=chappelle&includes=Images,Shop';

let loadTemplate = function (data) {
  let template = `
 <div class='itemList'>
  <div class='imageTag'><a href='#'><img src=${data.Images[0].url_170x135}></a></div>

  <div class='icons'><a href='#'><img src='images/heart.png'></a>
  <a href='#'><img src='images/hamburger.png'></a></div>

  <div class='title'><p>${data.title}</p></div>

  <div class='shop'><p><a href='#'>${data.Shop.shop_name}</p></div>
  <div class='pricing'><p>${data.price}${data.currency_code}</p></div>
  </div>
`;
$('.container').append(template);

}

$.ajax({
  url: etsyURL,
  dataType: 'jsonp',
  method: 'get'
}).then (function (response) {
   _.each(response.results, function (item) {
  var itemHTML = loadTemplate(item);
  $('.container').append(itemHTML);
  });
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
