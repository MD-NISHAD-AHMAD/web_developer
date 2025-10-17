// clouser topics...

// clouseris related to function...

// this is the parent function...


  const justFunction = () => {
    let n = 'NISHAD'; // this is going to garbage

    return () => {
        // let n = "hello"; // because this is running and prev n is destroyed after end of executional stack
        // this is the child function of the parent function

        return n;
    };
  };


//   this is the one way of the calling the function

  console.log(justFunction()());

//  this is the one way to invoke the function

  
 /* const ans = justFunction();
  ans();
  */


  /*
   notes:--  its closes the variables that are dependec its like freeze them its does not allow to them
   destroyed only there is some dependence, on what that means of dependence was -> A child function need a
   variable from a parent function even those parents function had been called or after the function called the variabale 
   destroyed but the parents func share the variable to the child function...

   clouser happened to nested function or there has to any dependence tp parent func to child func...

   */

    const justFunction1 = () => {
      let n = "NISHAD"; // this is going to garbage 

      return () => {
        return () => {
          let n = "HELLO";
          return n;
        };

        
      };

    };

    console.log(justFunction1()()());

   