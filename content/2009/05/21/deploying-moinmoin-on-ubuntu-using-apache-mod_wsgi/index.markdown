---
comments: true
date: '2009-05-21'
slug: deploying-moinmoin-on-ubuntu-using-apache-mod_wsgi
title: Deploying MoinMoin on Ubuntu using Apache mod_wsgi
wordpress_id: 405
post_tag:
- deployment
- python
- wiki
tags:
- deployment
- python
- wiki
---

I just went through a somewhat lengthy setup process to deploy a moinmoin wiki on Ubuntu.  There's a lot of documentation on it which actually makes it take a bit longer than I'm used to for getting something running on Ubuntu.  I thought I'd share my streamlined notes for this common deployment scenario.

The first step is configuration.  Greater detail on all of this can be found [here](https://help.ubuntu.com/community/HelpOnInstalling/WikiInstanceCreation).


    wget http://static.moinmo.in/files/moin-1.8.3.tar.gz
    tar -xzvf moin-1.8.3.tar.gz
    cd moin-1.8.3

    python setup.py install --prefix='/usr/local' --record=install.log

    #Setup the variables.
    export PREFIX=/usr/local
    export SHARE=$PREFIX/share/moin
    export WIKILOCATION=<strong>/path/to/wikis</strong>
    export INSTANCE=<strong>your_wiki_name</strong>
    export GROUP=www-data
    export USER=www-data

    # Now it copies the default data
    cd $WIKILOCATION
    mkdir -P $INSTANCE                   # make a directory for this instance
    cp -R $SHARE/data $INSTANCE       # copy template data directory
    cp -R $SHARE/underlay $INSTANCE   # copy underlay data directory
    cp $SHARE/config/wikiconfig.py $INSTANCE   # copy wiki configuration sample file

    # Set the permissions
    chown -R $USER.$GROUP $INSTANCE   # check that USER and GROUP are correct
    chmod -R ug+rwX $INSTANCE         # USER.GROUP may read and write
    chmod -R o-rwx $INSTANCE          # everybody else is rejected

    # Copy over the server config files
    cp/usr/local/share/moin/server/*.wsgi $INSTANCE
    cp/usr/local/share/moin/server/*.cgi $INSTANCE

    # If you want everyone (not just admins) to be able to edit it you need to run this command
    # chmod -R a+rwX $INSTANCE





Now, if you haven't already install apache and mod_wsgi


    sudo apt-get install apache2 libapache2-mod-wsgi


Next edit your apache httpd.conf file ( /etc/apache2/httpd.conf ) and add the following to the end.  More help on this step can be found [here](https://help.ubuntu.com/community/HelpOnInstalling/ApacheWithModWSGI).


    LoadModule wsgi_module modules/mod_wsgi.so  # Loads mod_wsgi

    <VirtualHost *>
    ServerAdmin <strong>youremail@example.com</strong>

    ServerName <strong>wiki.example.com</strong>

    Alias /moin_static183/ "/usr/local/share/moin/htdocs/"
    #ScriptAlias /developers "<strong>/path/to/wikis/your_wiki_name</strong>/moin.cgi"

    WSGIScriptAlias    / <strong>/path/to/wikis/your_wiki_name</strong>/moin.wsgi
    WSGIDaemonProcess developerwiki user=www-data group=www-data home=/root process=5 threads=10 maximum-requests=1000 umask=0007

    WSGIProcessGroup developerwiki

    </VirtualHost>

And finally you need to add your wiki directory to the python path.

    echo "<strong>/path/to/wikis/your_wiki_name/</strong>" > /usr/lib/python2.5/site-packages/wikis.pth

Restart Apache and you should be set up.
