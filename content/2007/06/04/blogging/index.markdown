---
comments: true
date: '2007-06-04'
slug: blogging
title: 'Plone Blogging '
wordpress_id: 33
tags:
- plone
- thingsilearned
---

Evolution is a journey which everything goes through. Yep everything. In fact I sometimes feel it would be much better to be in the shoes of a software framework instead of being a human when it comes to adventure and changing to adapt with the surrounding environment. I would like to just talk a little about one such small evolutionary process in the life of an Open Source Content Management System (CMS) - Plone. There are various contending add-on products for implementing blogging in Plone, and I hope Dave can assimilate the best of all the technologies during his GoogleSOC in order to implement commenting infrastructure for Plone.

Some of the stable implemented add-ons for plone are Quills, EasyBlog, and qPloneBlog. EasyBlog provides the basic framework in order to make blogging possible, with plethora of security and visibility configurations for the user or group of users. It also provides some of the other basic utilities of blogging, such as archiving, trackback etc. but that is about as far as it can go. Some of the other add-ons - Quills and qPloneBlog go further and provide pinging support, Blogger API support, track back pings etc. However, some of the features stand apart in both Quills and qPloneBlog. While qPloneBlog provides RSS support to disseminate information, Quills provides blog aggregation support, which can be used for blog searches more easily and efficiently. Summarizing the features:

_Quills:_
Features:



	
  * Archival entry paths. Access blog archives via standard paths such as http://example.com/myblog/archive/2004/04/06/

	
  * Topics with descriptions and images

	
  * BloggerAPI support for remote posting

	
  * Track Back Pings

	
  * Visitors can leave comments on blog entries, optionally require registration to limit "Comment Spam"

	
  * Unlimited Authors, Blogs per Author, and Authors per Blog

	
  * Site-wide blog aggregator

	
  * Blog Planets for groups

	
  * Multiple topics and advanced topic searching, with simple URIs such as http://example.com/myblog/topics/work/project/


_EasyBlog:_
Features



	
  * Multiuser/Multiblogs

	
  * Categories

	
  * Monthly archives

	
  * Trackbacks


Receiving

	
  * allow/disallow (per blog/entry)

	
  * show/hide (per blog/entry)

	
  * moderate yes/no

	
  * blacklist: always to be reviewed


Sending

	
  * autodetection (per blog/entry)

	
  * logfile

	
  * Comments

	
  * allow/disallow (per blog/entry)

	
  * show/hide (per blog/entry)

	
  * moderate yes/no

	
  * preview yes/no

	
  * HTML tags/attributes handling

	
  * blacklist: always to be reviewed


_q Plone Blog:_
Features :



	
  * pinging functionality with enhanced options.

	
  * RSS2 support altogether with audio and video enclosures

	
  * Technorati tags

	
  * TrackBack functionality

	
  * Google AdSense management included into blog layout

	
  * blogging APIs support

	
  * trackbacks blacklisting control

	
  * included popular bookmarklets icons layout


Hopefully Dave can pull of integration off all such generic blogging utilities into one neat infrastructure to provide plone users another reason to rejoice. Right Dave?


Priyesh
