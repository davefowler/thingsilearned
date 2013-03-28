---
comments: true
date: '2009-05-10'
slug: drop-database-command-for-django-manager
title: '''drop'' Database Command for Django Manager'
wordpress_id: 392
post_tag:
- database
- django
- python
tags:
- databases
- django
- python
---

The Django manager is a really handy tool.  I wrote earlier about making your own custom managers and there is a lot of other great documentation on it.

Django comes with a bunch of helpful management commands like 'flush', 'syncdb', 'test', etc.

I've created a generic 'drop' command as I felt it was missing.  I often found myself going into mysql to drop and re-create a database.  This is needed whenever you significantly change your models and need to start over.  The 'drop' command does that automatically using the database information in your settings file.

The following code is from ['drop.py'](http://dpaste.com/hold/42832/)

    
    
    from django.conf import settingsfrom django.conf import settings
    
    from django.core.management.base import NoArgsCommand
    
    class Command(NoArgsCommand):
     help = "Drop and re-create the database"
     def handle_noargs(self, **options):
    
     import MySQLdb
    
     print "Connecting..."
     db=MySQLdb.connect(host=settings.DATABASE_HOST or "localhost" ,user=settings.DATABASE_USER,
     passwd=settings.DATABASE_PASSWORD, port=int(settings.DATABASE_PORT or 3306))
    
     cursor = db.cursor()
     print "Dropping database %s" % settings.DATABASE_NAME
     cursor.execute("drop database %s; create database %s;" % (settings.DATABASE_NAME, settings.DATABASE_NAME))
     print "Dropped"
    


To install simply place this code in a file called 'drop.py' and add it to a management comands folder.  If you don't have a management command folder yet you simply need to create the following file structure in one of your app directories (MY-APP-DIR).

    
    MY-APP-DIR/
      management/
        __init__.py
        commands/
          __init__.py
    <strong>      drop.py
    
    </strong>


Now, whenever you' need to whipe your database and start fresh you can simply run:

    
    ./manage.py drop
