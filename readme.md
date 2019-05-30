Type 'node app.js' to start express listening on port 3000.

(Powershell command prompt)Type '$env:DEBUG='*
';node app.js' to start express listening on port 3000 with verbose debug

(windows command prompt)Type 'set DEBUG=* & node app.js' to start express listening on port 3000 with verbose debug on this app AND ALL THE LIBRARIES IT REFERENCES THAT USE DEBUG (i.e. EXPRESS)

(windows command prompt)Type 'set DEBUG='app' & node app.js' to start express listening on port 3000 with verbose debug ONLY FOR THE CODE IN THIS API

Install mongodb with defaults
Start mongo in a console
Create a database in your mongodb instance called nodeApi
Insert some rows at the commandline like this:
db.todos.insertOne({name: 'fry a duck'})
