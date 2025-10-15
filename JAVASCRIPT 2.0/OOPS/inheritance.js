
class car {
    constructor(n,b) {
        this.name = n;
        this.brand =b;
    }

    showDetails() {
        console.log(`${this.name} ${this.brand}`);
        return `${this.name} ${this.brand} ${this.buyer}`
    }

}


/* let c1 = new car("desire", "suzuki");
  console.log(c1);
  console.log(c1.showDetails()) ;
 */


  class SUV extends car {
    constructor(x, y, z) {
        super(x, y);
        this.buyer = z;
    }
  }


  let c1 = new SUV ("defender", "landrover", "nishad_ahmad");

  console.log(`c1:`, c1);

  console.log(c1.showDetails());

  /* 2nd child class */

  class miniSUV extends SUV{
     constructor (x, y, z, m) {
        super(x,y,z);
        this.look=m
     }
  }

  let c2 = new miniSUV ("defender", "landrover", "nishad_ahmad", "sporty");
  console.log(`c2:`, c2);
