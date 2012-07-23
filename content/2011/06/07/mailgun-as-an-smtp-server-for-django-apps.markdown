---
date: '2011-06-07 02:50:06'
layout: post
slug: mailgun-as-an-smtp-server-for-django-apps
status: publish
title: MailGun as an SMTP Server for Django Apps
wordpress_id: '758'
---

Gmail is a frequently used SMTP host for Django apps.  Its free and relatively simple to setup which is ideal for small apps.  There are a few significant downfalls. First, its limited to 500 emails a day with no option to upgrade.  Second, it limits and even re-writes all outgoing emails to the username of the connector.

For example if you're trying to send an email from welcome@yourhost.com or support@yourhost.com you're out of luck because all of those emails will actually get sent at dave@yourhost.com or whatever email account you have configured. I'm sure this saves millions of people from millions of spam but it adds a bit of annoyance to developer's lives.

The recently launched [MailGun](http://mailgun.net)offers a great solution.  Its free for up to 200 emails per day and super cheap and dramatically scalable after that.  It also works as a drop in replacement for whatever service you were using for your django smtp server.  Changing will take you less time than reading this article.


### The Steps:





	
  1. [Sign up for MailGun](http://mailgun.net/)

	
  2. Go to the [control panel](https://mailgun.net/cp) and click on the YOURHOST.mailgun.org server created for you.
[![](http://thingsilearned.files.wordpress.com/2011/06/screen-shot-2011-06-07-at-1-32-03-am.png)](http://thingsilearned.files.wordpress.com/2011/06/screen-shot-2011-06-07-at-1-32-03-am.png)

	
  3. In the upper right you will find your "SMTP Authentication" credentials for this server.
[![](http://thingsilearned.files.wordpress.com/2011/06/screen-shot-2011-06-07-at-1-33-38-am2.png)](http://thingsilearned.files.wordpress.com/2011/06/screen-shot-2011-06-07-at-1-33-38-am2.png)

	
  4. Open the settings.py in your django app and configure your email with the given credentials.  It should look something like this.
[sourcecode language="python"]
EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp.mailgun.org'
EMAIL_HOST_USER = 'postmaster@YOURHOST.mailgun.org'
EMAIL_HOST_PASSWORD = 'SOMEPASSWORD'
EMAIL_PORT = 587
[/sourcecode]

	
  5. Test it out!./manage.py shell
[sourcecode language="python"]
>>> from django.core.mail import send_mail
>>> send_mail('MailGun works great!', 'It really really does.', 'tester@YOURHOST.com', ['YOUREMAIL@gmail.com'], fail_silently=False)
[/sourcecode]



