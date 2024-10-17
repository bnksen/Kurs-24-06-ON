let benutzerVerwaltung = new Map();
benutzerVerwaltung.set("Sidespell", { email: "sidespell@gmx.de", rolle: "Admin"});
benutzerVerwaltung.set("Kohledawarrior", { email: "sexyrudirasenmaeherboy@spankmail.com", rolle: "User"});
benutzerVerwaltung.set("BudiBonksiDinksiDonksi", { email: "budibonksidinksidonksi@bonksimail.de", rolle: "Developer"});
function zeigeBenutzer() {
  console.log("Benutzerverwaltung:");
  benutzerVerwaltung.forEach((benutzer, name) => {
    console.log(`${name}: ${benutzer.email}, ${benutzer.rolle}`);
  });
}
zeigeBenutzer();