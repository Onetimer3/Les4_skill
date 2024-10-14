const schoolDagen = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag"];
const huidigeDag = "zondag"; 

if (schoolDagen.includes(huidigeDag)) {
    console.log(`Ik moet naar school op: ${schoolDagen.join(", ")}`);
} else if (huidigeDag == "zaterdag" || huidigeDag == "zondag") {
    console.log(`Lekker uitslapen! Maar ik moet naar school op: ${schoolDagen.join(", ")}`);
} 