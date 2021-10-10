window.addEventListener('load',function(){
   
   
   
   
   
    var xOro=false;
    var count=0;
    var gamewon=false;
    var showboard= document.querySelectorAll('body #board div');

    for(let i=0;i<showboard.length;i++){
        showboard[i].classList.add('square');
    }



    for(let i=0;i<showboard.length;i++){
        showboard[i].addEventListener('click', marksqr);
    }
    


    function marksqr(sqr){
        var arrayofsquares=Array.from(showboard);
        var indexes=arrayofsquares.indexOf(sqr.target);
        if(xOro==false && arrayofsquares[indexes].innerHTML==""&&gamewon==false){
            arrayofsquares[indexes].innerHTML="O";
            arrayofsquares[indexes].classList.add('O');
            arrayofsquares[indexes].classList.toggle("hover");
            xOro=true
            count++;
            if (count>=5){
                if (checkwin()=="O"){
                    document.getElementById('status').innerHTML="Congratulations! O is the Winner!";
                    document.getElementById('status').classList.add("you-won");
                    document.getElementById('status').classList.add("before");
                    document.getElementById('status').classList.add("after");
                    gamewon=true;
                }
            }
        }
        else if(xOro==true && arrayofsquares[indexes].innerHTML==""&&gamewon==false){
                arrayofsquares[indexes].innerHTML="X";
                arrayofsquares[indexes].classList.add('X');
                arrayofsquares[indexes].classList.toggle("hover");
                xOro=false;
                count++;
                if (count>=5){
                    if (checkwin()=="X"){
                        document.getElementById('status').innerHTML="Congratulations! X is the Winner!";
                        document.getElementById('status').classList.add("you-won");
                        document.getElementById('status').classList.add("before");
                        document.getElementById('status').classList.add("after");
                        gamewon=true;
                    }
                }
        }

    }





    for(let i=0;i<showboard.length;i++){
        showboard[i].addEventListener('mouseover', hovering);
    }

    function hovering(sqr){
        var arrayofsquares=Array.from(showboard);
        var indexes=arrayofsquares.indexOf(sqr.target);
        if (arrayofsquares[indexes].innerHTML==""){
            arrayofsquares[indexes].classList.toggle("hover",true);
        }
    }
    
    for(let i=0;i<showboard.length;i++){
        showboard[i].addEventListener('mouseout', msout);
    }

    function msout(sqr){
        var arrayofsquares=Array.from(showboard);
        var indexes=arrayofsquares.indexOf(sqr.target);
        if (arrayofsquares[indexes].innerHTML==""){
            arrayofsquares[indexes].classList.toggle("hover");
        }
    }

    
    
        
    function checkwin(){
        var combo=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]];
        var win=false;
        var arrayofsquares=Array.from(showboard);
        for(i=0;i<combo.length;i++){
            if(arrayofsquares[combo[i][0]].innerHTML=="X"&&arrayofsquares[combo[i][1]].innerHTML=="X"&&arrayofsquares[combo[i][2]].innerHTML=="X"){
                return "X"
            }
            else if(arrayofsquares[combo[i][0]].innerHTML=="O"&&arrayofsquares[combo[i][1]].innerHTML=="O"&&arrayofsquares[combo[i][2]].innerHTML=="O"){
                return "O"
            } 
        }
        return "none";
    }

    
    document.querySelector('.btn').addEventListener("click",fresh);
    function fresh(){
        gamewon=false;
        var arrayofsquares=Array.from(showboard);
        for(let i=0;i<showboard.length;i++){
            console.log(i);
            arrayofsquares[i].innerHTML=""
            if (arrayofsquares[i].classList.contains('O')){
                arrayofsquares[i].classList.remove('O');
            }
            else{
                arrayofsquares[i].classList.remove('X');
            }
        }
        document.getElementById('status').innerHTML="Move your mouse over a square and click to play an X or an O.";
        document.getElementById('status').classList.remove("you-won");
        document.getElementById('status').classList.remove("before");
        document.getElementById('status').classList.remove("after");

    }
});


