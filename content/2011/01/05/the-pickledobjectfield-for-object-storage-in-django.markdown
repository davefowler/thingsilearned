---
date: !!timestamp '2011-01-05 19:47:50'
layout: post
slug: the-pickledobjectfield-for-object-storage-in-django
status: publish
title: The PickledObjectField for Object Storage in Django
wordpress_id: '747'
categories:
- databases
- django
---

I've become a really big fan of the PickledObjectField provided by this [django snippet](http://djangosnippets.org/snippets/1694/).  So much so that I use it in almost every django model I create these days.

Basically it serves as the best way to do an object store in your database and perfectly translates in any JSON conversion.  Its an essential tool in any javascript heavy application.

In my current project, Chart.io we're aspiring to be [google analytics for your database](http://chart.io).  We're basically creating a system that will handle all of your dashboard/analytics needs in the easiest way possible.  This means that we have a LOT of different charts and more in the making.

Its not feasible to put all of those extra parameters that each chart type requires into the model as different columns.  We would end up with an incredible mess in short order.  So I instead create a PickledObjectField called 'params' in the model.

[sourcecode language="python"]
class Chart(models.Model):
    ...
    params = PickledObjectField(default={'just': 'some', 'default': 'parameters'} )
[/sourcecode]

The params variable then takes most any dictionary of parameters and automatically converts it to string to be stored in the database.

The following command for example will save a params value of something like "KGRwMQpWa2V......" to the database, but you can still use it just like any dict object.

[sourcecode language="python"]
>>> chart = Chart(params = {"type": "scatter", "dot_size":, 4, "color_list": ["red", "green", "orange"], });
>>> chart.save()
>>> chart.parms
{"type": "scatter", "dot_size":, 4, "color_list": ["red", "green", "orange"], }
#You can also treat the field just like a dict
>>> chart.parms['awesome'] = 'for sure'

[/sourcecode]

Its worth noting that there is a similar snippet to this that uses JSON object to string conversion instead of Pickle.  I find that when using Javascript so heavily its easier to use some other string conversion so as not to get confused and I've been really impressed with the way that this particular snippet works.

Its incredibly rare that a django snippet becomes such a major tool.  With the exception of my [subdomain middleware](http://thingsilearned.com/2009/01/05/using-subdomains-in-django/), I can't think of another snippet that I use more regularly which leads me to think that it should really get moved into the core fields that django provides.  Object store is essential element to many applications and the PickledObjectField is the best way to do it.
