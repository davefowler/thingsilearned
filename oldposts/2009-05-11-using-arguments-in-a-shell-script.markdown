---
date: '2009-05-11 23:44:09'
layout: post
slug: using-arguments-in-a-shell-script
status: publish
title: Using Arguments in a Shell Script
wordpress_id: '398'
categories:
- django
- python
---

Within 5 seconds of looking at a shell script I'm usually opening a new file in my text editor to re-write the ugliness into something that makes more visual sense.  To me at least python is highly preferable.

Still I use shell scripts all the time to batch a group of commonly used sequential executions, or to abbreviate a commonly used but lengthy commands.

Today I looked into going one step further into the complexities of shell scripts, probably my last step for a while, and discovered how to handle arguments.

The inspiring work case was in using Django manager to run tests for the different apps

    
    ./manage.py test --settings test_settings <optional app names>


The following script will check if an argument exists and if it does it will use the argument in the tests command.

    
    if [ -n "$1" ]
    # Test whether command-line argument is present (non-empty).
    then
     ./manage.py test --settings test_settings $1
    else
     ./manage.py test --settings test_settings
    fi


Notice that $1 refers to the first argument ($0 refers to the name of the executable and $5 refers to the 5th argument).

Save the file as 'test' and then modify it as an executable

    
    chmod +x test


And now I can run the tests on their own

    
    ./test


or with an argument app

    
    ./test auth_user




##### Expanding


Note that the above example has a limitation of only dealing with the first argument and seems a bit redundant.  The entire script can indeed be shortened to

    
    ./manage.py test --settings test_settings $@


As $@ represents all arguments after $0.
