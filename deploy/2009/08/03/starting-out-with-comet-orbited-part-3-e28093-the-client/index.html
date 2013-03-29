<!doctype html>
<html lang="en" class="no-js">
<head>
    <meta charset="">
  <meta http-equiv="X-UA-Compatible" content="">

  <title>Starting Out With Comet (Orbited) Part 3 - The Client</title>
  <meta name="description" content="">
  <meta name="author" content="Dave Fowler">

  <!--  Mobile viewport optimized: j.mp/bplateviewport -->
  <meta name="viewport" content="">

    <link rel="shortcut icon" href="/favicon.ico">
  
    <link rel="stylesheet" href="/media/bootstrap/css/bootstrap.css">
  <link rel="stylesheet" href="/media/bootstrap/css/bootstrap-responsive.css">
  <style>
    .header h3 { color: #ccc; }
    .hero-unit { background-image:url('/media/images/hero.jpg'); }
  </style>
  
    
  </head>
<body id="index">
    <div class="container">
            <div id="main" role="main">
          <header class="banner clearfix">
          <div class='header'>
                <div class="row">
                  <div class="span5">
                    <h3>ThingsILearned <small>By Dave Fowler</small></h3>                  </div>
                  <div class="span3">
                                                            <nav >
    <ul class='breadcrumb'>
                <li>
            <a title="Home Page"
                class="button white"
                href="/">
                Home
            </a>
                              <span class="divider">/</span>        </li>        <li>
            <a title="Things I Learned"
                class="button white"
                href="/things">
                Things
            </a>
                              <span class="divider">/</span>        </li>        <li>
            <a title="About"
                class="button white"
                href="/about">
                About
            </a>
                                      </li>    </ul>
</nav>
                                        </ul>
                  </div>
                </div>
              </div>          </header>
          <section class="content">
          <div class="row">
     <div class="span8">
         <article class="thing">
         <div class='page-header'>
               <h1>Starting Out With Comet (Orbited) Part 3 - The Client</h1>
         </div>
         <p>Comet implementations require both server and client side components.  In <a href="http://thingsilearned.com/2009/06/25/starting-out-with-comet-orbited-part-2-installation-and-stomp/">Part 2</a> of this series we installed and configured the server side component and then used the example STOMP Test client to test it out and get a feel for what was going on.</p>
<p>In this part of the series we'll be covering the client side to make our custom interface to the comet server.  To demonstrate we'll go through the steps in creating an app I call EZChat which is basically a bare bones comet chat client.  The interface will allow you to choose a name and submit messages that will be broadcast to everyone viewing the page in real time.</p>
<p>For it to work you will have to have the configuration of <a href="http://thingsilearned.com/2009/06/25/starting-out-with-comet-orbited-part-2-installation-and-stomp/">Part 2</a> setup and your Orbited server running.  For reference I learned most of the client side code in this example by playing with the source of the example <a href="http://localhost:9000/static/demos/stomp/">STOMP Test client</a>. I recommend taking a look at that source if you need more advanced options or another example.</p>
<h2>Includes</h2>
<p>At the top of the <head> you first need to include the libraries for the Orbited (/static/Orbited.js) and STOMP (/static/protocols/stomp/stomp.js) client-side implementations.</p>
<pre><code>&lt;script&gt;document.domain=document.domain&lt;/script&gt;
 &lt;script src="http://localhost:9000/static/Orbited.js"&gt;&lt;/script&gt;
 &lt;script&gt;
 Orbited.settings.port = 9000;
 TCPSocket = Orbited.TCPSocket;
 &lt;/script&gt;
 &lt;script src="http://localhost:9000/static/protocols/stomp/stomp.js"&gt;&lt;/script&gt;

 &lt;script src="http://www.json.org/json2.js"&gt;&lt;/script&gt;
</code></pre>
<p>In between the scripts we've set up a TCPScocket.  It must be don between the two script includes because the STOMP library needs the socket setup for its execution.  We've also specified the Orbited port which is necessary especially if you change the port on which the orbited and stomp javascript files are hosted on (they can both be hosted on port 80 along with your other scripts).</p>
<p>Lastly, we've also included a popular <a href="http://www.json.org/js.html">JSON library</a>.  Typically I use jquery-json but I've kept this tutorial free of javascript frameworks so as not to add unneeded complexity.  If you'd like you can of course switch to whatever JSON library you're used to; just replace the JSON.stringify and JSON.parse functions with your equivalents.</p>
<h2>STOMP Setup</h2>
<p>Because we're dealing with the setup we'll skip to the bottom of the page and add the following script just before the end tag of the body (</body>).</p>
<pre><code>&lt;script type="text/javascript"&gt;
(function() { // set up stomp client.

stomp = new STOMPClient();

 stomp.onconnectedframe = function() {  // Run on initial connection to STOMP (comet) server
 stomp.ready = true;
 // subscribe to channel CHANNEL = "/ezchat/"
 var CHANNEL = '/ezchat/'
 stomp.subscribe(CHANNEL);
 };

 stomp.onmessageframe = function(frame) {  // Executed when a messge is received
 my_receive( JSON.parse(frame.body) );
 };

 // Everything is setup. Start the connection!
stomp.connect(document.domain, 61613); //, 'guest', 'guest');
})();
&lt;/script&gt;
</code></pre>
<p>My apologies as always for the crappiness of the wordpress syntax parser.   Lets walk through what's happening.</p>
<p>At the top, we initialize a new STOMPClient object.  The StompClient has the following hooks you can override to trigger your own events.</p>
<p><strong>onopen</strong> - Called when the Transport is opened
<strong>onclose</strong> - Called when the Transport has closed
<strong>onerror</strong> - Called when the Stomp Client has errored
<strong>onerrorframe</strong> - Called when there is an error in the message received
<strong>onconnectedframe</strong> - Called when a the client is fully set up for sending/receiving
<strong>onmessageframe</strong> - Called when a message is received</p>
<p>The STOMP object also has these functions for connecting and resetting the connections.</p>
<p><strong>reset</strong> - Resets the STOMP connection
<strong>connect</strong> - Connects to the STOMP server
<strong>send</strong> - Sends the object in the first argument to the channel specified by the second argument</p>
<p>In our simple example only the onconnectedframe and onmessage frames need to be overwritten.</p>
<p>The onconnectedframe function is called when the STOMP server has been connected to and everything is setup for sending and receiving messages.  Inside this function we simply need to subscribe/listen to the CHANNEL we've setup for our chat.  For the example I've chosen the channel '/ezchat/'.  Once subscribed our STOMP client will receive any messages sent to that channel in real time.  You can subscribe to multiple channels if you'd like, and you can make clients with different channels if you'd like to have different chat rooms.  But for this example we'll just stick with the hard coded '/ezchat/' channel.</p>
<p>The onmesageframe function is called when a message has been received.  It is passed a frame object with the following structure</p>
<p><strong>frame</strong></p>
<ul>
<li>
<p>body: "{"name":"Dave","message":"awesome this is working"}"</p>
</li>
<li>
<p>headers: Object</p>
<ul>
<li>
<p>content-encoding: "utf-8"</p>
</li>
<li>
<p>content-length: "51"</p>
</li>
<li>
<p>content-type: "text/plain"</p>
</li>
<li>
<p>destination: "/ezchat/"</p>
</li>
<li>
<p>message-id: "/ezchat/_3"</p>
</li>
</ul>
</li>
<li>
<p>type: "MESSAGE"</p>
</li>
</ul>
<p>where the body holds the information that has been sent.  The STOMP server and client add extra "type" and "headers" objects to communicate between each other.  The extra information can be very useful for more complicated applications but for our simple example we're only interested in the frame "body".</p>
<p>So you see that the onmessageframe is simply parsing the json object in frame.body of every received message and passing it to my_receive, a function we will soon create.</p>
<h2>The Content</h2>
<p>For EZChat we need a form where users can specify a name and type messages to send.  We also need an area to put the messages.  Plop this HTML in at the top of the <body> to handle all of that.</p>
<pre><code>&lt;h2&gt;EZChat - Example Comet Client!&lt;/h2&gt;
Everyone viewing this page will see the messsages you submit instantly.
&lt;form action="#" id="message_form"&gt;
 Name:
 &lt;input type="text" name="chat_name" id="chat_name"&gt;&lt;/input&gt;
 Message:
 &lt;textarea rows="4" cols="40" name="message" id="message"&gt;&lt;/textarea&gt;
 &lt;input type="submit" name="Send" onclick="return my_send(); return false"&gt;&lt;/input&gt;
&lt;/form&gt;
&lt;div id="messages"&gt;&lt;/div&gt;
</code></pre>
<p>There are a few things to notice here.  First, the important elements in the form have ids 'chat_name' and 'message' and the area that will be containing all the received messages is called 'messages'.  The names don't matter except that we'll use them in the functions we create later.</p>
<p>Second, the onclick event of the submit button is overridden with instead calling the my_send function.  We'll make this function in the next step.</p>
<h2>The Functions</h2>
<p>Lastly we need to make the custom my_send and my_receive functions that get called to send and receive messages.  Insert these functions into the head after the includes.</p>
<h3>my_send</h3>
<p>The my_send function will get the values from the 'chat_name' and 'message' form elements, combine them in an object, convert the object to json, and then sends it to the '/ezchat/' channel.  The sending is handled using the stomp.send command which takes as input the object to send and second, the channel to send it to.</p>
<pre><code>var CHANNEL = '/ezchat/';
function my_send() {

// Get the values to send from the form
 var name = document.getElementById('chat_name').value;
 var message = document.getElementById('message').value;

 var msg = {'name': name, 'message': message};

 var json_msg = JSON.stringify(msg);
 stomp.send(json_msg, CHANNEL)
 return false;
 }
</code></pre>
<h3>my_receive</h3>
<p>As discussed earlier the my_receive function gets the JSON parsed version of whatever was sent in 'frame.body'.  In the case of our app its always an object of the format</p>
<p>msg = {'name': <some name>, 'message': <some message>}</p>
<p>The my_receive function simply takes this object and converts it into a prettier HTML format and appends it to the top of the message list we created in the HTML.</p>
<pre><code>function my_receive( msg ) {
 console.log('received message', msg);
 // append the &lt;msg&gt; to the top of the list of messages.
 var messages_el = document.getElementById('messages');
 var new_message = "
&lt;div&gt;&lt;strong&gt;" + msg['name'] + ":&lt;/strong&gt; " + msg['message'] + "&lt;/div&gt;
";
 messages_el.innerHTML = new_message + messages_el.innerHTML;
 }
</code></pre>
<p>That's it for the code.  Scroll to the bottom of the page for the full version of the source.</p>
<h2>Results</h2>
<p>Ensure that your Orbited server is running as described in Part 2 of the series.  Then load up the page we've made in two or more separate windows.  Choose a different name for each window and start sending each other messages.  You'll notice that both windows will receive the submitted messages almost instantaneously!  The beauty of Comet!</p>
<p><img alt="ezchat" src="http://thingsilearned.files.wordpress.com/2009/08/ezchat1.png" />If you open your <a href="http://localhost:9000/static/demos/stomp/">STOMP Test Client</a> and subscribe to the '/ezchat/' channel you'll see a more raw input on what's actually being received by the STOMP clients as you chat.</p>
<p><img alt="ezchatstomp" src="http://thingsilearned.files.wordpress.com/2009/08/ezchatstomp.png" />You can see how the STOMP Test client is incredibly handy for debugging.</p>
<p>That's it for this part of the Tutorial!  There are still parts to come including writing a data handler on the server side and hopefully a much requested post on Django integration.</p>
<h2>Full Source</h2>
<p>For your convenience here's the full index.html file for this example.</p>
<pre><code> &lt;html&gt;

&lt;head&gt;
 &lt;script&gt;document.domain=document.domain&lt;/script&gt;
 &lt;script src="http://localhost:9000/static/Orbited.js"&gt;&lt;/script&gt;
 &lt;script&gt;
 Orbited.settings.port = 9000;
 TCPSocket = Orbited.TCPSocket;
 &lt;/script&gt;
 &lt;script src="http://localhost:9000/static/protocols/stomp/stomp.js"&gt;&lt;/script&gt;

 &lt;script src="http://www.json.org/json2.js"&gt;&lt;/script&gt;

 &lt;script type="text/javascript"&gt;
 // These are our custom functions for sending and receiving STOMP messages.
 // They will be sent in the format msg = {'name': somename, 'message': somemessage}

 var CHANNEL = '/ezchat/';

 function my_receive( msg ) {
 console.log('received message', msg);
 // append the &lt;msg&gt; to the top of the list of messages.
 var messages_el = document.getElementById('messages');
 var new_message = "
&lt;div&gt;&lt;strong&gt;" + msg['name'] + ":&lt;/strong&gt; " + msg['message'] + "&lt;/div&gt;
";
 messages_el.innerHTML = new_message + messages_el.innerHTML;
 }
 function my_send() {
 // Get the values to send from the form

 var name = document.getElementById('chat_name').value;
 var message = document.getElementById('message').value;

 var msg = {'name': name, 'message': message};
 console.log(msg);

 var json_msg = JSON.stringify(msg);
 console.log(json_msg);
 stomp.send(json_msg, CHANNEL)
 return false;
 }       
 &lt;/script&gt;

&lt;/head&gt;

&lt;body&gt;
&lt;h2&gt;EZChat - Example Comet Client!&lt;/h2&gt;
&lt;div&gt;Everyone viewing this page will see the messsages you submit instantly.&lt;/div&gt;
&lt;form action="#" id="message_form"&gt;
 Name:
 &lt;input type="text" name="chat_name" id="chat_name"&gt;&lt;/input&gt;
 Message:
 &lt;textarea rows="4" cols="40" name="message" id="message"&gt;&lt;/textarea&gt;
 &lt;input type="submit" name="Send" onclick="return my_send(); return false"&gt;&lt;/input&gt;
&lt;/form&gt;
&lt;div id="messages"&gt;&lt;/div&gt;
&lt;script type="text/javascript"&gt;
(function() { // set up stomp client.
 stomp = new STOMPClient();
 stomp.onconnectedframe = function() {  // Run on initial connection to STOMP (comet) server
 stomp.ready = true;
 // subscribe to channel CHANNEL = "/ezchat/"
 stomp.subscribe(CHANNEL);          
 };

 stomp.onmessageframe = function(frame) {  // Executed when a messge is received
 console.log('frame is', frame);
 my_receive( JSON.parse(frame.body) );
 };

 // Everything is setup. Start the connection!
 stomp.connect(document.domain, 61613); //, 'guest', 'guest');
})();
&lt;/script&gt;

&lt;/body&gt;

&lt;/html&gt;
</code></pre>
<p>As usual, if there are corrections or questions please be sure to leave them in the comments.  And remember to <a href="http://thingsilearned.com/feed/">subscribe</a> to catch the rest of the series.</p>         </article>
     </div>
</div>
          </section>
      </div>
      </div> <!--! end of #container -->
    
    <script type="text/javascript" src="/media/bootstrap/js/bootstrap.js"></script>
  
        </body>
</html>