//6.
var arg1 = process.argv[2];
if(arg1 == "-h"){
    console.log("帮助：命令行参数错误，需为算术运算式");
}
else{
    var res = eval(arg1);
    console.log(arg1 + "=%s",res);
}