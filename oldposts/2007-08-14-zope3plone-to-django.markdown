---
date: '2007-08-14 04:59:22'
layout: post
slug: zope3plone-to-django
status: publish
title: Zope3/Plone to Django
wordpress_id: '78'
categories:
- django
- plone
- startup
- thingsilearned
---

I was going to write a brief summary/closer on our summer but ended up writing this lengthy article about our startup's decision to switch to [Django](http://www.djangoproject.com) from [Zope3](http://www.zope.org)/[Plone](http://www.plone.org) as it is the major reason we've missed our previously projected release dates.  Its difficult for me to post this as it may appear to cast some negativity toward Zope3/Plone, a community and CMS for which I have a great deal of respect.  It is also difficult as it describes significant failure on my part.

I continue to post though as this startup is all about sharing the things you learn and this was a big one this summer.  I wish I had found a post like this when I was first searching for Zope3/Plone experiences and hope others in my position find it in the future.A few months ago we made a huge team decision to scrap the month and a half we spent learning Zope3/Plone for our future content creation/collaboration site and switch to [Django](http://www.djangoproject.com).

It was a really tough decision.  Plone is an awesome content management system.  Its built with python, has an amazing community, I had/have a Google Summer of Code in it, and the clincher: its already capable of doing 90% of what we want our site to do.  It manages users great, handles blogs, wikis, profiles.  It was mouth watering, and to be honest was my main source of confidence in the idea that we'd be able to pull off such a complicated site.

That confidence slowly deteriorated over our first month of learning Plone.  I bought every book on Plone and Zope3 and in that first month in my parent's basement Priyesh and I spent day and night learning the stuff. I read almost all of two Zope3 books and one on Plone.  They made no sense to me.  I kept re-reading them and going over examples.  I could develop the examples just fine but I couldn't figure out how to write my own.

I couldn't get a feel for it.  The concepts of interfaces, utilities, adapters, viewlets, ZCML, etc just weren't meshing. This bothered me tremendously as I've been programming since childhood and consider myself (perhaps falsely so) at least halfway skilled in python and web development.

_Note: I later found out that some of my problem was that, though only a few years old the Zope3 Developer's Handbook has fairly outdated Zope3 methodology._

I looked around for classes as I decided its just the type of stuff you have to have a teacher for.  The Plone community has fairly regular 2-3 day classes but none lined up with our location or timeline.  I am almost certain that had I been able to take one of the Plone courses it would have come together fairly easy.  As an alternative I found that a Plone sprint being hosted at the Googleplex!  I went and tried helping out as I blogged about earlier.  I wanted to get a feel for Zope3 and thought that it might inspire that "snap" in fluency where it'd suddenly be obvious how all of those components work in Zope3.

During the sprint I got to talk with Alexander Limi, one of the founders of Plone, who explained that Plone is in a very transitional state, attempting the crazy but so far successful task of slowly merging between Zope2 and Zope3.  For those of you who aren't in the know Zope3 is almost a completely different framework from Zope2.  He explained that Plone will be incredibly difficult to learn for the next year or so as it completes its transition.  New comers would have to learn both the old as well as the new and all the crazy ways in which they bridge the gap.

He was confident though, and rightfully so, that the Plone community was strong enough to make it through that year with very little new blood.  He very humbly recommended going with a different framework for our startup; advice that we were already considering and took soon after.  Plone may have already given us 90% of our site, but we decided that having to write the last 10% in Zope3 might take us longer than starting from zero.

Having lost so much time by judging a book by its cover we decided to do a great deal of reading and research before choosing our next framework.  I had done a good deal of web development several years ago but a lot of fancy new and helpful frameworks have fortunately popped up since then!

We took a week, each of us diving into one or two frameworks, sharing what we liked and didn't like about each.  Our benchmark for each framework was the ease and accuracy with which we could replicate [Jared's One Blog.](http://www.jared-lee.com) We're still intending on posting our sometimes humorous results but haven't had a public server up and running until recently.

As was already spoiled, we went with [Django](http://www.djangoproject.com).  I'd heard a lot of good things and they've so far been proven.  For the most part we really enjoy developing in Django, though it can be frustrating to replicate features we already know are implemented in Plone :).  There's no on the shelves book on it (I like buying lots of books), the documentation doesn't go very deep, and the community is significantly less active than Plone's.  The framework though, at least to me, just makes more sense.  It was ridiculously easy to replicate the [One Blog](http://jared-lee.com) and problems with missing documentation can usually be solved with looking at a little source code or whining in IRC.

The change in game-plan has given us more work that we expected to do at the beginning of the summer.  As I said, we thought we were 90% there and pretty much lost a month of development.  Startups are all about obstacles though! Since the change we've been making tremendous progress and will be opening an Alpha to a few friends/advisors within the week.

Perhaps one day someone will open source a version of Plone in Django!  Maybe that will be us.  Djone? Glono?

zoPE <-> PlonE as djanGO <-> GlonO


Dave
