---
date: '2009-01-06 03:21:25'
layout: post
slug: wildcard-subdomains-with-webpagedomainnamescomgodaddycom
status: publish
title: Wildcard Subdomains with WebpageDomainNames.com/Godaddy.com
wordpress_id: '217'
---

The domain manager for WebpageDomainNames has a confusing way of doing wildcard subdomains.  Googling for this there seemed to be a lot of confusion and I eventually found the answer.  

Usually you make a CNAME record of * to represent the wildcard subdomain.  Instead, with Godaddy make an A record with the name * and set the IP to your server.  Strange way of doing it, but it seems to work.
