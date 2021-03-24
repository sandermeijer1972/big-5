const clickLionBtn = document.getElementsByClassName('big-five-button')[0];
const clickLeopardBtn = document.getElementsByClassName('big-five-button')[1];
const clickElephantBtn = document.getElementsByClassName('big-five-button')[2];
const clickRhinoBtn = document.getElementsByClassName('big-five-button')[3];
const clickBuffaloBtn = document.getElementsByClassName('big-five-button')[4];
const spottedAnimalList = document.getElementById('spotted-animals-list');

clickLionBtn.addEventListener('click', () => {
    const newLion = clickLionBtn.innerHTML;
    const newLi = document.createElement('li');
    const newSpottedLion = document.createTextNode(newLion);
    newLi.appendChild(newSpottedLion);    
    spottedAnimalList.appendChild(newLi);
});
clickLeopardBtn.addEventListener('click', () => {
    const newLeopard = clickLeopardBtn.innerHTML;
    const newLi = document.createElement('li');
    const newSpottedLeopard = document.createTextNode(newLeopard);
    newLi.appendChild(newSpottedLeopard);    
    spottedAnimalList.appendChild(newLi);
});
clickElephantBtn.addEventListener('click', () => {
    const newElephant = clickElephantBtn.innerHTML;
    const newLi = document.createElement('li');
    const newSpottedElephant = document.createTextNode(newElephant);
    newLi.appendChild(newSpottedElephant);    
    spottedAnimalList.appendChild(newLi);
}); 
clickRhinoBtn.addEventListener('click', () => {
    const newRhino = clickRhinoBtn.innerHTML;
    const newLi = document.createElement('li');
    const newSpottedRhino = document.createTextNode(newRhino);
    newLi.appendChild(newSpottedRhino);    
    spottedAnimalList.appendChild(newLi);
}); 
clickBuffaloBtn.addEventListener('click', () => {
    const newBuffalo = clickBuffaloBtn.innerHTML;
    const newLi = document.createElement('li');
    const newSpottedBuffalo = document.createTextNode(newBuffalo);
    newLi.appendChild(newSpottedBuffalo);    
    spottedAnimalList.appendChild(newLi);
});










