const list1=['r','g','b','y'];
var list2=[];
var ch=false;
var level=0
var userlist=[];
$(document).keydown(function(){
    if(!ch){
        nextseq();
        ch=true;
    }
});

$(".but").click(function(){
    var userColor=this.id;
    userlist.push(userColor);
    addAnimation(userColor);
    addSound(userColor);
    check(userlist.length-1);
})

function nextseq(){
    userlist=[];
    var x=Math.floor(Math.random()*4);
    var randomColor=list1[x];
    list2.push(randomColor);
    addAnimation(randomColor);
    addSound(randomColor);
    $("#head").text("Level "+level);
    level++;
}

function check(num){
    if(userlist[num]==list2[num]){
        if(userlist.length==list2.length){
            setTimeout(function(){
                nextseq();
            },1000);
        }
    }
    else if(userlist[num]!=list2[num]){
        addSound("wrong");
        $("body").addClass("wrong");
        setTimeout(function(){
            $("body").removeClass("wrong");
        },200);
        $("#head").text("Wrong Answer");
        setTimeout(function(){
            StartOver();
        },1600);
    }
}

function addAnimation(name){
    $("#"+name).addClass("click");
    setTimeout(function(){
        $("#"+name).removeClass("click");
    },200);
}

function addSound(name){
    var a=new Audio("./assets/"+name+".mp3");
    a.play();
}

function StartOver(){
    $("#head").text("Press Any Key To Start");
    ch=false;
    level=0;
    // userlist=[];
    list2=[];
}

$(document).keydown(function(event){
    if (event.key===" "){
        event.preventDefault();
    }
})





