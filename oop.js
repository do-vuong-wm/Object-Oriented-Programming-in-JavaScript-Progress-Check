// create a var with a function that acts like a constructor

    var game = function(title, population, graphic, type){

        this.title = title;
        this.pop = population;
        this.graphic = graphic;
        this.type = type;

    };

    game.prototype.gamedesc = function(){ document.write('Game object: ' + this.title + ', ' + this.pop + ', ' + this.graphic + ', ' + this.type + '<br>')};


    var tetris = function(title, population, graphic, type, review){

        game.call(this, title, population, graphic, type);

        this.review = review;

    };

    tetris.prototype = Object.create(game.prototype);

    tetris.prototype.constructor = tetris;

    tetris.prototype.gamedesc = function(){ document.write('Tetris object: ' + this.title + ', ' + this.pop + ', ' + this.graphic + ', ' + this.type + ', ' + this.review + '<br>')};

    var skyrim = function(title, population, graphic, type, review){

        game.call(this, title, population, graphic, type);

        this.review = review;

    };

    skyrim.prototype = Object.create(game.prototype);
    skyrim.prototype.constructor = skyrim;
    skyrim.prototype.gamedesc = function(){ document.write('Skyrim object: ' + this.title + ', ' + this.pop + ', ' + this.graphic + ', ' + this.type + ', ' + this.review + '<br>')};

    var fallout = function(title, population, graphic, type, review){

        game.call(this, title, population, graphic, type);

        this.review = review;

    };

    fallout.prototype = Object.create(game.prototype);
    fallout.prototype.constructor = skyrim;
    fallout.prototype.gamedesc = function(){ document.write('Skyrim object: ' + this.title + ', ' + this.pop + ', ' + this.graphic + ', ' + this.type + ', ' + this.review + '<br>')};

    var witcher = function(title, population, graphic, type, review){

    game.call(this, title, population, graphic, type);

    this.review = review;

    };

    witcher.prototype = Object.create(game.prototype);
    witcher.prototype.constructor = skyrim;
    witcher.prototype.gamedesc = function(){ document.write('Witcher object: ' + this.title + ', ' + this.pop + ', ' + this.graphic + ', ' + this.type + ', ' + this.review + '<br>')};


    function call(){

        var objectarr = [];

        objectarr[0] = new game('minesweeper', 123123, 'pixels', 'singleplayer');
        objectarr[1] = new tetris('vuongTetris', 23123123, 'block', 'halloween' , 'fun');
        objectarr[2] = new skyrim('modded Skyrim', 23123123, 'glothic', 'rpg' , 'amazing');
        objectarr[3] = new fallout('fallout 4', 1, '10/10', 'rpg', 'boring');
        objectarr[4] = new witcher('witcher 3', 234234, '20/30' , 'rpg', 'cool' );

        for(var i = 0; i < objectarr.length; i++){

            objectarr[i].gamedesc();

        }

    }

