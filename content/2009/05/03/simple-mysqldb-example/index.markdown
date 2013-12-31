---
comments: true
date: '2009-05-03'
slug: simple-mysqldb-example
title: Simple MySQLdb Example
wordpress_id: 371
tags:
- example
- mysqldb
- python
- sql
---

MySQLdb is a python interface to MySQL.  I wrote the following simple script for some database tests and thought it might be handy to others looking for tutorials or examples.

It simply connects to MySQL, drops and creates a database called 'testdb', makes a table called 'waves' with columns 'sin', 'cos', 'tan', and 'date' and fills the table with a thousand data points of the trig functions performed on the date in 5 minute intervals leading up to the current date.

The code and comments I think are fairly straight forward, so I will just paste and link to the [text version](http://dpaste.com/hold/40714/).


{% syntax python %}
DATABASE_HOST = "localhost"
DATABASE_USER = "root"
DATABASE_NAME = "testdb"
DATABASE_PASSWD = "YOUR PASSWORD HERE"
DATABASE_PORT = 3306

import MySQLdb

# Connect to the Database
db=MySQLdb.connect(host=DATABASE_HOST,user=DATABASE_USER,
 passwd=DATABASE_PASSWD, port=int(DATABASE_PORT))

# Make the database cursor
cursor = db.cursor()

# Drop and create the database
cursor.execute("drop database %s; create database %s;" % (DATABASE_NAME, DATABASE_NAME))

# Re connect to database using db=DATABASE_NAME
db=MySQLdb.connect(host=DATABASE_HOST,user=DATABASE_USER,
 passwd=DATABASE_PASSWD, db=DATABASE_NAME, port=int(DATABASE_PORT))
cursor = db.cursor()

# Create the table for the wave data
from math import sin, cos, tan
cursor.execute("""CREATE TABLE waves (
id INT NOT NULL AUTO_INCREMENT,
PRIMARY KEY(id),
sin FLOAT,
cos FLOAT,
tan FLOAT,
date INT);
""")

# Insert the sine wave data
from datetime import datetime

def STAMP( dt ):
  """ turns a python datetime object into a unix time stamp (seconds) """
  import time
  return int(time.mktime( dt.timetuple() ))

now = STAMP( datetime.now() )
five_mins = 60*5

sql = "INSERT INTO waves (sin, cos, tan, date) VALUES (%s, %s, %s, %s);"

# Insert the data into the table
for i in range(1000):
  s = now - i*five_mins
  cursor.execute(sql % ( sin(s), cos(s), tan(s), s ))
{% endsyntax %}



I really need to get some [syntax highlighting](http://dpaste.com/hold/40714/)...  More documentation on MySQLdb can be found [here](http://mysql-python.sourceforge.net/MySQLdb.html).  If you have any questions leave them in the comments.
