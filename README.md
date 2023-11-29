Làm việc với mảng

var name = [
    'hello',
]
kiểm tra kiểu dữ liệu trong array
console.log(Array.isArray(name)) // True or False

1. To string
chuyển sang kiểu string
console.log(name.toString())
2. Join
array -> chỗi
console.log(name.join('thêm vào sau phần tử'))
3. Pop
- xóa phần tử cuối mảng và trả về phần tử đã xóa
console.log(name.pop())
4. Push
- Thêm 1 hoặc nhiều phần tử vào cuối mảng. Và trả về độ dài mới của mảng
5. shift >< Pop
 - xóa phàn tử đầu mảng và trả về phần tử đã xóa
6. Unshift >< Push
- Thêm 1 hoăc nhiều ptu vào đầu mảng và trả về độ dài mới của mảng
7. Splice('vị trí', 'số lượng ptu muốn xóa', 'phần tử muốn chèn theo vị trí')
8. Concat
- Nối hai mảng vs nhau
console.log(name.concat(nameArray2))
9. Slice 
- Cắt ptu
console.log(name.slice('vị trí cắt'))

10. forEach()
var result = courses.forEach(function(course, index) {
    console.log(index,course)
});
console.log(result)
- danh sách
11. every()
- Kiểm tra tất cả các phần tử thỏa mãn ...
var result = courses.every(function(course, index) {
    return course.name === 0;
});
console.log(result)
12. some()
- ngược lại với every. chỉ cần 1 thằng đúng là đúng

13. find()
- tìm kiếm 
var result = courses.find(function(course, index) {
    console.log(index)
    return course.name === 'java';
});
console.log(result)

14. filter()
tìm kiếm có fielt giống theo yêu cầu
15. map()

16. reduce()
- trả về 1 giá trị duy nhất theo yêu cầu
Object contructor
function contructor

Object prototype: Thêm thuộc tính bên ngoài hàm tạo
NameObject.prototype.name_new_fielt = ...