// for in 반복문
// 객체의 모든 키 순회
var student = {
    name: '유관순',
    age: 16,
    getInfo: function () {
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
};
console.log(student);

for (var key in student) {
    console.log(`key : ${key}`);
    console.log(`syudent[key] : ${student[key]}`);
};

console.log(student);
