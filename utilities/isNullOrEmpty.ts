export function isNullOrEmpty(str: any) {
  var returnValue = false;
  if (!str
    || str == null
    || str === 'null'
    || str === ''
    || str === '{}'
    || str === 'undefined'
    || str === undefined
    || str.lenght === undefined
    || str.length === 0) {
    returnValue = true;
  }
  return returnValue;
}