let miApp = angular.module('miApp', ["ngRoute"]);

miApp.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/listado.html"
        })
        .when("/libros", {
            templateUrl: "views/listado.html",
            controller: 'miControlador'
        })
        .when("/libro", {
            templateUrl: "views/ficha.html",
            controller: 'miControlador'
        })
        .when("/1", {
            templateUrl: "views/ficha_Ender.html",
        })
        .when("/2", {
            templateUrl: "views/ficha_Juego_de_tronos.html"
        })
        .when("/3", {
            templateUrl: "views/ficha_I_robot.html"
        })
        .otherwise({
            templateUrl: "views/404.html"
        });


});

miApp.controller('miControlador', function($scope) {
    $scope.libros = [{
        id: "1",
        titulo: "El Juego de Ender",
        autor: "Orson Scott Card",
        editorial: "Ediciones B / Zeta",
        descripcion: "La Tierra está amenazada por una especie extraterrestre de insectos que pretende destruir la humanidad. Para vencerlos se precisa la intervención de un genio militar, por lo cual sepermite el nacimiento de Ender, tercer hijo de una pareja en un mundo que limita a dos el número de descendientes. Ender se entrenará en una estación espacial, superará a sus rivales y se convertiráen la persona capaz de dirigir las flotas terrestres contra los insectos de otros mundos.",
        img: "img/img1.jpg"
    }, {
        id: "2",
        titulo: "Juego de tronos",
        autor: "George R. R. Martin",
        editorial: "Gigamesh",
        descripcion: "Tras el largo verano, el invierno se acerca a los Siete Reinos. Lord Eddard Stark, señor de Invernalia, deja sus dominios para unirse a la corte de su amigo el rey Robert Baratheon,llamado el Usurpador, hombre díscolo y otrora guerrero audaz cuyas mayores aficiones son comer, beber y engendrar bastardos. Eddard Stark ocupará el cargo de Mano del Rey e intentará desentrañaruna maraña de intrigas que pondrá en peligro su vida y la de todos los suyos. En un mundo cuyas estaciones pueden durar decenios y en el que retazos de una magia inmemorial y olvidada surgen enlos rincones más sombríos y maravillosos, la traición y la lealtad, la compasión y la sed de venganza, el amor y el poder hacen del juego de tronos una poderosa trampa que atrapará en sus fauces a lospersonajes... y al lector.",
        img: "img/img2.jpg"
    }, {
        id: "3",
        titulo: "I robot",
        autor: "Isaac Asimov",
        editorial: "Edhasa",
        descripcion: "Los robots de Isaac Asimov son máquinas capaces de llevar a cabo muy diversas tareas, y que a menudo se plantean a sí mismos problemas de conducta humana. Pero estascuestiones se resuelven en Yo, robot en el ámbito de las tres leyes fundamentales de la robótica, concebidas por Asimov, y que no dejan de proponer extraordinarias paradojas que a veces se explicanpor errores de funcionamiento y otras por la creciente complejidad de los programas. Las paradojas que se plantean en estos relatos futuristas no son sólo ingeniosos ejercicios intelectuales sino sobretodo una indagación sobre la situación del hombre actual en relación con los avances tecnológicos y con la experiencia del tiempo.",
        img: "img/img3.jpg"
    }];
});