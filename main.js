// setInterval(logs,4000)
// function logs() {
// console.log(chosenTemp)
// console.log(chosenTemp2)
// }

//Economics
// var gold = 100;

// function changeMoney() {
//     let goldElement = document.getElementsByClassName("goldCount")[0];
//     goldElement.innerHTML = `${gold}`;
// }

setInterval(function battleCleanUp() {

        for (let key in battleSites) {

            var armyName = battleSites[key].allyName;
            if (battleSites[key].ongoing == true) {
                console.log("battle");

                listCleanUp();
                if (battleSites[key].end == true) {
                    console.log("its ally");
                    battleSites[key].ally = "dummy";
                    battleSites[key].end = false;
                    battleSites[key].allyName = "dummy";
                    battleSites[key].enemy = "dummy";
                    battleSites[key].enemyName = "dummy";
                    battleSites[key].ongoing = undefined;
                    battleSites[key].start = false;
                }
            } else if (battleSites[key].ongoing == false) {

                console.log("battle ended");
                battleSites[key].ally = "dummy";
                battleSites[key].allyName = "dummy";
                battleSites[key].enemy = "dummy";
                battleSites[key].enemyName = "dummy";
                battleSites[key].ongoing = undefined;
                battleSites[key].start = false;
                listCleanUp(armyName);
            }
        }
    }, 2500)
    //тестовое
function fieldCleanUp() {
    var parent = document.getElementsByClassName("battlefield")[0]
    var childs = parent.children
    for (child in childs) {
        console.log(childs[child]);
        var army = childs[child].className
    }

    //"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
}
var unitLimit = 0;
var unitsNow = document.getElementsByClassName("ally").length;
var enemyUnitsNow = document.getElementsByClassName("enemy").length;

function createFakeUnit(unit, y, x, side) {
    var genName = `human${unitsNow}`
    var sheet = window.document.styleSheets[1];
    sheet.insertRule(`.human${unitsNow} {
    position: absolute;
    display: flex;
    top: ${y}px;
    left: ${x}px;
    flex-direction: column;
    flex-wrap: wrap;
    transition: border 0.3s linear;
   }
    `, sheet.cssRules.length);
    sheet.insertRule(`.human${unitsNow}:hover {border: 1px solid blue;;}
        `, sheet.cssRules.length);
    sheet.insertRule(`.human${unitsNow}_${unit}_ally0 {
        
        
 
    }
            `, sheet.cssRules.length);
    unitsNow++
    var human = new Army(genName, unit, "ally");

    human.create("mainLands");
    human.addFakeSoldier();

    let humanArmy = document.getElementsByClassName(genName)[0];
    // armyMovements.movement_left(humanArmy);

    console.log("created");
}

function createunit2() {


    var genName = `human${unitsNow}`
    var sheet = window.document.styleSheets[1];
    sheet.insertRule(`.human${unitsNow} {
    position: absolute;
    display: flex;
    top: 500px;
    left: 600px;
    flex-direction: column;
    flex-wrap: wrap;
    transition: border 0.3s linear;
    border: 1px solid blue;}
    `, sheet.cssRules.length);
    sheet.insertRule(`.human${unitsNow}:hover {border: 1px solid blue;;}
        `, sheet.cssRules.length);
    sheet.insertRule(`.human${unitsNow}_archer_ally0 {
        position: relative;
        height: 40px;
        width: 40px;
        background-image: url("archer.png");
        background-repeat: no-repeat;}
            `, sheet.cssRules.length);
    unitsNow++
    var human = new Army(genName, "archer", "ally");

    human.create();
    human.addSoldier();
    human.addAreaofControl("archer");
    let humanArmy = document.getElementsByClassName(genName)[0];
    armyMovements.movement_left(humanArmy);
    console.log("created");



}

var tabelOfenemies = {
    thrall: {
        type: "thrall",
        count: 3
    }
}

async function createunit3() {


    function timer(v) {
        return new Promise(function(r) {
            return setTimeout(r, v);
        });
    }
    for (let i = 0; i < tabelOfenemies.thrall.count; i++) {




        var genName = `vampire${i}`
        var sheet = window.document.styleSheets[1];
        sheet.insertRule(`.vampire${i} {
    position: absolute;
    display: flex;
    top: 200px;
    left: 200px;
    
    flex-direction: column;
    flex-wrap: wrap;
    transition: border 0.3s linear;
    border: 1px solid blue;}
    `, sheet.cssRules.length);
        sheet.insertRule(`.vampire${i}:hover {border: 1px solid blue;;}
        `, sheet.cssRules.length);
        sheet.insertRule(`.vampire${i}_${tabelOfenemies.thrall.type}_enemy0 {
            position: relative;
        height: 100px;
        width: 100px;
        border: 1px solid red;
        background-image: url("h.gif");
        }
            `, sheet.cssRules.length);

        var vampires = new Army(genName, tabelOfenemies.thrall.type, "enemy");
        vampires.create();
        vampires.addSoldier();


        let vampireArmy = document.getElementsByClassName(genName)[0];
        armyMovements.movement_right(vampireArmy);
        enemyUnitsNow++
        console.log("created");
        await timer(4000);
    }
    // armyMovements.human4();
}



// Armies and etc
var armies = {
    // ally_human1_footman_initial_hp: 0,
    // ally_human1_footman_hp: 0,
    // ally_human1_footman_dmg: 0,
    // ally_human1_footman_soldiers: 0,
    // ally_human2_footman_initial_hp: 0,
    // ally_human2_footman_hp: 0,
    // ally_human2_footman_dmg: 0,
    // ally_human2_footman_soldiers: 0,
    // ally_human3_knight_initial_hp: 0,
    // ally_human3_knight_hp: 0,
    // ally_human3_knight_dmg: 0,
    // ally_human3_knight_soldiers: 0,
    // ally_human4_footman_initial_hp: 0,
    // ally_human4_footman_hp: 0,
    // ally_human4_footman_dmg: 0,
    // ally_human4_footman_soldiers: 0,
    // ally_human5_archer_initial_hp: 0,
    // ally_human5_archer_hp: 0,
    // ally_human5_archer_dmg: 0,
    // ally_human5_archer_soldiers: 0,
    // enemy_vampire1_thrall_initial_hp: 0,
    // enemy_vampire1_thrall_hp: 0,
    // enemy_vampire1_thrall_dmg: 0,
    // enemy_vampire1_thrall_soldiers: 0,
    // enemy_vampire2_thrall_initial_hp: 0,
    // enemy_vampire2_thrall_hp: 0,
    // enemy_vampire2_thrall_dmg: 0,
    // enemy_vampire2_thrall_soldiers: 0,
    // enemy_vampire3_thrall_initial_hp: 0,
    // enemy_vampire3_thrall_hp: 0,
    // enemy_vampire3_thrall_dmg: 0,
    // enemy_vampire3_thrall_soldiers: 0,
    // enemy_vampire4_thrall_initial_hp: 0,
    // enemy_vampire4_thrall_hp: 0,
    // enemy_vampire4_thrall_dmg: 0,
    // enemy_vampire4_thrall_soldiers: 0,
};

var sourseSoldiers = {
    human_peasant_hp: 10,
    human_peasant_dmg: 1,
    human_footman_hp: 10,
    human_footman_dmg: 1,
    human_archer_hp: 5,
    human_archer_dmg: 2,
    human_knight_hp: 25,
    human_knight_dmg: 2,
    vampire_thrall_hp: 5,
    vampire_thrall_dmg: 2,
    vampire_tower_hp: 10,
    vampire_tower_dmg: 5
};

var armyHpInitNames = [];
var armySoldiersNames = [];

var chosenTemp = {
    ally_army: "dummy",
    enemy_army: "dummy",
    ally_army_name: "dummy",
    enemy_army_name: "dummy",
    enemyName: "dummy",
    battle: false,
};

var chosenTemp2 = {
    ally_army: "dummy",
    enemy_army: "dummy",
    ally_army_name: "dummy",
    enemy_army_name: "dummy",
    enemyName: "dummy",
    battle: false,
};

async function startBattle(
    armyName_ally,
    armyName_enemy,
    armyName_neutral,
    ally_type,
    enemy_type,
    neutral_type,
    ongoingBattle
) {

    var whosArmyAlly = armyName_ally.replace(/[0-9]/g, '');
    var whosArmyEnemy = armyName_enemy.replace(/[0-9]/g, '');
    let allyArmyName = `${armyName_ally} ${ally_type} ally`;
    let enemyArmyName = `${armyName_enemy} ${enemy_type} enemy`;

    if (whosArmyAlly == "human" && whosArmyEnemy == "human") {
        battleSites[ongoingBattle].end = true;
    } else {
        battleSites[ongoingBattle].start = true;
    }
    // if (battleSites[ongoingBattle].start === false) {
    //     if (ongoingBattle) {
    //         battleSites[ongoingBattle].start = true;
    //     }
    // } else {
    //     return;
    // }

    var allyArmyInitialHP = `ally_${armyName_ally}_${ally_type}_initial_hp`;
    var enemyArmyInitialHP = `enemy_${armyName_enemy}_${enemy_type}_initial_hp`;
    var allyArmyHP = `ally_${armyName_ally}_${ally_type}_hp`;
    var enemyArmyHP = `enemy_${armyName_enemy}_${enemy_type}_hp`;
    var allyArmyDMG = `ally_${armyName_ally}_${ally_type}_dmg`;
    var enemyArmyDMG = `enemy_${armyName_enemy}_${enemy_type}_dmg`;
    var allySoldiers = `ally_${armyName_ally}_${ally_type}_soldiers`;
    var enemySoldiers = `enemy_${armyName_enemy}_${enemy_type}_soldiers`;

    var battle = `battle_ally_${armyName_ally}_${ally_type}`; //!
    var tempBattle;
    var tempBattle2;
    if (armyName_neutral !== undefined) {
        return;
    } else if (armies[allyArmyName][allyArmyHP] <= 0 || armies[enemyArmyName][enemyArmyHP] <= 0) {
        console.log("no battle");
    }
    console.log(
        "battle betweeen " +
        armyName_ally +
        " and " +
        armyName_enemy +
        " start HERE:____________________"
    );

    if (chosenTemp.ally_army == "dummy" && chosenTemp.enemy_army == "dummy") {
        chosenTemp.ally_army = document.getElementsByClassName(armyName_ally)[0];
        chosenTemp.enemy_army = document.getElementsByClassName(armyName_enemy)[0];
        chosenTemp.ally_army_name = allyArmyHP;
        chosenTemp.enemy_army_name = enemyArmyHP;
        chosenTemp.enemyName = armyName_enemy;
        tempBattle = chosenTemp;
        var ally = chosenTemp.ally_army;
        var enemy = chosenTemp.enemy_army;
    } else if (
        chosenTemp2.ally_army == "dummy" &&
        chosenTemp2.enemy_army == "dummy"
    ) {
        chosenTemp2.ally_army = document.getElementsByClassName(armyName_ally)[0];
        chosenTemp2.enemy_army = document.getElementsByClassName(armyName_enemy)[0];
        chosenTemp2.ally_army_name = allyArmyHP;
        chosenTemp2.enemy_army_name = enemyArmyHP;
        chosenTemp2.enemyName = armyName_enemy;
        tempBattle2 = chosenTemp2;
        var ally = chosenTemp2.ally_army;
        var enemy = chosenTemp2.enemy_army;
    }

    function timer(v) {
        return new Promise(function(r) {
            return setTimeout(r, v);
        });
    }
    loop1: for (
        let i = armies[allyArmyName][allyArmyHP]; i >= -3; i = i - armies[enemyArmyName][enemyArmyDMG]
    ) {
        if (armies[enemyArmyName][enemyArmyHP] <= 0) {
            armies[enemyArmyName][enemyArmyInitialHP] = 0;
            enemyUnitsNow--
            console.log("Enemy is defeated");
            battleSites[ongoingBattle].ongoing = false;

            try {
                tempBattle.battle = false;
                tempBattle2.battle = false;
            } catch (e) {
                // console.log(e);
            }
            armies[enemyArmyName][enemySoldiers] = 0;
            break;
        } else {
            try {
                tempBattle.battle = false;
                tempBattle2.battle = false;
            } catch (e) {
                // console.log(e);
            }
        }
        chosenTemp.ally_army = document.getElementsByClassName(armyName_ally)[0];
        chosenTemp.enemy_army = document.getElementsByClassName(armyName_enemy)[0];
        var ally = chosenTemp.ally_army;
        var enemy = chosenTemp.enemy_army;
        // i = i - armies[enemyArmyDMG];
        armies[allyArmyName][allyArmyHP] = i;
        checkHealthAlly(i, ally, allySoldiers, allyArmyInitialHP, allyArmyName);

        console.log("Ally:" + armies[allyArmyName][allyArmyHP]);
        loop2: for (
            let j = armies[enemyArmyName][enemyArmyHP]; j >= -3; j = j - armies[allyArmyName][allyArmyDMG]
        ) {
            j = j - armies[allyArmyName][allyArmyDMG];
            console.log("Enemy:" + armies[enemyArmyName][enemyArmyHP]);
            // console.log("!!!!" + armies[enemyArmyInitialHP]);
            armies[enemyArmyName][enemyArmyHP] = j;
            checkHealthEnemy(j, enemy, enemySoldiers, enemyArmyInitialHP, enemyArmyName);
            await timer(1000);
            break;
        }
    }

    if (armies[allyArmyName][allyArmyHP] <= 0) {
        unitsNow--
        console.log("Ally is defeated");
        battleSites[ongoingBattle].ongoing = false;
        armies[allyArmyName][allyArmyInitialHP] = 0;
        try {
            tempBattle.battle = false;
            tempBattle2.battle = false;
        } catch (e) {
            console.log(e);
        }
        // if (ally.firstChild) {
        //   ally.removeChild(ally.childNodes[1]); /////STOOOP!!!1111 удалить весь див если хп меньше 0
        // console.log("delite");
        // }
    }
    chosenTemp.ally_army = "dummy";
    chosenTemp.enemy_army = "dummy";
    chosenTemp2.ally_army = "dummy";
    chosenTemp2.enemy_army = "dummy";
}

function checkHealthAlly(i, ally, allySoldiers, allyArmyInitialHP, allyArmyName) {

    var health = (i / armies[allyArmyName][allyArmyInitialHP]) * 100;
    if (health >= 70 && health <= 80) {
        if (ally.firstElementChild) {
            if (armies[allyArmyName][allySoldiers] == 8) {
                ally.removeChild(ally.firstElementChild);
                armies[allyArmyName][allySoldiers] = armies[allyArmyName][allySoldiers] - 1;
            }
        }
    } else if (health >= 60 && health <= 70) {
        if (ally.firstElementChild) {
            if (armies[allyArmyName][allySoldiers] == 7) {
                ally.removeChild(ally.firstElementChild);
                armies[allyArmyName][allySoldiers] = armies[allyArmyName][allySoldiers] - 1;
            }
        }
    } else if (health >= 50 && health <= 60) {
        if (ally.firstElementChild) {
            if (armies[allyArmyName][allySoldiers] == 6) {
                ally.removeChild(ally.firstElementChild);
                armies[allyArmyName][allySoldiers] = armies[allyArmyName][allySoldiers] - 1;
            }
        }
    } else if (health >= 40 && health <= 50) {
        if (ally.firstElementChild) {
            if (armies[allyArmyName][allySoldiers] == 5) {
                ally.removeChild(ally.firstElementChild);
                armies[allyArmyName][allySoldiers] = armies[allyArmyName][allySoldiers] - 1;
            }
        }
    } else if (health >= 30 && health <= 40) {
        if (ally.firstElementChild) {
            if (armies[allyArmyName][allySoldiers] == 4) {
                ally.removeChild(ally.firstElementChild);
                armies[allyArmyName][allySoldiers] = armies[allyArmyName][allySoldiers] - 1;
            }
        }
    } else if (health >= 20 && health <= 30) {
        if (ally.firstElementChild) {
            if (armies[allyArmyName][allySoldiers] == 3) {
                ally.removeChild(ally.firstElementChild);
                armies[allyArmyName][allySoldiers] = armies[allyArmyName][allySoldiers] - 1;
            }
        }
    } else if (health >= 10 && health <= 20) {
        if (ally.firstElementChild) {
            if (armies[allyArmyName][allySoldiers] == 2) {
                ally.removeChild(ally.firstElementChild);
                armies[allyArmyName][allySoldiers] = armies[allyArmyName][allySoldiers] - 1;
            }
        }
    } else if (health >= -10 && health <= 0) {
        if (ally.firstElementChild) {
            if (armies[allyArmyName][allySoldiers] == 1) {

                ally.removeChild(ally.firstElementChild);
                if (ally.classList[1] == "archer" || ally.classList[1] == "tower") {
                    ally.removeChild(ally.firstElementChild);
                }

                armies[allyArmyName][allySoldiers] = armies[allyArmyName][allySoldiers] - 1;
            }
        }
    }
}

function checkHealthEnemy(j, enemy, enemySoldiers, enemyArmyInitialHP, enemyArmyName) {
    var health = (j / armies[enemyArmyName][enemyArmyInitialHP]) * 100;
    if (health >= 70 && health <= 80) {
        if (enemy.firstElementChild) {
            if (armies[enemyArmyName][enemySoldiers] == 8) {
                enemy.removeChild(enemy.firstElementChild);
                armies[enemyArmyName][enemySoldiers] = armies[enemyArmyName][enemySoldiers] - 1;
            }
        }
    } else if (health >= 60 && health <= 70) {
        if (enemy.firstElementChild) {
            if (armies[enemyArmyName][enemySoldiers] == 7) {
                enemy.removeChild(enemy.firstElementChild);
                armies[enemyArmyName][enemySoldiers] = armies[enemyArmyName][enemySoldiers] - 1;
            }
        }
    } else if (health >= 50 && health <= 60) {
        if (enemy.firstElementChild) {
            if (armies[enemyArmyName][enemySoldiers] == 6) {
                enemy.removeChild(enemy.firstElementChild);
                armies[enemyArmyName][enemySoldiers] = armies[enemyArmyName][enemySoldiers] - 1;
            }
        }
    } else if (health >= 40 && health <= 50) {
        if (enemy.firstElementChild) {
            if (armies[enemyArmyName][enemySoldiers] == 5) {
                enemy.removeChild(enemy.firstElementChild);
                armies[enemyArmyName][enemySoldiers] = armies[enemyArmyName][enemySoldiers] - 1;
            }
        }
    } else if (health >= 30 && health <= 40) {
        if (enemy.firstElementChild) {
            if (armies[enemyArmyName][enemySoldiers] == 4) {
                enemy.removeChild(enemy.firstElementChild);
                armies[enemyArmyName][enemySoldiers] = armies[enemyArmyName][enemySoldiers] - 1;
            }
        }
    } else if (health >= 20 && health <= 30) {
        if (enemy.firstElementChild) {
            if (armies[enemyArmyName][enemySoldiers] == 3) {
                enemy.removeChild(enemy.firstElementChild);
                armies[enemyArmyName][enemySoldiers] = armies[enemyArmyName][enemySoldiers] - 1;
            }
        }
    } else if (health >= 10 && health <= 20) {
        if (enemy.firstElementChild) {
            if (armies[enemyArmyName][enemySoldiers] == 2) {
                enemy.removeChild(enemy.firstElementChild);
                armies[enemyArmyName][enemySoldiers] = armies[enemyArmyName][enemySoldiers] - 1;
            }
        }
    } else if (health >= -10 && health <= 0) {
        if (enemy.firstElementChild) {
            if (armies[enemyArmyName][enemySoldiers] == 1) {
                enemy.removeChild(enemy.firstElementChild);
                if (enemy.classList[1] == "tower" || enemy.classList[1] == "archer") {
                    enemy.removeChild(enemy.firstElementChild);
                }

                armies[enemyArmyName][enemySoldiers] = armies[enemyArmyName][enemySoldiers] - 1;
            }
        }
    }
}

// var army2 = document.getElementsByClassName("army-enemy")[0];

setInterval(checkBattle, 38);

function checkBattle() {

    // можно в отдельную ф запихнуть
    for (let key in battleSites) {
        if (battleSites[key].ongoing == true) {
            var whosArmyAlly = battleSites[key].ally.replace(/[_]/g, ' ');
            var whosArmyEnemy = battleSites[key].enemy.replace(/[_]/g, ' ');
            let allyArmyName = `${whosArmyAlly} ally`;
            let enemyArmyName = `${whosArmyEnemy} enemy`;
            let enemyHPname = `enemy_${battleSites[key].enemy}_hp`;
            let allyHPname = `ally_${battleSites[key].ally}_hp`;
            let allyHP = armies[allyArmyName][allyHPname];
            if (battleSites[key].end == false) {
                var enemyHP = armies[enemyArmyName][enemyHPname];
            }

            if (allyHP <= 0) {
                var elem = document.getElementsByClassName(battleSites[key].ally)[0];
                if (elem === undefined) {
                    return;
                }
                elem.parentNode.removeChild(elem);
            } else if (enemyHP <= 0) {
                let name = battleSites[key].enemy;
                let nameElement = name.split("_");
                var elem = document.getElementsByClassName(nameElement[0])[0];
                if (elem === undefined) {
                    continue;
                }
                elem.parentNode.removeChild(elem);
            }
        }
    }
    if (
        chosenTemp.ally_army != "dummy" &&
        chosenTemp.enemy_army != "dummy" &&
        chosenTemp.battle == false
    ) {
        if (
            armies[chosenTemp.enemy_army_name] >= 0 &&
            armies[chosenTemp.ally_army_name] <= 0
        ) {
            armyMovements[chosenTemp.enemyName]();
            chosenTemp.ally_army = "dummy";
            chosenTemp.enemy_army = "dummy";
            chosenTemp.ally_army_name = "dummy";
            chosenTemp.enemy_army_name = "dummy";
            chosenTemp.enemyName = "dummy";
            chosenTemp.battle = false;
        } else if (armies[chosenTemp.ally_army_name] <= 0) {
            chosenTemp.ally_army = "dummy";
            chosenTemp.enemy_army = "dummy";
            chosenTemp.ally_army_name = "dummy";
            chosenTemp.enemy_army_name = "dummy";
            chosenTemp.enemyName = "dummy";
            chosenTemp.battle = false;
        } else if (armies[chosenTemp.enemy_army_name] <= 0) {
            chosenTemp.ally_army = "dummy";
            chosenTemp.enemy_army = "dummy";
            chosenTemp.ally_army_name = "dummy";
            chosenTemp.enemy_army_name = "dummy";
            chosenTemp.enemyName = "dummy";
            chosenTemp.battle = false;
        }
    } else if (
        chosenTemp2.ally_army != "dummy" &&
        chosenTemp2.enemy_army != "dummy" &&
        chosenTemp2.battle == false
    ) {
        if (
            armies[chosenTemp2.enemy_army_name] >= 0 &&
            armies[chosenTemp2.ally_army_name] <= 0
        ) {
            armyMovements[chosenTemp2.enemyName]();
            chosenTemp2.ally_army = "dummy";
            chosenTemp2.enemy_army = "dummy";
            chosenTemp2.ally_army_name = "dummy";
            chosenTemp2.enemy_army_name = "dummy";
            chosenTemp2.enemyName = "dummy";
            chosenTemp2.battle = false;
        } else if (armies[chosenTemp2.ally_army_name] <= 0) {
            chosenTemp2.ally_army = "dummy";
            chosenTemp2.enemy_army = "dummy";
            chosenTemp2.ally_army_name = "dummy";
            chosenTemp2.enemy_army_name = "dummy";
            chosenTemp2.enemyName = "dummy";
            chosenTemp2.battle = false;
        } else if (armies[chosenTemp2.enemy_army_name] <= 0) {
            chosenTemp2.ally_army = "dummy";
            chosenTemp2.enemy_army = "dummy";
            chosenTemp2.ally_army_name = "dummy";
            chosenTemp2.enemy_army_name = "dummy";
            chosenTemp2.enemyName = "dummy";
            chosenTemp2.battle = false;
        }
    }
}

function movementChanger() {}

setInterval(checkBattle2, 35);

function checkBattle2() {
    for (let key in battleSites) {
        if (battleSites[key].ongoing == true) {
            let ally = battleSites[key].ally;
            let enemy = battleSites[key].enemy;

            let battleAlly = document.getElementsByClassName(ally)[0];
            let battleEnemy = document.getElementsByClassName(enemy)[0];
            if (battleAlly === undefined || battleEnemy === undefined) {
                continue;
            }
            let allyIdentity = `.${battleSites[key].allyName}`;
            let soldierArmyAlly = battleAlly.closest(allyIdentity);
            let enemyIdentity = `.${battleSites[key].enemyName}`;
            let soldierArmyEnemy = battleEnemy.closest(enemyIdentity);
            if (
                soldierArmyAlly.classList[0] == battleSites[key].allyName &&
                soldierArmyEnemy.classList[0] == battleSites[key].enemyName
            ) {
                let allySoldiers = soldierArmyAlly.children;
                for (let i = 0; i < allySoldiers.length; i++) {
                    allySoldiers[i].style.animation = "";
                    allySoldiers[i].style.animation = `${ally}_attack 1s infinite`;
                }
                let enemySoldiers = soldierArmyEnemy.children;
                for (let j = 0; j < enemySoldiers.length; j++) {
                    enemySoldiers[j].style.animation = "";
                    enemySoldiers[j].style.animation = `${enemy}_attack 1s infinite`;
                }
            }
        } else if (battleSites[key].ongoing == false) {
            let ally = battleSites[key].ally;
            let enemy = battleSites[key].enemy;

            let battleAlly = document.getElementsByClassName(ally)[0];
            let battleEnemy = document.getElementsByClassName(enemy)[0];
            if (battleAlly === undefined && battleEnemy === undefined) {
                return;
            }
            if (battleAlly === undefined) {
                let enemyIdentity = `.${battleSites[key].enemyName}`;
                let soldierArmyEnemy = battleEnemy.closest(enemyIdentity);
                if (soldierArmyEnemy.classList[0] == battleSites[key].enemyName) {
                    let enemySoldiers = soldierArmyEnemy.children;
                    for (let j = 0; j < enemySoldiers.length; j++) {
                        enemySoldiers[j].style.animation = "";
                        enemySoldiers[j].style.animation = `${enemy}_move 1s infinite`;
                    }
                }
                var elem = document.getElementsByClassName(
                    battleSites[key].allyName
                )[0];
                if (elem === undefined) {
                    return;
                }
                elem.parentNode.removeChild(elem);
                return;
            } else if (battleEnemy === undefined) {
                let allyIdentity = `.${battleSites[key].allyName}`;
                let soldierArmyAlly = battleAlly.closest(allyIdentity);
                if (soldierArmyAlly.classList[0] == battleSites[key].allyName) {
                    let allySoldiers = soldierArmyAlly.children;
                    for (let i = 0; i < allySoldiers.length; i++) {
                        allySoldiers[i].style.animation = "";
                    }
                } ///Проблема

                var elem = document.getElementsByClassName(
                    battleSites[key].enemyName
                )[0];
                if (elem === undefined) {
                    continue;
                }
                elem.parentNode.removeChild(elem);
                battleSites[key].enemy = "dummy";
                battleSites[key].ally = "dummy";
                battleSites[key].ongoing = "dummy";
                battleSites[key].start = "dummy";
                return;
            }
        }
        continue;
    }
}

//
function checkColisionAll(
    // и в этот момент должны идти колижены между оставшимися

) {
    for (let i = 0; i < listOfAlly.length; i++) {
        for (let k = 0; k < listOfAlly.length; k++) {
            colision(
                listOfAlly[i],
                listOfAlly[k],
                armyName_ally,
                armyName_enemy,
                ally_type,
                enemy_type,
                neutral_type,
                playerChoice,
                neutralArmy,
                armyName_neutral
            )
        }

    }
}

function listCleanUp(armyName) {
    for (let i = 0; i < listOfAlly.length; i++) {
        for (let k = 0; k < listOfAlly.length; k++) {
            // console.log("______________");
            // console.log(listOfAlly[i]);
            // console.log(listOfAlly[k]);

            if (listOfAlly[i] == listOfAlly[k] && i != k) {
                listOfAlly.splice(i, 1);
            }
        }
        if (listOfAlly[i] == armyName) {
            listOfAlly.splice(i, 1);
        }
    }
    // console.log(listOfAlly);
}

//
function colision(
    armyLeft,
    armyRight,
    armyName_ally,
    armyName_enemy,
    ally_type,
    enemy_type,
    neutral_type,
    playerChoice,
    neutralArmy,
    armyName_neutral
) {
    // console.log(armyLeft instanceof Element);
    if (ally_type == "peasant") {
        return
    }
    var computedStyleArmyRight;
    if (armyLeft === undefined || armyRight === undefined) {
        if (neutralArmy === undefined) {
            return;
        } else if (neutralArmy !== undefined) {
            computedStyleArmyNeutral = getComputedStyle(neutralArmy);
        } else {
            var computedStyleArmyNeutral
        }
    } else {
        computedStyleArmyRight = getComputedStyle(armyRight);
    }

    if (ally_type == "archer" && enemy_type != "archer") {
        var archerArea = armyLeft.children[1]

        var computedArea = getComputedStyle(archerArea);
        var computedArea_width = parseInt(computedArea.width)

        var computedStyleArmyLeft = getComputedStyle(armyLeft);
        var leftArmy_left = parseInt(computedStyleArmyLeft.left),
            leftArmy_width = parseInt(computedStyleArmyLeft.width),
            leftArmy_top = parseInt(computedStyleArmyLeft.top),
            leftArmy_height = parseInt(computedStyleArmyLeft.height);
        leftArmy_left -= computedArea_width;
    } else {
        var computedStyleArmyLeft = getComputedStyle(armyLeft);
        var leftArmy_left = parseInt(computedStyleArmyLeft.left),
            leftArmy_width = parseInt(computedStyleArmyLeft.width),
            leftArmy_top = parseInt(computedStyleArmyLeft.top),
            leftArmy_height = parseInt(computedStyleArmyLeft.height)
    }

    //Get the height and position of the player
    if (enemy_type == "tower") {
        var towerArea = armyRight.children[1]

        var computedArea = getComputedStyle(towerArea);
        var computedArea_width = parseInt(computedArea.width)


        var rightArmy_left = parseInt(computedStyleArmyRight.left),
            rightArmy_width = parseInt(computedStyleArmyRight.width),
            rightArmy_top = parseInt(computedStyleArmyRight.top),
            rightArmy_height = parseInt(computedStyleArmyRight.height)
        rightArmy_left = rightArmy_left + (computedArea_width / 2);
    } else if (computedStyleArmyRight != undefined) {
        var rightArmy_left = parseInt(computedStyleArmyRight.left),
            rightArmy_width = parseInt(computedStyleArmyRight.width),
            rightArmy_top = parseInt(computedStyleArmyRight.top),
            rightArmy_height = parseInt(computedStyleArmyRight.height)
    }
    if (computedStyleArmyNeutral != undefined) {
        var neutralArmy_left = parseInt(computedStyleArmyNeutral.left),
            neutralArmy_width = parseInt(computedStyleArmyNeutral.width),
            neutralArmy_top = parseInt(computedStyleArmyNeutral.top),
            neutralArmy_height = parseInt(computedStyleArmyNeutral.height);
    }

    // rightArmy_left -= 5;
    //If the character's bottom is hitting the ground,
    //Stop moving
    if (playerChoice) {
        console.log(battleSites);

        //Вот тут остановился
        let inter = setInterval(() => {
            if (armyRight != undefined) {
                if (rightArmy_left < leftArmy_left) {
                    if (leftArmy_left + leftArmy_width <= rightArmy_left) {
                        leftArmy_left = rightArmy_left - leftArmy_width;
                    } else {
                        leftArmy_left -= 5;
                    }
                } else {
                    if (leftArmy_left + leftArmy_width >= rightArmy_left) {
                        leftArmy_left = rightArmy_left - leftArmy_width;
                    } else {
                        leftArmy_left += 5;
                    }
                }
            }

            if (neutralArmy_left < leftArmy_left) {
                if (leftArmy_left + leftArmy_width <= neutralArmy_left) {
                    leftArmy_left = neutralArmy_left - leftArmy_width;
                } else {
                    leftArmy_left -= 5;
                }
            } else {
                if (leftArmy_left == neutralArmy_left) {
                    leftArmy_left = neutralArmy_left;
                } else {
                    leftArmy_left += 5;
                }
            }

            if (leftArmy_top < rightArmy_top) {
                leftArmy_top += 5;
            } else if (leftArmy_top > rightArmy_top) {
                leftArmy_top -= 5;
            } else if (leftArmy_top < neutralArmy_top) {
                leftArmy_top += 5;
            } else if (leftArmy_top > neutralArmy_top) {
                leftArmy_top -= 5;
            }
            armyLeft.style.top = leftArmy_top + "px";

            //Set the character's final position
            armyLeft.style.left = leftArmy_left + "px";
            // armyRight.style.left = rightArmy_left + "px";
            var checkArmyLeft = rightArmy_left - leftArmy_width + "px";
            var neutralArmy_topPX = neutralArmy_top + "px";
            if (parseInt(armyLeft.style.left) == neutralArmy_left &&
                parseInt(armyLeft.style.top) == neutralArmy_top) {
                clearInterval(inter);
            }
            if (
                armyLeft.style.left === checkArmyLeft &&
                armyLeft.style.top === neutralArmy_topPX
            ) {
                // footmanSpot = true;
                if (neutralArmy === undefined) {
                    if (armyRight.classList.contains("enemy")) {
                        var item = [...armyRight.classList];
                        var choseEnemy = item[0];
                        listOfEnemies[choseEnemy] = false;
                    }
                }

                chosen.enemy_army = "dummy";
                chosen.enemy_army_type = "dummy";
                chosen.ally_army = "dummy";
                chosen.ally_army_type = "dummy";

                var allyArmy = `${armyName_ally}_${ally_type}`;
                var enemyArmy = `${armyName_enemy}_${enemy_type}`;
                var writeCheck = false;
                for (let key in battleSites) {
                    if (
                        battleSites[key].ally == allyArmy &&
                        battleSites[key].enemy == enemyArmy
                    ) {
                        writeCheck = true;
                        continue;
                    }
                    if (
                        battleSites[key].ally == "dummy" &&
                        battleSites[key].enemy == "dummy" &&
                        writeCheck == false
                    ) {
                        battleSites[key].ally = allyArmy;
                        battleSites[key].enemy = enemyArmy;
                        battleSites[key].allyName = armyName_ally;
                        battleSites[key].enemyName = armyName_enemy;
                        battleSites[key].ongoing = true;

                        let armyName_neutral = neutralArmy;
                        writeCheck = true;
                        let ongoingBattle = key;
                        listOfEnemies[armyName_enemy] = false;

                        clearInterval(inter);
                        startBattle(
                            armyName_ally,
                            armyName_enemy,
                            armyName_neutral,
                            ally_type,
                            enemy_type,
                            neutral_type,
                            ongoingBattle
                        );

                        return;
                    }
                }
            }
        }, 33);
    } else if (!playerChoice) {
        if (
            leftArmy_left < rightArmy_left + rightArmy_width &&
            leftArmy_left + leftArmy_width > rightArmy_left &&
            leftArmy_top < rightArmy_top + rightArmy_height &&
            leftArmy_top + leftArmy_height > rightArmy_top
        ) {
            // var armyNumber = armyName_ally
            // let armyNameNuber = armyNumber.match(/\d+/)
            // if (armyName_ally) {

            // }



            var allyWithNoDigits = armyName_ally.replace(/[0-9]/g, '');
            var enemyWithNoDigits = armyName_enemy.replace(/[0-9]/g, '');

            if (allyWithNoDigits == enemyWithNoDigits) {
                var allyWithNoLetters = armyName_ally.match(/\d+/)
                var enemyWithNoLetters = armyName_enemy.match(/\d+/)
                if (allyWithNoLetters < enemyWithNoLetters) {
                    if (allyWithNoDigits == "human" &&
                        enemyWithNoDigits == "vampire") {
                        leftArmy_left = leftArmy_left + leftArmy_width;
                        armyRight.style.left = leftArmy_left + "px";
                    } else if (allyWithNoDigits == "human" &&
                        enemyWithNoDigits == "human") {
                        leftArmy_left = leftArmy_left + leftArmy_width;
                        armyRight.style.left = leftArmy_left + "px";
                    }
                } else if (allyWithNoLetters > enemyWithNoLetters) {
                    if (allyWithNoDigits == "vampire" &&
                        enemyWithNoDigits == "vampire") {
                        rightArmy_left = rightArmy_left - rightArmy_width;
                        armyLeft.style.left = rightArmy_left + "px";
                    }
                } else {

                    rightArmy_left = rightArmy_left + leftArmy_width;


                    armyLeft.style.left = rightArmy_left + "px";

                    console.log("not player choice");
                }
            }
            var allyArmy = `${armyName_ally}_${ally_type}`;
            var enemyArmy = `${armyName_enemy}_${enemy_type}`;
            var writeCheck = false;
            for (let key in battleSites) {
                if (
                    battleSites[key].ally == allyArmy &&
                    battleSites[key].enemy == enemyArmy
                ) {
                    writeCheck = true;
                    continue;
                }
                // else if (
                //     allyMovementsFlags.army1 == armyName_ally &&
                //     allyMovementsFlags.army2 == armyName_enemy) {
                //     if (allyMovementsFlags.flag1 == false &&
                //         allyMovementsFlags.flag2 == false) {
                //         alert("lox")
                //     }
                // }
                if (
                    battleSites[key].ally != allyArmy &&
                    battleSites[key].enemy != enemyArmy &&
                    writeCheck == false &&
                    battleSites[key].ally === "dummy" &&
                    battleSites[key].enemy === "dummy"
                ) {
                    battleSites[key].ally = allyArmy;
                    battleSites[key].enemy = enemyArmy;
                    battleSites[key].allyName = armyName_ally;
                    battleSites[key].enemyName = armyName_enemy;
                    battleSites[key].ongoing = true;
                    writeCheck = true;
                    let ongoingBattle = key;
                    listOfEnemies[armyName_enemy] = false;

                    startBattle(
                        armyName_ally,
                        armyName_enemy,
                        armyName_neutral,
                        ally_type,
                        enemy_type,
                        neutral_type,
                        ongoingBattle
                    );
                    break;
                }
            }

            Object.keys(battleSites).forEach(function(key) {
                if (
                    battleSites[key].ally == allyArmy &&
                    battleSites[key].enemy == enemyArmy
                ) {
                    // console.log("no battle!_____________")
                } else {
                    writeCheck = false;
                }
            });
        } else if (
            leftArmy_left < rightArmy_left + rightArmy_width &&
            leftArmy_left + leftArmy_width > rightArmy_left &&
            leftArmy_top < rightArmy_top + rightArmy_height &&
            leftArmy_top + leftArmy_height > rightArmy_top
        ) {
            return;
        }
    }
}

const battleSites = {
    battle1: {
        ally: "dummy",
        enemy: "dummy",
        start: false,
        ongoing: undefined,
        end: false,
    },
    battle2: {
        ally: "dummy",
        enemy: "dummy",
        start: false,
        ongoing: undefined,
        end: false,
    },
    battle3: {
        ally: "dummy",
        enemy: "dummy",
        start: false,
        ongoing: undefined,
        end: false,
    },
    battle4: {
        ally: "dummy",
        enemy: "dummy",
        start: false,
        ongoing: undefined,
        end: false,
    },
    battle5: {
        ally: "dummy",
        enemy: "dummy",
        start: false,
        ongoing: undefined,
        end: false,
    },
};

var listOfEnemies = {
    vampire1: false,
    vampire2: false,
    human1: false,
};

var listOfAlly = [];

class Army {
    constructor(name, type, allign) {
        this.name = name;
        this.type = type;
        this.allign = allign;
    }
    create(where) {
        let soldierHp = `${this.allign}_${this.name}_${this.type}_hp`;
        let soldierDmg = `${this.allign}_${this.name}_${this.type}_dmg`;
        let soldierCountName = `${this.allign}_${this.name}_${this.type}_soldiers`;
        let armyName_initial_hp = `${this.allign}_${this.name}_${this.type}_initial_hp`;
        let armyName = `${this.name} ${this.type} ${this.allign}`;
        let army = {}

        army[armyName_initial_hp] = 0;
        army[soldierHp] = 0;
        army[soldierDmg] = 0;
        army[soldierCountName] = 0;
        armies[armyName] = army;
        let div = document.createElement("div");
        div.className = `${this.name} ${this.type} ${this.allign}`;
        let parent = document.getElementsByClassName(where)[0];
        parent.append(div);
        armyHpInitNames.push(armyName_initial_hp);
        armySoldiersNames.push(soldierCountName); //Possible add extend class
        listOfAlly.push(this.name);




    }
    addSoldier(name, type, allign) {
        let armyName = `${this.name} ${this.type} ${this.allign}`;
        let soldier = document.createElement("div");
        let soldierCountName = `${this.allign}_${this.name}_${this.type}_soldiers`;
        let soldier_count = armies[armyName][soldierCountName];
        soldier.className = `${this.name}_${this.type}_${this.allign}${soldier_count} ${this.name}_${this.type}`;
        let parent = document.getElementsByClassName(this.name)[0];
        parent.append(soldier);
        let trueName = this.name.substring(0, this.name.length - 1);
        let armyName_initial_hp = `${this.allign}_${this.name}_${this.type}_initial_hp`;
        let armyName_hp = `${this.allign}_${this.name}_${this.type}_hp`;
        let armyName_dmg = `${this.allign}_${this.name}_${this.type}_dmg`;

        let soldierName_hp = `${trueName}_${this.type}_hp`;
        let soldierName_dmg = `${trueName}_${this.type}_dmg`;
        armies[armyName][armyName_initial_hp] =
            armies[armyName][armyName_initial_hp] + sourseSoldiers[soldierName_hp];
        armies[armyName][armyName_hp] = armies[armyName][armyName_hp] + sourseSoldiers[soldierName_hp];
        armies[armyName][armyName_dmg] =
            armies[armyName][armyName_dmg] + sourseSoldiers[soldierName_dmg];
        armies[armyName][soldierCountName] = armies[armyName][soldierCountName] + 1;
    }
    addAreaofControl(thing) {

        let area = document.createElement("div");
        let areaName = `${this.allign}_${this.name}_${this.type} ${thing}_attack_area`
        area.className = areaName
        let parent = document.getElementsByClassName(this.name)[0];
        parent.append(area);
    }

    addFakeSoldier(name, type, allign) {
        let armyName = `${this.name} ${this.type} ${this.allign}`;
        let soldier = document.createElement("img");
        let soldierCountName = `${this.allign}_${this.name}_${this.type}_soldiers`;
        let soldier_count = armies[armyName][soldierCountName];
        soldier.className = `${this.name}_${this.type}_${this.allign}${soldier_count} ${this.name}_${this.type}`;
        let parent = document.getElementsByClassName(this.name)[0];
        parent.append(soldier);
        let trueName = this.name.substring(0, this.name.length - 1);
        let armyName_initial_hp = `${this.allign}_${this.name}_${this.type}_initial_hp`;
        let armyName_hp = `${this.allign}_${this.name}_${this.type}_hp`;
        let armyName_dmg = `${this.allign}_${this.name}_${this.type}_dmg`;

        let soldierName_hp = `${trueName}_${this.type}_hp`;
        let soldierName_dmg = `${trueName}_${this.type}_dmg`;
        armies[armyName][armyName_initial_hp] =
            armies[armyName][armyName_initial_hp] + sourseSoldiers[soldierName_hp];
        armies[armyName][armyName_hp] = armies[armyName][armyName_hp] + sourseSoldiers[soldierName_hp];
        armies[armyName][armyName_dmg] =
            armies[armyName][armyName_dmg] + sourseSoldiers[soldierName_dmg];
        armies[armyName][soldierCountName] = armies[armyName][soldierCountName] + 1;
    }

}

var armyMovements = {

    vampire1: function() {

        let vampire1 = document.getElementsByClassName("vampire1")[0];
        listOfEnemies.vampire1 = true;
        this.movement_right(vampire1);
    },
    vampire2: function() {
        let vampire2 = document.getElementsByClassName("vampire2")[0];
        listOfEnemies.vampire2 = true;
        this.movement_left(vampire2);
    },
    human5: function() {
        let human5 = document.getElementsByClassName("human5")[0];

        this.movement_left(human5);

    },
    moveHumanArmy: function(army) {
        let moveArmy = document.getElementsByClassName(army)[0];
        // listOfEnemies.human1 = true;
        this.movement_left(moveArmy);
    },
    human4: function() {
        let human4 = document.getElementsByClassName("human4")[0];
        // listOfEnemies.human1 = true;
        this.movement_left(human4);
    },
    movement_left: async function(army) {
        function timer(v) {
            return new Promise(function(r) {
                return setTimeout(r, v);
            });
        }
        let computedStyleArmyRight = getComputedStyle(army);
        let army_left = parseInt(computedStyleArmyRight.left);
        var item = [...army.classList];
        var choseEnemy = item[0];
        for (let i = 0; i < 2; i++) {
            // if (!listOfEnemies[choseEnemy]) {
            //     break;
            // } else

            // || allyflag == true

            var checkOngoing = ongoingArmyName(choseEnemy);
            if (checkOngoing) {

                break;
                //For loop or something, this just for testing
            } else if (army_left == 800) {
                army.style.left = army_left + "px";
                break;
            } else {
                army_left = army_left - 1;
                army.style.left = army_left + "px";
                await timer(33);
            }
        }
    },

    movement_right: async function(army) {
        function timer(v) {
            return new Promise(function(r) {
                return setTimeout(r, v);
            });
        }
        let computedStyleArmyRight = getComputedStyle(army);
        let army_left = parseInt(computedStyleArmyRight.left);
        var item = [...army.classList];
        var choseEnemy = item[0];
        for (let i = 0; i < 2; i++) {
            // if (!listOfEnemies[choseEnemy]) {
            //     break;
            // } else

            // || allyflag == true

            var checkOngoing = ongoingArmyName(choseEnemy);
            if (checkOngoing) {

                break;
                //For loop or something, this just for testing
            } else {
                army_left = army_left + 1;
                army.style.left = army_left + "px";
                await timer(33);
            }
        }
    },
    movement_top: async function(army, top) {
        function timer(v) {
            return new Promise(function(r) {
                return setTimeout(r, v);
            });
        }
        let computedStyleArmyRight = getComputedStyle(army);
        let army_top = parseInt(computedStyleArmyRight.top);
        var item = [...army.classList];
        var choseEnemy = item[0];
        for (let i = 0; i < 2; i++) {
            // if (!listOfEnemies[choseEnemy]) {
            //     break;
            // } else

            // || allyflag == true

            var checkOngoing = ongoingArmyName(choseEnemy);
            if (checkOngoing) {

                break;
                //For loop or something, this just for testing
            } else if (army_top == top) {

                army.style.top = army_top + "px";
                break;
            } else {
                army_top = army_top - 1;
                army.style.top = army_top + "px";
                await timer(33);
            }
        }
    }
};

//Добавить такое, чтоб после остановки они вновь пытались пойти чекая.
//

// setInterval(function movementtest() {
//     // console.log(unitsNow)
//     var movementPoint1 = 500;
//     var movementPoint2 = 400;
//     var movementPoint3 = 300;
//     var movementPoint1Top = 800;
//     loop1:
//         for (let o = 0; o <= unitsNow; o++) {
//             // if (unitsNow == 0) {
//             //     break
//             // }
//             var genName = `human${o}`
//             let human = document.getElementsByClassName(genName)[0];
//             if (human == undefined) {

//                 continue loop1
//             }
//             var computedStyleArmy = getComputedStyle(human);
//             var leftNumber = parseInt(computedStyleArmy.left)
//             var topNumber = parseInt(computedStyleArmy.top)
//                 // console.log("top " + topNumber);
//                 // console.log("left " + leftNumber);
//             if (leftNumber >= movementPoint1 && movementPoint1 <= leftNumber) {
//                 armyMovements.movement_left(human)
//                 armyMovements.movement_top(human)
//                     // console.log("point 1");
//             } else if (leftNumber >= movementPoint2 && movementPoint2 <= leftNumber) {
//                 armyMovements.movement_left(human)
//                     // console.log("point 2");
//             } else if (leftNumber >= movementPoint3 && movementPoint3 <= leftNumber) {
//                 armyMovements.movement_left(human)
//                     // console.log("point 3");
//             }
//         }
// }, 66)

setInterval(function movementtestEnemy() {
    // console.log(unitsNow)
    var movementPoint1 = 500;
    var movementPoint2 = 400;
    var movementPoint3 = 300;
    loop1:
        for (let o = 0; o <= enemyUnitsNow; o++) {
            // if (unitsNow == 0) {
            //     break
            // }
            var genName = `vampire${o}`
            let vampire = document.getElementsByClassName(genName)[0];
            if (vampire == undefined) {

                continue loop1
            }
            var computedStyleArmy = getComputedStyle(vampire);
            var leftNumber = parseInt(computedStyleArmy.left)
            var topNumber = parseInt(computedStyleArmy.top)
                // console.log("top " + topNumber);
                // console.log("left " + leftNumber);
            if (leftNumber >= movementPoint1 && movementPoint1 <= leftNumber) {
                armyMovements.movement_right(vampire)
                    // console.log("point 1");
            } else if (leftNumber >= movementPoint2 && movementPoint2 <= leftNumber) {
                armyMovements.movement_right(vampire)
                    // console.log("point 2");
            } else if (leftNumber >= movementPoint3 && movementPoint3 <= leftNumber) {
                armyMovements.movement_right(vampire)
                    // console.log("point 3");
            }
        }
}, 1000)

function checkMovementsAll() {

}


var allyMovementsFlags = {

}

function ongoingArmyName(army) {
    for (key in battleSites) {
        if (battleSites[key].ongoing == true && battleSites[key].allyName == army || battleSites[key].enemyName == army) {
            return true;
        }
    }
}

//хранение инфы о выборе армий мышкой
var chosen = {
    ally_army: "dummy",
    ally_army_type: "dummy",
    enemy_army: "dummy",
    enemy_army_type: "dummy",
    neutral_army: "dummy",
    neutral_army_type: "dummy",
};

setInterval(function() {
    if (chosen.ally_army != "dummy" && chosen.neutral_army != "dummy") {
        var armyLeft = document.getElementsByClassName(chosen.ally_army)[0];
        var neutralArmy = document.getElementsByClassName(chosen.neutral_army)[0];
        var armyName_ally = chosen.ally_army;
        var armyName_neutral = chosen.neutral_army;
        var ally_type = chosen.ally_army_type;
        var neutral_type = chosen.neutral_army_type;
        var playerChoice = true;

        colision(
            armyLeft,
            armyRight,
            armyName_ally,
            armyName_enemy,
            ally_type,
            enemy_type,
            neutral_type,
            playerChoice,
            neutralArmy,
            armyName_neutral
        );
        chosen.enemy_army = "dummy";
        chosen.enemy_army_type = "dummy";
        chosen.ally_army = "dummy";
        chosen.ally_army_type = "dummy";
        chosen.neutral_army = "dummy";
        chosen.neutral_army_type = "dummy";
    } else if (chosen.enemy_army != "dummy" && chosen.ally_army != "dummy") {
        var armyLeft = document.getElementsByClassName(chosen.ally_army)[0];
        var armyRight = document.getElementsByClassName(chosen.enemy_army)[0];
        var neutralArmy = document.getElementsByClassName(chosen.neutral_army)[0];
        var armyName_ally = chosen.ally_army;
        var armyName_enemy = chosen.enemy_army;
        // var armyName_neutral = chosen.neutral_army;
        var ally_type = chosen.ally_army_type;
        var enemy_type = chosen.enemy_army_type;
        var neutral_type = chosen.neutral_army_type;
        var playerChoice = true;

        colision(
            armyLeft,
            armyRight,
            armyName_ally,
            armyName_enemy,
            ally_type,
            enemy_type,
            neutral_type,
            playerChoice,
            neutralArmy,
            armyName_neutral
        );
        chosen.enemy_army = "dummy";
        chosen.enemy_army_type = "dummy";
        chosen.ally_army = "dummy";
        chosen.ally_army_type = "dummy";
        chosen.neutral_army = "dummy";
        chosen.neutral_army_type = "dummy";
    }
}, 300);
//переделать что бы были только ally and enemy
document.addEventListener("click", function(e) {

    if (e.target && e.target.classList.contains("enemy")) {
        chosen.enemy_army = e.target.classList[0];
        chosen.enemy_army_type = e.target.classList[1];
    } else if (e.target.parentNode && e.target.parentNode.classList.contains("ally")) {
        chosen.ally_army = e.target.parentNode.classList[0];
        chosen.ally_army_type = e.target.parentNode.classList[1];
    } else if (e.target && e.target.classList.contains("neutral")) {
        chosen.neutral_army = e.target.classList[0];
        chosen.neutral_army_type = e.target.classList[1];
    }
});

var chosenAll = {
    ally_army: "dummy",
    ally_army_type: "dummy",
    enemy_army: "dummy",
    enemy_army_type: "dummy",
};

setInterval(function checkEveryArmyCollision() {
    let ally = document.getElementsByClassName("ally");
    let enemy = document.getElementsByClassName("enemy");
    let len = 0;
    let tempLen = 0;
    let moreAlly = false;
    let moreEnemy = false;
    var singleAlly = false;
    var singleEnemy = false;

    for (let i = 0; i <= ally.length - 1; i++) {
        for (let h = 1; h < ally.length; h++) {
            if (ally[i] == ally[h]) {
                break
            }
            var enemyName = ally[h].classList[0];
            chosenAll.enemy_army = enemyName;
            var enemyType = ally[h].classList[1];
            chosenAll.enemy_army_type = enemyType;

            var allyName = ally[i].classList[0];
            chosenAll.ally_army = allyName;
            var allyType = ally[i].classList[1];
            chosenAll.ally_army_type = allyType;

            if (chosenAll.enemy_army != "dummy" && chosenAll.ally_army != "dummy") {
                // console.log("gocha " + chosenAll.ally_army + " " + chosenAll.enemy_army);
                if (singleAlly) {
                    var armyLeft = document.getElementsByClassName("ally")[0];
                } else {
                    var armyLeft = document.getElementsByClassName("ally")[i];
                }
                var armyRight = document.getElementsByClassName("ally")[h];
                var armyName_ally = chosenAll.ally_army;
                var armyName_enemy = chosenAll.enemy_army;
                var neutralArmy = undefined;
                var neutral_type = undefined;
                var ally_type = chosenAll.ally_army_type;
                var enemy_type = chosenAll.enemy_army_type;
                var playerChoice = false;
                var armyName_neutral = undefined;
                var neutralArmy = undefined;
                // console.log("Colision between " + armyName_ally + " and " + armyName_enemy);
                colision(
                    armyLeft,
                    armyRight,
                    armyName_ally,
                    armyName_enemy,
                    ally_type,
                    enemy_type,
                    neutral_type,
                    playerChoice,
                    neutralArmy,
                    armyName_neutral
                );

            }
        }
        for (let k = 0; k <= enemy.length - 1; k++) {

            var enemyName = enemy[k].classList[0];
            chosenAll.enemy_army = enemyName;
            var enemyType = enemy[k].classList[1];
            chosenAll.enemy_army_type = enemyType;

            var allyName = ally[i].classList[0];
            chosenAll.ally_army = allyName;
            var allyType = ally[i].classList[1];
            chosenAll.ally_army_type = allyType;

            if (chosenAll.enemy_army != "dummy" && chosenAll.ally_army != "dummy") {
                // console.log("gocha " + chosenAll.ally_army + " " + chosenAll.enemy_army);
                if (singleAlly) {
                    var armyLeft = document.getElementsByClassName("ally")[0];
                } else {
                    var armyLeft = document.getElementsByClassName("ally")[i];
                }
                var armyRight = document.getElementsByClassName("enemy")[k];
                var armyName_ally = chosenAll.ally_army;
                var armyName_enemy = chosenAll.enemy_army;
                var neutralArmy = undefined;
                var neutral_type = undefined;
                var ally_type = chosenAll.ally_army_type;
                var enemy_type = chosenAll.enemy_army_type;
                var playerChoice = false;
                var armyName_neutral = undefined;
                var neutralArmy = undefined;
                // console.log("Colision between " + armyName_ally + " and " + armyName_enemy);
                colision(
                    armyLeft,
                    armyRight,
                    armyName_ally,
                    armyName_enemy,
                    ally_type,
                    enemy_type,
                    neutral_type,
                    playerChoice,
                    neutralArmy,
                    armyName_neutral
                );
            }
        }

    }
}, 33);

setInterval(() => {
    let enemy = document.getElementsByClassName("enemy");
    for (let i = 0; i < enemy.length; i++) {
        for (let o = 0; o < enemy.length; o++) {
            if (enemy[i] == enemy[o]) {
                break
            }
            var enemyName = enemy[o].classList[0];
            chosenAll.enemy_army = enemyName;
            var enemyType = enemy[o].classList[1];
            chosenAll.enemy_army_type = enemyType;

            var allyName = enemy[i].classList[0];
            chosenAll.ally_army = allyName;
            var allyType = enemy[i].classList[1];
            chosenAll.ally_army_type = allyType;

            if (chosenAll.enemy_army != "dummy" && chosenAll.ally_army != "dummy") {
                // console.log("gocha " + chosenAll.ally_army + " " + chosenAll.enemy_army);

                var armyLeft = document.getElementsByClassName("enemy")[i];

                var armyRight = document.getElementsByClassName("enemy")[o];
                var armyName_ally = chosenAll.ally_army;
                var armyName_enemy = chosenAll.enemy_army;
                var neutralArmy = undefined;
                var neutral_type = undefined;
                var ally_type = chosenAll.ally_army_type;
                var enemy_type = chosenAll.enemy_army_type;
                var playerChoice = false;
                var armyName_neutral = undefined;
                var neutralArmy = undefined;
                // console.log("Colision between " + armyName_ally + " and " + armyName_enemy);
                colision(
                    armyLeft,
                    armyRight,
                    armyName_ally,
                    armyName_enemy,
                    ally_type,
                    enemy_type,
                    neutral_type,
                    playerChoice,
                    neutralArmy,
                    armyName_neutral
                );

            }
        }
    }
}, 33);


//Тестовое объявление армий
// var vampires1 = new Army("vampire1", "tower", "enemy");

// vampires1.create();
// vampires1.addSoldier();
// vampires1.addAreaofControl("tower")
// vampires1.addSoldier();
// vampires1.addSoldier();
// vampires1.addSoldier();

// armyMovements.vampire1();

// var vampires2 = new Army("vampire2", "thrall", "enemy");
// vampires2.create();
// vampires2.addSoldier();
// vampires2.addSoldier();
// vampires2.addSoldier();

// // armyMovements.vampire2();

// var vampires3 = new Army("vampire3", "thrall", "enemy");
// vampires3.create();
// vampires3.addSoldier();

// // var vampires4 = new Army("vampire4", "thrall", "enemy");
// // vampires4.create();
// // vampires4.addSoldier();
// // vampires4.addSoldier();
// // vampires4.addSoldier();

// var human2 = new Army("human2", "footman", "ally");

// human2.create();
// human2.addSoldier();
// human2.addSoldier();
// human2.addSoldier();
// human2.addSoldier();
// human2.addSoldier();
// human2.addSoldier();
// human2.addSoldier();
// human2.addSoldier();

// var human3 = new Army("human3", "knight", "ally");

// human3.create();
// human3.addSoldier();
// human3.addSoldier();
// human3.addSoldier();
// human3.addSoldier();
// human3.addSoldier();
// human3.addSoldier();
// ______________________________ Building Handlers_________//
var movementTest = {
    movement_bottom: async function(army) {
        function timer(v) {
            return new Promise(function(r) {
                return setTimeout(r, v);
            });
        }
        let computedStyleArmyRight = getComputedStyle(army);
        let army_top = parseInt(computedStyleArmyRight.top);
        var item = [...army.classList];
        var choseEnemy = item[0];
        for (let i = 0; i < 200; i++) {
            // if (!listOfEnemies[choseEnemy]) {
            //     break;
            // } else

            // || allyflag == true


            army_top = army_top + 1;
            army.style.top = army_top + "px";
            await timer(33);

        }
    }
}

function createUnitTest() {
    var army = document.getElementsByClassName("test")[0]
    movementTest.movement_bottom(army)
}



var barracksButton = document.getElementsByClassName("barracks-icon")[0]

barracksButton.addEventListener("click", posBuildBarracks)

var buildMode = false;
var buildModeHidden = false;
var canBuildBarracks = false;
var buildComplete = false;
var buildSmall = false;
var buildMedium = false;
var buildBig = false;
var buildTiny = false;
// var buildingNow = {
//     stadia1: false,
//     stadia2: false,
//     stadia3: false,
//     stadia4: false
// }

function buildBigStart(event) {
    var building = document.getElementsByClassName("buildProsesessBig_stadia1")[0]
    setTimeout(() => {
        building.classList.remove("buildProsesessBig_stadia1")
        building.classList.add("buildProsesessBig_stadia2")
    }, 1500);
    setTimeout(() => {
        building.classList.remove("buildProsesessBig_stadia2")
        building.classList.add("buildProsesessBig_stadia3")
    }, 3000);
    setTimeout(() => {
        building.classList.remove("buildProsesessBig_stadia3")
        building.classList.add("buildProsesessBig_stadia4")
    }, 4500);
    setTimeout(() => {
        buildComplete = true;
        finalBuild(event)
    }, 5000);

}

var alreadySelected = false;

function finalBuild(event) {
    var barracks = document.getElementsByClassName("barracks building")[0]

    if (canBuildBarracks && buildComplete) {
        buildComplete = false;
        canBuildBarracks = false;
        barracks.childNodes[1].classList.remove("buildProsesessBig_stadia4")
        barracks.classList.remove("building")
        barracks.classList.add("build")
        barracks.childNodes[1].classList.add("barracks-complete")
        createBarracksInterface(event.target.parentNode.classList[1])
        barracks.addEventListener('click', barracksHireListner)

    }

}


function barracksHireListner(event) {
    let leftPanelBuildings = document.getElementsByClassName("buildings-wrapper")[0]
    leftPanelBuildings.classList.add("hidden")

    let name = `barracks-interface ${event.currentTarget.classList[1]}-slot`
    let leftPanelHirebarracks = document.getElementsByClassName(name)[0]
    leftPanelHirebarracks.classList.remove("hidden")
    event.stopPropagation()
    if (!alreadySelected) {
        event.currentTarget.classList.add("barracks-complete-highlighted")
        event.currentTarget.classList.add("selected")
        alreadySelected = true;
        if (event.currentTarget.classList[1] == "spot1") {
            if (!buildUnitLock) {


                barracksHire.footman(event.currentTarget.classList[1], elBarracksLocks.spot1)
                barracksHire.maseman(event.currentTarget.classList[1], elBarracksLocks.spot1)
                barracksHire.archer(event.currentTarget.classList[1], elBarracksLocks.spot1)
                barracksHire.longbowman(event.currentTarget.classList[1], elBarracksLocks.spot1)
            }
        } else if (event.currentTarget.classList[1] == "spot2") {
            console.log("second barracks listners")
            barracksHire.footman(event.currentTarget.classList[1], elBarracksLocks.spot2)
            barracksHire.maseman(event.currentTarget.classList[1], elBarracksLocks.spot2)
            barracksHire.archer(event.currentTarget.classList[1], elBarracksLocks.spot2)
            barracksHire.longbowman(event.currentTarget.classList[1], elBarracksLocks.spot2)
        }

    }




}

function createBarracksInterface(spot) {
    let div = document.createElement("div");
    div.className = `barracks-interface ${spot}-slot hidden`;
    let parent = document.getElementsByClassName("interface-left")[0];
    parent.append(div);

    let divName = `barracks-interface ${spot}-slot`
    var d1 = document.getElementsByClassName(divName)[0];
    d1.innerHTML = `
    <div class="tier-1">
    <img class=" footman-icon-${spot} icon" src="icons/footman.png" alt="">
    <img class=" archer-icon-${spot} icon" src="icons/archer.png" alt="">
</div>

<div class="tier-2">
    <img class=" maseman-icon-${spot} icon" src="icons/maseman.png" alt="">
    <img class=" longbowman-icon-${spot} icon" src="icons/longbowman.png" alt="">
</div>`;
}



var mainWindow = document.getElementsByTagName("body")[0]


mainWindow.addEventListener("click", function(event) {
    // var barracksListners = document.getElementsByClassName("barracks");
    // for (let i = 0; i < barracksListners.length; i++) {
    //     barracksListners[i].addEventListener("click", function() {
    //         console.log("Бараки")
    //         barracksListners[i].removeEventListener('click', barracksHireListner)
    //         barracksListners[i].addEventListener('click', barracksHireListner)

    //     })
    // }

    let leftPanelHirebarracks = document.getElementsByClassName("barracks-interface")
    var length = leftPanelHirebarracks.length
    for (let i = 0; i < length; i++) {
        leftPanelHirebarracks[i].classList.add("hidden")

    }


    console.log("убрано");


    let leftPanel = document.getElementsByClassName("buildings-wrapper")[0];
    leftPanel.classList.remove("hidden")

    let castle = document.getElementsByClassName("castle")[0];
    castle.classList.remove("spot0-active")
    event.stopPropagation()
    let interfaceCastle = document.getElementsByClassName("castle-interface")[0]
    interfaceCastle.classList.add("hidden")


    cancelBuildMedium()

    if (alreadySelected) {

        let barracks = document.getElementsByClassName("selected")[0];
        // if (event.currentTarget.classList.contains == "") {

        // }
        barracks.classList.remove("barracks-complete-highlighted")
        barracks.classList.remove("selected")
        removeEventListener(footmanBtn)
        alreadySelected = false;
    }



    console.log("some buildings not here yet");

})





// var mainLand = document.getElementsByClassName("spot")
// for (let i = 0; i < mainLand.length; i++) {
//     mainLand[i].addEventListener("click", function(event) {
//         if (event.currentTarget.classList[5] == "selected") {
//             console.log("selected")
//         }
//     })

// }

var castleListner = document.getElementsByClassName("castle")[0]

castleListner.addEventListener("click", function(event) {
    let leftPanel = document.getElementsByClassName("buildings-wrapper")[0];
    leftPanel.classList.add("hidden")
    let castle = document.getElementsByClassName("castle")[0];
    castle.classList.add("spot0-active")
    event.stopPropagation()
    let interface = document.getElementsByClassName("castle-interface")[0]
    interface.classList.remove("hidden")

})

var elBarracksLocks = {
    spot1: false,
    spot2: false,
    spot3: false,
    spot4: false
}


var barracksHire = {
    footman: function(spot) {
        var man = `footman-icon-${spot}`
        var footmanBtn = document.getElementsByClassName(man)[0]

        footmanBtn.addEventListener("click", function(event) {
            console.log("footman created")
            if (spot == "spot1" && buildUnitLock == false) {
                let unit = "footman"
                createFakeUnit(unit, pointsToBuilding.medium1.topPoint, pointsToBuilding.medium1.leftPoint, "e")
                let name = `human${unitsNow-1}_${unit}_ally0`
                let man = document.getElementsByClassName(name)[0]
                man.classList.add(`${unit}-idle-s`);
                event.stopPropagation()
                elBarracksLocks.spot1 = true;
                startIntervalRevUnit(event, pointsToCastle.medium1.leftPoint, pointsToCastle.medium1.topPoint, "footman")
            } else if (spot == "spot2" && buildUnitLock == false) {

            }
        })
    },
    archer: function(spot, lock) {
        var man = `archer-icon-${spot}`
        var footmanBtn = document.getElementsByClassName(man)[0]

        footmanBtn.addEventListener("click", function(event) {
            console.log("archer created")
            if (spot == "spot1" && buildUnitLock == false) {
                createFakeUnit("archer", pointsToBuilding.medium1.topPoint, pointsToBuilding.medium1.leftPoint)
                event.stopPropagation()
                elBarracksLocks.spot1 = true;
                startIntervalRevUnit(event, pointsToCastle.medium1.leftPoint, pointsToCastle.medium1.topPoint, "archer")
            } else if (spot == "spot2" && buildUnitLock == false) {
                console.log("а вот это уже другая история")
                createFakeUnit("archer", pointsToCastle.medium1.topPoint, pointsToCastle.medium1.leftPoint)
                event.stopPropagation()
                elBarracksLocks.spot2 = true;
            }
        })
    },
    maseman: function(spot, lock) {
        var man = `maseman-icon-${spot}`
        var footmanBtn = document.getElementsByClassName(man)[0]

        footmanBtn.addEventListener("click", function(event) {
            console.log("maseman created")
            if (spot == "spot1" && buildUnitLock == false) {
                createFakeUnit("maseman", pointsToBuilding.medium1.topPoint, pointsToBuilding.medium1.leftPoint)
                event.stopPropagation()
                elBarracksLocks.spot1 = true;
                startIntervalRevUnit(event, pointsToCastle.medium1.leftPoint, pointsToCastle.medium1.topPoint, "maseman")
            } else if (spot == "spot2" && buildUnitLock == false) {
                console.log("а вот это уже другая история")
                createFakeUnit("maseman", pointsToCastle.medium1.topPoint, pointsToCastle.medium1.leftPoint)
                event.stopPropagation()
                elBarracksLocks.spot2 = true;
            }
        })
    },
    longbowman: function(spot, lock) {
        var man = `longbowman-icon-${spot}`
        var footmanBtn = document.getElementsByClassName(man)[0]

        footmanBtn.addEventListener("click", function(event) {
            console.log("longbowman created")
            if (spot == "spot1" && buildUnitLock == false) {
                createFakeUnit("longbowman", pointsToBuilding.medium1.topPoint, pointsToBuilding.medium1.leftPoint)
                event.stopPropagation()
                elBarracksLocks.spot1 = true;
                startIntervalRevUnit(event, pointsToCastle.medium1.leftPoint, pointsToCastle.medium1.topPoint, "longbowman")
            } else if (spot == "spot2" && buildUnitLock == false) {
                console.log("а вот это уже другая история")
                createFakeUnit("longbowman", pointsToCastle.medium1.topPoint, pointsToCastle.medium1.leftPoint)
                event.stopPropagation()
                elBarracksLocks.spot2 = true;
            }
        })
    }
}

//initial listners for barraks


function posBuildBarracks(event) {
    event.stopPropagation()
    if (gold >= 250) {
        if (!buildMode) {
            buildMode = true;
            buildModeHidden = true;
            canBuildBarracks = true;
            showBarracksImg()
        }

    } else {
        alert("нет бабла/еще строится")
    }
}

function cancelBuildMedium() {
    buildMode = false;
    buildModeHidden = false;
    showBarracksImg()
}

function showBarracksImg() {
    var mediumBuildings = document.getElementsByClassName("building-medium");
    var mediumBuildings_img = document.getElementsByClassName("building-medium_img");
    for (let i = 0; i < mediumBuildings.length; i++) {
        if (mediumBuildings[i].classList[3] == "not-build" && buildModeHidden == true && canBuildBarracks == true) {
            console.log("можем строить")
            mediumBuildings_img[i].classList.add("possible-barracks")
            mediumBuildings_img[i].classList.add("grayscale")

        } else if (mediumBuildings[i].classList[3] == "not-build" && buildModeHidden == false) {

            console.log("лох")
            mediumBuildings_img[i].classList.remove("possible-barracks")
            mediumBuildings_img[i].classList.remove("grayscale")
        }
    }
}


//отслеживания кликов на площадки строительные
var barracksBuildingSites = document.querySelectorAll("img.building-medium_img");

[].forEach.call(barracksBuildingSites, function(el) {
    el.addEventListener('click', function(e) {
        let parent = el.parentNode.classList[3]
        if (buildMode == true &&
            canBuildBarracks == true && parent == "not-build") {
            el.classList.remove("possible-barracks")
            el.classList.remove("grayscale")
            el.parentNode.classList.add("barracks")
            el.classList.add("buildProsesessBig_stadia1")
            el.parentNode.classList.remove("not-build")
            el.parentNode.classList.add("building")
            gold = gold - 250;
            console.log(el.classList)
            buildModeHidden = false;

            showBarracksImg()
            createWorker(pointsToCastle.medium1.topPoint,
                pointsToCastle.medium1.leftPoint, "w")
            startIntervalPeasant(e, pointsToBuilding.medium1.leftPoint, pointsToBuilding.medium1.topPoint)
            buildBig = true;
        }
    })
});






function createWorker(y, x, position) {
    var genName = `human${unitsNow}`
    var sheet = window.document.styleSheets[1];
    sheet.insertRule(`.human${unitsNow} {
    position: absolute;
    display: flex;
    top: ${y}px;
    left: ${x}px;
    flex-direction: column;
    flex-wrap: wrap;
    transition: border 0.3s linear;
    height: 40px;
    width: 40px;
    }
    `, sheet.cssRules.length);
    sheet.insertRule(`.human${unitsNow}:hover {}
        `, sheet.cssRules.length);
    sheet.insertRule(`.human${unitsNow}_peasant_ally0 {
        position: relative;
        height: 40px;
        width: 40px;
        background-image: url("units/worker/walk/${position} (1).gif");
        background-repeat: no-repeat;
        }
            `, sheet.cssRules.length);
    unitsNow++
    var human = new Army(genName, "peasant", "ally");

    human.create("mainLands");
    human.addSoldier();
    let humanArmy = document.getElementsByClassName(genName)[0];
    // armyMovements.movement_left(humanArmy);
    console.log("created");
}



// function createInterval(f, dynamicParameter, interval) {
//     setInterval(function() {



//     }, interval);
// }


var pointsToBuilding = {
    medium1: {
        leftPoint: 300,
        topPoint: 850
    }
}

var pointsToCastle = {
    medium1: {
        leftPoint: 615,
        topPoint: 850
    }

}

var intervalId;

function startIntervalRevPeasant(event, left, top) {
    // Store the id of the interval so we can clear it later
    intervalId = setInterval(movementtestReverse.bind(window, left, top, event), 66);
}

function startIntervalPeasant(event, left, top) {
    // Store the id of the interval so we can clear it later
    intervalId = setInterval(movementtest.bind(window, left, top, event), 66)
}


function movementtest(leftPoint, topPoint, event, unit) {
    // console.log(unitsNow)
    var movementPointLeft1 = leftPoint;
    var movementPoint1Top = topPoint;
    loop1:
        for (let o = 0; o <= unitsNow; o++) {
            var genName = `human${o} peasant`
            let human = document.getElementsByClassName(genName)[0];
            var genName2 = `human${o}_peasant_ally0`
            let humanImage = document.getElementsByClassName(genName2)[0];
            if (human == undefined) {
                continue loop1
            }
            var computedStyleArmy = getComputedStyle(human);
            var leftNumber = parseInt(computedStyleArmy.left)
            if (leftNumber >= movementPointLeft1) {
                armyMovements.movement_left(human)
                armyMovements.movement_top(human, movementPoint1Top)
            } else {

                humanImage.classList.add("worker-idle-n");
                setTimeout(() => {
                    humanImage.classList.remove("worker-idle-n");
                    humanImage.classList.add("worker-build-n");
                    canBuild(event)
                    setTimeout(() => {
                        humanImage.classList.add("worker-idle-n");
                        humanImage.classList.remove("worker-build-n");
                        setTimeout(() => {
                            humanImage.classList.add("worker-walk-e");
                            humanImage.classList.remove("worker-idle-n");
                        }, 66);
                    }, 5000);
                }, 1000);
                clearInterval(intervalId)
                setTimeout(() => {
                    startIntervalRevPeasant(event, pointsToCastle.medium1.leftPoint, pointsToCastle.medium1.topPoint)
                    console.log("Интервал пащеел");
                }, 6000);


            }

        }

}

function startIntervalRevUnit(event, left, top, unit) {
    // Store the id of the interval so we can clear it later
    intervalIdUnit = setInterval(movementUnitReverse.bind(window, left, top, unit), 66);
}

// function startIntervalUnit(event, left, top, unit) {
//     // Store the id of the interval so we can clear it later
//     intervalId = setInterval(movementUnit.bind(window, left, top, unit), 66)
// }


// function movementUnit(leftPoint, topPoint, unit) {
//     // console.log(unitsNow)
//     var movementPointLeft1 = leftPoint;
//     var movementPoint1Top = topPoint;
//     loop1:
//         for (let o = 0; o <= unitsNow; o++) {
//             var genName = `human${o} ${unit}`
//             let human = document.getElementsByClassName(genName)[0];
//             var genName2 = `human${o}_${unit}_ally0`
//             let humanImage = document.getElementsByClassName(genName2)[0];
//             if (human == undefined) {
//                 continue loop1
//             }
//             var computedStyleArmy = getComputedStyle(human);
//             var leftNumber = parseInt(computedStyleArmy.left)
//             if (leftNumber >= movementPointLeft1) {
//                 armyMovements.movement_left(human)
//                 armyMovements.movement_top(human, movementPoint1Top)
//             } else {
//                 humanImage.classList.add(`${unit}-idle-n`);
//                 setTimeout(() => {
//                     humanImage.classList.remove(`${unit}-idle-n`);
//                     humanImage.classList.add(`${unit}-build-n`);
//                 }, 1000);
//                 clearInterval(intervalId)
//                     // setTimeout(() => {
//                     //     startIntervalRevPeasant(event, pointsToCastle.medium1.leftPoint, pointsToCastle.medium1.topPoint)
//                     //     console.log("Интервал пащеел");
//                     // }, 6000);


//             }

//         }

// }
//movement Animation Cotrollers
var movementAC = {
    left: false,
    wait: false
}

var unitsReserveTotal = 0;

var unitsReserve = {
    footman: {
        count: 0
    },
    archer: {
        count: 0
    },
    maseman: {
        count: 0
    },
    longbowman: {
        count: 0
    }
}

var buildUnitLock = false;

function movementUnitReverse(leftPoint, topPoint, unit) {
    // console.log(unitsNow)
    buildUnitLock = true;
    var movementPointLeft1 = leftPoint;
    var movementPoint1Top = topPoint;
    loop1:
        for (let o = 0; o <= unitsNow; o++) {
            var genName = `human${o} ${unit}`
            let human = document.getElementsByClassName(genName)[0];
            var genName2 = `human${o}_${unit}_ally0`
            let humanImage = document.getElementsByClassName(genName2)[0];
            if (human == undefined) {
                continue loop1
            }
            var computedStyleArmy = getComputedStyle(human);
            var leftNumber = parseInt(computedStyleArmy.left)

            if (!movementAC.wait) {
                movementAC.wait = true;
                humanImage.classList.remove(`${unit}-idle-s`);
                humanImage.classList.add(`${unit}-idle-se`);
            }

            if (leftNumber <= movementPointLeft1 && movementPointLeft1 >= leftNumber) {
                if (!movementAC.left) {
                    movementAC.left = true;
                    humanImage.classList.add(`${unit}-walk-e`);
                    humanImage.classList.remove(`${unit}-idle-se`);
                }
                armyMovements.movement_right(human)
                armyMovements.movement_top(human, movementPoint1Top)
            } else if (leftNumber >= movementPointLeft1 && movementPointLeft1 <= leftNumber) {
                humanImage.classList.remove(`${unit}-walk-e`);
                humanImage.classList.add(`${unit}-idle-e`);
                clearInterval(intervalIdUnit)
                movementAC.left = false;
                movementAC.wait = false;

                unitsReserveTotal++
                unitsReserve[unit].count++

                    setTimeout(() => {
                        humanImage.classList.remove(`${unit}-idle-e`);
                        removeUnit(human)
                        buildUnitLock = false;
                    }, 1500);

            }
        }
}

function canBuild(event) {
    if (buildTiny) {
        buildTinyStart()
        buildTiny = false;
    } else if (buildSmall) {
        buildSmallStart()
        buildSmall = false;
    } else if (buildMedium) {
        buildMediumStart()
        buildMedium = false;
    } else if (buildBig) {
        buildBigStart(event)
        buildBig = false;
    }
}



// var movePeasantReverse = setInterval(movementtestReverse.bind(window, points.leftPoint, points.topPoint), 66)
var changed = false;

function movementtestReverse(leftPoint, topPoint) {
    // console.log(unitsNow)
    var movementPointLeft1 = leftPoint;
    var movementPoint1Top = topPoint;
    loop1:
        for (let o = 0; o <= unitsNow; o++) {
            var genName = `human${o} peasant`
            let human = document.getElementsByClassName(genName)[0];
            var genName2 = `human${o}_peasant_ally0`
            let humanImage = document.getElementsByClassName(genName2)[0];
            if (human == undefined) {
                continue loop1
            }
            var computedStyleArmy = getComputedStyle(human);
            var leftNumber = parseInt(computedStyleArmy.left)
            if (leftNumber <= movementPointLeft1 && movementPointLeft1 >= leftNumber) {
                armyMovements.movement_right(human)
                armyMovements.movement_top(human, movementPoint1Top)
            } else {
                humanImage.classList.add("worker-idle-e");
                humanImage.classList.remove("worker-walk-e");
                setTimeout(() => {
                    buildMode = false;
                    clearInterval(intervalId)
                    removeUnit(human)

                    if (!changed) {
                        unitsNow = unitsNow - 1
                        changed = true;
                    }
                }, 1000);
            }
        }
}


function removeUnit(element) {
    element.remove()
}
//указатель координат
// document.body.addEventListener("mousemove", function(event) {

//     var position = "X Coordinate: " + event.clientX + " Y Coordinate: " + event.clientY;
//     console.log(position);
// });

//ресурсы

var gold = 500;
var wood = 500;
var stone = 500;
var food = 500;

const showresources = setInterval(() => {
    let goldValue = document.getElementsByClassName("gold")[0]
    let woodValue = document.getElementsByClassName("wood")[0]
    let stoneValue = document.getElementsByClassName("food")[0]
    let foodValue = document.getElementsByClassName("stone")[0]
    let unitsValue = document.getElementsByClassName("units")[0]
    goldValue.innerHTML = gold;
    woodValue.innerHTML = wood;
    stoneValue.innerHTML = stone;
    foodValue.innerHTML = food;
    unitsValue.innerHTML = unitsNow + "/" + unitLimit;

    let footmanReserve = document.getElementsByClassName("count-footman")[0]
    footmanReserve.innerHTML = unitsReserve.footman.count;
    let archerReserve = document.getElementsByClassName("count-archer")[0]
    archerReserve.innerHTML = unitsReserve.archer.count;
    let masemanReserve = document.getElementsByClassName("count-maseman")[0]
    masemanReserve.innerHTML = unitsReserve.maseman.count;
    let longbowmanReserve = document.getElementsByClassName("count-longbowman")[0]
    longbowmanReserve.innerHTML = unitsReserve.longbowman.count;
}, 250);




function unitCreateAnimations(unit, action) {

    var direction = ["s", "se", "e", "ne", "n", "nw", "w", "sw"]
    var sheet = window.document.styleSheets[1];
    if (unit == "worker") {
        for (let i = 0; i < 8; i++) {
            sheet.insertRule(`.${unit}-${action}-${direction[i]} {
                position: relative;
                height: 40px;
                width: 40px;
                background-image: url("units/${unit}/${action}/${direction[i]} (1).gif") !important;
                background-repeat: no-repeat;
    }`, sheet.cssRules.length);
        }
    } else {
        for (let i = 0; i < 8; i++) {
            sheet.insertRule(`.${unit}-${action}-${direction[i]} {
            
            content: url("units/${unit}/${action}/${direction[i]} (1).gif")
    }`, sheet.cssRules.length);
        }
    }

}

(function insertAnimations() {
    var units = Object.keys(unitsReserve)
    for (unit of units) {
        unitCreateAnimations(unit, "idle")
        unitCreateAnimations(unit, "walk")
        unitCreateAnimations(unit, "attack")
        unitCreateAnimations(unit, "die")
    }

    //дополнительные анимации


    unitCreateAnimations("footman", "attack2")

    unitCreateAnimations("worker", "idle")
    unitCreateAnimations("worker", "walk")
    unitCreateAnimations("worker", "build")
}())


// var testELMouse = document.getElementsByTagName("body")[0]
// testELMouse.addEventListener("click", callme);

// function callme(e) {
//     var myImage = document.getElementsByClassName("human1_footman_ally0")[0]
//     console.log('My width is: ', this.naturalWidth);
//     console.log('My height is: ', this.naturalHeight);

//     console.log(e.layerX + " " + e.layerY)

//     if (e.layerY <= 200) {
//         console.log("border")
//     } else {
//         // createFakeUnit("footman", e.layerY - 15, e.layerX - 10, "s")
//     }
// }

var myImage = document.getElementsByClassName("castle-img")[0]

myImage.addEventListener('click', function() {
    console.log('My width is: ', this.naturalWidth);
    console.log('My height is: ', this.naturalHeight);
});

var restrictedAreas = {
    spot1: [1, 6]

}