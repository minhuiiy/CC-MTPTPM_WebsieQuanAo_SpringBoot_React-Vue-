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
