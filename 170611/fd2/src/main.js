import $ from 'jquery';
import asyncLooper from './modules/asyncLooper';
import { randomNumber, randomColor } from './modules/random';
import tmplList from './components/List.hbs';
import tmplFruit from './components/fruit.hbs';
import fruitLst from './assets/fruits.json';
// const asyncLooper = require('./modules/asyncLooper');
import styleMain from './assets/css/main.css';

console.log(styleMain);

const render = () => {
  // const app = document.getElementById('app');
  // app.innerHTML = '<h1>Hello World</h1>';

  // const app = $('#app');
  // app.html(tmplHeader({
  //     title: 'Hello Handlebars World!!!!!!',
  //     number: ''
  // }));

  const app = $('#app');
  app.html(tmplList({
    list: [{
      // color:`rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)}, ${randomNumber(0, 255)})`,
      color: randomColor(),
      number: randomNumber(0, 255)
    }, {
      color: randomColor(),
      number: randomNumber(0, 255)
    }, {
      color: randomColor(),
      number: randomNumber(0, 255)
    }, {
      color: randomColor(),
      number: randomNumber(0, 255)
    }, {
      color: randomColor(),
      number: randomNumber(0, 255)
    }]
  }) + tmplFruit({
    fruitLst
  }));
};

asyncLooper(render, 1, 1000);
$('#btn').click(render);
