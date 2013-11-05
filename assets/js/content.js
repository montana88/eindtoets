// we maken hier onze eigen werkruimte om ervoor te zorgen 
// dat onze code niet zal conflecteren met andere codes.
// is een opject of een leeg object.
var CONTENT = CONTENT || {};

// om conflicten te voorkomen
// self invoking anonymous function, Het belangrijkste hieraan is dat je Local scopes kan maken.
// wanneer de functie runt wanneer het defined is dat je hierbij geen naam hoeft te geven aan deze functie
(function () {
	var loader = document.getElementsByClassName('bubblingG')[0];
	var elem = document.getElementById('mySwipe');
<<<<<<< HEAD
	var refresh = document.getElementById('refresh');
=======
>>>>>>> f4ead63501b9daca0ab37e652d5fbbc1084f9f6e
	// Data objecten en zetten hier onze content in. voordeel aan OOP is de referentie naar real-life. lamp: property, height width; method, licht een actie.
	CONTENT.game = {
	    init: function () {
	        score1 = parseInt(document.getElementById('addScore1').innerHTML);
	        score2 = parseInt(document.getElementById('addScore2').innerHTML);
	        document.getElementById('plus1').onclick = function () {
	            score1++;
	            document.getElementById('addScore1').innerHTML = score1;
	            console.log(score1);
	        };
	        document.getElementById('min1').onclick = function () {
	            score1--;
	            document.getElementById('addScore1').innerHTML = score1;
	            console.log(score1);
	        };
	        document.getElementById('plus2').onclick = function () {
	            score2++;
	            document.getElementById('addScore2').innerHTML = score2;
	            console.log(score2);
	        };
	        document.getElementById('min2').onclick = function () {
	            score2--;
	            document.getElementById('addScore2').innerHTML = score2;
	            console.log(score2);
	        };
	    },

	    getScore1: function() {
	        return score1;
	    },

	    getScore2: function() {
	        return score2;
	    },

	    score: function () {
	        score1 = 0;
	        score2 = 0;
	        document.getElementById('addScore1').innerHTML = score1;
	        document.getElementById('addScore2').innerHTML = score2;
	        CONTENT.game.init();
	    }
	};
	
	// best practice
	// geeft je een doorstart
	// literal vs constructor = literal is gelijk al een variabelen
	// constructor = officieel een function, function kan inladen in var
	CONTENT.controller = {
		init: function(){        
            document.getElementById('finalScore').onclick = function () {
                var type = 'POST',
                url = 'https://api.leaguevine.com/v1/game_scores/',
                postData = JSON.stringify({
                	game_id: CONTENT.page.score.id,
					team_1_score: CONTENT.game.getScore1(),
					team_2_score: CONTENT.game.getScore2(),
					is_final: 'True'
                
            });

                // Create request
                var xhr = new XMLHttpRequest();

                // Open request
                xhr.open(type,url,true);

                // Set request headers
                xhr.setRequestHeader('Content-type','application/json');
                xhr.setRequestHeader('Authorization','bearer 82996312dc');

                // Send request (with data as a json string)
                xhr.send(postData);
                
                console.log("verzonden");
            };
<<<<<<< HEAD
            CONTENT.router.init();
            CONTENT.gestures.init(); 
            
            document.getElementById('refresh').onclick = function () {
	            window.location.reload();
	        };
=======
            CONTENT.router.init();  
            window.mySwipe = Swipe(elem, {
  // startSlide: 4,
  // auto: 3000,
  // continuous: true,
  // disableScroll: true,
  // stopPropagation: true,
  // callback: function(index, element) {},
  // transitionEnd: function(index, element) {}
});
>>>>>>> f4ead63501b9daca0ab37e652d5fbbc1084f9f6e
        }

	};

	CONTENT.gestures = {
        init: function(){
            $$('section.swipeLeft').swipeLeft(function() {
                    window.location.href = "#/ranking"; 
            });
            
            $$('section.swipeRight').swipeRight(function() {
                    window.location.href = "#/schedule"; 
            });
        }
    }

	// Router
	CONTENT.router = {
		init: function () {
			console.log("router.init ", CONTENT.router);
			//checked je URL.
	  		routie({
			    '/game/:game_id': function(game_id) {
			    	//alert('game id =' + id);
			    	if(true){
					loader.style.display = 'block';
				}
			    	CONTENT.page.game(game_id);
				},
			    '/schedule': function() {
			    	CONTENT.page.schedule();
			    },

			    '/Ranking': function() {
			    	CONTENT.page.Ranking();
			    },
			    
			    '*': function() {
			    	CONTENT.page.schedule();
			    }
			});
		},

		change: function (pageName) {
			//qwery selector engine, selecteerd elementen uit DOM
            var route = pageName,
                sections = qwery('section[data-route]'),
                section = qwery('[data-route=' + route + ']')[0];  

            // Zorgt ervoor dat je de actieve sectie kan zien, de overige niet
            if (section) {
            	for (var i=0; i < sections.length; i++){
            		sections[i].classList.remove('active');
            	}
            $$('[data-route='+pageName+']')[0].classList.add('active');
            }

            // Default route
            if (!route) {
            	sections[0].classList.add('active');
            }
		}
	};

	//Directives
	CONTENT.directives = {
		schedule: {
			objects: {
				track_score: {
					href: function() {
						return '#/game/' + this.game_id;
					}
				}
			}
		}
	}

	// Pages
	// qwery selecteert een element uit DOM
	// Transparency.render(juisteElement, data);
	CONTENT.page = {
		game: function (game_id) {
			//Show the loader
<<<<<<< HEAD
			//geef class mee ipv style
        	loader.className = "bubblingG";
=======
        	loader.style.display = 'block';
>>>>>>> f4ead63501b9daca0ab37e652d5fbbc1084f9f6e

			schemaData: $$.json('https://api.leaguevine.com/v1/games/'+game_id+'/?access_token=ab86750dfd',{}, function(data){
				CONTENT.page.score = data;
				Transparency.render(qwery('[data-route=game/'+game_id)[0], CONTENT.page.score);
				console.log(CONTENT.page.score);
				
				//Hide the loader
<<<<<<< HEAD
            	loader.className = "hideloader";
=======
            	loader.style.display = 'none';
>>>>>>> f4ead63501b9daca0ab37e652d5fbbc1084f9f6e
			});
			CONTENT.game.score();
			CONTENT.router.change('game');
		},
		schedule: function () {
			//Show the loader
<<<<<<< HEAD
        	loader.className = "bubblingG";
=======
        	loader.style.display = 'block';
>>>>>>> f4ead63501b9daca0ab37e652d5fbbc1084f9f6e
			schemaData: $$.json('https://api.leaguevine.com/v1/game_scores/?tournament_id=19389&access_token=4675792b56',{}, function(data){
				CONTENT.page.pools = data;
				Transparency.render(qwery('[data-route=schedule]')[0], CONTENT.page.pools, CONTENT.directives.schedule);
				
				console.log(CONTENT.page.pools);

				//Hide the loader
<<<<<<< HEAD
            	loader.className = "hideloader";
=======
            	loader.style.display = 'none';
>>>>>>> f4ead63501b9daca0ab37e652d5fbbc1084f9f6e
			});
			
			CONTENT.router.change('schedule');
		},
        
		Ranking: function () {
			//Show the loader
<<<<<<< HEAD
        	loader.className = "bubblingG";
=======
        	loader.style.display = 'block';
>>>>>>> f4ead63501b9daca0ab37e652d5fbbc1084f9f6e

			poolData: $$.json('https://api.leaguevine.com/v1/pools/?tournament_id=19389&access_token=e6c8dbf9f2',{}, function(data){
				CONTENT.page.ranks = data;
				Transparency.render(qwery('[data-route=Ranking]')[0], CONTENT.page.ranks);
				console.log(CONTENT.page.ranks);

				//Hide the loader
<<<<<<< HEAD
            	loader.className = "hideloader";
=======
            	loader.style.display = 'none';
>>>>>>> f4ead63501b9daca0ab37e652d5fbbc1084f9f6e
			});
			CONTENT.router.change('Ranking');
		}
	}
	
	domready(function () {
		// Kickstart application
		CONTENT.controller.init();
	});
	
})();

//object literal configureren object of globale eenlingen
//constructor maakt functie creeren van meerdere instanties
//closure iets van een inner function een outer function kan benaderen
//When we tell a program what order to do things in, we're using something called control flow. You already know about 'if' statements, but in this course, we'll expand our knowledge!
	
	