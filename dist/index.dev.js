"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _require = require('./helpers/inquirer'),
    inquirerMenu = _require.inquirerMenu,
    pausa = _require.pausa,
    leerInput = _require.leerInput;

var Busquedas = require('./models/busquedas');

var main = function main() {
  var busquedas, opt, lugar;
  return regeneratorRuntime.async(function main$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          busquedas = new Busquedas();
          opt = ''; //const texto = await leerInput('Hola : ');

        case 2:
          _context.next = 4;
          return regeneratorRuntime.awrap(inquirerMenu());

        case 4:
          opt = _context.sent;
          _context.t0 = opt;
          _context.next = _context.t0 === 1 ? 8 : _context.t0 === 2 ? 21 : _context.t0 === 0 ? 23 : 25;
          break;

        case 8:
          _context.next = 10;
          return regeneratorRuntime.awrap(leerInput('Ciudad: '));

        case 10:
          lugar = _context.sent;
          console.log(lugar);
          busquedas.ciudad(lugar); // Buscar los lugares
          // Seleccionar el lugar
          // Clima
          // Mostrar resultados

          console.log('\nInformación de la ciudad\n'.green);
          console.log('Ciudad: ');
          console.log('Lat: ');
          console.log('Lng: ');
          console.log('Temperature: ');
          console.log('Mínima: ');
          console.log('Máxima: ');
          return _context.abrupt("break", 25);

        case 21:
          console.log('case: 2');
          return _context.abrupt("break", 25);

        case 23:
          console.log('case: 0');
          return _context.abrupt("break", 25);

        case 25:
          console.log('opt---->', opt);
          console.log(_typeof(opt));
          console.log(opt !== 0);
          _context.next = 30;
          return regeneratorRuntime.awrap(pausa());

        case 30:
          if (opt != 0) {
            _context.next = 2;
            break;
          }

        case 31:
        case "end":
          return _context.stop();
      }
    }
  });
};

main();