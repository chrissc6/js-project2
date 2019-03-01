

function Run()
{
    scC = document.getElementById("sc");
    scC.value = "testing";
    var total = 0;

    for(var i=0; i<100000; i++)
    {   
        do
        {
            die = Math.floor(Math.random()*6)+1;
            var ntotal;

            if(die != 1)
            {
                ntotal += die;
                die = 0;
            }
            else
            {
                if(ntotal > total)
                total = ntotal;
                ntotal = 0;
            }
        }
        while(die != 1)
        var hs = `Score: ${total}`
        scC.value = hs;
    }
    
}