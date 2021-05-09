mainHeading = document.getElementById('main-heading')
mainHeading.textContent = 'New DOM Layout'
mainHeading.classList.add("bg-success")

para1.textContent = 'The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.'

para2.textContent = 'The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.'

const btn = document.getElementById('btn');
para4 = document.getElementById('para4')

btn.addEventListener('click', function() {
  const x = '<p id="para4">The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.</p>';
  para4.innerHTML += x;
});


var red = document.getElementById('red')
red.addEventListener('click', function() {
  red.classList.remove('bg-white');
  red.classList.add('bg-danger');
});

var black = document.getElementById('black')
black.addEventListener('click', function() {
  black.classList.remove('bg-white');
  black.classList.add('bg-dark');
});

var blue = document.getElementById('blue')
blue.addEventListener('click', function() {
  blue.classList.remove('bg-white');
  blue.classList.add('bg-primary');
});

var yellow = document.getElementById('yellow')
yellow.addEventListener('click', function() {
  yellow.classList.remove('bg-white');
  yellow.classList.add('bg-warning');
});

var green = document.getElementById('green')
green.addEventListener('click', function() {
  green.classList.remove('bg-white');
  green.classList.add('bg-success')
});