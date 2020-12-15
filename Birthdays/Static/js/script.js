function ageindays(){
    var birthyear = prompt("What Year were born in... ?");
    var days = (2018 - birthyear )*365;
    var h1 = document.createElement('h1');
    var textanswer =document.createTextNode('You are '+days+ ' years old');
    h1.setAttribute('id','days');
    h1.appendChild(textanswer);
    document.getElementById('result').appendChild(h1);

}

function reset(){
    document.getElementById('days').remove();
}