import bar from './bar';
import foo from './foo';
import './index.css'

const content = document.querySelector('#content');
const htmlStr = document.createElement('h2');
htmlStr.textContent = `${foo}${bar}`;
htmlStr.setAttribute('class', 'foo-bar');
content.appendChild(htmlStr)