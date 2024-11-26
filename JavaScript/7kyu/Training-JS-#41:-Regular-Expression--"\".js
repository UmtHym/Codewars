// You might have guessed the task. Yes, This time your task is to write a regular expressions matching all palindrome substring of a string.

// The rules:

// The string contains letters, numbers, underscores and spaces. space is the separator. the substring means the whole of a substring that separated by spaces. For example:
// "aaa bcccd" should match a substring "aaa" , 
// should not match "ccc", "ccc" is a part of substring "bcccd"
// Palindrome substring length range is 2-7. It means don't match the substring which length=1 or length>7.
// A string may contain multiple palindrome substring.
// You should not ignore case.
// Your regular expression name should be regex and your result should be a string array.


var regex=/\b(\w)(\w)?(\w)?\w?\3\2\1\b/g