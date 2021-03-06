# MemerizeJS

![alt tag](https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/37772666_10218182045928811_8849477069105528832_n.jpg?_nc_cat=0&oh=c33fd6c7d46aa4d35e7fbead38bacee2&oe=5BD8A3CA "memetag")




A Javascript library which allows to use the "meme" tag inside your project.

Thanks to the giphy API you can finally use this fantastic HTML tag inside your project.

#How to setup


-1 - Create an account on Giphy API to get your API Key

1 - Include in your HTML files the library "memerize.js"

2 - Create an HTML tag with the keyword "meme" and put inside keywords giving life to your memes, like this:
```
<meme>Pepe the frog</meme>
```
3 - Under your body tag, add this portion of JS with your Giphy API key:

```
$( document ).ready(function() {

    memerize("YOUR_API_KEY_HERE");
  });
```

4 - Test the page and see memes appears on your web page

5- Have fun

## Options

Available options:

```
<meme data-limit="1" data-offset="0" data-rating="G" data-lang="en">Pepe the frog</meme>
```

Default values:
- **limit**: 1;
- **offset**: 0;
- **rating**: "R";
- **lang**: "en";

For more info: [GIPHY API Docs](https://developers.giphy.com/docs/)