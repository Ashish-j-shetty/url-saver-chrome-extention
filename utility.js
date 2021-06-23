function render(myLeads) {
  let listItems = "";

  myLeads.forEach((item) => {
    listItems += `<li> <a href=${item} target='_blank'> ` + item + `</a></li>`;
    //   const li = document.createElement("li");
    //   li.textContent = item;

    // listItems += li;
  });

  ulEle.innerHTML = listItems;
}
