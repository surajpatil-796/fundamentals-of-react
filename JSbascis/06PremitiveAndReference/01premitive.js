/**
 * When value is assigned to a variable
 * JS engine must determine if its primitive or reference value
 */

 //PRIMITIVE VALUES
 /**
  * Undefined, null, boolean, number and string
  * you will be manipulating the actual value stored in the variable
  * you cannot add properties to the primitive value
  * value stored in the variable object is copied from one variable to another
  * 
  */

  //REFERENCE VALUES
  /**
   * objects stored in the memory
   * upu will be manipulating the refernce to the object no thte actual object
   * you can add, change or delete properties and methods to  a reference values
   * value stored in the variable object is copied into the location for new variable but the value is actually a pointer to an object stored in the memory stack. Once the operation is complete, two variables point to the exact same object.Changes are reflected to one another
   */

   //PREMITIVE VALUES

var name = "SURAJ" 
name.age = 30 //property age is gone
   
//only reference values can have properties defined dynamically for later use 

//copying values
// var num = 5
// var num2 = num1

var obj1 = new Object()
var obj2 = obj1
obj1.name = "Suraj"
console.log(obj2.name) //Suraj 
/**
 * obj1 is filled with Object instance
 * value is then copied to object 2
 * now both variables are pointing to the same object
 * when property name is set on obj1
 * it can be accessed from object 2
 * because they point(reference to the same object)
 */