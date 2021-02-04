/**
 * @name objectGetClass
 * @description Retrieve instance class name
 * @param {*} value Object
 * @returns {String}
 */
export function objectGetClass(value: any): string {
  if (value && typeof value === "object" && "constructor" in value && "name" in value.constructor) {
    return value.constructor.name;
  }
  return "";
}
