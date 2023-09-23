
    function generarInsult(frase1,frase2,frase3){
        return ('Thou, ' + frase1[Math.floor(Math.random() * frase1.length)] + ' '+ 
        frase2[Math.floor(Math.random() * frase2.length)] + ' '+ 
        frase3[Math.floor(Math.random() * frase3.length)]) ;
    }
    window.onload = function(){
        let frase1 = ["artless", "bawdy", "beslubbering", "bootless", "churlish", "cockered", "clouted", "craven", "currish", "dankish", "dissembling", "droning","errant", "fawning", "fobbing", "froward", "frothy", "gleeking", "goatish", "gorbellied", "impertinent", "infectious", "jarring", "loggerheaded", "lumpish", "mammering", "mangled", "mewling", "paunchy", "pribbling", "puking", "puny", "qualling", "rank", "reeky", "roguish", "ruttish","saucy", "spleeny", "spongy", "surly", "tottering", "unmuzzled", "vain", "venomed", "villainous", "warped", "wayward", "weedy", "yeasty","cullionly", "fusty", "caluminous", "wimpled", "burly-boned", "misbegotten","odiferous", "poisonous", "fishified", "Wart-necked"];
        let frase2 = ["base-court", "bat-fowling", "beef-witted", "beetle-headed", "boil-brained", "clapper-clawed", "clay-brained", "common-kissing","crook-pated", "dismal-dreaming", "dizzy-eyed", "doghearted", "dread-bolted", "earth-vexing", "elf-skinned", "fat-kidneyed", "fen-sucked", "flap-mouthed", "fly-bitten", "folly-fallen", "fool-born", "full-gorged", "guts-griping", "half-faced", "hasty-witted", "hedge-born", "hell-hated", "idle-headed", "ill-breeding", "ill-nurtured", "knotty-pated", "milk-livered", "motley-minded", "onion-eyed","plume-plucked", "pottle-deep", "pox-marked", "reeling-ripe", "rough-hewn", "rude-growing", "rump-fed", "shard-borne", "sheep-biting", "spur-galled", "swag-bellied", "tardy-gaited", "tickle-brained", "toad-spotted", "unchin-snouted", "weather-bitten","whoreson", "malmsey-nosed", "rampallian", "lily-livered", "scurvy-valiant", "brazen-faced", "unwashd", "bunch-backd", "leaden-footed", "muddy-mettled", "pigeon-liverd", "scale-sided"];
        let frase3 = ["apple-john", "baggage", "barnacle", "bladder", "boar-pig", "bugbear", "bum-bailey", "canker-blossom", "clack-dish", "clotpole", "coxcomb", "codpiece", "death-token", "dewberry", "flap-dragon", "flax-wench", "flirt-gill", "foot-licker", "fustilarian", "giglet", "gudgeon", "haggard", "harpy", "hedge-pig", "horn-beast", "hugger-mugger", "joithead", "lewdster", "lout", "maggot-pie", "malt-worm", "mammet", "measle", "minnow", "miscreant", "moldwarp", "mumble-news", "nut-hook", "pigeon-egg", "pignut", "puttock", "pumpion", "ratsbane", "scut", "skainsmate", "strumpet", "varlot", "vassal", "whey-face", "wagtail", "knave", "blind-worm", "popinjay", "scullian", "jolt-head", "malcontent", "devil-monk", "toad", "rascal", "Basket-Cockle"];
        let boto = document.getElementsByTagName('button')[0] //coge el primer boton,ya que devuelve array de botones
        let taula = document.getElementsByTagName('table')[0] 
        boto.onclick = function(){
            frase1.length;
            console.log('funciona');
            let tr = document.createElement('tr');
            let td = document.createElement('td');
            contingut = document.createTextNode(generarInsult(frase1,frase2,frase3));
            td.appendChild(contingut);
            tr.appendChild(td);
            taula.appendChild(tr);
        };
    }
