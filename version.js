// THE one place the build number lives. index.html loads this file (title-screen label) and sw.js importScripts() it
// (cache name 'empire-v' + EMPIRE_VERSION), so the label and the cache can never drift. Bump only this line.
var EMPIRE_VERSION = '14';
