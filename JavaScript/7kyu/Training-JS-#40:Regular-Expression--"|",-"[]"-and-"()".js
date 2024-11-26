// This time you need to write a regular expression that matches all URL contained in the string.

// The rules:

// URL start with http:// or https://
// URL end with .com or .net
// The middle part of URL can use letters, numbers and dots
// Need to ignore case, and a string may contain multiple URLs
// Your regular expression name should be regex and your result should be a string array.


var regex= /https?:\/\/[a-z0-9.]+\.(?:com|net)/gi