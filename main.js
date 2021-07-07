var add = document.getElementById('+');
add.onclick = function(){
    var st= Number(document.getElementById('st-number').value);
    var nd= Number(document.getElementById('en-number').value);
    var sum = st + nd ;
    document.getElementById('result').value='Result : ' + sum;
}

var add = document.getElementById('-');
add.onclick = function(){
    var st= Number(document.getElementById('st-number').value);
    var nd= Number(document.getElementById('en-number').value);
    var sub = st - nd ;
    document.getElementById('result').value='Result : ' + sub;
}

var add = document.getElementById('*');
add.onclick = function(){
    var st= Number(document.getElementById('st-number').value);
    var nd= Number(document.getElementById('en-number').value);
    var multi = st * nd ;
    document.getElementById('result').value='Result : ' + multi;
}

var add = document.getElementById('%');
add.onclick = function(){
    var st= Number(document.getElementById('st-number').value);
    var nd= Number(document.getElementById('en-number').value);
    var pers = st % nd ;
    document.getElementById('result').value='Result : ' + pers;
}

var add = document.getElementById('/');
add.onclick = function(){
    var st= Number(document.getElementById('st-number').value);
    var nd= Number(document.getElementById('en-number').value);
    var divide = st / nd ;
    document.getElementById('result').value='Result : ' + divide;
}



