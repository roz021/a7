    function storeInterests(){
        var aerobic = document.getElementById('aer');
        var bbuild = document.getElementById('bb');
        var card = document.getElementById('cc');
        var dance = document.getElementById('d');
        var mar = document.getElementById('ma');
        var pow = document.getElementById('pl');
        var sport = document.getElementById('sp');
        var train = document.getElementById('tr');
        var weight = document.getElementById('wl');

        if(aerobic.style.opacity == 0.5){
            allInt.push("Aerobics");
        }
        if(bbuild.style.opacity == 0.5){
            allInt.push("BodyBuilding");
        }
        if(card.style.opacity == 0.5){
            allInt.push("Cardio");
        }
        if(dance.style.opacity == 0.5){
            allInt.push("Dance");
        }
        if(mar.style.opacity == 0.5){
            allInt.push("Martial-Arts");
        }
        if(pow.style.opacity == 0.5){
            allInt.push("PowerLifting");
        }
        if(sport.style.opacity == 0.5){
            allInt.push("Sports");
        }
        if(train.style.opacity == 0.5){
            allInt.push("Training");
        }
        if(weight.style.opacity == 0.5){
            allInt.push("WeightLifting");
        }

        localStorage.setItem('interests', JSON.stringify(allInt));
        location.href="../home.html";
    }
