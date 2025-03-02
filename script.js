let list = document.getElementById("infi-list");

// Function to create and append list items
function addItems(count) {
    for (let i = 0; i < count; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = `Item ${list.children.length + 1}`;
        list.appendChild(listItem);
    }
}

addItems(10);

// Scroll event to detect when last item is in view
list.addEventListener("scroll", function () {
    let lastItem = list.lastElementChild; 
    if (lastItem) {
        let lastItemOffset = lastItem.getBoundingClientRect().bottom;
        let containerHeight = list.getBoundingClientRect().bottom;

        if (lastItemOffset <= containerHeight) {
            addItems(2);
        }
    }
});
