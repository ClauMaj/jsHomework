// function to create links
function createAnchor(text,adress,classNames) {
    let link = document.createElement('a');
    link.textContent = text;
    link.setAttribute('class', classNames);
    link.setAttribute('href',adress );
    return link;
}
//funcion to create containers
function createContainer(name,classNames) {
    let container = document.createElement(name);
    container.setAttribute('class', classNames);
    return container;
}
//funcion to create text containers
function createText(name,text,classNames) {
    let container = document.createElement(name);
    container.textContent = text;
    container.setAttribute('class', classNames);
    return container;
}
//create anchor tags
var homeLink = createAnchor("Home","#","nav-item nav-link active");
var aboutUsLink = createAnchor("About Us", "#" ,"nav-item nav-link")
//create logo
var logo = createAnchor('HighOnCoding', '#',"nav-item nav-link active mx-5 px-5 h5")
//create navDiv tag
var navDiv = createContainer("div", "nav navbar-nav" )
//create navbar
var navBar = createContainer("nav" , 'navbar navbar-expand navbar-light bg-primary w-100')

//3. append 2 anchors to our div
navDiv.appendChild(logo);
navDiv.appendChild(homeLink);
navDiv.appendChild(aboutUsLink);

//5 append div to nav element 
navBar.appendChild(navDiv);

// 6. find body element 
var body = document.querySelector('body');

// 7. append nav element to body
body.appendChild(navBar);

//first div
var firstH3 = createText('h3', 'Curse of the Current Reviews');
var firstText = createText('p', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem earum distinctio doloribus accusamus obcaecati? Fuga maiores maxime eos dolorem, veniam commodi impedit illum enim neque quasi et. Mollitia, libero esse!');
var firstDiv = createContainer('div', "bg-secondary w-75 my-3");
firstDiv.appendChild(firstH3);
firstDiv.appendChild(firstText);
body.appendChild(firstDiv);

//second div
var secondAnchor = createAnchor('Hello WatchKit','#','h2');
var secondText = createText('p','Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem earum distinctio doloribus accusamus obcaecati? Fuga maiores maxime eos dolorem, veniam commodi impedit illum enim neque quasi et. Mollitia, libero esse!','pt-3');
var secondComments = createText('p','12 comments &emsp; 124 likes','bg-warning');
var secondDiv = createContainer('div','bg-white w-75 my-3');
secondDiv.appendChild(secondAnchor);
secondDiv.appendChild(secondText);
secondDiv.appendChild(secondComments);
body.appendChild(secondDiv);

//third div

var thirdAnchor = createAnchor('Introduction to Swift','#','h2');
var thirdText = createText('p','Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem earum distinctio doloribus accusamus obcaecati? Fuga maiores maxime eos dolorem, veniam commodi impedit illum enim neque quasi et. Mollitia, libero esse!','pt-3');
var thirdComments = createText('p','15 comments &emsp; 45 likes','bg-warning');
var thirdDiv = createContainer('div','bg-white w-75 my-3');
thirdDiv.appendChild(thirdAnchor);
thirdDiv.appendChild(thirdText);
thirdDiv.appendChild(thirdComments);
body.appendChild(thirdDiv);
