---
comments: true
date: '2009-01-19'
slug: javascript-relative-and-absolute-urls
title: Javascript Relative and Absolute URLs
wordpress_id: 231
tags:
- javascript
---

I recently discovered a small oddity in javascript link elements.  Simply stated, if you access the 'href' attribute using getAttribute('href') the result will be different than accessing it with simply 'href'.  

The getAttribute will return the relative link, where the direct call will return the absolute. 

Here's the test:

    
    <html>
      <body >
        <a href="/relative/link" id='rellink'>
          Relative Link</a>
        <div id='answer1'></div>
        <div id='answer2'></div>
        <script type='text/javascript'>
          var link, a1,a2;
          link = document.getElementById('rellink');
          a1 = document.getElementById('answer1');
          a2 = document.getElementById('answer2');
          a1.innerHTML =  "getAttribute('href'): "
          + link.getAttribute('href');
          a2.innerHTML = "href: " + link.href;
        </script>
      </body>
    </html>


and the resulting page show:

    
    <a href="///relative/link" id="rellink">Relative Link
    </a><span style="font-family:Georgia;line-height:19px;white-space:normal;">getAttribute('href'): /relative/link
    
    href: http://localhost/relative/link
     </span>
