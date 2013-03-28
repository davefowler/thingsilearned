---
comments: true
date: '2007-06-23'
slug: fixing-autocorrect-behavior-in-ms-word
title: Fixing Autocorrect Behavior in MS Word
wordpress_id: 57
tags:
- MS Word
- Visual Basic
---

I'd like to discuss using macros to overcome a big limitation with Word's Autocorrect feature: the expansion of single-character autocorrect entries in words with apostrophes before the last character.

Suppose the letter "t" is set to expand into the word "the." This will work as it should in most cases, except when typing words like "don't."

Normally, autocorrect would expand this into "don'the." The same problem happens if entries are defined for any of the letters occurring at the end of words like "he's," "I'm," "we'd," and so on.

Thankfully, there's a workaround:       the autoexec macro. Here's what a stripped down version of mine looks like:

Sub AutoOpen()

' Forces correct Autocorrect behavior
With AutoCorrect.Entries
.Add Name:="'s", Value:="'s"
.Add Name:="'m", Value:="'m"
.Add Name:="'d", Value:="'d"
.Add Name:="'t", Value:="'t"

.Add Name:="'s.", Value:="'s."
.Add Name:="'m.", Value:="'m."
.Add Name:="'d.", Value:="'d."
.Add Name:="'t.", Value:="'t."
End With

End Sub

Throw this into your vb module, restart word, and now autocorrect should behave correctly.


--Vu
