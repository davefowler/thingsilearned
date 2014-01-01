---
comments: true
date: '2008-12-27'
slug: proportional-image-resize-in-javascript
title: Proportional Image Resize in JavaScript
wordpress_id: 135
post_tag:
- javascript
- programming
---

[Socialbrowse](http://Socialbrowse.com) currently shows summaries of shared links that have an ATOM or RSS feed.  The feeds come with images of all sizes and we have to change the height and width to fit within the alloted space.  CSS has max-width and max-height parameters but they have issues in IE and they don't keep original proportions of the image!  To resize and keep the proportions we use javascript.

This javascript resize function will do a proportional resize to keep the given <img> within the given max height and max width (maxh and maxw).  Feel free to copy and use it in any way you like.

{% syntax javascript %}
var resize = function(img, maxh, maxw) {
  var ratio = maxh/maxw;
  if (img.height/img.width > ratio){
     // height is the problem
    if (img.height > maxh){
      img.width = Math.round(img.width*(maxh/img.height));
      img.height = maxh;
    }
  } else {
    // width is the problem
    if (img.width > maxh){
      img.height = Math.round(img.height*(maxw/img.width));
      img.width = maxw;
    }
  }
};
{% endsyntax %}
