friends_array=[];
function submit(){
    var fr1=document.getElementById("sn1").value;
    var fr2=document.getElementById("sn2").value;
    var fr3=document.getElementById("sn3").value;
    var fr4=document.getElementById("sn4").value;
    friends_array.push(fr1);
    friends_array.push(fr2);
    friends_array.push(fr3);
    friends_array.push(fr4);
    console.log(friends_array);
    document.getElementById("display").innerHTML=friends_array;
    document.getElementById("sub").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}
function sorting(){
    friends_array.sort();
    document.getElementById("display").innerHTML=friends_array;
}