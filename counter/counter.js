$("document").ready(function () {
    
    let buttons = $("button");
    buttons.click(function () {
        buttonClicked($(this))
        
       
    });
    //window["functionName"]();

})
function buttonClicked(element){
    console.log(element.text())
    
    console.log($(this))
let targets = $(".counter");
targets.each(function (index) {
    window[element.text()](targets[index]);
    // if (typeof $(targets[index]).text !== "undefined") count(targets[index])
});
}



async function v1(target) {
    console.log('v1');
    let countDown = $(target);
    let input = countDown.text().trim();
    let unit = input.replace(/(^\d+)/g, '');
    let value = input.match(/(^\d+)/g);
    console.log(unit)
    console.log(value)
    let ms = 1;
    if (isNumeric(value)) {
        for (let i = 0; i <= value; i++) {
            if (i > value - 5) {
                ms = ms + 50;
            } else if (i > value - 10) {
                ms = ms + 10;
            } else if (i > value - 20) {
                ms = 40;
            } else if (i > value - 30) {
                ms = 30;
            } else if (i > value - 40) {
                ms = 20;
            } else if (i > value - 50) {
                ms = 10;
            } else if (i > value - 300) {
                ms = 10;
            } else if (i > value - 1000) {
                ms = 1;
                i= i+13;
            } else if (i > value - 5000) {
                ms = 1;
                i= i+127;
            } else if (i > value - 10000) {
                ms = 1;
                i= i+197;
            } else if (i > value - 40000) {
                ms = 1;
                i= i+697;
            } 
           // if(i < value - 200 && i %10  ) {
            //do nothing
           // } else {
            await sleep(ms)
                        countDown.text(i + unit);

           // }
            
        }
    }
}


async function v2(target) {
    console.log('v2');
    let countDown = $(target);
    let input = countDown.text().trim();
    let unit = input.replace(/(^\d+)/g, '');
    let value = input.match(/(^\d+)/g);
    // console.log(unit)
    // console.log(value)
    let ms = 10;
    if (isNumeric(value)) {
        for (let i = 100; i >= 1; i--) {
            let x = Math.floor(value / i);

            // console.log(Math.round(x));
            if (i > value - 5) {
                ms = ms + 50;
            } else if (i > value - 10) {
                ms = ms + 10;
            } else if (i > value - 20) {
                ms = 40;
            } else if (i > value - 30) {
                ms = 30;
            } else if (i > value - 40) {
                ms = 20;
            } else if (i > value - 50) {
                ms = 10;
            } else if (i > value - 300) {
                ms = 10;
            } else if (i > value - 1000) {
                ms = 1;
                i = i + 13;
            }
            await sleep(ms);
            countDown.text(x + unit);

            // }

        }
    }
}
async function v3(target) {
    console.log('v3');
    let countDown = $(target);
    let input = countDown.text().trim();
    let unit = input.replace(/(^\d+)/g, '');
    let value = input.match(/(^\d+)/g);
    // console.log(unit)
    // console.log(value)
    let ms = 10;
    if (isNumeric(value)) {
        for (let i = 100; i >= 1; i--) {
            let x = Math.round(value / i);

            // console.log(Math.round(x));
            if (i > value - 5) {
                ms = ms + 50;
            } else if (i > value - 10) {
                ms = ms + 10;
            } else if (i > value - 20) {
                ms = 40;
            } else if (i > value - 30) {
                ms = 30;
            } else if (i > value - 40) {
                ms = 20;
            } else if (i > value - 50) {
                ms = 10;
            } else if (i > value - 300) {
                ms = 10;
            } else if (i > value - 1000) {
                ms = 1;
                i = i + 13;
            }
            await sleep(ms);
            countDown.text(x + unit);

            // }

        }
    }
}
async function v4(target) {
    console.log('v4');
    let countDown = $(target);
    let input = countDown.text().trim();
    let unit = input.replace(/(^\d+)/g, '');
    let value = input.match(/(^\d+)/g);
    // console.log(unit)
    // console.log(value)
    let ms = 10;
    if (isNumeric(value)) {
        for (let i = 100; i >= 1; i--) {
            let x = Math.round(value / i);

            // console.log(Math.round(x));
            if (i > value - 5) {
                ms = ms + 50;
            } else if (i > value - 10) {
                ms = ms + 10;
            } else if (i > value - 20) {
                ms = 40;
            } else if (i > value - 30) {
                ms = 30;
            } else if (i > value - 40) {
                ms = 20;
            } else if (i > value - 50) {
                ms = 10;
            } else if (i > value - 300) {
                ms = 10;
            } else if (i > value - 1000) {
                ms = 1;
                i = i + 13;
            }
            await sleep(ms);
            countDown.text(x + unit);

            // }

        }
    }
}
async function v5(target) {
    console.log('v5');
    let countDown = $(target);
    let input = countDown.text().trim();
    let unit = input.replace(/(^\d+)/g, '');
    let value = input.match(/(^\d+)/g);
    // console.log(unit)
    // console.log(value)
    let ms = 10;
    if (isNumeric(value)) {
        for (let i = 100; i >= 1; i--) {
            let x = Math.round(value / i);

            // console.log(Math.round(x));
            if (i > value - 5) {
                ms = ms + 50;
            } else if (i > value - 10) {
                ms = ms + 10;
            } else if (i > value - 20) {
                ms = 40;
            } else if (i > value - 30) {
                ms = 30;
            } else if (i > value - 40) {
                ms = 20;
            } else if (i > value - 50) {
                ms = 10;
            } else if (i > value - 300) {
                ms = 10;
            } else if (i > value - 1000) {
                ms = 1;
                i = i + 13;
            }
            await sleep(ms);
            countDown.text(x + unit);

            // }

        }
    }
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}