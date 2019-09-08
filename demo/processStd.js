var i=0;
process.stdin.on("data",function(data){
    i++;
    if(i == 4){
        console.log(data.toString());
        process.exit();
    }
    else{
        // console.log(data.toString());
        console.log("Name:");
        if(i==1){
            
            console.log( data.toString());
        }
    }
})