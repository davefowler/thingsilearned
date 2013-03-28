---
comments: true
date: '2009-06-03'
slug: google-ajax-feed-api-example
title: Google AJAX Feed API Example with Socialbrowse
wordpress_id: 464
post_tag:
- api
- feeds
- google
- javascript
- socialbrowse
tags:
- api
- feeds
- javascript
- socialbrowse
---

Today I learned that Google has a really awesome [AJAX API for RSS and Atom feeds](http://code.google.com/apis/ajaxfeeds/documentation/).  It allows you to access RSS or Atom feeds using JavaScript in both JSON and XML format without having to setup your own proxy or deal with anything on the server side.

They have a lot of great [examples](http://code.google.com/apis/ajaxfeeds/examples.html), but I thought I'd share mine with the usecase of showing the feed of my [Socialbrowse](http://socialbrowse.com) shares.  In your Socialbrowse settings you can [specify a public share name](http://socialbrowse.com/profile/edit/sharing/).  Once added 3 feeds will be created for you










profile:


[http://socialbrowse.com/shares/PUBLIC_NAME/](http://socialbrowse.com/shares/dave/)






shares rss:


[http://socialbrowse.com/rss/uname/PUBLIC_NAME/](http://socialbrowse.com/rss/uname/dave/)






feed rss:


[http://socialbrowse.com/rss/socialfeed/PUBLIC_NAME/](http://socialbrowse.com/rss/socialfeed/dave/)




where PUBLIC_NAME is the share name you chose.

For this example we're going to fetch and display the "shares rss" feed using the Google AJAX Feeds API.  The example is simulating the [Socialbrowse blog widget](http://socialbrowse.com/blog/2009/jan/6/embed-new-socialbrowse-blog-widget-get-some-link-l/) Zack created a few months ago.

To use the Feeds API you need to [get a key](http://code.google.com/apis/ajaxfeeds/signup.html).

Now we have everything we need.  Create an HTML file and paste in the following code.  Make sure to change YOUR_API_KEY, and the feed_title and feed_url variables to your values.


    
    
    <html>
      <head>
    
    	<script>
    	  var feed_title = "Dave's Socialbrowse Feed";
    	  var feed_url = "http://socialbrowse.com/rss/uname/PUBLIC_NAME/";
    	</script>
    
        <script src="http://www.google.com/jsapi?key=ABQIAAAAmcnSI-mFmfJW8bidL13qfRQHElLAWyCZ_TZ_pzrAvWp3ncTV5hRgCPRM76Ub8GIqowNBQZMVWYastg" type="text/javascript"></script>
        <script type="text/javascript">
    
          google.load("feeds", "1");
    
          function initialize() {
            var feedControl = new google.feeds.FeedControl();
            feedControl.addFeed(feed_url, feed_title);
            feedControl.draw(document.getElementById("feedControl"));
          }
          google.setOnLoadCallback(initialize);
    
        </script>
      </head>
    
      <body>
        <div id="feedControl">Loading</div>
      </body>
    </html>
    



Viewing the page in a browser will result in something that looks like this

![feed](http://thingsilearned.files.wordpress.com/2009/06/feed1.gif)

Its not very pretty but its easy enough to style it however you like using CSS.  This code can be added anywhere you'd like to display your Socialbrowse shares.

Finally, note that this code can be used with any feed, not just Socialbrowse.  If you want to display the latest [Google News](http://news.google.com) for example simply change the feed variables to


    
    
    	  var feed_title = "Google News";
    	  var feed_url = "http://news.google.com/news?pz=1&ned;=us&hl;=en&topic;=h&num;=3&output;=rss";
    



