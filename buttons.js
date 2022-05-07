var pos=0;
var bucketPos=document.getElementById("box");
var limitBor=document.getElementById("limit");
var step;
var limit;
calibration();
function moveRight(){
    if(!(((bucketPos.offsetLeft+bucketPos.offsetWidth)+step)>limit)){
        pos=pos+10;
        var pos_string=pos+"%";
        document.getElementById("box").style.position="relative";
        document.getElementById("box").style.left=pos_string;
    }
}
    
function moveLeft(){
    if(!(((bucketPos.offsetLeft)-15)<0)){
        pos=pos-10;
        var pos_string=pos+"%";
        document.getElementById("box").style.position="relative";
        document.getElementById("box").style.left=pos_string;
    }
    
}

function calibration(){
    moveRight();
    step=bucketPos.offsetLeft;
    //console.log(step);
    limit=((step*8)+bucketPos.offsetWidth);
    limitBor.style.width=((limit-10)+"px");
}
