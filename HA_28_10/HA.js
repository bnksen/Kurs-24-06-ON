const fs = require ('fs').promises; // Importiert das fs-Modul, um mit Dateien zu arbeiten.
const redline = require('readline'); // Importiert den readline-Modul, um Eingaben von der Konsole zu lesen.

// Erstellt eine interaktive Konsole-Eingabe mit readline.createInterface.
const rl = redline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Fragt den Benutzer nach einem Text und liest die Antwort ein.
const frage = (text) => { 
    return new Promise((resolve) => rl.question(text, resolve)
)};
async function main() {
    try {
        // Frage den Benutzer nach einem Ordnernamen und eine Nachricht.
        const ordnername = await frage('Geben Sie den Namen für den Ordner ein: ');
        // Frage den Benutzer nach einer Nachricht.
        const nachricht = await frage("Welche Nachricht möchten Sie Hinterlassen? ");
    try {
        await fs.access(ordnername); // Prüft, ob der Ordner bereits existiert.
        console.log('Der Ordner existiert bereits.');   
    } catch {
        await fs.mkdir(ordnername); // Wenn der Ordner nicht existiert, wird er erstellt.
        console.log(`Der Ordner ${ordnername} wurde erfolgreich erstellt.`);
    }
    const pfad = `${ordnername}/nachricht.txt`; // Pfad zur Datei.
    await fs.writeFile(pfad, nachricht); // Schreibt die Nachricht in die Datei. 
    console.log(`Die Nachricht wurde in ${pfad} geschrieben.`);
    } catch (error) {   
    console.error(`Es ist ein Fehler aufgetreten: ${error.message}`); // Beendet die interaktive Konsole.
    } finally {
    rl.close(); // Beendet den readline-Interface.
    }
};

main(); // Startet den Hauptprogramm.
