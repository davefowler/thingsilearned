---
comments: true
date: '2009-03-25'
slug: ec2-elastic-ips-ssh-error
title: EC2 Elastic IPs SSH Error
wordpress_id: 307
---

EC2 has a great feature in allowing you to associate an Elastic IP with different server instances.  This basically means that if you switch servers for whatever reason you can simply tell the old IP (that your domain is pointed to) to now refer to the new server.  This saves the need to change your DNS records and wait a few hours for it to propogate around the web.

One somewhat annoying thing about the Elastic IP feature is that it also changes the access url and IP for the server.  It will kill your ssh session and you'll have to ssh in again using the new IP address.  Not a huge deal but for a while I was confused by the following error:

    
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
    Someone could be eavesdropping on you right now (man-in-the-middle attack)!
    It is also possible that the RSA host key has just been changed.
    The fingerprint for the RSA key sent by the remote host is
    xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx.
    Please contact your system administrator.
    Add correct host key in /Users/dave/.ssh/known_hosts to get rid of this message.
    Offending key in /Users/dave/.ssh/known_hosts:25
    RSA host key for xx.xxx.xxx.xxx has changed and you have requested strict checking.
    Host key verification failed.
    dave@~$ ssh -i ~/.ec2/id_rsa-your-name-keypair root@xx.xxx.xxx.xxx


I found the solution [here](http://developer.amazonwebservices.com/connect/thread.jspa;jsessionid=81CAD1F68BF6F5C626FC1AC429AF2C19?messageID=104781&#104781).  At first glance it looks like a problem with EC2 but what's actually happening is that your ssh client knows that that IP address usually points to a different server and is warning you that someone might be messing with you. You know they're not however so you can fix it by simply clearing or editing the file that keeps a record of your past sessions.  On mac and I think most linux machines the file is:  ~/.ssh/known_hosts
