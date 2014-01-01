---
comments: true
date: '2008-12-16'
slug: get-around-corporate-firewalls-make-your-own-proxy
title: 'Get Around Corporate Firewalls: Make Your Own Proxy'
wordpress_id: 86
post_tag:
- proxy
- twisted
tags:
- python
---

I've been doing some research into all kinds of proxies lately.  One of the simple examples I tried out has a great working use case.  It is especially useful if you are in the following situation.

1. Your work blocks/firewalls certain websites and this bugs you.
2. You have a server somewhere that you can load code onto.

That's everyone right?  I thought so.  You need to set up a twisted proxy on your server.  The benefits of running your own proxy are numerous: If only you are using it, your work will probably never block it, if they do its easy to change your IP, and you'll know that your browsing and login information are safe.  Its also pretty simple to set up; here's how.

**1. Load the Code**

Log into your server and make a file called proxy.py with the following code in it [[original source](http://wiki.python.org/moin/Twisted-Examples)]

{% syntax python %}
from twisted.web import proxy, http
from twisted.internet import reactor
from twisted.python import log
import sys
log.startLogging(sys.stdout)

class ProxyFactory(http.HTTPFactory):
  def __init__(self):
    http.HTTPFactory.__init__(self)
    self.protocol = proxy.Proxy

reactor.listenTCP(8080, ProxyFactory())
reactor.run()
{% endsyntax %}

Don't worry about what all that does.  I'm still working on the details myself.   It is important to know however that '8080' is the port number.  If you would like to use a different port for some reason change the number in the code.  Now you need to get the twisted library and run the script:

{% syntax sh %}
sudo easy_install twisted
python proxy.py &
{% endsyntax %}

The proxy is now running.  Make sure that script keeps running while testing the following or skip to part 3 where you set this script up to run in the background on load.

**2. Set Your Browser To Use the Proxy**

The next step is to setup your browser to use a proxy for its internet access.  In Firefox goto Preferences->Advanced->Network->Settings.  You should get something that looks similar to this:

![ff-advanced1](http://thingsilearned.files.wordpress.com/2008/12/ff-advanced1.png?w=300)

The Default Setting is "No proxy".  You want to hook it up to your proxy so instead select "Manual proxy configuration".  Now in the HTTP Proxy field paste the ip address of your server and in Port enter the port you set your script to use (default 8080).

Press OK and start surfing the web!  You should now be able to access all the sites that your server can access, instead of just the ones that your boss decides are okay.

If you use a browser other than Firefox here are external instructions for changing the proxy settings:  [Internet Explorer](http://support.microsoft.com/kb/135982), [Safari](http://www.lib.msu.edu/proxy/safari.html), [Opera ](http://www.opera.com/support/kb/view/332/)

**3. Configure the Proxy To Load on Boot**

As a last step you have to setup your proxy script to load when your computer starts up and to continue running.  I will show you how to do it in ubuntu.  If you're using another OS you'll have to figure it out yourself.  When you do please leave instructions in the comments!

{% syntax sh %}
sudo mv proxy.py /usr/local/bin
echo "python /usr/local/bin/proxy.py" > /etc/init.d/proxy
chmod +x /etc/init.d/proxy
update-rc.d proxy defaults
/etc/init.d/proxy &
{% endsyntax %}

That's it! Happy Browsing :)!
