function Tabuada(){
    var num = window.document.getElementById('num')
    var end = window.document.getElementById('end')
    if (num.value.length == 0 || end.value.length == 0){
        window.alert('[ERRO] Digite os numeros!')
    } else{
    var n = Number(num.value)
    var e = Number(end.value)
    var x = 0
    var r = ''
    var res = window.document.getElementById('resposta')
    res.innerHTML = 'A tabuada do número' +'<p>'+n +'<br>'
    do {
        r = n*x
        res.innerHTML += +x +'X' +n +'=' +r +'<br>'
        x++
    } while(x <= e)
}}