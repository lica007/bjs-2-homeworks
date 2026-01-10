function parseCount(str) {
	let pars = Number.parseFloat(str);
	
	if(Number.isNaN(pars)){
		throw new Error("Невалидное значение");
	}
	return pars;
}

function validateCount(str) {
    try {
        return parseCount(str);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if((this.a + this.b) < this.c || (this.b + this.c) < this.a || (this.a + this.c) < this.b){
            throw new Error ("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        const p = (this.a + this.b + this.c) / 2;
        return Number(Math.sqrt(p * (p - this.a)*(p - this.b)*(p - this.c)).toFixed(3));
    }
}

function getTriangle(a,b,c) {
    try {
        return new Triangle(a,b,c);
    } catch (error) {
        return {
            get perimeter(){
                return "Ошибка! Треугольник не существует";
            },
            get area(){
                return "Ошибка! Треугольник не существует";
            }
        }
    }

}