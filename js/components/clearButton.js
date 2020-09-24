import createList from "./createList.js";

export default function clearButton() {
    const clearBtn = document.querySelector("#clear");

    clearBtn.addEventListener("click", clearList);

    function clearList() {

        if (confirm("Are you Sure?")) {
            // clear locastorage 
            localStorage.clear();

            // clear the ul 
            createList([]);

        }

    }
}