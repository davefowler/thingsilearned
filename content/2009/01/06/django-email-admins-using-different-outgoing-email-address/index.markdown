---
comments: true
date: '2009-01-06'
slug: django-email-admins-using-different-outgoing-email-address
title: Django Email Admins Using Different Outgoing Email Address
wordpress_id: 211
post_tag:
- email
tags:
- django
- python
---

[Socialbrowse](http://socialbrowse.com) is deployed on [EC2](http://aws.amazon.com/ec2/) using the [Django](http://djangoproject.com) framework.  Unfortunately, as we learned the hard way, EC2 has some serious issues with both reverseDNS and email blocklists and is a horrible place to send emails from.  For this reason we use [AuthSMTP](http://www.authsmtp.com/), an email application that will has a much larger success rate for outgoing emails.  The one catch to this is that you pay (a small but significant amount) for each email that is sent out.  

About 5 days into using AuthSMTP our database went down for 2 minutes and I received 4k error messages from Django!  This ate up my monthly AuthSMTP emails instantly and needless to say I was upset :).

To prevent this from happening again, I configured the error messages to be sent using a different email address.  Error emails always go to my gmail account, which does not block EC2 emails so I don't have to worry about the success rate and there for there is no need to go through AuthSMTP.

Here's the snippet to change your outgoing error message email address.  



	
  1. Change the mail_admins function in django/core/mail.py to the following.  

	
  2. Edit the EMAIL_HOST_USER and EMAIL_HOST_PASSWORD variables to be your email and password. 

	
  3. Make sure [Postfix](http://www.postfix.org/) or some other application that comes with [sendmail](http://www.sendmail.org/) is installed

	
  4. Restart your django server


After those steps your error messages will come directly from your server and not go through AuthSMTP as your regular outgoing emails do.  

    
    def mail_admins(subject, message, fail_silently=False):
        """Sends a message to the admins, as defined by the ADMINS setting."""
        EMAIL_HOST = 'smtp.gmail.com' #'127.0.0.1' 
        EMAIL_HOST_USER = 'YOUREMAIL@YOURDOMAIN.COM'
        EMAIL_HOST_PASSWORD = 'YOURPASSWORD'
        EMAIL_PORT = 587
        EMAIL_USE_TLS = True
    
        connection = SMTPConnection(EMAIL_HOST, EMAIL_PORT, EMAIL_HOST_USER, EMAIL_HOST_PASSWORD, EMAIL_USE_TLS)
        EmailMessage(settings.EMAIL_SUBJECT_PREFIX + subject, message,
                     settings.SERVER_EMAIL, [a[1] for a in settings.ADMINS], connection=connection,
                     ).send(fail_silently=fail_silently)
    
     
