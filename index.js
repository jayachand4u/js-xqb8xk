// Import stylesheets
import './style.css';

const pagerender = {
  // name:'test',
  renderMe: function showName() {
    // Write Javascript code!
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = appDiv.innerHTML + '<h1>' + this.name + '</h1>';
  },
};

pagerender.name = '123';
pagerender.renderMe();

// const showN = new showName('Practise 1');
// const showN1 = new showName('Practise 2');
// const showN2 = new showName('Practise 3');
