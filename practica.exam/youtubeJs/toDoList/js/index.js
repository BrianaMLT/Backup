let todoList= [{
        name:'Make dinner',
        dueDate:2021-5-13
    },
    {
        name:'Grocery shopping',
        dueDate:2022-9-12
    },
    {
        name:'Wash dishes',
        dueDate:2024-6-12
    }];

//renderizar/actualizar tmb la lista en el html
render();
function render() {

    let todoHtml= '';//store results

    //second version
    for (let i = 0; i < todoList.length; i++) {
        const todoObjec = todoList[i];
        //const name= todoObjec.name;
        //otra forma de hacerlo: 
        const {name, dueDate}= todoObjec;
        //const dueDate= todoObjec.dueDate;
        let html= `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            todoList.splice(${i}, 1);
            render();
        ">Delete</button>
        </p>`;
        todoHtml += html;// convinar todo y ponelro en el htmml
    }
    
    let caja= document.querySelector('.box');

    caja.innerHTML= todoHtml;
}
//first version
function addTodo() {
    let input= document.querySelector(".input");
    let nombre= input.value;

    let input2= document.querySelector(".date");
    let date= input2.value;

    todoList.push({
        name: nombre,
        dueDate: date
    });
    //console.log(todoList);

    input.value= '';//para que se reinicie el escribir

    render();
}