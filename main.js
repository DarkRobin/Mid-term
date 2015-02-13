//Hard coded game objects to help populate list
        var gameLibary = [
                {title : 'Halo', console : 'Xbox', genre : 'Fps', format : 'DVD'},
                {title : 'Pokemon', console : 'Gameboy', genre : 'Rpg', format : 'CART'},
                {title : 'Dodonpachi', console : 'Saturn', genre : 'Shooter', format : 'CD'},
                {title : 'Phantasy star online', console : 'Dreamcast', genre : 'Action', format : 'GD-ROM'}
        ];


$(document).on('ready', function(){
        

    var $table = $('.content .game-info tbody');
    generateTable();

    $('.submit').on('click', function(e) {
        e.preventDefault();      // Keeps the button from refreshing the page.

        var game = {
            title: $('.game-title').val().charAt(0).toUpperCase() + $('.game-title').val().substring(1),
            console: $('.console').val().charAt(0).toUpperCase() + $('.console').val().substring(1),
            genre: $('.genre').val().charAt(0).toUpperCase() + $('.genre').val().substring(1),//stores values from input into game object.
            format: $('.format').val().toUpperCase() 
            };
        $('.game-title').val('');
        $('.console').val('');
        $('.genre').val('');
        $('.format').val('');


        gameLibary.unshift(game);
                         //on click pushes new game object to gameLibary array
        createRow(game) 
        // console.log("game data after submit: ", gameData);						//on click runs createRow function.
    });

    function generateTable() {
        for (var i = 0; i < gameLibary.length; i++) {
            var game = gameLibary[i];				//Loops through gameLibary and and 
            createRow(game);                        //creates new table row.
        };
    }

    function createRow(game) {                         //Generates new table row and inserts 
        var info = [                               //new game values and joins the array
            "<tr class='tablerows'>",
                "<td>",
                    game.title,
                "</td>",
                "<td>",               
                    game.console,
                "</td>",
                "<td>",
                    game.genre,
                "</td>",
                "<td>",
                    game.format,
                "</td>",
            "</tr>"
            ].join("");

        $table.append(info);                   //pushes var info to the table
    }

   
    $('.sortA-Z-title').on('mouseover', function(e){    //1            //When mouse is over up.png changes
    	var pointer = $(this).css('cursor' , 'pointer');      //curser to hand

    });

    $('.sortA-Z-title').on('click', function(e){
        	
        gameLibary.sort(function(a, b){
        	if (a.title > b.title){                  //Sorts the gameLibary by first letter of 
        			return 1;                            //title and emptys the table and fills in the 
        		}          	                                       //table with new asorted (A-Z) games
        	else if (a.title === b.title){
        			return 0;
        		}
        	else{
        			return -1;
        		}
        });
        $('tbody').empty();
        $('tbody').append(generateTable(gameLibary));
        // console.table(gameLibary);
    });


    $('.sortZ-A-title').on('mouseover', function(e){    //1.2           //When mouse is over down.png changes
        var pointer = $(this).css('cursor' , 'pointer');         //curser to hand

    });

    $('.sortZ-A-title').on('click', function(e){
        	
        gameLibary.sort(function(a, b){
        	if (a.title < b.title){                  //Sorts the 
        			return 1;
        		}
        	else if (a.title === b.title){
        			return 0;
        		}
        	else{
        			return -1;
        		}
     	});
        $('tbody').empty();
    	$('tbody').append(generateTable(gameLibary));
    });


    $('.sortA-Z-console').on('mouseover', function(e){       //2         //When mouse is over up.png changes
        var pointer = $(this).css('cursor' , 'pointer');      //curser to hand

    });

    $('.sortA-Z-console').on('click', function(e){
        	
        gameLibary.sort(function(a, b){
        	if (a.console > b.console){                  //Sorts the gameLibary by first letter of 
        			return 1;                            //title and emptys the table and fills in the 
        		}                                        //table with new asorted (A-Z) games
        	else if (a.console === b.console){
        			return 0;
        		}
        	else{
        			return -1;
        		}
        });
        $('tbody').empty();
        $('tbody').append(generateTable(gameLibary));
    });


    $('.sortZ-A-console').on('mouseover', function(e){      //2.2         //When mouse is over down.png changes
        var pointer = $(this).css('cursor' , 'pointer');         //curser to hand

    });
        		
    $('.sortZ-A-console').on('click', function(e){
        	
        gameLibary.sort(function(a, b){
        	if (a.console < b.console){                  //Sorts the 
        			return 1;
        		}
        	else if (a.console === b.console){
        			return 0;
        		}
        	else{
        			return -1;
        		}

        });
        $('tbody').empty();
        $('tbody').append(generateTable(gameLibary));
    });

        
    $('.sortA-Z-genre').on('mouseover', function(e){        //3        //When mouse is over up.png changes
        var pointer = $(this).css('cursor' , 'pointer');      //curser to hand

    });

    $('.sortA-Z-genre').on('click', function(e){
        	
        gameLibary.sort(function(a, b){
        	if (a.genre > b.genre){                  //Sorts the gameLibary by first letter of 
        			return 1;                            //title and emptys the table and fills in the 
        		}                                        //table with new asorted (A-Z) games
        	else if (a.genre === b.genre){
        			return 0;
        		}
        	else{
        			return -1;
        		}
        });
        $('tbody').empty();
        $('tbody').append(generateTable(gameLibary));
    });



    $('.sortZ-A-genre').on('mouseover', function(e){        //3.2       //When mouse is over down.png changes
        var pointer = $(this).css('cursor' , 'pointer');         //curser to hand
    });

    $('.sortZ-A-genre').on('click', function(e){    	
        gameLibary.sort(function(a, b){
        	if (a.genre < b.genre){                  //Sorts the 
        			return 1;
        		}
        	else if (a.genre === b.genre){
        			return 0;
        		}
        	else{
        			return -1;
        		}
        });
        $('tbody').empty();
        $('tbody').append(generateTable(gameLibary));
    });
        	

    $('.sortA-Z-format').on('mouseover', function(e){                //When mouse is over up.png changes
        var pointer = $(this).css('cursor' , 'pointer');      //curser to hand
    });

    $('.sortA-Z-format').on('click', function(e){
        gameLibary.sort(function(a, b){
        	if (a.format > b.format){                  //Sorts the gameLibary by first letter of 
        			return 1;                            //title and emptys the table and fills in the 
        		}                                        //table with new asorted (A-Z) games
        	else if (a.format === b.format){
        			return 0;
        		}
        	else{
        			return -1;
        		}
        });
        $('tbody').empty();
        $('tbody').append(generateTable(gameLibary));
    });


    $('.sortZ-A-format').on('mouseover', function(e){               //When mouse is over down.png changes
        var pointer = $(this).css('cursor' , 'pointer');         //curser to hand
    });

    $('.sortZ-A-format').on('click', function(e){
        gameLibary.sort(function(a, b){
        	if (a.format < b.format){                  //Sorts the 
        			return 1;
        		}
        	else if (a.format === b.format){
        			return 0;
        		}
        	else{
        			return -1;
        		}
        });
        $('tbody').empty();
        $('tbody').append(generateTable(gameLibary));
    });

    $('.pie-refresh').on('click', function(e){
    	e.preventDefault;
    	$('#pie-chart').remove();
    	$('.pie').append('<div id="pie-chart"></div>');
    	
    	var pluked = _.pluck(gameLibary, 'genre');

		var rpgs = _.filter(pluked, function(rpg){
				return rpg === "Rpg";
			});
		var action = _.filter(pluked, function(action){
				return action === "Action";
			});
		var adventure = _.filter(pluked, function(adventure){
				return adventure === "Adventure";
			});
		var fps = _.filter(pluked, function(fps){
				return fps === "Fps";
			});
		var racing = _.filter(pluked, function(racing){
				return racing === "Racing";
			});
		var actionAdventure = _.filter(pluked, function(actionAdventure){
				return actionAdventure === "Action adventure";
			});
		var sports = _.filter(pluked, function(sports){
				return sports === "Sports";
			});
		var horror = _.filter(pluked, function(horror){
				return horror === "Horror";
			});
		var stelth = _.filter(pluked, function(stelth){
				return stelth === "Stelth";
			});
		var mmo = _.filter(pluked, function(mmo){
				return mmo === "Mmo";
			});
		var shooter = _.filter(pluked, function(shooter){
				return shooter === "Shooter";
			});
		var tactal = _.filter(pluked, function(tactal){
				return tactal === "Tactal";
			});
		var arcade = _.filter(pluked, function(arcade){
				return arcade === "arcade";
			});


	    Morris.Donut({
	  		element: 'pie-chart',
	  		// colors: colors_array,
	  		data: [
	    		{label: "Action", value: action.length},
			    {label: "Adventure", value: adventure.length},
			    {label: "FPS", value: fps.length},
			    {label: "RPG", value: rpgs.length},
			    {label: "Racing", value: racing.length},
			    {label: "Action/Adventure", value: actionAdventure.length},
			    {label: "Sports", value: sports.length},
			    {label: "Horror", value: horror.length},
			    {label: "Stelth", value: stelth.length},
			    {label: "MMO", value: mmo.length},
			    {label: "Shooter", value: shooter.length},
			    {label: "Tactal", value: tactal.length},
			    {label: "Arcade", value: arcade.length}   
	  		]
  		})
    });
    

    $('.search').on('click', function(e){
    	e.preventDefault;

    	var searchValue = $('.searchbox').val();
    	console.log(searchValue);

    });




 


});






