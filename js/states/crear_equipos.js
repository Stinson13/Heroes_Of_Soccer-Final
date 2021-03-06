var crearEquiposState = {
    
    create: function() {
        
        pulsado = -1;
        
        imgFondo = game.add.image(0, 0, 'imgMenu');
        imgFondo.scale.setTo(0.6, 0.5);
        
        // Add a background image
        imgMenu = game.add.image(0, 0, 'campoFutbol');
        imgMenu.scale.setTo(1.52, 1.88);
        
        entrena = game.add.button(390, 100, 'entrena_sprite_sheet', modoCrearEntrena, this, 2, 1, 0);
        entrena.scale.setTo(0.8, 0.7);
        
        atm = game.add.button(390, 150, 'atm_sprite_sheet', modoCrearAtM, this, 2, 1, 0);
        atm.scale.setTo(0.72, 0.72);
        
        bcn = game.add.button(390, 200, 'bcn_sprite_sheet', modoCrearBcn, this, 2, 1, 0);
        bcn.scale.setTo(0.8, 0.7);
        
        lega = game.add.button(390, 250, 'lega_sprite_sheet', modoCrearLega, this, 2, 1, 0);
        lega.scale.setTo(0.8, 0.7);
        
        rm = game.add.button(390, 300, 'rm_sprite_sheet', modoCrearRM, this, 2, 1, 0);
        rm.scale.setTo(0.8, 0.7);
        
        lp = game.add.button(390, 350, 'las_palmas_sprite_sheet', modoCrearLasPalmas, this, 2, 1, 0);
        lp.scale.setTo(0.8, 0.7);
        
        depor = game.add.button(390, 400, 'depor_sprite_sheet', modoCrearDepor, this, 2, 1, 0);
        depor.scale.setTo(0.8, 0.7);
        
        aMenu = game.add.button(270, 500, 'volver_sprite_sheet', volverMenuJugar, this, 2, 1, 0);
        aMenu.scale.setTo(0.8, 0.7);
        
        terminar = game.add.button(530, 500, 'terminar_sprite_sheet', terminarEquipo, this, 2, 1, 0);
        terminar.scale.setTo(0.8, 0.7);
        
        imgMarco = game.add.image(972, 0, 'imgCrearMarco');
        imgMarco.scale.setTo(0.305, 0.4617);
        
        pintarLista();

    }
};

function modoCrearRM () {
    pulsado = 0;
	game.state.start('crearMazo');
}

function modoCrearAtM () {
    pulsado = 1;
	game.state.start('crearMazo');
}

function modoCrearBcn () {
    pulsado = 2;
	game.state.start('crearMazo');
}

function modoCrearLega () {
    pulsado = 3;
	game.state.start('crearMazo');
}

function modoCrearLasPalmas () {
    pulsado = 4;
	game.state.start('crearMazo');
}

function modoCrearDepor () {
    pulsado = 5;
	game.state.start('crearMazo');
}

function modoCrearEntrena () {
	game.state.start('crearMazoEntrenador');
}