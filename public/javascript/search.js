const searchWrapper = document.querySelector("#searchbar");
const inputBox = searchWrapper.querySelector("input");
let linkTag = searchWrapper.querySelector('a');
let webLink;


function select(element){
  let selectData = element.textContent;
  inputBox.value = selectData;
  icon.onclick = ()=>{
      webLink = `api/items/${selectData}`;
      linkTag.setAttribute("href", webLink);
      linkTag.click();
  }
  searchWrapper.classList.remove("active");
};