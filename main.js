window.addEventListener('load', ()=>{
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#task");

    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert("Please input a task");
            return;
        }


        // DOM CREATING DIV .task//
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        
        // DOM CREATING DIV .content //
        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');
        task_el.appendChild(task_content_el);


        // DOM CREATING INPUT //
        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');
        task_content_el.appendChild(task_input_el);

        // DOM CREATING BUTTONS //
        const task_action = document.createElement('div');
        task_action.classList.add('actions');
        

        const task_action_edit = document.createElement('button');
        task_action_edit.classList.add('edit');
        task_action_edit.innerText = 'Edit';
        task_action.appendChild(task_action_edit);

        const task_action_delete = document.createElement('button');
        task_action_delete.classList.add('delete');
        task_action_delete.innerText = 'Delete';
        task_action.appendChild(task_action_delete);
    

        task_content_el.appendChild(task_action);
        list_el.appendChild(task_el);
     
        input.value = '';

        // DOM EDIT FUNCTION //

        task_action_edit.addEventListener('click', (e) =>{
            if(task_action_edit.innerText.toLowerCase() == 'edit'){
                    task_action_edit.innerText = 'Save';
                    task_input_el.removeAttribute('readonly');
                    task_input_el.focus();
            } else {
                    task_action_edit.innerText = 'Edit';
                    task_input_el.setAttribute('readonly', 'readonly');
            }
        });

           // DOM DELETE FUNCTION //
        task_action_delete.addEventListener('click' , (e) => {
            list_el.removeChild(task_el);
        })
        
        
		
    });
});