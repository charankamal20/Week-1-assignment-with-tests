let n = 0;

function printTime()   {
    console.clear();
    n++;
    console.log(n);
}

setInterval(printTime, 1000);