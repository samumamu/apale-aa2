var x = 1;

while(x<=51)
{
    if(x<=51)
    {
        document.getElementById('while').innerHTML += x+' ';
    }
    else
    {
        document.getElementById('while').innerHTML = x;
    }
    x += 2;
}

var y = 0;

do
{
    y += 2;
    if(y<=51)
    {
        document.getElementById('do-while').innerHTML += y+' ';
    }
    else
    {
        document.getElementById('do-while').innerHTML = y;
    }
}while(y<50)

for(var a=1, b=0; b<13; a*=2, b++)
{
    var z = a+b;
    document.getElementById('for').innerHTML += z+' ';
}