function parseCount(value) {
	const parseValue = Number.parseInt(value);
	if (isNaN(parseValue)) {
		throw new Error ("Невалидное значение");
		} else {
		return parseValue;
		}
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (e) {
		return e;
	}
}

class Triangle {
	constructor(a, b, c){
		this.a = a; 
		this.b = b;
		this.c = c;
		if (a + b < c||b + c < a||a + c < b) {
		throw new Error ("Треугольник с такими сторонами не существует");
		}
	}

	getPerimeter() {
 		return this.a + this.b + this.c;
 	}

	getArea() {
		const p = this.getPerimeter() / 2;
        return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
	}

}
function getTriangle (a, b, c) {
 try {
        return new Triangle(a, b, c);
    } catch (err) {
    	return {
            getPerimeter() {
                return 'Ошибка! Треугольник не существует';
            }, 
            getArea() {
                return 'Ошибка! Треугольник не существует';
            }
    	} 
	}
 
}