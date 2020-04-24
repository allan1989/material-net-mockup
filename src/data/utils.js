/**
 * Return an array of unique values (without duplicates)
 * @param   {Array} data  The array containing the products information
 * @return  {Array}       The Array containing all the brands
 */

export const getUniqueValues = data => {
  let all = [];
  data.forEach(el => all.push(el.brand));
  return all.filter((el, i) => all.indexOf(el) === i)
}

/**
 * Return an array of values (with duplicates)
 * @param   {Array} data  The array containing the products information
 * @returns {Array}       The array containing all the brands
 */

 export const getAllValues = data => {
   let all = [];
   data.forEach(el => all.push(el.brand))
   return all;
 }

 /**
  * Return an array filtered by 2 parameters
  * @param    {Array}   arr       The array to filter
  * @param    {String}  key       The key on the object to filter
  * @param    {Array}   filters   The array containing the values used to filter
  * @returns  {Array}             An array filtered by the key if they match given values 
  */

  export const filterArray = (arr, key, filters) =>{
     return arr.filter(el => {
      return filters.indexOf(el[key]) !== -1 
    })
  }

  /**
   * Return an array sorted by a criteria
   * @param   {Array}   arr         The array to sort
   * @param   {String}  criteraia   The criteria used to sort the array
   * @returns {Array}               The original array sorted by the criteria
   */

   export const sortProducts = (arr, criteria) =>{
    let sorted = [];
    switch(criteria){
      case 'brand':
      case 'product':  
        sorted = arr.sort((a, b) => {
          let aLowerCase = a[criteria].toLowerCase();
          let bLowerCase = b[criteria].toLowerCase();
          if(aLowerCase < bLowerCase) return -1;
          if(aLowerCase > bLowerCase) return 1;
          return 0;
        });
        return sorted;

        case 'priceAsc':
        case 'priceDesc':
          sorted = arr.sort((a,b) => {
            let aVal = Number(a.price);
            let bVal = Number(b.price);
            if(criteria === 'priceAsc'){
              if(aVal < bVal) return -1;
              if(aVal > bVal) return 1;
              return 0;
            }
            if(criteria === 'priceDesc'){
              if(bVal < aVal) return -1;
              if(bVal > aVal) return 1;
              return 0;
            }
            return 0;
          })
          return sorted;
    
        default:
          return arr;
    }
  }