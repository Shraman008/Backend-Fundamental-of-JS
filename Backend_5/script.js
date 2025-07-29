// FORM HANDLING
// Handle backend process of forms and making sure the data coming from ny frontend library, framework, templating engines, we still handle it at the  backend process
// Session Cookie -> hum log kuch bhi data frontend par browser par rakh sakte hai and jab bhi aap kuchh bhi request backend par karoge wo frontend par saved data automatically backend par chala jayega
// Humne to bheja tha plain text par server ko mila blob which is not directly readable. Ab is cheez ko handle karna padega ki hum blob ko wapas readable kar sake 


const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.send('Hello World, this is shraman');
})

app.get('/profile', function(req, res){
  res.send('Kaisa hai bhaii');
})

app.get('/about', function(req, res){
  res.send('About page hai ye');
})

app.listen(3000);