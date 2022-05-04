var pos=0;
function moveRight(){
    pos=pos+10;
    var pos_string=pos+"px";
    document.getElementById("box").style.position="relative";
    document.getElementById("box").style.left=pos_string;
    }
    
function moveLeft(){
    pos=pos-10;
    var pos_string=pos+"px";
    document.getElementById("box").style.position="relative";
    document.getElementById("box").style.left=pos_string;
    }

