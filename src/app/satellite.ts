export class Satellite {
 name : string;
 orbitType: string;
 type: string;
 launchDate: string;
 operational: boolean;
 
 constructor(name: string, orbitType: string, type: string, launchDate: string, operational: boolean) {
     this.name = name;
     this.orbitType = orbitType;
     this.type = type;
     this.launchDate = launchDate;
     this.operational = operational;
 }

 shouldShowWarning() {
    return (this.type === "Space Debris");
 }
}