function getTriangleArea(a, h) {

if (a <= 0 || isNaN(a) || h <=0 || isNaN(h)) {
	return 'Nieprawidłowe dane';
	}

 return (a * h / 2);

}

var triangleArea1 = getTriangleArea(10, -15);
var triangleArea2 = getTriangleArea('a', 12);
var triangleArea3 = getTriangleArea(8, 16);

console.log(triangleArea1);
console.log(triangleArea2);
console.log(triangleArea3);
