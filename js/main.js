
window.onload=function(){
	var setup=document.getElementById('setup');
	var reset=document.getElementById('reset');
	var confirm=document.getElementById('confirm');
	var correct=document.getElementById('setname');
	var length=charactors.length;

	setup.onclick=function(){
		adding(length);
	}
	reset.onclick=function(){
		removing();
	}
	confirm.onclick=function(){
		confirmed();
	}

}

var players=[];
var num=0;
var index;
var playersamount=0;
var selected;
var charactor;
var playeringame=0;
var playername="";


function adding(juese,div){
	num=document.getElementById('member').value;
	charactor=parseInt(Math.random()*juese);
	for(var i=0;i<num;i++){
		
	$('#layout-'+i).append('<div class="added flip" id="player-'+i+'"></div>');
	$('#layout-'+i).append('<div class="back flip" id="back-'+i+'"></div>');
	var player=document.getElementById("player-"+i);
	players.push(player);
	playersamount++;
	playeringame++;
	}
	
	for(var i=0;i<players.length;i++){
		document.getElementById('player-'+i).innerHTML=charactors[charactor].A;
	}
	var coverid=parseInt(Math.random()*players.length);
	document.getElementById('player-'+coverid).innerHTML=charactors[charactor].B;

	setTimeout(function(){
	$("#names").css('display','block');
	$("#bg").css('display','block');
	},1000);
	


	document.getElementById('setname').onclick=function(){
		playername=document.getElementById('name').value;
		$("#names").css('display','none');
		$("#bg").css('display','none');
	}

	
	for(var i=0;i<players.length;i++){
		document.getElementById('back-'+i).onclick=function(){
			var self=this;
			index=self.getAttribute('id');
			self.className="back fliped";

			setTimeout(function(){

                $("#alert").css('display','block');

                },1000);
		}
	}	

}


function removing(){
	for(var i=0;i<num;i++){
	document.getElementById('player-'+i).remove();
	document.getElementById('back-'+i).remove();
	players.pop();
		}
	$("#alert").css('display','none');
	$("#member").value="";
	$("#names").css('display','none');
	$("#bg").css('display','none');
}


function confirmed(){

	$("#alert").css('display','none');
	 document.getElementById(index).style.background="#CCC";
     document.getElementById(index).className="back flip";
     setTimeout(function(){

     	 document.getElementById(index).onclick=function(){
      	return false;}

  
      
      	
     },200);
     
     playersamount--;


     setTimeout(function(){
     	
     	if(playersamount!=0){
     	document.getElementById(index).innerHTML=playername;
     	playername="";
      	document.getElementById('name').value="";
      	setTimeout(function(){$("#names").css('display','block');
      	$("#bg").css('display','block'); 		
      	},1000);}
      	else if(playersamount==0){     	
     	document.getElementById(index).innerHTML=playername;
     	$("#names").css('display','none');
     	$("#bg").css('display','none');
     	//Make a pop up div instead
     	gamestart();}
	 },500);
     
 }

 function gamestart(){
 		for(var i=0;i<players.length;i++){
 			document.getElementById('back-'+i).onclick=function(){
 				selected=this.previousSibling.getAttribute('id');
 				if(document.getElementById(selected).innerHTML==charactors[charactor].A){
 					$('#result').text("Loser");
 					this.style.background="url(http://localhost/undercover/img/error.jpg)";
 					playeringame--;
 					this.onclick=function(){
 						return false;
 					}
 					if(playeringame==2){
 						alert("gameover");
 						gameover();
 					}
 				}else if(document.getElementById(selected).innerHTML==charactors[charactor].B){
 					$("#result").text("Winner");
 					gameover();
 				}
 			}
 		}
}

function gameover(){
	for(var i=0;i<players.length;i++){
		document.getElementById('back-'+i).className="back fliped";
	}
	
}






