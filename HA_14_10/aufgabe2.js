function interpretiereWetterlage(wetterlage) {
    switch (wetterlage) {
        case "windig":
            console.log("Lass einen Drachen fliegen");
            break;
        case "regnerisch":
            console.log("Bleib zuhause und lies ein Buch");
            break;
        case "schnee":
            console.log("Baue einen Schneemann");
            break;
        case "sonnig":
            console.log("Geh spazieren!");
            break; 
        default:
            console.log("Keine passende Aktivität verfügbar");
    }
}


interpretiereWetterlage("windig");      
interpretiereWetterlage("regnerisch");   
interpretiereWetterlage("schnee");       
interpretiereWetterlage("sonnig");       
interpretiereWetterlage("bewölkt");