function Play(){
    var i = 0;
    var hs = 0;
    while(i < 1000000)
    {
        var cs = Play1();
        if(cs > hs)
        {
            hs = cs;
        }
        i++;
    }
    var aCtrl = document.getElementById("a");
    // aCtrl.value = hs;
    aCtrl.innerText = hs;
}
function Play1(){
    var total = 0;
    var r = Roll();
    while(r != 1)
    {
        total += r;

        r = Roll();
    }
    return total;
    
}
function Roll(){
    return Math.floor(Math.random()*6) +1;
}