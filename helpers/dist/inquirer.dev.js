"use strict";

var inquirer = require('inquirer');

require('colors');

var preguntas = [{
  type: 'list',
  name: 'opcion',
  message: '¿Qué desea hacer?',
  choices: [{
    value: 1,
    name: "".concat('1.'.yellow, " Buscar ciudad")
  }, {
    value: 2,
    name: "".concat('2.'.yellow, " Historial")
  }, {
    value: 0,
    name: "".concat('0.'.yellow, " Salir")
  }]
}];
var question = [{
  type: 'input',
  name: 'enter',
  message: "Presione ".concat('enter'.green, " para continuar")
}];

var inquirerMenu = function inquirerMenu() {
  var _ref, opcion;

  return regeneratorRuntime.async(function inquirerMenu$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.clear();
          console.log('=========================='.green);
          console.log('   Seleccione una opción  '.green);
          console.log('==========================\n'.green);
          _context.next = 6;
          return regeneratorRuntime.awrap(inquirer.prompt(preguntas));

        case 6:
          _ref = _context.sent;
          opcion = _ref.opcion;
          return _context.abrupt("return", opcion);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
};

var pausa = function pausa() {
  return regeneratorRuntime.async(function pausa$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log('\n');
          _context2.next = 3;
          return regeneratorRuntime.awrap(inquirer.prompt(question));

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var leerInput = function leerInput(message) {
  var question, _ref2, desc;

  return regeneratorRuntime.async(function leerInput$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          question = [{
            type: 'input',
            name: 'desc',
            message: message,
            validate: function validate(value) {
              if (value.length === 0) {
                return 'Por favor intrese un valor';
              }

              return true;
            }
          }];
          _context3.next = 3;
          return regeneratorRuntime.awrap(inquirer.prompt(question));

        case 3:
          _ref2 = _context3.sent;
          desc = _ref2.desc;
          return _context3.abrupt("return", desc);

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  });
};

var listadoTareasBorrar = function listadoTareasBorrar() {
  var tareas,
      choices,
      preguntas,
      _ref3,
      id,
      _args4 = arguments;

  return regeneratorRuntime.async(function listadoTareasBorrar$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          tareas = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : [];
          choices = tareas.map(function (tarea, i) {
            var idx = "".concat(i + 1).green;
            return {
              value: tarea.id,
              name: "".concat(idx, " ").concat(tarea.desc)
            };
          });
          choices.unshift({
            value: '0',
            name: '0.'.green + 'Cancelar'
          });
          preguntas = [{
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices: choices
          }];
          _context4.next = 6;
          return regeneratorRuntime.awrap(inquirer.prompt(preguntas));

        case 6:
          _ref3 = _context4.sent;
          id = _ref3.id;
          return _context4.abrupt("return", id);

        case 9:
        case "end":
          return _context4.stop();
      }
    }
  });
};

var confirmar = function confirmar(message) {
  var pregunta, _ref4, ok;

  return regeneratorRuntime.async(function confirmar$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          pregunta = [{
            type: 'confirm',
            name: 'ok',
            message: message
          }];
          _context5.next = 3;
          return regeneratorRuntime.awrap(inquirer.prompt(pregunta));

        case 3:
          _ref4 = _context5.sent;
          ok = _ref4.ok;
          return _context5.abrupt("return", ok);

        case 6:
        case "end":
          return _context5.stop();
      }
    }
  });
};

var mostrarListadoChecklist = function mostrarListadoChecklist() {
  var tareas,
      choices,
      pregunta,
      _ref5,
      ids,
      _args6 = arguments;

  return regeneratorRuntime.async(function mostrarListadoChecklist$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          tareas = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : [];
          choices = tareas.map(function (tarea, i) {
            var idx = "".concat(i + 1).green;
            return {
              value: tarea.id,
              name: "".concat(idx, " ").concat(tarea.desc),
              checked: tarea.completadoEn ? true : false
            };
          });
          pregunta = [{
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices: choices
          }];
          _context6.next = 5;
          return regeneratorRuntime.awrap(inquirer.prompt(pregunta));

        case 5:
          _ref5 = _context6.sent;
          ids = _ref5.ids;
          return _context6.abrupt("return", ids);

        case 8:
        case "end":
          return _context6.stop();
      }
    }
  });
};

module.exports = {
  inquirerMenu: inquirerMenu,
  pausa: pausa,
  leerInput: leerInput,
  listadoTareasBorrar: listadoTareasBorrar,
  confirmar: confirmar,
  mostrarListadoChecklist: mostrarListadoChecklist
};