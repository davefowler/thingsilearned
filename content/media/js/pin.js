/* this is for Megan's almostathirdgrader site */


jQuery(document).ready(function() {
  var youtubelink = jQuery('object param[name="movie"]').val();
  var youtubecode = youtubelink.match(/\/v\/(.*)\?/)[1];
  var thumbnail = 'http://img.youtube.com/vi/' + youtubecode + '/0.jpg';
  var button = '<a href="//pinterest.com/pin/create/button/?url='+escape(window.location.href)+'&media=' + escape(thumbnail) + '&description=' + escape(document.title) + '" data-pin-do="buttonPin" data-pin-config="above"><img src="//assets.pinterest.com/images/pidgets/pin_it_button.png" /></a>'

  jQuery('object').append(
    '<p>'+ button + '</p>'
  )
});
