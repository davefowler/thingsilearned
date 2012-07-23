---
date: '2010-01-07 21:52:56'
layout: post
slug: github-and-bitbucket
status: publish
title: Comparing Github and BitBucket
wordpress_id: '682'
categories:
- revision control
tags:
- revision control
---

There are a lot of advantages to using a distributed revision control system as opposed to centralized.  There are also some down sides, mostly in that it can be a bit more confusing to manage.  A centralized web interface however seems to solve that problem quite nicely.

Currently there are two major competitors in that space, [Github](http://github.com) and [Bitbucket](http://bitbucket.org/), that manage Git and Mercurial repositories respectively.  I've used Github for a while and recently have really started using Bitbucket and I thought I'd share some thoughts and comparisons of the two.  There are a lot of blogs that [compare Git and Mercurial](http://importantshock.wordpress.com/2008/08/07/git-vs-mercurial/), but this is not one of those blogs.  I personally have a preference for mercurial, but for admittedly stupid reasons like it was written in python and the syntax more closely resembles SVN which I've become used to.  To me, a major differentiator in choosing one over the other is the interface or 'hub' that manages it.

Below is my item by item lineup showing the differences between GitHub and Bitbucket








GitHub
BitBucket





pull requests


yes


yes






forking


yes


yes






command instructions


yes


yes






distributed revision control


yes


yes






network graph


yes


no






inline editing


yes


no






developer profiles


yes


yes






wiki


yes


yes






issues


yes


yes






rss feeds


yes


yes






source browser


yes


yes






monthly price


cheap


cheaper






free private projects


0


1






# of users


lots


not lots






happy hours


in SF


no




There really aren't a lot of differences.  Personally, I actively use both.  Learning both is easy as the syntax difference between the two revision control systems is minimal and both hub interfaces are very similar.

I use git for open projects like [TwitTornado](http://github.com/godavemon/TwitTornado) where privacy is not an issue and where I'd like to get more developers involved. Its really got a fantastic social network of hackers.

I use bitbucket for my private repositories as it allows 1 free private repository (per user) and has cheaper monthly rates.

I hope this helps others make a decision between the two and try both of them out.  Let me know in the comments if I've left any parameters out of the table above and I'll add them in.
