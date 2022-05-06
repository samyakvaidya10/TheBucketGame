var pos=40;
var bucketPos=document.getElementById("box");
var limit=document.getElementById("border");
function moveRight(){
    if(!(((bucketPos.offsetLeft+bucketPos.offsetWidth)+25)>limit.offsetWidth)){
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

