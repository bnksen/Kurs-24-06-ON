let besuchteSeiten = new Set(); 
besuchteSeiten.add('Startseite');
besuchteSeiten.add('Profil');
besuchteSeiten.add('Einstellungen');
besuchteSeiten.add('Profil');
besuchteSeiten.add('Profil'); 
console.log(`Anzahl der eindeutigen Seiten: ${besuchteSeiten.size}`);
function zeigeSeiten() { 
  besuchteSeiten.forEach((seite) => { 
    console.log(`Besuchte Seite: ${seite}`); 
  }); 
} 