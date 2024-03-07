// 02_생성자 함수
const student1 = {
    name : '유관순',
    age : 16,
    getInfo : function(){
        return `${this.name}(은)는 ${this.age}세 입니다.`
    }
};

const student2 = {
    name : '홍길동',
    age : 20,
    getInfo : function(){
        return `${this.name}(은)는 ${this.age}세 입니다.`
    }
};

// 생성자 함수에 의한 객체 생성
// 객체를 생성하기 위한 템플릿처럼 생성자 함수를 사용하여 프로퍼티 구조가
// 동일한 객체 여러개를 간편하게 생성할 수 있다.

// 앞 글자를 대문자로 생성한다.
function Student(name, age){
    this.name= name;
    this.age=age;
    this.getInfo= function(){
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
};
// 인스턴스 생성 가능
const student3 = new Student('장보고', 30);
const student4 = new Student('신사임당', 40);

// 메서드 호출
console.log(student3.getInfo());
console.log(student4.getInfo());