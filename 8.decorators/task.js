//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper (...arr) {
    const hash = md5(arr);
    const objectInCache = cache.find((item) => item.hash === hash);

    if (objectInCache) {
        console.log("Из кеша: " + objectInCache.values);
        return "Из кеша: " + objectInCache.values;
    }

    const result = func(...arr);
    cache.push({
        hash: hash,
        values: result
    });
    if(cache.length > 5){
        cache.shift();
    }

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
  }
  return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  let isThrottled = true;

  function wrapper(...args) {
    wrapper.allCount++;

    if(isThrottled){
        wrapper.count++;
        func(...args);
        isThrottled = false;
    }
    
    if(timeoutId){
        clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
        wrapper.count++;
        timeoutId = null;
        func(...args);
    }, delay);
  }

  wrapper.allCount = 0;
  wrapper.count = 0;

  return wrapper;
}