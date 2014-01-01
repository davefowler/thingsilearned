---
comments: true
date: '2009-03-18'
slug: how-to-port-many-django-utilities-backwards
title: How to Port Many Django Utilities Backwards
wordpress_id: 300
---

[Socialbrowse](http://socialbrowse.com) is currently running on [Django](http://djangoproject.com) trunk revision 7859 which is sometime before Django released version 1.0 along with several backwards incompatibility changes.  We use several common Django utilities which often don't work at the moment with our version of Django.  We could port our whole app forward, which we'll of course eventually do but there are currently a few headaches in that that we're putting off.

Usually its simple enough to look through the svn log and find out where the Django utils we're using made compatibility upgrades to fit with Django 1.0 and just revert to using that instance.  On occasion though we've needed the latest functionality of the utility.  For example most recently we wanted the latest version of [django-compress](http://code.google.com/p/django-compress/) for its incorporation with [YUI Compressor](http://developer.yahoo.com/yui/compressor/).

Loading the latest will give an error claiming its unable to import Signal.  From what I've seen this is the most common backwards incompatibility in Django modules and can be easily fixed.  Here are the indepth details on the [Django Signals backwards incompatibility](http://code.djangoproject.com/wiki/BackwardsIncompatibleChanges#Signalrefactoring).

I've ported two different utilities back to pre-django using this method.  In the utility there is often a signals.py file.  Take a look at the file pre and post Django 1.0 support.  In django-compress the files look like this.

{% syntax python %}
_signals.py revision 74:_
css_filtered = object()
js_filtered = object()

_signals.py revision 98 (HEAD):_
from django.dispatch import Signal
css_filtered = Signal()
js_filtered = Signal()
{% endsyntax %}

In my experience you can simply revert back to the old signals.py and the import error will go away.

    svn up -r <pre django1.0 revision> signals.py

If you were using the signals for this utility, well they may very well be messed up.  You may also have other backwards incompatibility issues but so far this is the only one I've run into.  All other issues should be listed in the page on [Backwards Incompatibility Changes](http://code.djangoproject.com/wiki/BackwardsIncompatibleChanges).
