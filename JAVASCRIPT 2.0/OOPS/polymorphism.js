// poly means multiple

// we have one method available in multiple classes that call poly.

// polymorphism is basically you have method/property in multiple object.

  class vehicle {
    run() {
        console.log("vehicle is running");
    }

   }

   class car1 {
    run() {
        console.log("car is running");
    }
   }

   class Truck {
      run() {
        console.log("Truck is running");
      }
   }

   let v1 = new vehicle();
   let v2 = new car1();
   let v3 = new Truck();


   v1.run();
   v2.run();
   v3.run();

//    This is different example of ploymorphism.


   class Animal {
    speak() {
        console.log("Animal speaks");
    }
   }

   class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
   }

   class Cat extends Animal {
    speak() {
        console.log("cat meows");
    }
   }


   function makeSound(animal) {
    animal.speak(); // polymorphism behaviour
   }

   let dog = new Dog();
   let cat = new Cat();

   makeSound(dog); //  Dog Barkss..
   makeSound(cat); // cat meows..

//  This is with object no class method...


  const printer = {
    print: () => console.log("Default printer")
  };

  const pdfprinter = {
    print: () => console.log("printing PDF")
  };

  const htmlprinter = {
    print: () => console.log("printing html")
  }

  function startPrint(printerObj) {
    printerObj.print();
  }

  startPrint(pdfprinter);
  startPrint(htmlprinter)