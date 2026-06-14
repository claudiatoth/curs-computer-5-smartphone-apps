// ============================================
// FLASHCARDS - Computer & Büro Teil 5: Smartphone & Apps (A2/B1)
// Claudia Toth · 32 carduri cu TTS · substantive Sg·Pl
// ============================================

const flashcardsData = [
    { de: "das Smartphone · die Smartphones", ro: "smartphone-ul · ..." },
    { de: "das Handy · die Handys", ro: "telefonul (mobil) · ..." },
    { de: "die App · die Apps", ro: "aplicația · aplicațiile" },
    { de: "der App Store · die App Stores", ro: "magazinul de aplicații · ..." },
    { de: "das Update · die Updates", ro: "actualizarea · actualizările" },
    { de: "der Akku · die Akkus", ro: "bateria (acumulatorul) · ..." },
    { de: "das Ladegerät · die Ladegeräte", ro: "încărcătorul · ..." },
    { de: "die Einstellung · die Einstellungen", ro: "setarea · setările" },
    { de: "die Benachrichtigung · die Benachrichtigungen", ro: "notificarea · ..." },
    { de: "der Bildschirm · die Bildschirme", ro: "ecranul · ecranele" },
    { de: "die Kamera · die Kameras", ro: "camera (foto) · ..." },
    { de: "der Speicher", ro: "memoria / stocarea (Sg.)" },
    { de: "die SIM-Karte · die SIM-Karten", ro: "cartela SIM · ..." },
    { de: "der Klingelton · die Klingeltöne", ro: "tonul de apel · ..." },
    { de: "die mobilen Daten (Pl.)", ro: "datele mobile" },
    { de: "das Symbol · die Symbole", ro: "pictograma / iconița · ..." },
    { de: "die Taste · die Tasten", ro: "tasta / butonul · ..." },
    { de: "das Foto · die Fotos", ro: "poza / fotografia · ..." },
    { de: "die Helligkeit", ro: "luminozitatea (Sg.)" },
    { de: "die Verbindung · die Verbindungen", ro: "conexiunea · ..." },
    { de: "leer / voll", ro: "gol / plin" },
    { de: "neu / alt", ro: "nou / vechi" },
    { de: "schnell / langsam", ro: "rapid / lent" },
    { de: "aktualisieren", ro: "a actualiza" },
    { de: "aufladen", ro: "a încărca (bateria)" },
    { de: "einschalten / ausschalten", ro: "a porni / a opri" },
    { de: "drücken", ro: "a apăsa (o tastă)" },
    { de: "benutzen", ro: "a folosi" },
    { de: "herunterladen", ro: "a descărca" },
    { de: "löschen", ro: "a șterge" },
    { de: "Mein Akku ist fast leer.", ro: "Bateria mea e aproape goală." },
    { de: "Ich aktualisiere die App.", ro: "Actualizez aplicația." }
];

let currentCardIndex = 0;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri: vocabularul pentru smartphone și aplicații.</strong><br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție germană automată.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content"><div class="de" id="flashcard-de">${flashcardsData[0].de}</div><div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div></div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}
function updateFlashcard() {
    const card = document.getElementById('flashcard'), de = document.getElementById('flashcard-de'), ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter'), prevBtn = document.getElementById('prev-btn'), nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.textContent = c.de; ro.textContent = c.ro; card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}
function flipCard() { const card = document.getElementById('flashcard'); if (card) card.classList.toggle('flipped'); }
function nextCard() { if (currentCardIndex < flashcardsData.length - 1) { currentCardIndex++; updateFlashcard(); } }
function prevCard() { if (currentCardIndex > 0) { currentCardIndex--; updateFlashcard(); } }
function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if ('speechSynthesis' in window) { window.speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(card.de); u.lang = 'de-DE'; u.rate = 0.85; window.speechSynthesis.speak(u); }
    else { alert('Browser-ul tău nu suportă Text-to-Speech. Folosește Chrome, Edge sau Safari.'); }
}
document.addEventListener('DOMContentLoaded', function() { buildFlashcards(); });
