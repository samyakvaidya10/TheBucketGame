var pos=0;
var bucketPos=document.getElementById("box");
var limitBor=document.getElementById("limit");
var dropPos=document.getElementById("drop");
var step;
var limit;
calibration();
dropping(limitBor.offsetLeft,limitBor.offsetWidth);
function moveRight(){
    if(!(((bucketPos.offsetLeft+bucketPos.offsetWidth)+step)>limit)){
        pos=pos+10;
        var pos_string=pos+"%";
        bucketPos.style.position="relative";
        bucketPos.style.left=pos_string;
    }
}
    
function moveLeft(){
    if(!(((bucketPos.offsetLeft)-15)<0)){
        pos=pos-10;
        var pos_string=pos+"%";
        bucketPos.style.position="relative";
        bucketPos.style.left=pos_string;
    }
    
}

function calibration(){
    moveRight();
    step=bucketPos.offsetLeft;
    //console.log(step);
    limit=((step*8)+bucketPos.offsetWidth);
    limitBor.style.width=((limit-10)+"px");
}

function dropping(start, end){
    console.log(limitBor.offsetLeft);
    console.log(limitBor.offsetWidth);
    var newDropPos=Math.random(end-start)*100;
    console.log(newDropPos);
    dropPos.style.position="relative";
    var newpos_string=newDropPos+"%";
    dropPos.style.left=newpos_string;
    console.log(dropPos.offsetLeft)
}
setInterval(dropping,3000);