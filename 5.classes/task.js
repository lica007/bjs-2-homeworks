class PrintEditionItem {
	constructor (name, releaseDate, pagesCount){
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

    fix() {
		this.state = this._state * 1.5;
	}

    set state(newState) {
		if(newState < 0){
			this._state = 0;
		} else if(newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
	constructor (name, releaseDate, pagesCount){
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor (author, name, releaseDate, pagesCount){
		super(name, releaseDate, pagesCount);
        this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor (author, name, releaseDate, pagesCount){
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor (author, name, releaseDate, pagesCount){
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor (author, name, releaseDate, pagesCount){
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {
	constructor (name){
		this.name = name;
		this.books = [];
	}

    addBook(book) {
		this.books.push(book);
	}

    findBookBy(type, value) {
		for (let book of this.books) {
			if(book[type] === value){
				return book
			}
		}
		return null;
	}

    giveBookByName(bookName) {
        const index = this.books.findIndex(book => book.name === bookName);
		if (index > -1) {
			return this.books.splice(index, 1)[0];
		}
		return null;
    }
}

// Дополнительное задание

class Student {
  constructor(name) {
	  this.name = name;
      this.marks = {};
  }

  addMark(mark, subject) {
		if(mark > 5 || mark < 2) return;
		if(!this.marks[subject]){
			this.marks[subject] = [];
		}
        this.marks[subject].push(mark);
	}

    getAverageBySubject(subject) {
		if(!this.marks[subject]) return 0;
		const sum = this.marks[subject].reduce((sum, current) => sum + current, 0);
		const avg = Number((sum/this.marks[subject].length).toFixed(2));
		return avg;
	}

    getAverage() {
		const object = Object.keys(this.marks);
        if (object.length === 0) return 0;
		let sum = 0;
		for (let obj of object) {
			sum += this.getAverageBySubject(obj);
		}
		return sum / object.length;
	}
}