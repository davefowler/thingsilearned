---
comments: true
date: '2009-09-30'
slug: initialize-django-tests
title: Initialize Django Tests
wordpress_id: 605
post_tag:
- django
- python
tags:
- django
- python
---

I use a lot of [doctests](http://docs.djangoproject.com/en/dev/topics/testing/#writing-doctests) for apps that all need to work on a set of initialized data.  I was hoping that there would be some kind of hook in Django for this but there is not.

I could switch all of the doctests to unittests and use [fixtures](http://docs.djangoproject.com/en/dev/topics/testing/#fixture-loading) but that would be a lot of work and I prefer doctests.  I could also go through and paste some sort of init command at the beginning of each test that would ensure the data was loaded or do the loading but that's just plain bad practice.

I came up with a method of creating a 'testsetup' app that is always run before the other apps ensuring that whatever that app configures or loads into the database will be run first before any other apps preform their tests.  Here's how you can do it too.

First create a 'testsetup' app and edit its tests.py file

    
    ./manage.py startapp testsetup
    open testsetup/tests.py



    
    
    
    __test__ = {"initialize tests": """
    
    >>> your init code here
    
    """ }
    
    





In the test.py file you can load the database, prime the cache, or setup whatever else you need initialized.  Then add the 'testapp' as the first app to your settings.py


    
    
    
    INSTALLED_APPS = (
    
    'testsetup',
    
    ...
    
    )
    
    



Now whenever you run

    
    ./manage.py test


It will first run the tests for the 'testssetup' script and everything will be primed.  If that's the only kind of test you run then that's all you'll need.  You're done with this tutorial.

But if you run app level tests (ie. ./manage.py test someapp anotherapp ) then the above solution is not enough.  To ensure the testsuite is run before these apps we'll make our own TEST_RUNNER.  Create a file called 'testrunner.py' with the following source.


    
    
    
    def run_tests(test_labels, verbosity=1, interactive = True, extra_tests=[]):
    print "Given these test_labels", test_labels
    print "With these extra_test", extra_tests
    
    from django.test.simple import run_tests as django_run_tests
    if test_labels:
    # Make sure 'testsetup' is run first
    tl = ['testsetup']
    tl.extend(list(test_labels))
    test_labels = tuple(tl)
    print "Testing these apps:", test_labels
    
    django_run_tests(test_labels, verbosity, interactive, extra_tests)
    
    



and then in your settings.py file set the TEST_RUNNER variable


    
    
    
    TEST_RUNNER = 'testrunner.run_tests'
    
    



This script simply wraps the django test runner to ensure that the testsetup app is tested before any other apps are.  It basically makes the django test runner think that you're running ./manage.py test testsetup someapp when you actually run ./manage.py test someapp.


### Proposal


A note to the community: I think it'd be great if the Django settings.py included a TEST_INIT variable which allowed you to point to a function that would be executed immediately before the first test was run.  The hook would make the setup process for doctests much easier.
