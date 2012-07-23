---
date: '2009-05-08 13:08:30'
layout: post
slug: testing-ajax-requests-in-django
status: publish
title: Testing AJAX Requests in Django
wordpress_id: '386'
---

Django has a really handy function on the request object that will determine if the request was an AJAX request (an XMLHttpRequest).

    
    request.is_ajax()


It simply checks whether the HTTP_X_REQUESTED_WITH header is equal to 'XMLHttpRequest', a standard that's supported by most javascript libraries.  You can read more about it and see the list of supporting frameworks [here](http://docs.djangoproject.com/en/dev/ref/request-response/#django.http.HttpRequest.is_ajax).

It'd be great if the Django client had a simple client.ajax request in addition to its client.post and client.get requests, but alas it doesn't.  The tests can still be done however by changing the HTTP_X_REQUESTED_WITH header when sending  your test requests.

>>> from django.test.client import Client
>>> client = Client()

>>> client.post("http://example.com", {"foo": "bar"}, **{'HTTP_X_REQUESTED_WITH': 'XMLHttpRequest'})

From there its fairly straight forward to create your own .ajax wrapper if you'd like.

Now you have no excuse for not having complete tests for all of your XMLHttpRequests :).
