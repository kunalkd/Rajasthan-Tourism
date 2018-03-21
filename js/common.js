var id=document.getElementById("1").id;

   
    var section = document.querySelector('section');
    var requestURL = 'https://teamincredible.000webhostapp.com/StateAtGlance.php?id=' + id;
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'text';
    request.send();
    request.onload = function() {
      var superHeroesText = request.response;
      var superHeroes = JSON.parse(superHeroesText);
 
      showHeroes(superHeroes);
    }
	
    function showHeroes(jsonObj) {
      var result = jsonObj['result'];

        var myArticle = document.createElement('article');
    
        var myPara1 = document.createElement('p');
       
       
       
    
        myPara1.textContent = 'State desc: ' + result[0].s_d;
     
        
        

        myArticle.appendChild(myPara1);

       
        section.appendChild(myArticle);
      }
      
    