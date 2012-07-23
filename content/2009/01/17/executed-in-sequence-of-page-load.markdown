---
date: '2009-01-17 14:24:39'
layout: post
slug: executed-in-sequence-of-page-load
status: publish
title: ' Executed In Sequence of Page Load'
wordpress_id: '222'
categories:
- javascript
---

I was researching some javascript capabilities earlier and from a [wikipedia article on Comet](http://en.wikipedia.org/wiki/Comet_(programming)) learned this

_"browsers render HTML pages incrementally, each _`_script_`_ tag is executed as it is received.__"_

Awesome!  This means not just that you can execute javascript before and as the page is loading, but you choose WHEN/WHERE to run it.  To test it out I made the following example.

    
    <html>
    <body>
      <div>Original</div>
      <div>Original</div>
      <script>
        var link, links;
        links = document.getElementsByTagName( 'div' );
        for (l in links) { links[l].innerHTML = 'Edited'; }
      </script>
      <div>Original</div>
    </body>
    </html>


The inserted script collects all 'div' elements in the document and changes them to instead say "Edited".  The code outputs the following result.

    
    Edited
    Edited
    Original


Because the script is executed in the order that the page is loaded, the first two divs get edited, but the last one which didn't exist at the time the script was run, was not edited.  Some clever things can be done with this.  I'll blog more about it later.
