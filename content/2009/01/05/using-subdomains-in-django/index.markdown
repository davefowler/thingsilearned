---
comments: true
date: '2009-01-05'
slug: using-subdomains-in-django
title: Using Subdomains in Django
wordpress_id: 195
tags:
- django
- python
---

Django's url dispatcher doesn't handle subdomains.  If you want/need to use subdomains you've got to use session middleware.  If you haven't written any middleware yet don't freak out, is easy.

There's some [easy documentation](http://docs.djangoproject.com/en/dev/topics/http/middleware/?from=olddocs) for extra information but for our needs all you need to do is make a Class with a function called process_request.  This function gets called on any request before it is processed by the url dispatcher.  It needs to return either nothing (None) or an HttpResponse object.  Here's the code used to get the subdomain.


    
    
    class SubdomainMiddleware:
        def process_request(self, request):
            """Parse out the subdomain from the request"""
            request.subdomain = None
            host = request.META.get('HTTP_HOST', '')
            host_s = host.replace('www.', '').split('.')
            if len(host_s) > 2:
                request.subdomain = ''.join(host_s[:-2])
    




Now your request object has a 'subdomain' attribute you can use in your views.  Alternatively you could return an HttpResponse of any sort including redirects directly from the process_request function.  Make sure to add this class to your middlware classes:



    
    
    MIDDLEWARE_CLASSES = (
        'path.to.middlware.SubdomainMiddleware', )
    




Using subdomains on localhost can be a pain.  To do so sudo edit your /etc/hosts file and add the following lines replacing test.com with whatever you want to call your test url and the subdomains with your site's subdomains.



    
    127.0.0.1     test.com
    127.0.0.1     subdomain1.test.com
    127.0.0.1     subdomain2.test.com




This locally alters the DNS for test.com so you can use it as your localhost testing url.  Unfortunately the hosts file has no *.test.com functionality to handle redirecting all subdomains so this method only works if you have a known, finite set of subdomains.  If that's not the case you're going to have to use a development server or set up a proxy. 










**Update:** I also forgot to mention that if you want your login sessions to work across all subdomains you can change the SESSION_COOKIE_DOMAIN variable as follows:









    
    
    SESSION_COOKIE_DOMAIN = '.mysite.com'
    
