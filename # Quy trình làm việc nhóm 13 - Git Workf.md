# Quy trình làm việc nhóm 13 - Git Workflow

## 1. Nguyên tắc chung
- Nhánh **`main`**: Chỉ chứa code đã hoàn thiện, chạy ổn định.
- Nhánh **`develop`**: Nhánh phát triển chung. Mọi người sẽ merge code vào đây trước.
- Nhánh **`feature/...`**: Nhánh riêng của từng thành viên.

## 2. Phân chia nhiệm vụ
| Thành viên | Chức năng | Tên Branch (Ví dụ) |
|------------|-----------|--------------------|
| **Quý** | Add Todo (Thêm) | `feature/add-todo` |
| **Huy** | Delete Todo (Xóa) | `feature/delete-todo` |
| **Thành** | Check Complete (Hoàn thành) | `feature/complete-todo` |
| **Sang** | Edit Todo (Sửa) | `feature/edit-todo` |
| **Khánh** | Filter (Bộ lọc) | `feature/filter-todo` |
| **Tiến** | Local Storage (Lưu trữ) | `feature/local-storage` |

## 3. Các bước thực hiện (Cho từng thành viên)

**Bước 1: Lấy code mới nhất về**
```bash
git checkout develop
git pull origin develop
```

**Bước 2: Tạo nhánh riêng để làm việc**
```bash
git checkout -b feature/ten-chuc-nang-cua-ban
# Ví dụ: git checkout -b feature/add-todo
```

**Bước 3: Code và Commit**
- Mở file `script.js`, tìm đến hàm được phân công và viết code.
- Sau khi xong:
```bash
git add .
git commit -m "Done: Chuc nang them cong viec"
```

**Bước 4: Đẩy code lên Github**
```bash
git push origin feature/ten-chuc-nang-cua-ban
```

**Bước 5: Tạo Pull Request (PR)**
- Vào Github repo.
- Nhấn "Compare & pull request".
- **Quan trọng:** Chọn base branch là `develop` (không phải `main`).
- Nhắn tin cho nhóm trưởng review và merge.

## 4. Dành cho Nhóm Trưởng (Reviewer)
1. Kiểm tra Pull Request.
2. Nếu code ổn -> Merge vào `develop`.
3. Sau khi tất cả các tính năng đã được merge vào `develop` và test chạy ngon lành -> Merge `develop` vào `main`.