//used to keep track of which answer the user clicked on
let clickedOption1 = false;
let clickedOption2 = false;
let clickedOption3 = false;
let clickedOption4 = false;

function Result(gameName){
  var url = document.querySelector("a");
  url.getAttribute("href");
  document.getElementById("option1").style.display = "none";
  document.getElementById("option2").style.display = "none";
  document.getElementById("option3").style.display = "none";
  document.getElementById("option4").style.display = "none";
  document.getElementById("question").innerHTML = "You should play '"+ gameName +"'!"
  document.getElementById("trailerlink").style.visibility = "visible";
  document.getElementById("descr").style.visibility = "visible";
  
  document.getElementById("gameimage").style.visibility = "visible";
  
  switch(gameName){
    case "Onmyoji Arena":
      //change the description of the game
      document.getElementById("descr").innerHTML = "• Has voiced characters <br> • Good for beginners - characters have different playing difficulty <br> • Purchasable skins <br>• Fair 5v5 battles <br> • Has 2 modes - Casual and Ranked";
    break;
    case "Path to Nowhere":
      //change the url
         url.setAttribute("href","https://www.youtube.com/watch?v=Pb66V7NHHzo");
      //change the image 
      document.getElementById("gameimage").src = "https://static.aisnogames.com/aisnoweb/aisno/wqmten/material/-ruvfgoh/1.jpg";
      //change the description
      document.getElementById("descr").innerHTML = "• Beautiful art style <br> • Good gacha rates - it's easy to gain new characters <br> • Fully voiced story <br>• Customizable homescreen";
      break;
    case "Wordscapes":
      //change the url
         url.setAttribute("href","https://www.youtube.com/watch?v=gMEpreV-aGk");
      //change the image 
      document.getElementById("gameimage").src = "https://www.applovin.com/wp-content/uploads/2021/05/1440x810_What-is-Wordscape.jpg";
      //change the description
      document.getElementById("descr").innerHTML = "• Relaxing word puzzles <br> • Nice scenic backgrounds for each level <br> • Play at your own pace";
      break;
    case "Dragon Raja":
      //change the url
         url.setAttribute("href","https://www.youtube.com/watch?v=ircFlN6qsvE");
      //change the image 
      document.getElementById("gameimage").src = "https://img.tapimg.net/market/images/613b44be5ba5bca661ba75ebfec864fc.jpg?imageView2/0/w/720/h/405/q/80/format/jpg/interlace/1/ignore-error/1";
      //change the description
      document.getElementById("descr").innerHTML = "• MMORPG/Open world game <br> • Numerous hours of gameplay - side quests can be triggered <br> • Quests are used to advance the storyline <br> • High quality graphics <br> • Avatar is fully customizable";
      break;
    case "Cat & Soup":
      //change the url
         url.setAttribute("href","https://www.youtube.com/watch?v=1Oj1GjVxAQg");
      //change the image 
      document.getElementById("gameimage").src = "https://www.levelwinner.com/wp-content/uploads/2021/11/cats-and-soup-guide-1000x563-1.jpg";
      //change the description
      document.getElementById("descr").innerHTML = "• Relaxing cat game <br> • Easy to play tycoon <br> • Cute artwork <br> • Everything is customizable";
      break;
    case "Project Sekai":
      //change the url
         url.setAttribute("href","https://www.youtube.com/watch?v=P8m0NCsK-dQ");
      //change the image 
      document.getElementById("gameimage").src = "https://blog.nanao.moe/content/images/2020/09/Screenshot_20200929-221659_----.png";
      //change the description
      document.getElementById("descr").innerHTML = "• Rhythm game with 5 levels of difficulty <br> • Good for beginners <br> • Collectable cards - has 2 artworks per card <br> • Can add friends to play together";
      break;
    case "Phigros":
      //change the url
         url.setAttribute("href","https://www.youtube.com/watch?v=xatdrceuOlc");
      //change the image 
      document.getElementById("gameimage").src = "https://images.igdb.com/igdb/image/upload/t_1080p/sce1xj.png";
      //change the description
      document.getElementById("descr").innerHTML = "• Unique rhythm game <br> • 4 different types of notes <br> • Beautiful illustrations for each track - which are collectable as wallpapers <br> • Difficult for beginners";
      break;
    case "PUBG":
      //change the url
         url.setAttribute("href","https://www.youtube.com/watch?v=uCd6tbUAy6o");
      //change the image 
      document.getElementById("gameimage").src = "https://wstatic-prod.pubg.com/web/live/static/og/img-og-pubg.jpg";
      //change the description
      document.getElementById("descr").innerHTML = "• Third person view <br> • Outfits are easy to obtain <br> • Fun to play with friends or alone <br> • Many types of vehicles to drive in <br> • Screen layout is customizable";
      break;
    case "Call of Duty":
      //change the url
         url.setAttribute("href","https://www.youtube.com/watch?v=n4b8FRUDNZo");
      //change the image 
      document.getElementById("gameimage").src = "https://dotesports.com/wp-content/uploads/2020/04/02142718/GarenaWorld.png";
      //change the description
      document.getElementById("descr").innerHTML = "• First person view <br> • Weekly tournaments - special gun skins, emotes and credits can be obtained <br> • Smooth gameplay <br> • Guilds - weekly clan competitions <br> • Large variety of maps";
      break;
  }
}

function SetClickedOption1(){
  clickedOption1 = true;
}

function SetClickedOption2(){
  clickedOption2 = true;
}

function SetClickedOption3(){
  clickedOption3 = true;
}

function SetClickedOption4(){
  clickedOption4 = true;
  console.log("true");
}

function UsersChoice(){
  
  //choosing "yes" first
  if (document.getElementById("option1").innerHTML == "Yes" && clickedOption1 == true){
    document.getElementById("question").innerHTML = "Out of these genre's, which one would you rather play?";
    
    //make the other 2 buttons visible
    document.getElementById("option3").style.visibility = "visible";
    document.getElementById("option4").style.visibility = "visible";
    //change the text of the "yes" and "no" buttons
    document.getElementById("option1").innerHTML = "Rhythm/Music game";
    document.getElementById("option2").innerHTML = "FPS"
    //resets it back to default
   clickedOption1 = false;
  } else if (document.getElementById("option3").innerHTML == "MOBA" && clickedOption3 == true){ 
    Result("Onmyoji Arena");
    clickedOption3 = false;
  } else if (document.getElementById("option4").innerHTML == "Tower Defence" && clickedOption4 == true){ 
    Result("Path to Nowhere");
    clickedOption4 = false;
  } else if (document.getElementById("option1").innerHTML == "Rhythm/Music game" && clickedOption1 == true){ 
    document.getElementById("option3").style.visibility = "hidden";
    document.getElementById("option4").style.visibility = "hidden";
    document.getElementById("question").innerHTML = "Are you a beginner or advanced player?";
    document.getElementById("option1").innerHTML = "Beginner";
    document.getElementById("option2").innerHTML = "Advanced"
    clickedOption1 = false;
  } else if (document.getElementById("option1").innerHTML == "Beginner" && clickedOption1 == true){ 
    Result("Project Sekai");
    clickedOption1 = false; 
  } else if (document.getElementById("option2").innerHTML == "Advanced" && clickedOption2 == true){ 
    Result("Phigros");
    clickedOption2 = false; 
  } else if (document.getElementById("option2").innerHTML == "FPS" && clickedOption2 == true){ 
    document.getElementById("option3").style.visibility = "hidden";
    document.getElementById("option4").style.visibility = "hidden";
    document.getElementById("question").innerHTML = "Do you like battle royale or team deathmatch (TDM) more?";
    document.getElementById("option1").innerHTML = "Battle Royale";
    document.getElementById("option2").innerHTML = "TDM"
    clickedOption2 = false; 
  } else if (document.getElementById("option1").innerHTML == "Battle Royale" && clickedOption1 == true){ 
    Result("PUBG");
    clickedOption1 = false; 
  } else if (document.getElementById("option2").innerHTML == "TDM" && clickedOption2 == true){ 
    Result("Call of Duty");
    clickedOption2 = false; 
  }
  
  //choosing "no" first 
  if (document.getElementById("option2").innerHTML == "No" && clickedOption2 == true){
    document.getElementById("question").innerHTML = "Are you interested in playing word games?";
    document.getElementById("option1").innerHTML = "Interested";
    document.getElementById("option2").innerHTML = "Not interested";
    clickedOption2 = false;
  } else if (document.getElementById("option1").innerHTML == "Interested" && clickedOption1 == true){
    Result("Wordscapes");
    clickedOption1 = false;
  } else if (document.getElementById("option2").innerHTML == "Not interested" && clickedOption2 == true) {
    document.getElementById("question").innerHTML = "Which type of game would you rather play?";
    document.getElementById("option1").innerHTML = "A multiplayer game with a storyline";
    document.getElementById("option2").innerHTML = "A single player tycoon game";
    clickedOption2 = false;
  } else if (document.getElementById("option1").innerHTML == "A multiplayer game with a storyline" && clickedOption1 == true) {
    Result("Dragon Raja");
    clickedOption1 = false;
  } else if (document.getElementById("option2").innerHTML == "A single player tycoon game" && clickedOption2 == true) {
    Result("Cat & Soup");
    clickedOption2 = false;
  }
  
}