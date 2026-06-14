// ============================================
// EXERCIȚII - Computer & Büro Teil 5: Smartphone & Apps (A2/B1)
// Claudia Toth · 5 exerciții interactive
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '');
}
function shuffleArr(arr) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function checkTextItems(items, prefix) {
    let correct = 0;
    items.forEach(item => {
        const input = document.getElementById(`${prefix}-${item.id}`), fb = document.getElementById(`${prefix}-f${item.id}`);
        if (!input || !fb) return;
        const ua = normalizeAnswer(input.value);
        const valid = [item.answer, ...(item.accept || [])].map(normalizeAnswer);
        if (ua && valid.includes(ua)) { fb.className = 'feedback correct'; fb.textContent = `✓ Corect: ${item.answer}`; correct++; }
        else { fb.className = 'feedback incorrect'; fb.textContent = `✗ Corect: ${item.answer}`; }
    });
    return { correct, total: items.length };
}
const mcPicked = {};
function buildMC(prefix, items, instruction) {
    const container = document.getElementById(prefix + '-container');
    if (!container) return;
    let html = `<div class="exercise-instruction">${instruction}</div>`;
    items.forEach((item, idx) => {
        let opts = '';
        item.options.forEach((opt, oi) => { opts += `<div class="mistake-opt" onclick="mcPick('${prefix}','${item.id}',${oi},this)"><span class="mistake-opt-letter">${String.fromCharCode(65 + oi)}.</span> ${opt}</div>`; });
        html += `<div class="exercise-item"><span class="exercise-number">${idx + 1}</span><div class="input-group"><label>${item.q}</label><div class="mistake-options" id="${prefix}-opts-${item.id}">${opts}</div></div><div class="feedback" id="${prefix}-f${item.id}"></div></div>`;
    });
    container.innerHTML = html;
}
function mcPick(prefix, itemId, optIdx, el) { mcPicked[prefix + '-' + itemId] = optIdx; const c = document.getElementById(`${prefix}-opts-${itemId}`); if (c) c.querySelectorAll('.mistake-opt').forEach(o => o.classList.remove('mistake-picked')); el.classList.add('mistake-picked'); }
function checkMC(prefix, items) {
    let correct = 0;
    items.forEach(item => {
        const fb = document.getElementById(`${prefix}-f${item.id}`);
        const pick = mcPicked[prefix + '-' + item.id], txt = item.options[item.correct];
        if (pick === item.correct) { fb.className = 'feedback correct'; fb.textContent = `✓ Corect: ${txt} — ${item.explanation}`; correct++; }
        else { fb.className = 'feedback incorrect'; fb.textContent = `✗ Corect: ${txt} — ${item.explanation}`; }
    });
    return { correct, total: items.length };
}
const dmState = {};
function buildClickMatch(prefix, pairs, instruction, deTitle, roTitle) {
    const container = document.getElementById(prefix + '-container');
    if (!container) return;
    dmState[prefix] = { matched: {}, selDE: null, selRO: null, pairs };
    const shuffledRO = shuffleArr(pairs.map(p => p.ro));
    let deHTML = ''; pairs.forEach(p => { deHTML += `<div class="dm-tile dm-de" data-de="${p.de}" onclick="dmClickDE('${prefix}',this)">${p.de}</div>`; });
    let roHTML = ''; shuffledRO.forEach(ro => { roHTML += `<div class="dm-tile dm-ro" data-ro="${ro}" onclick="dmClickRO('${prefix}',this)">${ro}</div>`; });
    container.innerHTML = `<div class="exercise-instruction">${instruction}</div>
        <div class="dm-board"><div class="dm-col"><div class="dm-col-title">${deTitle}</div>${deHTML}</div><div class="dm-col"><div class="dm-col-title">${roTitle}</div>${roHTML}</div></div>
        <div class="dm-status" id="${prefix}-status">Perechi formate: 0 / ${pairs.length}</div>`;
}
function dmClickDE(prefix, el) { if (el.classList.contains('dm-correct')) return; document.querySelectorAll(`#${prefix}-container .dm-de`).forEach(t => t.classList.remove('dm-selected')); el.classList.add('dm-selected'); dmState[prefix].selDE = el; dmTry(prefix); }
function dmClickRO(prefix, el) { if (el.classList.contains('dm-correct')) return; document.querySelectorAll(`#${prefix}-container .dm-ro`).forEach(t => t.classList.remove('dm-selected')); el.classList.add('dm-selected'); dmState[prefix].selRO = el; dmTry(prefix); }
function dmTry(prefix) {
    const s = dmState[prefix];
    if (!s.selDE || !s.selRO) return;
    const de = s.selDE.dataset.de, ro = s.selRO.dataset.ro;
    const pair = s.pairs.find(p => p.de === de);
    if (pair && pair.ro === ro) { s.selDE.classList.add('dm-correct'); s.selRO.classList.add('dm-correct'); s.selDE.classList.remove('dm-selected'); s.selRO.classList.remove('dm-selected'); s.matched[de] = ro; }
    else { const a = s.selDE, b = s.selRO; a.classList.add('dm-wrong'); b.classList.add('dm-wrong'); setTimeout(() => { a.classList.remove('dm-wrong', 'dm-selected'); b.classList.remove('dm-wrong', 'dm-selected'); }, 700); }
    s.selDE = null; s.selRO = null;
    const st = document.getElementById(`${prefix}-status`); if (st) st.textContent = `Perechi formate: ${Object.keys(s.matched).length} / ${s.pairs.length}`;
}

// ============================================
// EX1: Lückentext
// ============================================
const ex1Items = [
    { id: 'a', before: 'Mein', after: 'ist fast leer, ich muss laden. (bateria)', answer: 'Akku' },
    { id: 'b', before: 'Ich lade eine neue', after: 'aus dem App Store. (aplicație)', answer: 'App' },
    { id: 'c', before: 'Es gibt ein neues', after: 'für die App. (actualizare)', answer: 'Update' },
    { id: 'd', before: 'Wo ist das', after: '? Ich muss laden. (încărcătorul)', answer: 'Ladegerät', accept: ['Ladegeraet'] },
    { id: 'e', before: 'Öffne die', after: ', um alles zu ändern. (setările)', answer: 'Einstellungen' },
    { id: 'f', before: 'Ich bekomme zu viele', after: '. (notificări)', answer: 'Benachrichtigungen' },
    { id: 'g', before: 'Mein', after: 'ist voll, ich kann keine Fotos machen. (memoria)', answer: 'Speicher' },
    { id: 'h', before: 'Ich', after: 'die App jeden Monat. (a actualiza — Präsens, ich)', answer: 'aktualisiere' },
    { id: 'i', before: 'Ich habe den Akku schon', after: '. (a încărca — Partizip II)', answer: 'aufgeladen' },
    { id: 'j', before: 'Bitte', after: 'auf das Symbol. (a apăsa — Imperativ du)', answer: 'drück', accept: ['drücke', 'druecke', 'drueck'] }
];
function buildEx1() {
    const container = document.getElementById('ex1-container');
    if (!container) return;
    let html = `<div class="exercise-instruction"><strong>✍️ Completează cu cuvântul potrivit.</strong><br>Cuvinte: <em>Akku · App · Update · Ladegerät · Einstellungen · Benachrichtigungen · Speicher · aktualisiere · aufgeladen · drück</em></div>`;
    ex1Items.forEach((item, idx) => { html += `<div class="exercise-item"><span class="exercise-number">${idx + 1}</span><div class="input-group"><label>${item.before} <input type="text" id="ex1-${item.id}" placeholder="..." style="width:175px;display:inline-block;"> ${item.after}</label></div><div class="feedback" id="ex1-f${item.id}"></div></div>`; });
    container.innerHTML = html;
}
function checkEx1() { return checkTextItems(ex1Items, 'ex1'); }
function resetEx1() { buildEx1(); const s = document.getElementById('score-1'); if (s) s.textContent = ''; }

// ============================================
// EX2: Multiple Choice
// ============================================
const ex2Items = [
    { id: 'a', q: 'Was bedeutet „der Akku"?', options: ['bateria (acumulatorul)', 'ecranul', 'camera'], correct: 0, explanation: 'der Akku = bateria / acumulatorul.' },
    { id: 'b', q: 'Was tut man, wenn der Akku leer ist?', options: ['den Akku aufladen', 'die App löschen', 'den Bildschirm wechseln'], correct: 0, explanation: 'den Akku aufladen = a încărca bateria.' },
    { id: 'c', q: 'Wo ändert man die Benachrichtigungen?', options: ['in den Einstellungen', 'im App Store', 'in der Kamera'], correct: 0, explanation: 'Notificările se reglează în die Einstellungen.' },
    { id: 'd', q: 'Was bedeutet „aktualisieren"?', options: ['a actualiza', 'a șterge', 'a încărca'], correct: 0, explanation: 'aktualisieren = a actualiza (un update).' },
    { id: 'e', q: 'Was tut man, wenn der Speicher voll ist?', options: ['alte Apps oder Fotos löschen', 'den Klingelton ändern', 'die Kamera öffnen'], correct: 0, explanation: 'Eliberezi memoria ștergând aplicații sau poze vechi.' }
];
function buildEx2() { buildMC('ex2', ex2Items, '<strong>🎯 Alege varianta corectă.</strong>'); }
function checkEx2() { return checkMC('ex2', ex2Items); }
function resetEx2() { ex2Items.forEach(i => delete mcPicked['ex2-' + i.id]); buildEx2(); const s = document.getElementById('score-2'); if (s) s.textContent = ''; }

// ============================================
// EX3: Match vocabular DE ↔ RO
// ============================================
const ex3Pairs = [
    { de: 'das Smartphone', ro: 'telefonul' },
    { de: 'die App', ro: 'aplicația' },
    { de: 'der Akku', ro: 'bateria' },
    { de: 'das Ladegerät', ro: 'încărcătorul' },
    { de: 'das Update', ro: 'actualizarea' },
    { de: 'die Einstellungen', ro: 'setările' },
    { de: 'die Benachrichtigung', ro: 'notificarea' },
    { de: 'die Kamera', ro: 'camera' },
    { de: 'der Speicher', ro: 'memoria' },
    { de: 'die SIM-Karte', ro: 'cartela SIM' }
];
function buildEx3() { buildClickMatch('ex3', ex3Pairs, '<strong>🔗 Potrivește termenul cu traducerea.</strong><br>Click pe cuvântul german, apoi pe traducerea corectă.', '🇩🇪 Begriff', '🇷🇴 Traducere'); }
function checkEx3() { const s = dmState['ex3']; return { correct: Object.keys(s.matched).length, total: ex3Pairs.length }; }
function resetEx3() { buildEx3(); const s = document.getElementById('score-3'); if (s) s.textContent = ''; }

// ============================================
// EX4: Traduceri RO → DE
// ============================================
const ex4Items = [
    { id: 'a', q: 'Bateria mea e aproape goală.', answer: 'Mein Akku ist fast leer.' },
    { id: 'b', q: 'Trebuie să-mi încarc telefonul.', answer: 'Ich muss mein Handy aufladen.' },
    { id: 'c', q: 'Actualizez aplicația.', answer: 'Ich aktualisiere die App.' },
    { id: 'd', q: 'Unde găsesc setările?', answer: 'Wo finde ich die Einstellungen?' },
    { id: 'e', q: 'Memoria e plină.', answer: 'Der Speicher ist voll.' },
    { id: 'f', q: 'Dezactivez notificările.', answer: 'Ich schalte die Benachrichtigungen aus.' },
    { id: 'g', q: 'Repornesc telefonul.', answer: 'Ich starte das Handy neu.' },
    { id: 'h', q: 'Camera nu funcționează.', answer: 'Die Kamera funktioniert nicht.' }
];
function buildEx4() {
    const container = document.getElementById('ex4-container');
    if (!container) return;
    let html = `<div class="exercise-instruction"><strong>🇷🇴→🇩🇪 Tradu în germană.</strong><br>Scrie propoziția în germană. (Diferențele mici de topică/articol sunt acceptate; punctul final e opțional — compară cu varianta-model.)</div>`;
    ex4Items.forEach((item, idx) => { html += `<div class="exercise-item"><span class="exercise-number">${idx + 1}</span><div class="input-group"><label>🇷🇴 ${item.q}</label><input type="text" id="ex4-${item.id}" placeholder="Scrie în germană..."></div><div class="feedback" id="ex4-f${item.id}"></div></div>`; });
    container.innerHTML = html;
}
function checkEx4() { return checkTextItems(ex4Items, 'ex4'); }
function resetEx4() { buildEx4(); const s = document.getElementById('score-4'); if (s) s.textContent = ''; }

// ============================================
// EX5: Potrivește situația cu expresia-cheie
// ============================================
const ex5Pairs = [
    { de: 'Ich muss den Akku aufladen.', ro: 'Bateria e goală' },
    { de: 'Ich aktualisiere die App.', ro: 'Apare un update nou' },
    { de: 'Ich lösche alte Fotos.', ro: 'Memoria e plină' },
    { de: 'Ich schalte Benachrichtigungen aus.', ro: 'Primești prea multe notificări' },
    { de: 'Ich starte das Handy neu.', ro: 'Camera nu merge' }
];
function buildEx5() { buildClickMatch('ex5', ex5Pairs, '<strong>🎭 Potrivește expresia cu situația.</strong><br>Click pe expresia germană, apoi pe situația potrivită.', '🇩🇪 Expresie', '📱 Situație'); }
function checkEx5() { const s = dmState['ex5']; return { correct: Object.keys(s.matched).length, total: ex5Pairs.length }; }
function resetEx5() { buildEx5(); const s = document.getElementById('score-5'); if (s) s.textContent = ''; }

document.addEventListener('DOMContentLoaded', function () { buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5(); });
