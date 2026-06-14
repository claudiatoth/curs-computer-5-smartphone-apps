// ============================================
// VERB-KONJUGATION - Computer & Büro Teil 5: Smartphone & Apps (A2/B1)
// Claudia Toth · verbe pentru telefon și aplicații · PONS-verified
// Präteritum = IMPERFECT. Perfekt = timp vorbit.
// ============================================

const verbsData = [
    {
        infinitiv: 'aktualisieren', ro: 'a actualiza', type: 'weak', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'aktualisiere', ro: 'actualizez' },
            { p: 'du', f: 'aktualisierst', ro: 'actualizezi' },
            { p: 'er/sie/es', f: 'aktualisiert', ro: 'actualizează' },
            { p: 'wir', f: 'aktualisieren', ro: 'actualizăm' },
            { p: 'ihr', f: 'aktualisiert', ro: 'actualizați' },
            { p: 'sie/Sie', f: 'aktualisieren', ro: 'actualizează / actualizați' }
        ],
        praeteritum: [
            { p: 'ich', f: 'aktualisierte', ro: 'actualizam' },
            { p: 'du', f: 'aktualisiertest', ro: 'actualizai' },
            { p: 'er/sie/es', f: 'aktualisierte', ro: 'actualiza' },
            { p: 'wir', f: 'aktualisierten', ro: 'actualizam (noi)' },
            { p: 'ihr', f: 'aktualisiertet', ro: 'actualizați' },
            { p: 'sie/Sie', f: 'aktualisierten', ro: 'actualizau' }
        ],
        perfekt: 'ich habe die App aktualisiert', perfektRo: 'am actualizat aplicația',
        notes: 'Verb regulat în -ieren. ATENȚIE: verbele în -ieren NU primesc „ge-" la Perfekt → aktualisiert (nu „geaktualisiert"). Sinonim mai simplu: „ein Update machen".'
    },
    {
        infinitiv: 'aufladen', ro: 'a încărca (bateria)', type: 'strong', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'lade ... auf', ro: 'încarc' },
            { p: 'du', f: 'lädst ... auf', ro: 'încarci' },
            { p: 'er/sie/es', f: 'lädt ... auf', ro: 'încarcă' },
            { p: 'wir', f: 'laden ... auf', ro: 'încărcăm' },
            { p: 'ihr', f: 'ladet ... auf', ro: 'încărcați' },
            { p: 'sie/Sie', f: 'laden ... auf', ro: 'încarcă / încărcați' }
        ],
        praeteritum: [
            { p: 'ich', f: 'lud ... auf', ro: 'încărcam' },
            { p: 'du', f: 'ludst ... auf', ro: 'încărcai' },
            { p: 'er/sie/es', f: 'lud ... auf', ro: 'încărca' },
            { p: 'wir', f: 'luden ... auf', ro: 'încărcam (noi)' },
            { p: 'ihr', f: 'ludet ... auf', ro: 'încărcați' },
            { p: 'sie/Sie', f: 'luden ... auf', ro: 'încărcau' }
        ],
        perfekt: 'ich habe den Akku aufgeladen', perfektRo: 'am încărcat bateria',
        notes: 'Verb TARE SEPARABIL (auf- + laden → lud → geladen). Atenție la a→ä în Präsens: du lädst auf, er lädt auf. Perfekt cu „-ge-" în interior: auf-ge-laden. Pentru telefon: „den Akku / das Handy aufladen".'
    },
    {
        infinitiv: 'einschalten', ro: 'a porni (a aprinde)', type: 'weak', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'schalte ... ein', ro: 'pornesc' },
            { p: 'du', f: 'schaltest ... ein', ro: 'pornești' },
            { p: 'er/sie/es', f: 'schaltet ... ein', ro: 'pornește' },
            { p: 'wir', f: 'schalten ... ein', ro: 'pornim' },
            { p: 'ihr', f: 'schaltet ... ein', ro: 'porniți' },
            { p: 'sie/Sie', f: 'schalten ... ein', ro: 'pornesc / porniți' }
        ],
        praeteritum: [
            { p: 'ich', f: 'schaltete ... ein', ro: 'porneam' },
            { p: 'du', f: 'schaltetest ... ein', ro: 'porneai' },
            { p: 'er/sie/es', f: 'schaltete ... ein', ro: 'pornea' },
            { p: 'wir', f: 'schalteten ... ein', ro: 'porneam (noi)' },
            { p: 'ihr', f: 'schaltetet ... ein', ro: 'porneați' },
            { p: 'sie/Sie', f: 'schalteten ... ein', ro: 'porneau' }
        ],
        perfekt: 'ich habe das Handy eingeschaltet', perfektRo: 'am pornit telefonul',
        notes: 'Verb regulat SEPARABIL (ein-): particula pleacă la sfârșit → „Ich schalte das Handy ein." Stem-ul se termină în -t, deci primește -e- (du schaltest ein). Opusul: „ausschalten" (a opri → ausgeschaltet).'
    },
    {
        infinitiv: 'drücken', ro: 'a apăsa (o tastă)', type: 'weak', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'drücke', ro: 'apăs' },
            { p: 'du', f: 'drückst', ro: 'apeși' },
            { p: 'er/sie/es', f: 'drückt', ro: 'apasă' },
            { p: 'wir', f: 'drücken', ro: 'apăsăm' },
            { p: 'ihr', f: 'drückt', ro: 'apăsați' },
            { p: 'sie/Sie', f: 'drücken', ro: 'apasă / apăsați' }
        ],
        praeteritum: [
            { p: 'ich', f: 'drückte', ro: 'apăsam' },
            { p: 'du', f: 'drücktest', ro: 'apăsai' },
            { p: 'er/sie/es', f: 'drückte', ro: 'apăsa' },
            { p: 'wir', f: 'drückten', ro: 'apăsam (noi)' },
            { p: 'ihr', f: 'drücktet', ro: 'apăsați' },
            { p: 'sie/Sie', f: 'drückten', ro: 'apăsau' }
        ],
        perfekt: 'ich habe auf die Taste gedrückt', perfektRo: 'am apăsat pe tastă',
        notes: 'Verb regulat → Perfekt cu „ge-": gedrückt. ATENȚIE: drücken (a apăsa) ≠ drucken (a tipări)! Construcție frecventă: „auf etwas drücken" (a apăsa pe ceva) — auf das Symbol / auf die Taste drücken.'
    },
    {
        infinitiv: 'benutzen', ro: 'a folosi / a utiliza', type: 'weak', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'benutze', ro: 'folosesc' },
            { p: 'du', f: 'benutzt', ro: 'folosești' },
            { p: 'er/sie/es', f: 'benutzt', ro: 'folosește' },
            { p: 'wir', f: 'benutzen', ro: 'folosim' },
            { p: 'ihr', f: 'benutzt', ro: 'folosiți' },
            { p: 'sie/Sie', f: 'benutzen', ro: 'folosesc / folosiți' }
        ],
        praeteritum: [
            { p: 'ich', f: 'benutzte', ro: 'foloseam' },
            { p: 'du', f: 'benutztest', ro: 'foloseai' },
            { p: 'er/sie/es', f: 'benutzte', ro: 'folosea' },
            { p: 'wir', f: 'benutzten', ro: 'foloseam (noi)' },
            { p: 'ihr', f: 'benutztet', ro: 'foloseați' },
            { p: 'sie/Sie', f: 'benutzten', ro: 'foloseau' }
        ],
        perfekt: 'ich habe die App benutzt', perfektRo: 'am folosit aplicația',
        notes: 'Verb regulat NESEPARABIL (be-). Prefixele neaccentuate be-/er-/ver-/ent- NU primesc „ge-" la Perfekt → benutzt (nu „gebenutzt"). Sinonim: „verwenden".'
    }
];

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = `
        <div class="theory-box" style="background:#F5F0E8;border-left:4px solid #D4A574">
            <h4>📌 Verbe pentru telefon și aplicații</h4>
            <p><strong>aktualisieren</strong> e în -ieren (Perfekt fără ge-: aktualisiert). <strong>aufladen</strong> e TARE SEPARABIL (a→ä: lädt auf). <strong>einschalten</strong> e regulat SEPARABIL (eingeschaltet). <strong>drücken</strong> e regulat (gedrückt; ≠ drucken!). <strong>benutzen</strong> e regulat NESEPARABIL (be-, fără ge-: benutzt).</p>
            <p style="margin-top:8px"><strong>Reamintire:</strong> Präteritum = IMPERFECT (încărcam, foloseam). Perfekt = perfect compus (am încărcat, am folosit).</p>
        </div>
    `;
    verbsData.forEach((v, idx) => {
        const auxColor = v.aux === 'sein' ? '#D4A574' : '#10b981';
        const typeColor = v.type === 'strong' ? '#dc2626' : '#10b981';
        const typeLabel = v.type === 'strong' ? 'TARE (neregulat)' : 'REGULAT';
        let praesensRows = ''; v.praesens.forEach(r => { praesensRows += `<tr><td><strong>${r.p}</strong></td><td class="verb">${r.f}</td><td class="ro-text">${r.ro}</td></tr>`; });
        let praeteritumRows = ''; v.praeteritum.forEach(r => { praeteritumRows += `<tr><td><strong>${r.p}</strong></td><td class="verb">${r.f}</td><td class="ro-text">${r.ro}</td></tr>`; });
        html += `
            <div class="sub-section">
                <div class="sub-section-header" onclick="toggleSubSection(${idx + 100})">
                    <span><strong>${idx + 1}. ${v.infinitiv}</strong> — <em>${v.ro}</em>
                        <span style="background:${typeColor};color:white;padding:2px 8px;border-radius:4px;font-size:0.8rem;margin-left:8px">${typeLabel}</span>
                        <span style="background:${auxColor};color:white;padding:2px 8px;border-radius:4px;font-size:0.8rem;margin-left:4px">Perfekt + ${v.aux}</span>
                    </span>
                    <span class="sub-arrow">▼</span>
                </div>
                <div class="sub-section-content" id="sub-section-${idx + 100}">
                    <h4 style="color:#065f46;margin-bottom:8px">📘 Präsens</h4>
                    <table class="grammar-table"><thead><tr><th>Pronume</th><th>Formă</th><th>Traducere RO</th></tr></thead><tbody>${praesensRows}</tbody></table>
                    <h4 style="color:#065f46;margin:14px 0 8px">📗 Präteritum (imperfect / timp scris)</h4>
                    <table class="grammar-table"><thead><tr><th>Pronume</th><th>Formă</th><th>Traducere RO</th></tr></thead><tbody>${praeteritumRows}</tbody></table>
                    <h4 style="color:#065f46;margin:14px 0 8px">📕 Perfekt (timp vorbit)</h4>
                    <div class="example-box"><div class="de">${v.perfekt}</div><div class="ro">${v.perfektRo}</div></div>
                    <div class="theory-box" style="margin-top:12px;background:#FBF7EF"><p><strong>📌 Notă:</strong> ${v.notes}</p></div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

buildVerbs();
