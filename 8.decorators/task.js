function cachingDecoratorNew(func) {
let cache = [];

function wrapper(...args) {
    const hash = args.join(","); 
    let objectInCache = cache.findIndex((item) => item.hash === hash);
    if (objectInCache !== -1) { 
        console.log("Из кэша: " + cache[objectInCache].value);
        return "Из кэша: " + cache[objectInCache].value;
    }  
    let value = func(...args); 
    cache.push({hash: hash, value: value});
    if (cache.length >= 5) { 
      cache.shift();
} 
    console.log("Вычисляем: " + value);
    return "Вычисляем: " + value;  

  }
  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  let flag  = false;
  let timerId  = null;

  function wrapper(...args) {
      if (!flag ) {
          flag  = true;
          func(...args);
      }
      clearTimeout(timerId );
      timerId  = setTimeout(() => {
          flag = false;
          func(...args);
      }, ms);
  }
  return wrapper;
}

function debounceDecorator2(func, ms) {
  wrapper.count = 0;
  let debounceDecorator = debounceDecoratorNew(func, ms);
  
  function wrapper(...args) {
      wrapper.count ++;
      debounceDecorator(...args);
  }
  return wrapper;
}