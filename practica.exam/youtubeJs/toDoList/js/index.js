let todoList= ['Make dinner', 'Wash dishes'];

//renderizar/actualizar tmb la lista en el html
render();
function render() {

    let todoHtml= '';//store results

    //second version
    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        let html= `<p>
        ${todo}
        <button onclick"
        todoList.splice(${i}, 1);
        r
        ">Delete</button>
        </p>`;
        todoHtml += html;// convinar todo y ponelro en el htmml
    }
    console.log(todoHtml);
    let caja= document.querySelector('.box');

    caja.innerHTML= todoHtml;
}
//first version
function addTodo(params) {
    let input= document.querySelector(".input");
    let nombre= input.value;
    //console.log(nombre);

    todoList.push(nombre)
    console.log(todoList);

    input.value= '';//para que se reinicie el escribir

    render();
}

