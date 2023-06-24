let n = 1;

function timer()    {
    setTimeout(() => {
        console.clear();
        console.log(n);
        n++;
        timer();
    }, 1000);   
}

timer();