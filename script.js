// Lấy các phần tử từ DOM
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Hàm thêm công việc (Chức năng của Quý)
function addTodo() {
    const todoText = todoInput.value.trim();

    if (todoText === '') {
        alert('Vui lòng nhập nội dung công việc!');
        return;
    }

    // Tạo phần tử li mới
    const li = document.createElement('li');
    li.textContent = todoText;

    // Thêm vào danh sách
    todoList.appendChild(li);

    // Xóa nội dung trong ô input
    todoInput.value = '';
    todoInput.focus();
}

// Gán sự kiện click cho nút Thêm
addBtn.addEventListener('click', addTodo);

// Thêm sự kiện nhấn Enter để thêm
todoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});
// Lấy todos từ localStorage hoặc mảng rỗng
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Lưu todos vào localStorage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Render todos ra giao diện
function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo;
        todoList.appendChild(li);
    });
}

// Load todos khi mở trang
renderTodos();

