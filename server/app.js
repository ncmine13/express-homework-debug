var express = require('express'),
    app     = express(),
    server  = require('http').createServer(app),
	path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//handlebars
app.get('/home', function(request, response){
	response.render('home')
})
app.get('/vacay', function(request, response){
	response.render('vacay', {name: "Naomi", loggedIn: true, perks: ["Spa day", "Unlimited compliments", "Smoked salmon"]})
})

//Is this what you meant by message text? Or console.log()?
app.get('/', function(request, response){
    // request object is from the client,
    // the response is what were sending back
response.send('Hey, you come here often?')
  })

//JSON
app.get('/bluebuddy', function(request, response){
	  response.send({id: 1, type: "FruitFriend", name: "Boris", weeksOld: 15});
  })
//JSON
app.get('/professor', function(request, response){
	  response.send({id: 2, type: "FruitFriend", name: "Professor Peach", weeksOld: 20});
  })

// first argument is the port number
server.listen(5000, function(){
  console.log('server is listening on port 5000')
})
