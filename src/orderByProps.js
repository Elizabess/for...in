export function orderByProps(obj, order) {
    const result = [];
  
    for (const key of order) {
      if (key in obj) {
        result.push({ key, value: obj[key] });
      }
    }
  
    const remainingKeys = Object.keys(obj).filter(key => !order.includes(key));
    remainingKeys.sort();
  
    for (const key of remainingKeys) {
      result.push({ key, value: obj[key] });
    }
  
    return result;
}
  