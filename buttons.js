var pos=0;
var bucketPos=document.getElementById("box");
var limitBor=document.getElementById("limit");
var dropPos=document.getElementById("drop");
var step;
var score=0;
var limit;
var life=3;
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
    dropPos.style.animation="falling 3s infinite";
    var newDropPos=Math.random(end-start)*100;
    dropPos.style.position="relative";
    var newpos_string=newDropPos+"%";
    dropPos.style.left=newpos_string;
}
function scoreCount(){
    if(dropPos.offsetLeft>=bucketPos.offsetLeft&&(dropPos.offsetLeft+dropPos.offsetWidth)<=(bucketPos.offsetLeft+bucketPos.offsetWidth)&&bucketPos.offsetTop<=dropPos.offsetTop){
        score++;
        console.log("score "+score);
        document.getElementById("sc").innerHTML=score;
    }else if(dropPos.offsetTop>=(bucketPos.offsetTop+10)){
        if(life<=0){
            stopGame()
        }
        document.getElementById("sc").innerHTML="out";
        life--;
    }
}   
var game = setInterval(dropping,3000);
setInterval(scoreCount,1000);

function stopGame(){
    clearInterval(game);
    dropPos.style.animation="";
}
