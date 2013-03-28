---
comments: true
date: '2009-06-09'
slug: starting-out-with-comet-orbited-part-1
title: Starting Out With Comet (Orbited) Part 1
wordpress_id: 492
post_tag:
- comet
- Orbited
tags:
- comet
- Orbited
---

This is the first article in a series I'm creating to ease developers into using Comet.  The documentation is severely lacking on every comet implementation I've come across which I think is Comet's biggest limitation at the moment. Hopefully this will help those interested in Comet to struggle less with their implementations than I did/do.

The series will specifically focus on using the [Orbited](http://orbited.org/) implementation of Comet, but many of the concepts will apply to other Comet implementations as well.

This first post will explain some terms and concepts you need to become familiar with.


## Comet


Comet is a term referring to a set of techniques (hacks) that enable the server to push data to the client whenever it wants.  Traditionally the client has to initiate all requests.  If the server wants to send something to the client it has to wait until the client chooses to connect again.

Comet is a set of methods for the server to ping the client.

As a definition, Comet is as arbitrary as the word AJAX.  Try not to get hung up on the word any more than you'd get hung up on defining what AJAX is.


## What and Why Orbited


Orbited is a Python based implementation of Comet using the Twisted framework.  There's not a lot out there discussing the pro's and cons of the different comet services so its hard to tell which implementation is better than another.  There is clearly not yet a dominant implementation.

I basically chose Orbited because it was the first one I could get up and running thanks to [this tutorial](http://cometdaily.com/2008/10/10/scalable-real-time-web-architecture-part-2-a-live-graph-with-orbited-morbidq-and-jsio/), because I love python, and because my implementation will be working with Django.

Orbited is built on the Twisted framework and is event based, so in theory it should scale just fine.

Its important to note that Orbited has both a server side component and a JavaScript library for dealing with the client side of Comet connections as well.


## Long-Polling


Long-polling is the technique Orbited uses to maintain a consistent real-time connection between the server and the client, enabling the server to push data to the client whenever it wants. Put simply the client makes a request that is kept open (no immediate response is returned).  The server can continue to send data to the client through this open connection until it is terminated by the client.


## Streaming


Streaming is another Comet technique.  Michael Carter, one of Orbited's main contributors has a [nice article](http://cometdaily.com/2007/11/16/more-on-long-polling/) on the advantages of the two techniques.


## STOMP


Short for _Streaming Text Orientated Messaging Protocol_, STOMP is is a message passing protocol commonly used in Comet implementations.  It enables a publish/subscribe (pub/sub) model that comes in handy in many real-time applications.

STOMP isn't a required part of a Comet implementation, but we're going to be using it in this series.


## MorbidQ


[MorbidQ](http://www.morbidq.com/) is a STOMP server that comes with Orbited.  Think of it as Apache, but for STOMP instead of web apps.  Its great in that its easy to set up and work with, but its not robust enough for a significant load.  When deploying you should instead use [RabbitMQ](http://www.rabbitmq.com/).


## Pub/Sub


In the following posts we will be using a publish/subscribe model thanks to the help of STOMP.  With this model you can create channels and both publish and subscribe to them.  This model works great when multiple clients are listening to the same thing, such as a group chat or a game.

I like to think of it as a telegraphy system.  A whole bunch of people can hook up to the wire, and if they do they hear everything everyone else is broadcasting, and can broadcast their own messages as well.

So subscribing is like hooking up your headphones to the transmission lines and publishing is like sending out a signal with your [morse key](http://en.wikipedia.org/wiki/File:L-Telegraph1.png).  A different channel would correspond to a different wire.


## Orbited Server


Comet requires an event based server to deal with the long requests.  Typical servers like Apache for instance were designed to handle a request as quickly as possible.  They allocate memory to returning a response as soon as a request is received, and maintain that memory until a response is returned.

An event-based server such as Orbited can chop up the different components of the request/response process.  It can accept a request and then forget about it while allocating its memory elsewhere until at some later point something needs to be done (a response returned or data transmitted).  For this reason it can handle dramatically more open connections than Apache.

Lets use an example.  Pretend we have a typical Apache hosted site that attracts 10,000 people every hour.  Lets say with that amount of traffic we get on average 50 new page requests every second and it takes about a second to return each page.  That means Apache has at any given time about 50 open connections.  That's what it is designed to do.

But if we now put Comet on that site, all 10,000 of those users need to have a long connection open with our server.  Similar to the first estimate lets say only 50 of them are really receiving any data at any point.  Our Comet server will only assign memory to the tasks of those 50 connections, where Apache would attempt to assign an equal amount of memory to all 10,000 open connections.

That's why its important in Comet to separate connections from events, or why we use Orbited (or equivalent comet server) instead of Apache.


## Continuing...


That's it for my explanations/intro post.  I'm fairly new to the Comet scene myself and am very busy with my startup.  I'm sure there are a lot of additions or corrections, please leave them in the comments and I will try to keep up with corrections..

I'll put more time in this depending on how much interest there is in the comments and [subscribriptions](http://thingsilearned.com/feed/).  Make sure to check the [Comet Category](http://thingsilearned.com/category/comet/) listings for the other posts.

The next post will be an example implementation.

Update:  Continue to the next post in the series: [Starting Out With Comet (Orbited) Part 2 - Installation and STOMP](http://thingsilearned.com/2009/06/25/starting-out-with-comet-orbited-part-2-installation-and-stomp/)
