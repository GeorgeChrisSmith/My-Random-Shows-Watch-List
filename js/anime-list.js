// The AnimeList Class
// This clas has 2 attributes and many methods
// Look in the Readme.md for a full list of methods

class AnimeList{
  constructor(rootId, animeArray){
    this.rootId = rootId; // the html id of where the list is going
    this.animeList = animeArray; // the array of anime that we wish to display
    this.refresh();
  }

  // Methods
  // animeRow - generate one row from the array
  animeRow(index, title, year, watched){
    // Get the parent element
    const rootElement = document.getElementById(this.rootId);

    // Creating the elements for the dom
    const row = document.createElement('div');
    const id = document.createElement('div');
    const nameDiv = document.createElement('div');
    const yearDiv = document.createElement('div');
    const watchedDiv = document.createElement('div');
    const watchedLabel = document.createElement('label');
    const watchedCheck = document.createElement('input');
    // Check the input to a checkbox
    watchedCheck.setAttribute("type","checkbox");

    // Adding content into the elements
    if(watched){
      watchedCheck.checked = true;
    } else {
      watchedCheck.checked = false;
    }

    id.textContent = `${index}.`;
    nameDiv.textContent = title;
    yearDiv.textContent = year;
    watchedLabel.textContent = 'Watched: ';

    // Add the class of row onto our row
    row.classList.add('row');

    // Appending the label the checkbox to the watchedDiv
    watchedDiv.appendChild(watchedLabel);
    watchedDiv.appendChild(watchedCheck);

    // Append the elements to the row
    row.appendChild(id);
    row.appendChild(nameDiv);
    row.appendChild(yearDiv);
    row.appendChild(watchedDiv);

    // Append the row to the dom
    rootElement.appendChild(row);
  }
  // End animeRow method

  // Generate all rows in our animeList
  genAnimeList(){
    // loop through the animeList
    for(let i = 0; i < this.animeList.length; i++){
      let anime = this.animeList[i];
      console.log(anime);
      // Call the animeRow method to generate a row
      this.animeRow(i+1, anime.title, anime.year, anime.watched);
    }
  }
  // End genAnimeList method

  // Generate an anime list based on our search string
  genAnimeSearchList(list){
    // remove all elements from the display
    this.removeElements();
    // Generate a new list, from the list which was passed through
    // Loop through the passed in list
    for (let i = 0; i < list.length; i++){
      let anime = list[i];
      // Call the animeRow method to generate a row
      this.animeRow(i+1, anime.title, anime.year, anime.watched);
    }
  }
  // End genAnimeSearchList(list) method

  // Remove all list elements from the dom
  removeElements(){
    // Get the parent element
    const rootElement = document.getElementById(this.rootId);

    // Get all the elements with the class name of row.
    const childNodes = document.getElementsByClassName('row');
    // childNodes is an array of htmlElements. 
    // See how may children do we have?
    const len = childNodes.length - 1;
    // loop through the childNodes and remove them from the Dom
    for(let i = len; i >= 0; i--){
      // pull out the last child
      const child = childNodes[i];
      // Remove this child from the DOM
      rootElement.removeChild(child);
    }
  }
  // Refresh Method
  refresh(){
    // We want to remove all elements
    this.removeElements();
    // Generate the list to display
    this.genAnimeList();
  }
  // End Refresh Method

  // Adding a new anime
  add(title, year, watched){
    // Add a new anime to the end of the list
    this.animeList.push({ title: title, year: year, watched: watched});
    // (ES6 syntax)
    // this.animeList.push({ title, year, watched});
    this.refresh();
  }
  // End of add method

  // update anime
  update(index, title, year, watched){
    // update each value 
    this.animeList[index].title = title;
    this.animeList[index].year = year;
    this.animeList[index].watched = watched;
    // refresh the list
    this.refresh();
  }
  // End update method

  // Delete anime method
  delete(index){
    // Remove one item from our array
    // Note: We should validate the index here
    // Test for out of bounds.
    this.animeList.splice(index, 1);
    // refresh the list
    this.refresh();
  }
  // End of delete method

  // Sort
  // Sort A - Z
  // Compare 2 values, A will go before B
  // Sort in ascending order
  sortA2Z(){
    this.animeList.sort(function (a, b) {
      return a.title.localeCompare(b.title);
    });
    this.refresh();
  }

  // Sort Z - A
  // Sort in decending order
  sortZ2A(){
    this.animeList.sort(function (a, b) {
      return b.title.localeCompare(a.title);
    });
    this.refresh();
  }

  // Search by partial title
  search(nameString){
    // Create a new list to hold our search results
    let shortList = [];
    // use a loop to check to see if the nameString is in the anime title
    for(let anime of this.animeList){
      // Check if the nameString is in anime.title
      if(anime.title.includes(nameString)){
        // We add this anime to our shortlist
        shortList.push(anime);
      }
    }
    // Generate the list to display
    this.genAnimeSearchList(shortList);
  }
}