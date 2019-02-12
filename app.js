var shortUrl = require('node-url-shortener');
shortUrl.short('https://www.quora.com/What-does-a-good-junior-backend-developer-portfolio-website-look-like', function(err, url){
    console.log(url);
});