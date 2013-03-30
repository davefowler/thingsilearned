---
date: '2013-03-29'
title: Statically Generated
comments: true
---

I've long wanted to move my blog from wordpress, and have been really into static site generators lately, and after trying several of them out and not having a lot of luck with the wordpress export tools provided by each I finally waited long enough that most of my blog content is so irrelevant that it doesn't matter anyway!

## Explain...

For those who don't know, a static site generator is a bit of a different type of blogging system that programatically generates a copy of every page that the site will ever need to render ahead of time.  The advantage is spead and some simplicity.

For example, when visitng a typical blog, such as wordpress, the server must make a few queries to a database to collect the information about the author, blog content, and whatever else is needed in order to return the HTML necessary.  Its bascially rendering the page for every visit to the website.

For content that doesn't change based on who's viewing it that process doesn't actually make a lot of sense.  If there are a lot of people viewing the exact same content, the same queries are run, and the same content is mashed into the same HTML that's returned over and over again with each view.  A static site generator simply up front renders all possible pages and saves the html result.  Then when viewers come in, the flat HTML file is simply served up as a result.  Its much faster and much less server intensive!

## Hyde

There are a number of static site generators out there.  This [Hacker News Poll][poll] lists many of them and gives you a good indication of how popular they are.  I ended up choosing [Hyde][] as its what I used to create the [Chartio][] content pages as it was the most popular python generator last year when I did that work.  It unfortunately has very little documentation, and hasn't been improved in over two years so I have a tough time recomending it to anyone right now.

Its still really great, and if you want to clone this site and morph it to your own will, you can [get the source][source] any time.  If interested also be sure to take a look at this list of other [Hyde powered sites][powered].

## Exporting from Wordpress

The most popular Ruby static site generator is called Jekyll, and there's a nice [python based Wordpress Exporter][origexport] for it.  I made [my own fork][export] to port things to the Hyde format, and to maintain the URL structure of my previous posts.  This blog still gets a few hundred hits a day and I didn't feel like starting from scratch.  Unfortunately neither Livefyre or Disqus imported the wordpress.com comments properly and I had to drop all comments completely.


[Chartio]: http://chartio.com "Data Interface"
[poll]: https://news.ycombinator.com/item?id=4857473 "Popular static site generators."
[Hyde]: https://github.com/hyde/hyde
[powered]: https://github.com/hyde/hyde/wiki/Hyde-Powered "Sites powered by Hyde"
[source]: https://github.com/davefowler/thingsilearned
[origexport]: https://github.com/thomasf/exitwp
[export]: https://github.com/davefowler/exitwp