//MemerizeJS https://github.com/Istorn/MemerizeJS/blob/master/README.md

/*
  24/07/2018

  Made by Lorenzo Neri (Istorn)

  All this code is under the GNU Public License

  In other words: SPREAD MEMES ALL OVER YOUR HTML CODE AS MANY TIMES AS YOU WANT!!!!!!!!


  ... Just remember to mention me :P

*/
function memerize(APIKEY,counter){
    if (!(counter)){
      counter=0;
    }
    console.log("hi");
    var memes=document.getElementsByTagName("meme");


    if (counter===memes.length){
      return;
    }

      if (memes[counter].innerHTML.length<0){
        console.error("This meme tag hasn't an image. Please, provide it using keywords inside the tag.");

      }

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {


              var img=JSON.parse(this.response);

              if (img.data.length<=0){

                console.error("Not meme found for the keywords: "+memes[counter].innerHTML);
                memes[counter].innerHTML="Meme not found. Keyword: "+memes[counter].innerHTML;
              }
              else{
                var img=img["data"][0]["images"]["fixed_height_still"]["url"];
                memes[counter].innerHTML="<img src='"+img+"'/>";
              }


            counter++;
            if (counter<memes.length){
              memerize(APIKEY,counter);
            }
          }

        };
        xhttp.open("GET", "https://api.giphy.com/v1/gifs/search?api_key="+APIKEY+"&q="+memes[counter].innerHTML+
        "&limit=1&offset=0&rating=R&lang=en", true);
        xhttp.send();



      }
