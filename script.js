// --- PHẦN 1: ADD TODO ---
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

todoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});


// --- PHẦN 2: FILTER - BỘ LỌC ---

// 1. Lấy phần tử Select bộ lọc
const filterOption = document.querySelector(".filter-todo");

// 2. Gán sự kiện change (Tối ưu hơn click cho thẻ select)
if (filterOption) {
    filterOption.addEventListener("change", filterTodo);
}

// 3. Hàm xử lý logic lọc
function filterTodo(e) {
    const todos = todoList.childNodes;
    
    todos.forEach(function(todo) {
        // Kiểm tra xem node có phải là Element không (loại bỏ text node thừa)
        if (todo.nodeType === 1) { 
            switch (e.target.value) {
                case "all":
                    todo.style.display = "flex";
                    break;
                case "completed":
                    if (todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                case "uncompleted":
                    if (!todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
            }
        }
    });
}