Type 'node app.js' to start express listening on port 3000.

(Powershell command prompt)Type '$env:DEBUG='*
';node app.js' to start express listening on port 3000 with verbose debug

(windows command prompt)Type 'set DEBUG=* & node app.js' to start express listening on port 3000 with verbose debug on this app AND ALL THE LIBRARIES IT REFERENCES THAT USE DEBUG (i.e. EXPRESS)

(windows command prompt)Type 'set DEBUG='app' & node app.js' to start express listening on port 3000 with verbose debug ONLY FOR THE CODE IN THIS API



express
chalk
