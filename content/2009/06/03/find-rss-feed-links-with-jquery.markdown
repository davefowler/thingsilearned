---
date: '2009-06-03 19:47:22'
layout: post
slug: find-rss-feed-links-with-jquery
status: publish
title: Find RSS Feed Links With jQuery
wordpress_id: '479'
categories:
- feeds
- javascript
- jQuery
tags:
- feeds
- javascript
- jQuery
---

This took me a little while to figure out so I thought I'd share.  You can use a [jQuery selector](http://docs.jquery.com/Selectors) to find any RSS links on a page very easily.

The following line will return a list of the RSS link elements.

[sourcecode language='javascript']
var link_elements = $('link[type="application/rss+xml"]');
[/sourcecode]

The following snippet will create an array of all the urls to the RSS feeds on the page.

[sourcecode language='javascript']
var links = [];
$('link[type="application/rss+xml"]').each(function() { links[links.length] = this.href; });
[/sourcecode]
