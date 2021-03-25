const clickLionBtn = document.getElementsByClassName('big-five-button')[0];
const clickLeopardBtn = document.getElementsByClassName('big-five-button')[1];
const clickElephantBtn = document.getElementsByClassName('big-five-button')[2];
const clickRhinoBtn = document.getElementsByClassName('big-five-button')[3];
const clickBuffaloBtn = document.getElementsByClassName('big-five-button')[4];
const spottedAnimalList = document.getElementById('spotted-animals-list');

// leeuw toevoegen door knop te drukken
clickLionBtn.addEventListener('click', () => {
    const newLion = clickLionBtn.innerHTML;
    const newLi = document.createElement('li');
    const newSpottedLion = document.createTextNode(newLion);
    newLi.appendChild(newSpottedLion);    
    spottedAnimalList.appendChild(newLi);
});

// luipaard toevoegen door knop te drukken
clickLeopardBtn.addEventListener('click', () => {
    const newLeopard = clickLeopardBtn.innerHTML;
    const newLi = document.createElement('li');
    const newSpottedLeopard = document.createTextNode(newLeopard);
    newLi.appendChild(newSpottedLeopard);    
    spottedAnimalList.appendChild(newLi);
});

// olifant toevoegen door knop te drukken
clickElephantBtn.addEventListener('click', () => {
    const newElephant = clickElephantBtn.innerHTML;
    const newLi = document.createElement('li');
    const newSpottedElephant = document.createTextNode(newElephant);
    newLi.appendChild(newSpottedElephant);    
    spottedAnimalList.appendChild(newLi);
}); 

// neushoorn toevoegen door knop te drukken
clickRhinoBtn.addEventListener('click', () => {
    const newRhino = clickRhinoBtn.innerHTML;
    const newLi = document.createElement('li');
    const newSpottedRhino = document.createTextNode(newRhino);
    newLi.appendChild(newSpottedRhino);    
    spottedAnimalList.appendChild(newLi);
}); 

// buffel toevoegen door knop te drukken
clickBuffaloBtn.addEventListener('click', () => {
    const newBuffalo = clickBuffaloBtn.innerHTML;
    const newLi = document.createElement('li');
    const newSpottedBuffalo = document.createTextNode(newBuffalo);
    newLi.appendChild(newSpottedBuffalo);    
    spottedAnimalList.appendChild(newLi);
});

// bovenste dier weghalen uit de lijst met gespotte dieren
const clickDeleteFirstAnimalBtn = document.getElementById('remove-first-item-button');
clickDeleteFirstAnimalBtn.addEventListener('click', () => {
    const parent = document.getElementById("spotted-animals-list");
    const child = parent.getElementsByTagName("li")[0];
    parent.removeChild(child);
});

// lijst met gespotte dieren leegmaken











