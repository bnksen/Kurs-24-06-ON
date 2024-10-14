function bestimmteKategorien(alter) {
    if (alter >=0 && alter <=12) {
        console.log("Kind");
    } else if (alter >= 13 && alter <= 17) {
        console.log("Jugendlicher");
    } else if (alter >= 18 && alter <= 64) {
        console.log("Erwachsener");
    } else if (alter >= 65) {
        console.log("Senior");
    }
}
bestimmteKategorien(5);  
bestimmteKategorien(15);  
bestimmteKategorien(30);  
bestimmteKategorien(70); 