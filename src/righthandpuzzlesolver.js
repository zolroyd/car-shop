var cityMap = "O__;_XT;___";
solution(cityMap);
var cityMap = "__O;_XX;T__";
solution(cityMap);
/*var cityMap = "O__;_XT;___";
solution(cityMap);
var cityMap = "O__;_XT;___";
solution(cityMap);*/

//This is incomplete.
function solution(cityMap) {
    var cityArr = cityMap.split(';');
    cityArr.forEach(function(item, index){
        cityArr[index] = item.split('');
    });

    var officerX = false;
    var officerY = false;
    cityArr.forEach(function(item, index) {
        item.forEach(function(item2, index2) {
            if (item[index2] === 'O') {
                officerX = index2;
                officerY = index;
                console.log('officer Location: ' + officerX + ', ' + officerY);
            }
        });
    });
    var solved = false;
    var count = 0;
    var currentSol = false;
    move(officerX, officerY, 'right');
    console.log(currentSol);
    function move(x, y, direction) {
        if(checkSolution(x, y) === false) {
            switch(direction) {
                case 'right':
                    if(cityArr[y][x + 1] != undefined && cityArr[y][x + 1] != 'X') {
                        console.log('hit1');
                        move(x, y, 'down');
                    } else {
                        count++;
                        console.log('hit2');
                        move(x + 1, y, 'down');
                    }
                    break;
                case 'down':
                    if(cityArr[y + 1] != undefined && cityArr[y + 1][x] != 'X') {
                        console.log('hit3');
                        move(x, y, 'left');
                    } else {
                        count++;
                        console.log('hit4');
                        move(x, y + 1, 'left');
                    }
                    break;
                case 'left':
                    if(cityArr[y][x - 1] != undefined && cityArr[y][x - 1] != 'X') {
                        console.log('hit5');
                        move(x, y, 'up');
                    } else {
                        count++;
                        console.log('hit6');
                        move(x - 1, y, 'up');
                    }
                    break;
                case 'up':
                    if(cityArr[y - 1] != undefined && cityArr[y - 1][x] != 'X') {
                        console.log('hit7');
                        move(x, y, 'left');
                    } else {
                        count++;
                        console.log('hit8');
                        move(x, y + 1, 'left');
                    }
                    break;
            }
        }
        if (currentSol === false) {
            console.log('hit9');
            switch (direction) {
                case 'right':
                    move(x, y, 'down');
                    break;
                case 'down':
                    move(x, y, 'left');
                    break;
                case 'left':
                    move(x, y, 'up');
                    break;
                case 'up':
                    move(x, y, 'right');
                    break;
            }
        }
    }
    function checkSolution(x, y) {
        console.log(x + ', ' + y);
        if ((cityArr[y][x + 1] !== undefined && cityArr[y][x + 1] == 'T')
            || (cityArr[y][x - 1] !== undefined && cityArr[y][x - 1] == 'T')
            || (cityArr[y + 1] !== undefined && cityArr[y + 1][x] == 'T')
            || (cityArr[y - 1] !== undefined && cityArr[y - 1][x] == 'T')
        ) {
            count++;
            if (currentSol === false || currentSol > count) {
                currentSol = count;
            }
            console.log('hit10');
            return currentSol;
        } else {
            return false;
        }
    }
};
