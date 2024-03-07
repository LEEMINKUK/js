// Function, String, Number 을 비롯한 내장 객체들 역시 프로토타입에 메서드를 저장한다.
// 모든 내장 프로토타입의 상속 트리 꼭대기엔 Object.prototype이 있어야 한다고 규정한다.

const num = new Number(100);

// num은 Number.prototype을 상속 받았는가?
console.log(num.__proto__ === Number.prototype);

// num은 Object.prototype을 상속 받았는가?
console.log(num.__proto__.__proto__ === Object.prototype);

// 체인 맨 위엔 null이 있다.
console.log(num.__proto__.__proto__.__proto__);  // null

// Obhect.prototype 에도 메서드 toString 이 있다.
console.log(num.toString());  // 문자열 100 반환
console.log(num);