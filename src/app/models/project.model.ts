export interface Technology {
  name: string;
  imgUrl: string;
}

export interface Project {
  id: string;
  index: number; // Eine eindeutige, numerische Reihenfolge
  title: string; // Titel des Projekts
  description: string; // Beschreibung des Projekts
  technologies: Technology[]; // Array mit Technologien
  image: string; // Pfad zum Bild
  customClass: string; // Zusätzliche Klassen für CSS
}
