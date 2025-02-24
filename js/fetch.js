(async () => {
    try {
        const response = await fetch("./php/fetch.php", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        // data.forEach(syntax => {
        //     const li = document.createElement("li");
        //     const detailsElement = document.createElement("details");
        //     const summaryElement = document.createElement("summary");
        //     const pElement = document.createElement('p');

        //     detailsElement.id = 'syntaxDetails';

        //     summaryElement.innerHTML = syntax.syntax_name;
        //     pElement.innerHTML = syntax.syntax_description;

        //     const details = document.getElementById('syntaxDetails').appendChild(summaryElement).appendChild(pElement)
            


        //     li.innerHTML = details;
        //     document.getElementById('listContainer').appendChild(li);
            
        // });

        // data.forEach(syntax => {
        //     const li = document.createElement("li");
        //     const detailsElement = document.createElement("details");
        //     const summaryElement = document.createElement("summary");
        //     const pElement = document.createElement("p");
        
        //     detailsElement.id = "syntaxDetails"; // Assign ID (avoid duplicate IDs for multiple elements)
        //     summaryElement.textContent = syntax.syntax_name; 
        //     pElement.textContent = syntax.syntax_description; 
        
        //     // Append elements correctly
        //     detailsElement.appendChild(summaryElement);
        //     detailsElement.appendChild(pElement);
        //     li.appendChild(detailsElement); // Append <details> to <li>
        
        //     document.getElementById("listContainer").appendChild(li); // Append <li> to the list container
        // });

        data.forEach(syntax => {
            const li = document.createElement("li");
            const detailsElement = document.createElement("details");
            // Optionally set an id if needed; ensure it's unique if used in multiple iterations
            
        
            const summaryElement = document.createElement("summary");
            summaryElement.innerHTML = syntax.syntax_name + " - " + syntax.language;
        
            const pElement = document.createElement('p');
            pElement.id = 'syntaxDetails_' + syntax.id; // assuming each syntax has a unique id
            pElement.innerHTML = syntax.syntax_description;
        
            // Append the summary and paragraph directly to detailsElement
            detailsElement.appendChild(summaryElement);
            detailsElement.appendChild(pElement);
        
            // Append the details element to the list item
            li.appendChild(detailsElement);
            
            // Append the list item to your container
            document.getElementById('listContainer').appendChild(li);
        });

    } catch (error) {
        console.error("Error fetching data:", error);
    }
})();

document.getElementById('syntaxDetails_' + syntax.id).addEventListener('click', function(event){
    event.preventDefault();

    console.log(syntax.user_id);
})


document.getElementById('listContainer').addEventListener('click', function(event) {
    if (event.target.tagName === 'DETAILS' && event.target.id.startsWith('syntaxDetails_')) {
        console.log('Details clicked:', event.target.id);
    }
});