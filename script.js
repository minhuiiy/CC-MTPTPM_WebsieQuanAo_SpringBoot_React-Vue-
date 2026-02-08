// Lấy các phần tử từ DOM
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Biến lưu trữ item đang được chỉnh sửa
let editingItem = null;

// Hàm thêm công việc (Chức năng của Quý)
function addTodo() {
    const todoText = todoInput.value.trim();

    if (todoText === '') {
        alert('Vui lòng nhập nội dung công việc!');
        return;
    }

    // Kiểm tra nếu đang ở chế độ chỉnh sửa
    if (editingItem) {
        // Cập nhật nội dung của item đang được chỉnh sửa
        editingItem.firstChild.textContent = todoText;
        
        // Reset trạng thái về chế độ thêm mới
        editingItem = null;
        addBtn.textContent = 'Thêm';
    } else {
        // Tạo phần tử li mới
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = todoText;
        li.appendChild(span);

        // Thêm sự kiện click để chỉnh sửa
        li.addEventListener('click', function() {
            enterEditMode(li, span);
        });

        // Thêm vào danh sách
        todoList.appendChild(li);
    }

    // Xóa nội dung trong ô input
    todoInput.value = '';
    todoInput.focus();
}

// Hàm vào chế độ chỉnh sửa
function enterEditMode(li, span) {
    todoInput.value = span.textContent;
    editingItem = li;
    addBtn.textContent = 'Cập nhật';
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
