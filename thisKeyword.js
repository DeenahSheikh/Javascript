let person={
    name:"Ishaan",

    normalFunction:function(){
        console.log("Normal:", this.name);
    },

    arrowFunction:() =>{
        console.log("Arrow:", this.name);
    }
};

person.normalFunction();
person.arrowFunction();