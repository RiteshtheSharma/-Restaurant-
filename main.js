import 'normalize.css';
import './style.css'

const mainElem = document.createElement('main');
mainElem.appendChild( document.createTextNode('Home')) ;
document.getElementById(
    "app"
  ).appendChild(
   mainElem
  ) ;

