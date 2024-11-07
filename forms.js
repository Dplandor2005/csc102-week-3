function validate()
{
   // get variables from form  
   var name = document.getElementById("initstring").value;
   var lname = document.getElementById("str2").value;
   var empNum = document.getElementById("firstnum").value;
// concat name with a space in between 
   var fullname = name+ " " +lname;

   document.getElementById("inputstatus").innerHTML = fullname;
// make sure string is long enough 
   if (fullname.length <=2)
   {
       document.getElementById("inputstatus").innerHTML = "Name not long enough"
   }

   if ( (empNum >1000) || (empNum <100) )
   {
       document.getElementById("inputstatus").innerHTML = "number is not 3 digits";
   }
}