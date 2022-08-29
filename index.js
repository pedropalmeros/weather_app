require('dotenv').config();

const { 
        inquirerMenu,
        pausa,
        leerInput,
        listarLugares
     } = require('./helpers/inquirer');

const Busquedas = require('./models/busquedas');

console.log(process.env);

const main = async() => {
    
    const busquedas = new Busquedas();

    let opt = '';
    //const texto = await leerInput('Hola : ');
    do{
        opt = await inquirerMenu();

        switch(opt){
            case 1:
                //console.log('case: 1');
                // Mostrar mensaje
                const lugar = await leerInput('Ciudad: ');
                const lugares = await busquedas.ciudad(lugar);
                const id = await listarLugares(lugares);
                console.log(id);
                const lugarSel = lugares.find(l => l.id == id);
                console.log(lugarSel);
 
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad: ',lugarSel.nombre);
                console.log('Lat: ',lugarSel.lat);
                console.log('Lng: ',lugarSel.lng);
                console.log('Temperature: ',);
                console.log('Mínima: ' );
                console.log('Máxima: ', );
                
                break;
            case 2:
                console.log('case: 2');
                break;

            case 0:
                console.log('case: 0')
                break;
        }

        await pausa();  
         

    } while(opt != 0);



}


main();