// ============================================
// TEORIE - Computer & Büro Teil 5: Smartphone & Apps (A2/B1)
// Claudia Toth · germană pentru telefon: aplicații, baterie, setări, notificări
// Sursă: extindere pe track-ul Computer & Büro — vocabular verificat
// ============================================

const theoryHTML = `
    <!-- 0: Intro -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>📚 1. Telefonul și aplicațiile (Smartphone & Apps)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/andreea.png" alt="Andreea">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea</div>
                    <div class="text">A cincea lecție din seria <strong>Computer &amp; Büro</strong>! Azi vorbim despre <strong>smartphone</strong> și <strong>aplicații</strong>: cum <strong>actualizezi o aplicație</strong> (eine App aktualisieren), cum <strong>încarci bateria</strong> (den Akku aufladen), cum <strong>pornești</strong> telefonul, cum reglezi <strong>setările</strong> (die Einstellungen) și ce faci cu prea multe <strong>notificări</strong>. La final ascult un dialog cu Frau Richter, consultanta de la magazinul de telefoane.</div>
                </div>
            </div>
            <div class="theory-box" style="background:#dbeafe;border-color:#D4A574;">
                <h4>ℹ️ Telefonul — vocabular de zi cu zi</h4>
                <p>Smartphone-ul e peste tot, deci vocabularul lui îți e util zilnic — fie că ești la magazin, la muncă sau acasă. Cuvinte-cheie: <strong>die App</strong> (aplicația), <strong>der Akku</strong> (bateria), <strong>das Update</strong> (actualizarea), <strong>die Einstellungen</strong> (setările) și <strong>die Benachrichtigung</strong> (notificarea).</p>
            </div>
        </div>
    </div>

    <!-- 1: Vocabular -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>📱 2. Vocabular: smartphone & apps (Grundwortschatz)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-vocabular.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="theory-box" style="background:#F5F0E8;border-color:#D4A574;">
                <h4>🚨 Substantivele se învață ÎNTOTDEAUNA cu pluralul</h4>
                <p>În germană pluralul e imprevizibil (-e, -en, -s, Umlaut sau identic). De aceea fiecare substantiv apare aici la <strong>singular · plural</strong>. Învață-le împreună, ca pe o pereche.</p>
            </div>
            <table class="grammar-table">
                <thead><tr><th>Singular</th><th>Plural</th><th>Traducere RO</th><th>Exemplu (DE)</th></tr></thead>
                <tbody>
                    <tr><td class="verb">das Smartphone / das Handy</td><td class="verb">die Smartphones / die Handys</td><td>smartphone-ul / telefonul · ...</td><td><em>Mein Handy ist neu.</em></td></tr>
                    <tr><td class="verb">die App</td><td class="verb">die Apps</td><td>aplicația · aplicațiile</td><td><em>Ich lade eine App herunter.</em></td></tr>
                    <tr><td class="verb">der App Store</td><td class="verb">die App Stores</td><td>magazinul de aplicații · ...</td><td><em>Such die App im App Store.</em></td></tr>
                    <tr><td class="verb">das Update</td><td class="verb">die Updates</td><td>actualizarea · actualizările</td><td><em>Es gibt ein neues Update.</em></td></tr>
                    <tr><td class="verb">der Akku</td><td class="verb">die Akkus</td><td>bateria (acumulatorul) · ...</td><td><em>Der Akku ist leer.</em></td></tr>
                    <tr><td class="verb">das Ladegerät</td><td class="verb">die Ladegeräte</td><td>încărcătorul · ...</td><td><em>Wo ist das Ladegerät?</em></td></tr>
                    <tr><td class="verb">die Einstellung</td><td class="verb">die Einstellungen</td><td>setarea · setările</td><td><em>Öffne die Einstellungen.</em></td></tr>
                    <tr><td class="verb">die Benachrichtigung</td><td class="verb">die Benachrichtigungen</td><td>notificarea · notificările</td><td><em>Ich bekomme zu viele Benachrichtigungen.</em></td></tr>
                    <tr><td class="verb">der Bildschirm</td><td class="verb">die Bildschirme</td><td>ecranul · ecranele</td><td><em>Der Bildschirm ist hell.</em></td></tr>
                    <tr><td class="verb">die Kamera</td><td class="verb">die Kameras</td><td>camera (foto) · ...</td><td><em>Die Kamera macht gute Fotos.</em></td></tr>
                    <tr><td class="verb">der Speicher</td><td class="verb">— (de obicei Sg.)</td><td>memoria / stocarea</td><td><em>Der Speicher ist voll.</em></td></tr>
                    <tr><td class="verb">die SIM-Karte</td><td class="verb">die SIM-Karten</td><td>cartela SIM · ...</td><td><em>Leg die SIM-Karte ein.</em></td></tr>
                    <tr><td class="verb">der Klingelton</td><td class="verb">die Klingeltöne</td><td>tonul de apel · ...</td><td><em>Stell den Klingelton leiser.</em></td></tr>
                    <tr><td class="verb">die mobilen Daten</td><td class="verb">— (Pl.)</td><td>datele mobile</td><td><em>Schalt die mobilen Daten ein.</em></td></tr>
                    <tr><td class="verb">leer / voll</td><td class="verb">—</td><td>gol / plin (adjective)</td><td><em>Der Akku ist fast leer.</em></td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- 2: Apps verwalten -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>⚙️ 3. Cum gestionezi aplicațiile și setările</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-apps.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="theory-box" style="background:#FBF7EF;">
                <h4>💡 Pașii de bază</h4>
                <p>Aplicațiile se <strong>descarcă</strong> din App Store și apoi se <strong>actualizează</strong> regulat („aktualisieren") ca să meargă bine. Dacă bateria e goală, o <strong>încarci</strong> („den Akku aufladen"). În <strong>Einstellungen</strong> reglezi totul: notificări, sunet, luminozitate. Iar dacă ceva nu merge, <strong>pornești și oprești</strong> telefonul („ein- und ausschalten").</p>
            </div>
            <table class="grammar-table">
                <thead><tr><th>Acțiune (DE)</th><th>Ce înseamnă (RO)</th></tr></thead>
                <tbody>
                    <tr><td class="verb">eine App herunterladen</td><td>a descărca o aplicație</td></tr>
                    <tr><td class="verb">eine App aktualisieren</td><td>a actualiza o aplicație</td></tr>
                    <tr><td class="verb">den Akku aufladen</td><td>a încărca bateria</td></tr>
                    <tr><td class="verb">das Handy einschalten / ausschalten</td><td>a porni / a opri telefonul</td></tr>
                    <tr><td class="verb">die Einstellungen öffnen</td><td>a deschide setările</td></tr>
                    <tr><td class="verb">eine Taste drücken</td><td>a apăsa un buton</td></tr>
                </tbody>
            </table>
            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/annette.png" alt="Annette">
                <div class="andreea-note-content">
                    <div class="speaker">Annette</div>
                    <div class="text">Atenție la verbe foarte asemănătoare: <strong>aufladen</strong> (a încărca bateria) — neregulat și separabil (a→ä: er lädt auf). Și nu uita: la telefon <strong>drücken</strong> = a apăsa (o tastă), nu confunda cu <strong>drucken</strong> (a printa) din lecția cu e-mailul! 💚</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: Situații practice -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🎭 4. Situații practice (probleme cu telefonul)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-situatii.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box"><h4>🔋 Bateria se descarcă repede — Der Akku ist schnell leer</h4>
                <p class="de"><em>„Mein Akku ist immer so schnell leer." — „Schließen Sie Apps im Hintergrund und reduzieren Sie die Helligkeit."</em></p>
                <p class="ro">Expresii: <strong>der Akku ist leer</strong> (bateria e goală) · <strong>Apps im Hintergrund</strong> (aplicații în fundal) · <strong>die Helligkeit reduzieren</strong> (a reduce luminozitatea)</p>
            </div>
            <div class="theory-box"><h4>🔄 Aplicația nu se actualizează — App-Update klemmt</h4>
                <p class="de"><em>„Die App lässt sich nicht aktualisieren." — „Prüfen Sie die Verbindung und versuchen Sie es im App Store erneut."</em></p>
                <p class="ro">Expresii: <strong>lässt sich nicht aktualisieren</strong> (nu se lasă actualizată) · <strong>im App Store</strong> (în App Store) · <strong>erneut versuchen</strong> (a încerca din nou)</p>
            </div>
            <div class="theory-box"><h4>🗄️ Memorie plină — Speicher voll</h4>
                <p class="de"><em>„Ich kann keine Fotos mehr machen." — „Ihr Speicher ist voll. Löschen Sie alte Apps oder Fotos."</em></p>
                <p class="ro">Expresii: <strong>der Speicher ist voll</strong> (memoria e plină) · <strong>keine Fotos mehr</strong> (nu mai pot face poze) · <strong>alte Apps löschen</strong> (a șterge aplicații vechi)</p>
            </div>
            <div class="theory-box"><h4>🔔 Prea multe notificări — Zu viele Benachrichtigungen</h4>
                <p class="de"><em>„Ich bekomme zu viele Benachrichtigungen." — „Gehen Sie in die Einstellungen und schalten Sie einige aus."</em></p>
                <p class="ro">Expresii: <strong>zu viele Benachrichtigungen</strong> (prea multe notificări) · <strong>in die Einstellungen gehen</strong> (a merge în setări) · <strong>ausschalten</strong> (a opri / a dezactiva)</p>
            </div>
            <div class="theory-box"><h4>📷 Camera nu merge — Die Kamera funktioniert nicht</h4>
                <p class="de"><em>„Meine Kamera funktioniert nicht." — „Starten Sie das Handy neu. Oft hilft das schon."</em></p>
                <p class="ro">Expresii: <strong>funktioniert nicht</strong> (nu merge) · <strong>das Handy neu starten</strong> (a reporni telefonul) · <strong>oft hilft das</strong> (de multe ori asta ajută)</p>
            </div>
        </div>
    </div>

    <!-- 4: Expresii utile -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>💬 5. Expresii utile (smartphone & apps)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-expresii.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <table class="grammar-table">
                <thead><tr><th>Expresie (DE)</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td class="verb">Mein Akku ist fast leer.</td><td>Bateria mea e aproape goală.</td></tr>
                    <tr><td class="verb">Ich muss mein Handy aufladen.</td><td>Trebuie să-mi încarc telefonul.</td></tr>
                    <tr><td class="verb">Ich aktualisiere die App.</td><td>Actualizez aplicația.</td></tr>
                    <tr><td class="verb">Wo finde ich die Einstellungen?</td><td>Unde găsesc setările?</td></tr>
                    <tr><td class="verb">Der Speicher ist voll.</td><td>Memoria e plină.</td></tr>
                    <tr><td class="verb">Ich schalte die Benachrichtigungen aus.</td><td>Dezactivez notificările.</td></tr>
                    <tr><td class="verb">Drück auf das Symbol.</td><td>Apasă pe pictogramă.</td></tr>
                    <tr><td class="verb">Ich starte das Handy neu.</td><td>Repornesc telefonul.</td></tr>
                </tbody>
            </table>
            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/annette.png" alt="Annette">
                <div class="andreea-note-content">
                    <div class="speaker">Annette</div>
                    <div class="text">Cu „Ich muss mein Handy aufladen", „Ich aktualisiere die App" și „Wo finde ich die Einstellungen?" te descurci cu orice telefon, în orice situație. Acum ascultă dialogul cu Frau Richter de la magazin — vei recunoaște tot vocabularul! 💚</div>
                </div>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});
