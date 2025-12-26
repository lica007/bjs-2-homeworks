function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;
	return arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  return users.filter(user => user.gender === gender).map(user => user.age).reduce((user, item, index, arr) => {
	  user+=item; 
	  if(index === arr.length-1){
		  return user / arr.length
	  } 
	  return user;
  }, 0);
}