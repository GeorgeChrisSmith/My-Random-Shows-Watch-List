// App.js

// Create our initial array of anime
let initAnime = [
  { title: "Cory In The House", year: "2006-2007", watched: true },
  { title: "Neighbours", year: "1985-2025", watched: true },
  { title: "Home and Away", year: "1988-Present", watched: true },
  { title: "Echo Point", year: "1995", watched: true },
  { title: "Beverly Hills, 90210", year: "1990-2000", watched: true },
  { title: "Paradise Beach", year: "1993-1994", watched: true },
  { title: "The Nutshack", year: "2007-2011", watched: true },
  { title: "Love Live Sunshine!", year: "2016-2017", watched: true },
  { title: "Heartbreak High", year: "1994-1999", watched: true },
  { title: "iCarly", year: "2007-2012", watched: true },
  { title: "NASCAR on Fox", year: "2001-Present", watched: true },
  { title: "Mater's Drunk Tales", year: "2018-2020", watched: true },
  { title: "CDs in JackSucksAtLife", year: "2019-2023", watched: true },
  { title: "JackSucksAtLife in GoAnimate", year: "2023-Present", watched: true },
];

let animeList = new AnimeList('list', initAnime);

// Searching and sorting
function searchClick(){
  // Get the search element from the DOM
  let formElements = document.getElementById('form-list-control').elements;
  // Geting the text from the input element
  let text = formElements['search-string'].value;
  // Run the search method
  animeList.search(text);
}

// Sorting
function a2zClick(){
  animeList.sortA2Z();
}

function z2aClick(){
  animeList.sortZ2A();
}

// CRUD operations
// CREATE  -ADD
function addClick(){
  // Get the add form elements from the DOM
  let formElements = document.getElementById('form-add').elements;
  // get the data from the form
  let title = formElements['title'].value;
  let year = formElements['year'].value;
  let watched = formElements['watched'].checked; 

  // Add in Validation
  // Test the values of the input

  animeList.add(title, Number(year), watched);
  // Clear the input fields
  formElements.title.value = "";
  formElements.year.value = "";
  formElements.watched.checked = false;
}
// Update - Update
function updateClick(){
  // Get the add form elements from the DOM
  let formElements = document.getElementById('form-update').elements;
  // get the data from the form
  let index = formElements['index'].value - 1;
  let title = formElements['title'].value;
  let year = formElements['year'].value;
  let watched = formElements['watched'].checked; 

  // Add in Validation
  // test the index
  // Test the values of the input

  animeList.update(Number(index), title, Number(year), watched);
  // Clear the input fields
  formElements.index.value = ""
  formElements.title.value = "";
  formElements.year.value = "";
  formElements.watched.checked = false;
}
// Delete - Delete
function deleteClick(){
  // Get the add form elements from the DOM
  let indexElement = document.getElementById('delIndex');
  let index = indexElement.value - 1;
 
  // Add in Validation
  // test the index

  animeList.delete(Number(index));
  // Clear the input fields
  indexElement.value = ""; 
}

// UI JavaScript
// JavaScript of Tabs
// Function openForm()
// Take in 2 parameters, an event and an action
// Returns nothing.
function openForm(evt, action){
  // Declare variables
  let i, tabContent, tabLinks;

  // Get all elements that have the classname of tabcontent
  tabContent = document.getElementsByClassName('tabcontent');
  // Use a loop to set the display of all tabcontent elements to display = none.
  for(i = 0; i < tabContent.length; i++){
    tabContent[i].style.display = 'none';
  }

  // Get all elements with the class name of tablinks and remove the active class
  tabLinks = document.getElementsByClassName('tablinks');
  // remove the active class using a loop
  for(i = 0; i < tabLinks.length; i++){
    tabLinks[i].className = tabLinks[i].className.replace("active", "");
  }

  // Show the current tab, and add the active class to the button that opened the tab
  document.getElementById(action).style.display = "block"; // form
  evt.currentTarget.className += " active"; // button
}
// End of openForm()

// Open a tab by default
document.getElementById('defaultOpen').click();

// Footer - get Date and inject into the footed
// Get the span from the dom to inject the date into
const dateSpan = document.getElementById('date');
// Get the current date
const theDate = new Date();
// Add the date to the dom
dateSpan.textContent = theDate.getFullYear();