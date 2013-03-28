---
comments: true
date: '2009-08-26'
slug: forwarding-naked-domains-for-appengine-with-apache
title: Forwarding Naked Domains for Appengine with Apache
wordpress_id: 538
post_tag:
- Apache
- appengine
tags:
- Apache
- appengine
---

Google Appengine currently does not allow configuration of naked domains.  Meaning, if you're building something on Appengine you'll have to settle for a URL like _http://www.mysite.com_ or _http://whatever.mysite.com_ and you will not be able to use _http://mysite.com_.

Its not so bad in most cases, but not having http://mysite.com isn't going to stop people from trying to go there.  So its important to set up some sort of device to forward the naked domain to the www.

Unfortunately you're going to need a server and for this example it will need to be running Apache2.  The redirect is handled by placing the following line in an apache config file (/apache2/httpd.conf).

    
    Redirect permanent / http://www.mysite.com/


Where _http://www.mysite.com_ is the example site being hosted on Appengine.

Or, if your apache server is hosting other apps and domains you'll need to set up the redirect in a VirtualHost as shown here.

    
    <VirtualHost *:80>
    ServerName mysite.com
     Redirect permanent / http://www.mysite.com/
    </VirtualHost>


Note that the 'permanent' parameter in the Redirect command enforces a 301 or permanent redirect.  You can choose other forms of redirect by replacing the 'permanent' with either the redirect number (ie 302) or the keywords from the following table I've shamelessly [copied from here](http://www.yolinux.com/TUTORIALS/ApacheRedirect.html#REDIRECT).







HTTP Code
Status
Description





301


permanent


The resource has permanently moved






302


temp


The resource has temporarily moved






303


seeother


The resource has been replaced and refer to new resource






305


UseProxy


Use proxy to access site






307


Temp


The resource has temporarily moved






410


Tegone


The resource has permanently removed



Finally set your DNS to point the base domain to this apache server and in a few hours it should be permanently re-directing http://mysite.com/ to http://www.mysite.com/.

If you're not using apache or are looking for more ideas here's a [list of other techniques](http://www.yolinux.com/TUTORIALS/ApacheRedirect.html).

Also, please [vote for Google to fix the issue here](http://code.google.com/p/googleappengine/issues/detail?id=113) and [here](http://code.google.com/p/googleappengine/issues/detail?id=777&colspec=ID%20Type%20Status%20Priority%20Stars%20Owner%20Summary%20Log%20Component).
