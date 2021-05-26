player1_name=localStorage.getItem("player1_name")
player2_name=localStorage.getItem("player2_name")
player1_score=0
player2_score=0
document.getElementById("player1_name").innerHTML=player1_name+":"
document.getElementById("player2_name").innerHTML=player2_name+":"
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("playerquestion").innerHTML="Question turn-"+player1_name;
document.getElementById("playeranswer").innerHTML="Answer turn-"+player2_name;
function send(){
get_word=document.getElementById("word").value;
word=get_word.toLowerCase();
console.log("wordInLowerCase"+word);

charAt1=word.charAt(1);
console.log(charAt1);
lengthdivide=Math.floor(word.lengthdividedbytwo);
charAt2=word.charAt(lengthdivide);
console.log(charAt2);

lengthminus1=word.length-1
charAt3=word.charAt(lengthminus1)
console.log(charAt3);
remove_charAt1=word.replace(charAt1,"_")
remove_charAt2=remove_charAt1.replace(charAt2,"_")
remove_charAt3=remove_charAt2.replace(charAt3,"_");
console.log(remove_charAt3)
question_word="<h4 id='word_display'> q. "+remove_charAt3+"</h4>";
inputbox="<br>Answer:<input type='type' id='input_check_box'>";
checkbutton="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
row=question_word+inputbox+checkbutton
document.getElementById("output").innerHTML=row
document.getElementById("word").value="";
}
question_turn="player1"
answer_turn="player2"
function check(){
    getanswer=document.getElementById("input_check_box").value;
    answer=getanswer.toLowerCase();
    console.log("answerinlowercase"+answer);
    if (answer==word){
        if (answer_turn=="player1"){
            player1_score=player1_score+1
        document.getElementById("player1_score").innerHTML=player1_score
        }
        else{
            player2_score=player2_score+1
            document.getElementById("player2_score").innerHTML=player1_score  
        }
    }
    if (question_turn=="player1"){
        question_turn="player2"
        document.getElementById("playerquestion").innerHTML="question_turn"+player2_name
    }
    else{
        question_turn="player1"
        document.getElementById("playerquestion").innerHTML="question_turn"+player1_name   
    }
    if (answer_turn=="player1"){
        answer_turn="player2"
        document.getElementById("playeranswer").innerHTML="answer_turn"+player2_name
    }
    else{
        answer_turn="player1"
        document.getElementById("playeranswer").innerHTML="answer_turn"+player1_name   
    }
    document.getElementById("output").innerHTML="";
}