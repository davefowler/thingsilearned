---
comments: true
date: '2012-11-22'
slug: javascript-chess-game
title: Chess in Javascript
wordpress_id: 777
---

The Chartio team has grown now and several months ago I had to stop coding completely and focus on CEO tasks. I've missed programming a lot, and tonight, the night before Thanksgiving and one of the first breaks I've gotten, I created a little javascript chess game and AI.

If you're interested you can [play the game here](http://htmlpreview.github.com/?https://raw.github.com/davefowler/chess/master/index.html) or checkout the [source code here](https://github.com/davefowler/chess).
[![](http://thingsilearned.files.wordpress.com/2012/11/screen-shot-2012-11-22-at-4-15-41-am.png)](http://thingsilearned.files.wordpress.com/2012/11/screen-shot-2012-11-22-at-4-15-41-am.png)

I utilized [jhlywa's helpful chess.js library](https://github.com/jhlywa/chess.js) for some of the move intelligence and game status storage. It relies on the [Forsyth-Edwards Notation (FEN)](Forsyth-Edwards Notation) and I found it quite simple to use. It has an odd implementation of an object constructor so extending the class was difficult, but typically only one instance of the chess object is used anyway so I just kept it simple and appended a few functions on to the instance for now.

The chess.js files come with an ASCII output but no html interface. It was fairly quick to use the [chess unicode characters](http://en.wikipedia.org/wiki/Chess_symbols_in_Unicode) and the drag and drop from [jQuery-UI](http://jqueryui.com/droppable/) to make up a classic looking board and drag controls. Most of that code can be found in [game.js](https://github.com/davefowler/chess/blob/master/game.js)

Lastly, it wasn't fun at all to play myself so I made my first attempt in many years at writing an AI. I used an alpha beta search which is effectively a minmax algorithm with a few shortcuts. In theory the AI should work pretty well. In practice however its quite dumb. There are two main reasons




	
    * game status and potential moves are stored as strings

	
    * I have no openers stored in memory

	
    * the board score is only based on the pieces that remain



To fix those I would have to write my own Bit based chart engine.  Right now the string based chart.js library can only search a depth of 2 before the wait time starts to get really annoying.  That's pretty bad. I read that typically a depth of 6 or 7 is desired for intelligent mid-game play. Many AI implementations also have some openers stored in memory. Mine does not and so it pretty much sabotages its game right away by continually choosing its first move (pushing the first pawn) until the game starts to get more interesting.

Anyway, it was fun to get back into coding with a small project.  Especially one that I can play and share with others.  The code is free as in beer, but if you do anything with it please let me know as I'd love to check it out!
