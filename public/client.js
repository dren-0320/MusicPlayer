/*jshint esversion: 6 */

function render(todos){
    $(".todos").children().not(".template").remove();

    const template = $(".todos").children(".template");

    todos.forEach((todo) => {
        const node = template.clone(true).show().removeClass("template");

        node.find(".m_id").text(todo.m_id);
        node.find(".text").text(todo.text);
        node.find(".audio_path").text(todo.audio_path);
        node.find(".text_2").text(todo.text_2);
        node.find(".id").text(todo._id);
        $(".todos").append(node);
        $('div.music-form')
        .html(todo.audio_path);

    });
}

function getTodos(){
    fetch('/api/todos')
        .then((data) => data.json())
        .then((json) => {
            const todos = json;
            render(todos);
    });
}
function getTodos_1(){
	fetch('/api/todos/1')
	.then((data) => data.json())
	.then((json) => {
	    const todos = json;
	    render(todos);
	});
}
function getTodos_2(){
	fetch('/api/todos/2')
	.then((data) => data.json())
	.then((json) => {
	    const todos = json;
	    render(todos);
	});
}
function getTodos_3(){
	fetch('/api/todos/3')
	.then((data) => data.json())
	.then((json) => {
	    const todos = json;
	    render(todos);
	});
}
function getTodos_4(){
	fetch('/api/todos/4')
	.then((data) => data.json())
	.then((json) => {
	    const todos = json;
	    render(todos);
	});
}
function getTodos_5(){
	fetch('/api/todos/5')
	.then((data) => data.json())
	.then((json) => {
	    const todos = json;
	    render(todos);
	});
}
function getTodos_6(){
	fetch('/api/todos/6')
	.then((data) => data.json())
	.then((json) => {
	    const todos = json;
	    render(todos);
	});
}
function getTodos_7(){
	fetch('/api/todos/7')
	.then((data) => data.json())
	.then((json) => {
	    const todos = json;
	    render(todos);
	});
}
function getTodos_8(){
	fetch('/api/todos/8')
	.then((data) => data.json())
	.then((json) => {
	    const todos = json;
	    render(todos);
	});
}
function getTodos_9(){
	fetch('/api/todos/9')
	.then((data) => data.json())
	.then((json) => {
	    const todos = json;
	    render(todos);
	});
}
function getTodos_10(){
	fetch('/api/todos/10')
	.then((data) => data.json())
	.then((json) => {
	    const todos = json;
	    render(todos);
	});
}

function createTodo(){
	/*  */
	/* const formdata = new FormData($('#my_form').get(0)); */

	/*
	 * $.ajax({ url : "/api/todos", type : "POST", data : formdata, cache :
	 * false, contentType : false, processData : false, dataType : "html" })
	 * .done(function(data, textStatus, jqXHR){ alert(data); })
	 * .fail(function(jqXHR, textStatus, errorThrown){ alert("fail"); });
	 *//*
		 * const xmlhttp = new XMLHttpRequest(); xmlhttp.onreadystatechange =
		 * function () { if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		 * alert(xmlhttp.responseText); } }; xmlhttp.open("POST", "/api/todos",
		 * true); xmlhttp.send(formdata);
		 */
	/* const input_file = document.getElementById("file"); */
	/*
	 * const formdata = new FormData(); /*const file_list = input_file.files;
	 * if(file_list){ const i = 0; const num = file_list.length; for(i;i <
	 * num;i++){ const file = file_list[i];
	 */
	/*
	 * const m_file_name = m_file.name; formdata.append(m_file_name, m_file);
	 * const xhr = new XMLHttpRequest(); console.log(xhr.responseText);
	 * xhr.open("POST" , "test_01.php", true); xhr.send(formdata);
	 */


	/*const upload1 = document.getElementById("file");
	const m_file = upload1.files[0];*/
	const m_file = document.querySelector('#file').files[0];
    const text = $(".new-todo-text").val();
    const text_2 = $(".new-todo-text_2").val();
    const m_id = $(".new-todo-id").val();
    const audio_path = m_file.name;


	const formdata = new FormData();
	formdata.append('myfile', m_file);
	formdata.append('text', text);
	formdata.append('audio_path', audio_path);
	formdata.append('text_2', text_2);
	formdata.append('m_id', m_id);


    /*$.ajax({
		  url: '/api/todos',
		  type: "POST",
		  data: formdata,
		  processData: false,
		  contentType: false
		});*/
console.log(text);
    fetch('/api/todos', {
            method:"POST",
            body: formdata
        })
        .then(() => {
		  getTodos();
		  console.log(text_2);
        	
		})
		.catch(error => console.error('Error:', error));
}

function deleteTodo(el){
    const id = $(el).closest(".todo").find(".id").text();
    fetch(`/api/todos/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            getTodos();
        });
}

$(getTodos);