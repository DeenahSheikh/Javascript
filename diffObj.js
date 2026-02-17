let obj1={
    name:"Object1",
    show:function(){
        console.log("obj1:", this.name);
    }
};
let obj2={
    name:"Object2"
};
let obj3={
    name:"Object3"
};
let obj4={
    name:"Object4"
};
let obj5={
    name:"Object5"
};
obj2.show=obj1.show;
obj3.show=obj1.show;
obj4.show=obj1.show;
obj5.show=obj1.show;

obj1.show();
obj2.show();
obj3.show();
obj4.show();
obj5.show();

let test=obj1.show;
test();