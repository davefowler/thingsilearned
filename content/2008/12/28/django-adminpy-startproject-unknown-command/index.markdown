---
comments: true
date: '2008-12-28'
slug: django-adminpy-startproject-unknown-command
title: Django-admin.py startproject > Unknown Command
wordpress_id: 145
tags:
- django
- python
---

This is hardly worth a post but I'd found nothing on google for the fix and so I'm documenting it here for others.  In Django v 1.0 django-admin.py has smartly been altered to behave the same as ./manage.py.  It seems that this has effected the startproject command in the event that your DJANGO_SETTINGS_MODULE environment variable is already set.  If it is you'll get something like this:


> $ django-admin.py startproject myproject
_Unknown command: 'startproject'
Type 'django-admin.py help' for usage._


_There's an easy fix.  Just blank out your DJANGO_SETTINGS_MODULE variable and startproject will then be recognized._


> 

> 
> $ export DJANGO_SETTINGS_MODULE=""
> 
> 

> 
> $ django-admin.py startproject myproject
