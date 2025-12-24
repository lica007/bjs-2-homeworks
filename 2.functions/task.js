function getArrayParams(...arr) {
	const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((sum, current) => sum + current, 0);
	const avg = Number((sum/arr.length).toFixed(2));
	
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if(arr.length === 0){
		return 0;
	}
  const sum = arr.reduce((sum, current) => sum + current, 0);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if(arr.length === 0){
		return 0;
	}
	const min = Math.min(...arr);
	const max = Math.max(...arr);
	return max - min;
}

function differenceEvenOddWorker(...arr) {
  if(arr.length === 0){
		return 0;
	}
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if(arr.length === 0){
		return 0;
	}
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if(arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	return sumEvenElement/countEvenElement;
}

function makeWork (arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for(let i = 0; i < arrOfArr.length; i++){
		const currentResult = func(...arrOfArr[i]);
		if (currentResult > maxWorkerResult) {
			maxWorkerResult = currentResult;
		}
	}
	return maxWorkerResult;
}