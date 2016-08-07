//空行
function br(){
  document.writeln("<br/>");
}
//输出语句
function print(str){
  document.writeln(str);
}
function printTitle(str,i){
  var title;
  if (arguments.length>=2) {
    title="h"+i;
  }else{
    title="h2";
  }
  document.writeln("<"+title+">"+str+"</"+title+"><br/>");
}
//输出带换行
function println(str){
  print(str+"<br/>");
}
