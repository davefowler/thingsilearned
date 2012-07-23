---
date: '2009-03-13 01:33:07'
layout: post
slug: adding-custom-commands-to-managepy-and-django-adminpy
status: publish
title: Adding Custom Commands to manage.py and django-admin.py
wordpress_id: '294'
categories:
- django
- python
- thingsilearned
---

In Django it is very straight forward to add extra commands to the manage.py and django-admin.py scripts.  The Django Documentation describes the [process](http://docs.djangoproject.com/en/dev/howto/custom-management-commands/) but gives no examples.  I like examples so I'm writing this for others.

In the past I'd add these  to make stand alone scripts that used the Django libraries.

from django.conf import settings
from django.core.management import setup_environ
setup_environ( settings )

The method works well but I find it cleaner to add commands to the manage and django-admin scripts instead of having several stand alone scripts.  The desired effect is to be able to run

**$ ./manage.py your_command_name**

instead of python your_command_name.py.  Big difference?  No...  But I think on a large project it adds organization and its some sort of a standard in the event that others will be using your code.

In the app which the command is used for make the following directory structure:

    
        management/
            __init__.py
            commands/
                __init__.py
                your_command_name.py


Then in your file (your_command_name.py) paste the following code, puting the functions to run in the handle_noargs function.

from django.core.management.base import NoArgsCommand

class Command(NoArgsCommand):
help = "Describe the Command Here"
def handle_noargs(self, **options):
< your code here >

That's it!  You can also do some more complicated functionality with command options.  Take a look at commands listed in /django/core/management/commands for examples there.
