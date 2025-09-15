//comienzo
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

//addition of charpter button
button.addEventListener ('click', function() {
    
    //trim and check if the input is not empty
    if (input.value.trim() !== ''){

        //create new list item and delete button
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        //set the text content
        li.textContent = input.value;
        deleteButton.textContent = 'X';

        // Add accessibility label
        deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

        //append the delete button to the list item
        li.append(deleteButton);

        //append the list item to the list
        list.append(li);

        //Add delete funtionality
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
        });

        //clear the input field
        input.value = '';
    }
    
    //focus back to the input field
    input.focus();
});
