function circleFun(r) {
    this.circumference = function(){
        return "周长是："+ 2*r*Math.PI;
    },
    this.area = function(){
        return "面积是："+ r*r*Math.PI;
    }
}
module.exports = {
    circleFun:circleFun,
    circumference:this.circumference,
    area:this.area
}

//下面是老师的代码！
// /fromyang/2910-9-11