/**
 * Return an array of unique values (without duplicates)
 * @param   {Array} data  The array containing the products information
 * @return  {Array}       The Array containing all the brands
 */

export const getUniqueValues = data => {
  let all = [];
  let unique = [];
  data.forEach(el => all.push(el.brand));
  for(let brand of all){
    if(unique.indexOf(brand) === - 1){
      unique.push(brand)
    }
  }
  return unique
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