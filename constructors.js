//Persion构造函数
function Persion (name,age,sex){
  this.name=name;
  this.age=age;
  this.sex=sex;
  this.toString=function (){
    var xb;
    if (sex==1) {
      xb='男';
    }else if(sex==0){
      xb='女';
    }else{
      xb='中性';
    }
    return "这个人的名字叫"+this.name+" age="+this.age+" sex="+xb;
  };
}
//Dog 构造函数
function Dog(name,age,sex){
  this.name=name;
  this.age=age;
  this.sex=sex;
  this.toString=function (){
    var xb;
    if (sex==1) {
      xb='雄';
    }else if(sex==0){
      xb='雌';
    }else{
      xb='中性';
    }
    return "这条小狗叫"+this.name+" age="+this.age+" sex="+xb;
  };
}
