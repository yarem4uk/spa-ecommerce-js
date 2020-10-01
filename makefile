install:
	npm install
server:
	nodemon --exec babel-node -- server.js
css:
	sass --watch sass:public/css
