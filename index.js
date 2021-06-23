let myLeads = [];

const saveButton = document.querySelector("#btn-save");
const inputEle = document.querySelector("#input-ele");
const ulEle = document.querySelector("#ul-ele");
const saveTab = document.querySelector("#btn-saveTab");

const deleteButton = document
  .querySelector("#btn-delete")
  .addEventListener("click", function () {
    localStorage.removeItem("myLeads");
    myLeads = [];
    render(myLeads);
  });

let savedLeads = JSON.parse(localStorage.getItem("myLeads"));

if (savedLeads) {
  myLeads = savedLeads;
  render(myLeads);
}

saveButton.addEventListener("click", () => {
  myLeads.push(inputEle.value);
  inputEle.value = "";

  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

saveTab.addEventListener("click", function () {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});
