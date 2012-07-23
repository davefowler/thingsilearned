---
date: '2009-05-06 18:26:18'
layout: post
slug: some-notes-and-requests-on-django-signals
status: publish
title: Some Notes and Requests on Django Signals
wordpress_id: '380'
categories:
- django
- python
---

![](http://www.swanniganandwright.com/3.0/test/phone-wires.jpg)I've finally gotten around to playing with the [Django Signals](http://docs.djangoproject.com/en/dev/topics/signals/).  I've been pleased so far but I feel its currently missing a few key features.

Some background: Django Signals allows developers to more easily break up their code into separate components which allows much greater freedom and organization.  Often as a web application expands you add more an more functionality to each of the events.  When a new user is created for example the program might need to spin off a few emails, maybe search for whether any of their friends are the site, store an extra statistic, etc...

When adding or removing these features developers would previously have to paste more code into their create_new_user function.  Now however developers can creaet a Django Signal in creaet_new_user function and then build other functions (sending email, storing stats, etc) as seperate listeners for that signal.

It makes everything more modular.  Lots of other languages have this.  If you're a hardware developer its similar to interupts, if you're a javascript developer its similar to events.

So reading about them I've been excited about the possibilities and have been looking forward to putting them to use.  I've got to say its incredibly simple, works great and I'm going to start using them all the time.

That said there is a lot of growth yet to be done in this area.  With that in mind I'm going to make two requests fully aware of the fact that most people will say "add it yourself" or "just use the patch" or "roll your own".  Some of which I will ofcourse do, still I continue to blog...


#### Request: ManyToMany Signals


A great feature is that django automatically has signals set up for many of the common tasks.  There are signals fired when objects are saved and deleted and when requests are made and finished.  Currently there is no signals for ManyToMany relationships.  There is a [ticket](http://code.djangoproject.com/ticket/5390) and a [patch](http://code.djangoproject.com/attachment/ticket/5390/complete-patch.diff) on the issue but it has not been released in the trunk of yet.

A simple example with [Socialbrowse](http://socialbrowse.com) is in following other people in the network.  In Django following someone is easy:

    
    userprofile.following.add( other_userprofile )


Man it'd be great if there was a signal on that!  Unfortunately I had to make a wrapper funtion in UserProfile.

    
    import django.dispatch
    followed_signal = django.dispatch.Signal(providing_args=["followed", ])
    def follow(self, dude_to_follow):
      """ follow the input <dude_to_follow> """
      self.following.add( dude_to_follow )
    
      # Send out a django signal
      followed_signal.send(sender = self, followed = dude_to_follow)


I know, its not a big deal, I'm a big baby, but that stuff does add up eventually.  Hopefully [Ticket #5390](http://code.djangoproject.com/ticket/5390) will be merged shortly.  The comments seem to suggest that its ready.


#### Request: Asynchronous Signals


It seems that I'm [not the only one to assume](http://www.mercurytide.co.uk/news/article/django-signals/) that Django Signals created Asynchronous tasks.  If you come from a Javascript or Hardware world you would assume asycronous signals, as both JS events and hardware interrupts are asyncronous.

Unfortunately Django Signals are not.  That's great in many cases, but I think it should support both. Sending emails for example tends to take a sigificant amount of time, mostly spent waiting around.  It would be great if the request could continue on and return, independant of the email task, instead of having to wait for it to complete.

The result would be a much faster experience for the user, and I think Django Signals is the place to put that type of functionality in.   The ideal interface would be specifying an extra input 'async' when registering a listener.  If true the process calling the signal would not wait for the listener to finish.

Continuing with the follow example above the code would look something like this:

    
    def email_follow_notification(sender, **kwargs):
    ...    # do some emailing here
    followed_signal.connect(email_follow_notification, async = True)


The email_follow_notification function would then be run in a seperate process, allowing everything else to continue on without waiting.

Those are my notes for now.  I'm sure I'll have more and maybe some contributions in the form of real code.
