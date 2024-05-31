const nagelvormSelect = document.querySelector('#nagelvorm');  
const kleurSelect = document.querySelector('#kleur');  
const decoratieSelect = document.querySelector('#decoratie');  
const handImage = document.querySelector('#handimg');  
const opnieuwKnop = document.querySelector('#opnieuw'); 
const klaarKnop = document.querySelector('#klaar'); 
const veranderNaam = document.querySelector("h1");

// Functie om de afbeelding te veranderen
function updateImage() {
    const nagelvorm = nagelvormSelect.value;
    const kleur = kleurSelect.value;
    const decoratie = decoratieSelect.value;

    // Bepaal de nieuwe src op basis van de geselecteerde waarden
    let newSrc;
    if (decoratie === 'none') {
        newSrc = `img/nails_${nagelvorm}${kleur ? kleur : ''}.svg`;
    } else {
        newSrc = `img/nails_${nagelvorm}${kleur}${decoratie}.svg`;
    }
    handImage.src = newSrc;  // Update de src van handImage
}

// Event listeners voor het veranderen van de selecties
nagelvormSelect.addEventListener('change', updateImage);  
kleurSelect.addEventListener('change', updateImage);  
decoratieSelect.addEventListener('change', updateImage);

// Functie om opnieuw te beginnen
function beginOpnieuw() {
    nagelvormSelect.value = 'oval';  
    kleurSelect.value = 'pink';  
    decoratieSelect.value = 'none';
    updateImage();

    // Reset de select-elementen
    nagelvormSelect.disabled = false;
    kleurSelect.disabled = false;
    decoratieSelect.disabled = false;

    // Verander de titel terug naar de oorspronkelijke staat
    veranderNaam.textContent = 'Manicure Game';

    // Toon de "Klaar!" knop weer
    klaarKnop.style.display = 'inline-block';
}

// Voeg event listener toe aan de "Opnieuw" knop
opnieuwKnop.addEventListener('click', beginOpnieuw);

// Voeg event listener toe aan de "Klaar!" knop
if (klaarKnop) {
    klaarKnop.addEventListener('click', function () {
        // Lock de keuzes
        nagelvormSelect.disabled = true;
        kleurSelect.disabled = true;
        decoratieSelect.disabled = true;

        // Verander de titel
        veranderNaam.textContent = 'Goed gedaan!';

        // Verberg de knop
        klaarKnop.style.display = 'none';
    });
}

updateImage();

