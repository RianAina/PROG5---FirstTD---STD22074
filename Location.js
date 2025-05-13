class Location {
  constructor(client, objet, dateDebut, dateFin) {
    this.id = Location.incrementId++;
    this.client = client;
    this.objet = objet;
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
    this.etat = 'disponible'; 
  }
}
Location.incrementId = 1;

class LocationApp {
  constructor() {
    this.locations = [];
  }

  ajouterLocation(client, objet, dateDebut, dateFin) {
    const nouvelleLocation = new Location(client, objet, dateDebut, dateFin);
    this.locations.push(nouvelleLocation);
    console.log(" Nouvelle location ajoutée :", nouvelleLocation);
  }

  afficherLocations() {
    if (this.locations.length === 0) {
      console.log("Aucune location avait été enregistrée.");
    } else {
      console.log(" Liste des locations :");
      this.locations.forEach(loc => {
        console.log(`#${loc.id} - ${loc.client} a loué ${loc.objet} du ${loc.dateDebut} au ${loc.dateFin} [${loc.etat}]`);
      });
    }
  }

  changerEtat(id, nouvelEtat) {
    const location = this.locations.find(loc => loc.id === id);
    if (location) {
      console.log(` Location #${id} changé en "${location.etat}" à "${nouvelEtat}"`);
      location.etat = nouvelEtat;
    } else {
      console.log(` Aucune location trouvée avec cet ID : ${id}`);
    }
  }
}


const app = new LocationApp();

app.ajouterLocation("Rian'Aina", "Moto", "2025-05-10", "2025-05-15");
app.ajouterLocation("Rabearivelo", "Casque", "2025-05-12", "2025-05-13");
app.afficherLocations();
app.changerEtat(1, "réservé");
app.changerEtat(2, "en cours");
app.afficherLocations();
