const quizQuestions = [
    // -------------------------------------------------------------
    // KATEGORIE: Grundlagen (Fragen 1-10)
    // -------------------------------------------------------------
    {
        id: 1,
        category: "Grundlagen",
        question: "Welche Elementarteilchen sind im metallischen Leiter für den elektrischen Stromfluss verantwortlich und wie sind sie geladen?",
        options: [
            "Protonen, sie sind positiv geladen",
            "Neutronen, sie sind elektrisch neutral",
            "Freie Elektronen, sie sind negativ geladen",
            "Ionen, sie sind positiv oder negativ geladen"
        ],
        correctIndex: 2,
        explanation: "In metallischen Leitern (wie Kupfer oder Aluminium) sind die äußeren Elektronen der Atome nur schwach gebunden. Sie können sich als freie Ladungsträger frei im Metallgitter bewegen. Elektronen besitzen eine negative Elementarladung."
    },
    {
        id: 2,
        category: "Grundlagen",
        question: "Wie unterscheiden sich die physikalische und die technische Stromrichtung?",
        options: [
            "Es gibt keinen Unterschied, beide fließen von Plus nach Minus",
            "Physikalisch: von Minus nach Plus (Elektronenfluss). Technisch: von Plus nach Minus (Konvention).",
            "Physikalisch: von Plus nach Minus. Technisch: von Minus nach Plus.",
            "Die physikalische Stromrichtung gilt nur für Wechselstrom, die technische nur für Gleichstrom."
        ],
        correctIndex: 1,
        explanation: "Da Elektronen negativ geladen sind, fließen sie physikalisch vom Minuspol (Elektronenüberschuss) zum Pluspol (Elektronenmangel). Historisch wurde jedoch vereinbart, dass Strom von Plus nach Minus fließt. Das ist die technische Stromrichtung, die in Schaltplänen eingetragen wird."
    },
    {
        id: 3,
        category: "Grundlagen",
        question: "Ein Stromwert beträgt 0,05 A. Wie drückt man diesen mit einem passenden SI-Präfix aus?",
        options: [
            "50 µA (Mikroampere)",
            "5 mA (Milliampere)",
            "50 mA (Milliampere)",
            "0,5 kA (Kiloampere)"
        ],
        correctIndex: 2,
        explanation: "Der Faktor für Milli (m) ist 10^-3 (ein Tausendstel). Um von Ampere in Milliampere umzurechnen, verschiebt man das Komma um 3 Stellen nach rechts oder multipliziert mit 1000:<br><strong>0,05 A = 0,05 × 1000 mA = 50 mA.</strong>"
    },
    {
        id: 4,
        category: "Grundlagen",
        question: "Was ist die offizielle SI-Einheit der elektrischen Ladung Q?",
        options: [
            "Voltsekunde (Vs)",
            "Coulomb (C) oder Amperesekunde (As)",
            "Watt (W)",
            "Ohm (Ω)"
        ],
        correctIndex: 1,
        explanation: "Die elektrische Ladung Q hat die Einheit Coulomb (C), was einer Amperesekunde (As) entspricht (1 C = 1 As). Sie gibt die Gesamtmenge der Elektrizität bzw. der Elektronen an."
    },
    {
        id: 5,
        category: "Grundlagen",
        question: "Rechne den Stromwert von 250 µA in Milliampere (mA) um.",
        options: [
            "250.000 mA",
            "2,5 mA",
            "0,25 mA",
            "0,025 mA"
        ],
        correctIndex: 2,
        explanation: "Mikro (µ) ist 10^-6 (ein Millionstel) und Milli (m) ist 10^-3 (ein Tausendstel). Um von Mikro- in Milli-Einheiten umzurechnen, dividiert man durch 1000 (Komma um 3 Stellen nach links verschieben):<br><strong>250 µA = 250 / 1000 mA = 0,25 mA.</strong>"
    },
    {
        id: 6,
        category: "Grundlagen",
        question: "Aus welchen Bausteinen besteht der Atomkern eines neutralen Atoms?",
        options: [
            "Aus Elektronen und Protonen",
            "Aus Protonen und Neutronen",
            "Nur aus Elektronen",
            "Aus Neutronen und Elektronen"
        ],
        correctIndex: 1,
        explanation: "Der Atomkern befindet sich im Zentrum des Atoms. Er ist schwer und besteht aus den positiv geladenen Protonen und den neutralen Neutronen. Die negativ geladenen Elektronen befinden sich in der Hülle."
    },
    {
        id: 7,
        category: "Grundlagen",
        question: "Wann gilt ein Atom nach außen hin als elektrisch neutral?",
        options: [
            "Wenn sich im Kern keine Neutronen befinden",
            "Wenn es keine Hülle besitzt",
            "Wenn die Anzahl der positiven Protonen im Kern gleich der Anzahl der negativen Elektronen in der Hülle ist",
            "Wenn es mehr Elektronen als Protonen besitzt"
        ],
        correctIndex: 2,
        explanation: "Da ein Proton eine positive Elementarladung und ein Elektron eine negative Elementarladung besitzt, heben sich die Ladungen genau auf, wenn die Anzahl beider Teilchen übereinstimmt. Das Atom ist dann elektrisch neutral."
    },
    {
        id: 8,
        category: "Grundlagen",
        question: "Welchen mathematischen Multiplikationsfaktor repräsentiert das Vorsatzzeichen Kilo (k)?",
        options: [
            "100 (Hundert)",
            "1.000 (Tausend = 10³)",
            "1.000.000 (Eine Million = 10⁶)",
            "0,001 (Ein Tausendstel = 10⁻³)"
        ],
        correctIndex: 1,
        explanation: "Kilo (k) steht für den Faktor 1.000 (Tausend). So sind z. B. 1 Kilovolt  (kV) = 1.000 Volt  (V)."
    },
    {
        id: 9,
        category: "Grundlagen",
        question: "Welchen mathematischen Multiplikationsfaktor repräsentiert das Vorsatzzeichen Mega (M)?",
        options: [
            "1.000.000 (Eine Million = 10⁶)",
            "1.000 (Tausend = 10³)",
            "10.000 (Zehntausend)",
            "0,000001 (Ein Millionstel = 10⁻⁶)"
        ],
        correctIndex: 0,
        explanation: "Mega (M) steht für den Faktor 1.000.000 (eine Million). So sind z. B. 2 Megaohm  (MΩ) = 2.000.000 Ohm  (Ω)."
    },
    {
        id: 10,
        category: "Grundlagen",
        question: "Wenn in 2 Sekunden eine Ladungsmenge von Q = 10 C durch einen Leiter fließt, wie groß ist die Stromstärke I?",
        options: [
            "20 A",
            "5 A",
            "0,2 A",
            "2 A"
        ],
        correctIndex: 1,
        explanation: "Die Definition der Stromstärke lautet: I = Q / t (Ladung pro Zeit).<br>Rechnung:<br><strong>I = 10 C / 2 s = 5 A</strong>."
    },

    // -------------------------------------------------------------
    // KATEGORIE: Spannung & Quellen (Fragen 11-20)
    // -------------------------------------------------------------
    {
        id: 11,
        category: "Spannung",
        question: "Was versteht man physikalisch unter der elektrischen Spannung U?",
        options: [
            "Die Menge der fließenden Elektronen pro Sekunde",
            "Den Unterschied zwischen zwei elektrischen Potentialen (Ladungsunterschied)",
            "Die Behinderung der Elektronenbewegung im Leiter",
            "Die umgesetzte Wärmeenergie im Verbraucher"
        ],
        correctIndex: 1,
        explanation: "Spannung ist das Bestreben von getrennten Ladungen, sich auszugleichen. Sie entspricht der Potentialdifferenz: U_21 = φ<sub>2</sub> - φ<sub>1</sub>. Ohne Spannung gibt es keinen Antrieb für die Elektronen, und es fließt kein Strom."
    },
    {
        id: 12,
        category: "Spannung",
        question: "Durch welches Prinzip erzeugt ein piezoelektrischer Kristall (z. B. in einem Feuerzeug) elektrische Spannung?",
        options: [
            "Durch Erhitzen der Verbindungsstelle zweier Metalle",
            "Durch Einstrahlen von Licht auf Silizium",
            "Durch chemische Reaktionen in einer Säure",
            "Durch mechanische Verformung (Druck oder Zug) bestimmter Kristalle"
        ],
        correctIndex: 3,
        explanation: "Piezo-Elektrizität entsteht bei der Verformung von Kristallen (wie Quarz). Durch Druck oder Zug verschieben sich die Ladungsschwerpunkte im Kristallgitter, wodurch an den Oberflächen eine Spannung entsteht (Anwendung: Gasfeuerzeug, Piezo-Sensoren)."
    },
    {
        id: 13,
        category: "Spannung",
        question: "Wie wird ein Spannungsmessgerät (Voltmeter) korrekt in eine Schaltung eingebunden?",
        options: [
            "In Reihe (seriell) zum Verbraucher",
            "Parallel zum Verbraucher, zwischen den beiden Messpunkten",
            "Anstelle des Stromkabels direkt am Pluspol",
            "Beliebig, da es keinen Innenwiderstand besitzt"
        ],
        correctIndex: 1,
        explanation: "Ein Voltmeter misst die Differenz zwischen zwei Potentialen. Daher wird es immer parallel zum Bauteil geschaltet, über dem die Spannung gemessen werden soll. Es hat einen sehr hohen Innenwiderstand, um den Stromkreis nicht zu beeinflussen."
    },
    {
        id: 14,
        category: "Spannung",
        question: "Was versteht man in der Spannungserzeugung unter einem Sekundärelement?",
        options: [
            "Eine Batterie, die nach einmaliger Entladung entsorgt werden muss",
            "Ein galvanisches Element, das nach Entladung wieder aufgeladen werden kann (Akkumulator)",
            "Ein Hilfselement, das nur bei Ausfall der Hauptquelle anspringt",
            "Einen Generator zur Gewinnung von Solarstrom"
        ],
        correctIndex: 1,
        explanation: "Galvanische Elemente teilen sich auf in Primärelemente (nicht wiederaufladbare Batterien) und Sekundärelemente (wiederaufladbare Akkus wie Blei- oder Lithium-Ionen-Akkus). Sie arbeiten auf Basis chemischer Prozesse."
    },
    {
        id: 15,
        category: "Spannung",
        question: "Welche zwei Metalle werden typischerweise in einem Thermoelement zur Spannungserzeugung durch Wärme verbunden?",
        options: [
            "Kupfer und Konstantan",
            "Gold und Silber",
            "Eisen und Aluminium",
            "Zink und Kohle"
        ],
        correctIndex: 0,
        explanation: "Bei Erhitzen der Verbindungsstelle zweier unterschiedlicher Metalle (z. B. Kupfer und der Legierung Konstantan) entsteht eine geringe temperaturabhängige Thermospannung. Dies wird zur Temperaturmessung genutzt."
    },
    {
        id: 16,
        category: "Spannung",
        question: "Wie hoch ist die Standard-Fahrleitungspannung der Züge bei der Deutschen Bahn?",
        options: [
            "230 V",
            "400 V",
            "1.500 V",
            "15 kV (15.000 V)"
        ],
        correctIndex: 3,
        explanation: "Die Züge der Deutschen Bahn fahren mit einer Wechselspannung von 15 kV = 15.000 V an der Oberleitung (Fahrdraht)."
    },
    {
        id: 17,
        category: "Spannung",
        question: "Welches Naturphänomen beruht auf der Spannungserzeugung durch Reibung?",
        options: [
            "Ein Vulkanausbruch",
            "Ein Gewitterblitz",
            "Das Erdmagnetfeld",
            "Die Gezeiten (Ebbe und Flut)"
        ],
        correctIndex: 1,
        explanation: "Durch starke Luftströmungen und Reibung von Eiskristallen und Wassertröpfchen in den Wolken kommt es zu einer elektrostatischen Aufladung. Dies ist Spannungserzeugung durch Reibung, die sich im Gewitterblitz entlädt."
    },
    {
        id: 18,
        category: "Spannung",
        question: "Welches Halbleitermaterial wird primär für die Spannungserzeugung durch Licht (Solarzellen) verwendet?",
        options: [
            "Konstantan",
            "Germanium oder Silizium",
            "Kupfer",
            "Blei"
        ],
        correctIndex: 1,
        explanation: "Lichtteilchen (Photonen) treffen auf Halbleiter wie Germanium oder Silizium und lösen dort Elektronen heraus (photoelektrischer Effekt). Dadurch entsteht eine Spannung. Dies wird in Solarzellen angewendet."
    },
    {
        id: 19,
        category: "Spannung",
        question: "In welche Richtung verläuft die Quellenspannung (U0) im Inneren einer Spannungsquelle?",
        options: [
            "Vom Minuspol zum Pluspol",
            "Vom Pluspol zum Minuspol",
            "Es gibt im Inneren keine feste Richtung",
            "Nur kreisförmig um die Pole herum"
        ],
        correctIndex: 1,
        explanation: "Die Quellenspannung (U<sub>0</sub>) ist gemäß den Arbeitsblättern im Inneren der Quelle vom Pluspol zum Minuspol gerichtet."
    },
    {
        id: 20,
        category: "Spannung",
        question: "In welche Richtung zeigt der Pfeil eines Spannungsfalls (Verbraucherspannung) im Vergleich zum fließenden Strom?",
        options: [
            "Entgegengesetzt zur Stromrichtung",
            "In dieselbe Richtung wie der fließende Strom",
            "Immer im rechten Winkel zum Strom",
            "Das ist rein zufällig"
        ],
        correctIndex: 1,
        explanation: "Die Spannung (= Spannungsfall) hat als Wirkungsgröße des Stromflusses dieselbe Richtung wie seine Ursachengröße. Der Spannungsfall wirkt also in die Richtung des fließenden Stromes (technische Stromrichtung: von Plus nach Minus)."
    },

    // -------------------------------------------------------------
    // KATEGORIE: Ohm'sches Gesetz & Leitwert (Fragen 21-30)
    // -------------------------------------------------------------
    {
        id: 21,
        category: "Ohm'sches Gesetz",
        question: "Eine Heizspirale eines Heizlüfters für 230 V hat einen Widerstand von 40 Ω. Welcher Strom fließt? (PDF-Aufgabe)",
        options: [
            "9,2 A",
            "5,75 A",
            "0,17 A",
            "9200 A"
        ],
        correctIndex: 1,
        explanation: "Aus dem Ohmschen Gesetz folgt: I = U / R.<br>Rechnung:<br><strong>I = 230 V / 40 Ω = 5,75 A</strong>."
    },
    {
        id: 22,
        category: "Ohm'sches Gesetz",
        question: "Eine Anschlussklemme hat einen Übergangswiderstand von 8 mΩ. Welche Spannung fällt bei einem Strom von 16 A ab? (PDF-Aufgabe)",
        options: [
            "128 V",
            "2 V",
            "128 mV",
            "0,5 V"
        ],
        correctIndex: 2,
        explanation: "Das Ohmsche Gesetz lautet: U = R · I.<br>Gegeben: R = 8 mΩ = 0,008 Ω, I = 16 A.<br>Rechnung:<br><strong>U = 0,008 Ω · 16 A = 0,128 V = 128 mV</strong>."
    },
    {
        id: 23,
        category: "Ohm'sches Gesetz",
        question: "Ein Bügeleisen nimmt an 230 V einen Strom von I = 4,35 A auf. Wie groß ist die Stromaufnahme bei 5 % Spannungssteigerung (auf 241,5 V)? (PDF-Aufgabe)",
        options: [
            "4,35 A",
            "4,57 A",
            "4,13 A",
            "2,18 A"
        ],
        correctIndex: 1,
        explanation: "Der Widerstand des Bügeleisens ist konstant. Nach dem Ohmschen Gesetz ist der Strom direkt proportional zur Spannung (I ∝ U). Steigt die Spannung um 5 %, so steigt auch der Strom um 5 %:<br><strong>I_neu = I · 1,05 = 4,35 A · 1,05 ≈ 4,57 A</strong>."
    },
    {
        id: 24,
        category: "Ohm'sches Gesetz",
        question: "Wie lautet die Definitionsgleichung für den elektrischen Leitwert G?",
        options: [
            "G = U · I",
            "G = 1 / R",
            "G = R · I",
            "G = R / U"
        ],
        correctIndex: 1,
        explanation: "Der Leitwert G beschreibt, wie gut ein Bauteil den Strom leitet. Er ist der Kehrwert des Widerstands: <strong>G = 1/R</strong>. Die Einheit ist Siemens (S)."
    },
    {
        id: 25,
        category: "Ohm'sches Gesetz",
        question: "Berechne den Leitwert G eines Spulenwiderstands von R = 120 Ω. (PDF-Aufgabe)",
        options: [
            "120 S",
            "8,33 mS",
            "83,3 µS",
            "1,2 S"
        ],
        correctIndex: 1,
        explanation: "Die Formel lautet G = 1/R.<br>Rechnung:<br><strong>G = 1 / 120 Ω ≈ 0,00833 S = 8,33 mS</strong>."
    },
    {
        id: 26,
        category: "Ohm'sches Gesetz",
        question: "Wie verändert sich die Stromstärke I in einem linearen Stromkreis, wenn die Spannung verdoppelt und der Widerstand konstant gehalten wird?",
        options: [
            "Die Stromstärke halbiert sich",
            "Die Stromstärke bleibt gleich",
            "Die Stromstärke verdoppelt sich",
            "Die Stromstärke vervierfacht sich"
        ],
        correctIndex: 2,
        explanation: "Laut Ohmschem Gesetz (I = U / R) ist die Stromstärke direkt proportional zur Spannung. Wird die Spannung verdoppelt, verdoppelt sich auch die Stromstärke."
    },
    {
        id: 27,
        category: "Ohm'sches Gesetz",
        question: "Wie verhält sich die Stromstärke I zum Widerstand R bei einer konstanten Spannung U?",
        options: [
            "Direkt proportional (doppelter Widerstand = doppelter Strom)",
            "Umgekehrt proportional (doppelter Widerstand = halber Strom)",
            "Sie verhält sich quadratisch zum Widerstand",
            "Es besteht kein Zusammenhang"
        ],
        correctIndex: 1,
        explanation: "Laut Ohmschem Gesetz (I = U / R) steht der Widerstand im Nenner. Damit ist der Strom umgekehrt proportional zum Widerstand: Je höher der Widerstand, desto kleiner der Strom."
    },
    {
        id: 28,
        category: "Ohm'sches Gesetz",
        question: "Was ist die offizielle physikalische Einheit des elektrischen Leitwertes G?",
        options: [
            "Volt (V)",
            "Ohm (Ω)",
            "Siemens (S)",
            "Ampere (A)"
        ],
        correctIndex: 2,
        explanation: "Die Einheit des Leitwertes ist das <strong>Siemens (S)</strong>, benannt nach Werner von Siemens. Ein Siemens ist der Kehrwert von einem Ohm (1 S = 1 / Ω)."
    },
    {
        id: 29,
        category: "Ohm'sches Gesetz",
        question: "Was passiert auf atomarer Ebene, wenn Strom durch einen Leiter mit Widerstand fließt, wodurch dieser warm wird?",
        options: [
            "Die Elektronen verschmelzen mit dem Atomkern",
            "Die Elektronen stoßen mit den Atomen des Leitermaterials zusammen und übertragen kinetische Energie in Wärme",
            "Die Atome dehnen sich aus und blockieren das Kabel",
            "Der Strom erzeugt kalte Teilchen"
        ],
        correctIndex: 1,
        explanation: "Bei fließendem Strom stoßen die wandernden Elektronen ständig mit den Atomen des Leiters zusammen. Ein Teil ihrer kinetischen Energie geht auf die Atome über, was deren thermische Schwingung erhöht. Dadurch erwärmt sich der Leiter."
    },
    {
        id: 30,
        category: "Ohm'sches Gesetz",
        question: "Was stellt die Steigung einer I-U-Kennlinie (Stromstärke I über der Spannung U aufgetragen) mathematisch dar?",
        options: [
            "Den Widerstand R",
            "Die Leistung P",
            "Den Leitwert G",
            "Die Arbeit W"
        ],
        correctIndex: 2,
        explanation: "Da I = G · U gilt, ist die Steigung der Geraden im I-U-Diagramm (% Steigung  = Δ I / Δ U) genau der Leitwert G. (Hinweis: Die Steigung im U-I-Diagramm entspricht dem Widerstand R)."
    },

    // -------------------------------------------------------------
    // KATEGORIE: Arbeit & Leistung (Fragen 31-41)
    // -------------------------------------------------------------
    {
        id: 31,
        category: "Leistung",
        question: "Rechne den Energiewert von 11 Wh in die Basiseinheit Wattsekunden (Ws) um. (PDF-Aufgabe)",
        options: [
            "11 Ws",
            "660 Ws",
            "39.600 Ws",
            "3.960.000 Ws"
        ],
        correctIndex: 2,
        explanation: "Da eine Stunde (h) 3600 Sekunden (s) hat, multipliziert man den Wert mit 3600:<br><strong>11 Wh = 11 · 3600 s = 39.600 Ws</strong>."
    },
    {
        id: 32,
        category: "Leistung",
        question: "Ein Schichtwiderstand liegt an 10 V und nimmt 20 mA Strom auf. Berechne die elektrische Leistung P. (PDF-Aufgabe)",
        options: [
            "200 W",
            "2 W",
            "200 mW",
            "0,2 mW"
        ],
        correctIndex: 2,
        explanation: "Die Formel lautet P = U · I.<br>Gegeben: U = 10 V, I = 20 mA = 0,02 A.<br>Rechnung:<br><strong>P = 10 V · 0,02 A = 0,2 W = 200 mW</strong>."
    },
    {
        id: 33,
        category: "Leistung",
        question: "Rechne den Energiewert von 20,5 kWh in die Basiseinheit Wattsekunden (Ws) um. (PDF-Aufgabe)",
        options: [
            "20.500 Ws",
            "73.800 Ws",
            "73.800.000 Ws",
            "7,38 MWs"
        ],
        correctIndex: 2,
        explanation: "Rechnung:<br>20,5 kWh = 20,5 · 1.000 Wh = 20.500 Wh.<br>Multiplikation mit 3600 Sekunden:<br><strong>20.500 · 3600 = 73.800.000 Ws</strong> (73,8 MWs)."
    },
    {
        id: 34,
        category: "Leistung",
        question: "Wie lautet die grundlegende Formel zur Berechnung der elektrischen Arbeit/Energie W?",
        options: [
            "W = U · I / t",
            "W = U · I · t",
            "W = P · U · t",
            "W = U / R"
        ],
        correctIndex: 1,
        explanation: "Elektrische Arbeit W ist Leistung mal Zeit. Da P = U · I, ergibt sich die Formel: <strong>W = U · I · t</strong>."
    },
    {
        id: 35,
        category: "Leistung",
        question: "Eine Leistung von 1 W über eine Dauer von 1 s entspricht welcher Energieeinheit?",
        options: [
            "1 Wh",
            "1 Ws (Wattsekunde) oder 1 Joule (J)",
            "1 kWh",
            "1 VAs"
        ],
        correctIndex: 1,
        explanation: "Eine Wattsekunde (Ws) ist definiert als das Produkt aus 1 Watt · 1 Sekunde und entspricht exakt einem Joule (1 J)."
    },
    {
        id: 36,
        category: "Leistung",
        question: "Ein Gerät verbraucht 50 kWh Energie. Bei einem Arbeitspreis von 0,40 €/kWh, wie hoch sind die reinen verbrauchsabhängigen Energiekosten?",
        options: [
            "125 €",
            "20 €",
            "200 €",
            "12,50 €"
        ],
        correctIndex: 1,
        explanation: "Die Energiekosten berechnen sich aus Energieverbrauch mal Kilowattstundenpreis:<br><strong>K = W · k = 50 kWh · 0,40 \u20ac/kWh = 20 \u20ac</strong>."
    },
    {
        id: 37,
        category: "Leistung",
        question: "Wie setzt sich der Endpreis für Strom eines EVU (Energieversorgungsunternehmens) in der Regel zusammen?",
        options: [
            "Nur aus dem Zählerpreis",
            "Aus einem verbrauchsunabhängigen Grundpreis und einem verbrauchsabhängigen Arbeitspreis",
            "Ausschließlich aus der verbrauchten Wirkleistung",
            "Aus Steuern und der Netzfrequenz"
        ],
        correctIndex: 1,
        explanation: "EVU-Preise teilen sich meistens auf in: 1. Grundpreis (verbrauchsunabhängig für Zählermiete, Verwaltung) und 2. Arbeitspreis (verbrauchsabhängig pro bezogene Kilowattstunde)."
    },
    {
        id: 38,
        category: "Leistung",
        question: "Welche Formel berechnet die elektrische Leistung P, wenn die Spannung U unbekannt ist, aber Strom I und Widerstand R gegeben sind?",
        options: [
            "P = I · R",
            "P = I² · R",
            "P = I / R²",
            "P = I² / R"
        ],
        correctIndex: 1,
        explanation: "Aus P = U · I und U = R · I folgt durch Einsetzen der Spannung:<br><strong>P = (R · I) · I = I² · R</strong>."
    },
    {
        id: 39,
        category: "Leistung",
        question: "Welche Formel berechnet die elektrische Leistung P, wenn der Strom I unbekannt ist, aber Spannung U und Widerstand R gegeben sind?",
        options: [
            "P = U · R",
            "P = U / R²",
            "P = U² / R",
            "P = U² · R"
        ],
        correctIndex: 2,
        explanation: "Aus P = U · I und I = U / R folgt durch Einsetzen des Stroms:<br><strong>P = U · (U / R) = U² / R</strong>."
    },
    {
        id: 40,
        category: "Leistung",
        question: "Mit welchem elektrischen Messgerät kann die elektrische Leistung eines Verbrauchers direkt abgelesen werden?",
        options: [
            "Voltmeter",
            "Ammeter",
            "Wattmeter (Leistungsmessgerät)",
            "Oszilloskop"
        ],
        correctIndex: 2,
        explanation: "Ein Wattmeter besitzt intern Spulen zur Strommessung und Pfade zur Spannungsmessung. Es multipliziert diese Werte mechanisch oder elektronisch und zeigt die Leistung direkt in Watt an."
    },
    {
        id: 41,
        category: "Leistung",
        question: "Wie wird ein direktes Leistungsmessgerät (Wattmeter) in eine Schaltung eingebunden?",
        options: [
            "Rein parallel zur Last",
            "Rein in Reihe zur Last",
            "Der Strompfad wird in Reihe und der Spannungspfad parallel zur Last geschaltet",
            "Es wird anstelle der Sicherung geschaltet"
        ],
        correctIndex: 2,
        explanation: "Da ein Wattmeter Strom und Spannung gleichzeitig messen muss, hat es getrennte Pfade: Der Strompfad muss in Reihe geschaltet werden, und der Spannungspfad wird parallel an die Klemmen des Verbrauchers angeschlossen."
    },

    // -------------------------------------------------------------
    // KATEGORIE: Wirkungsgrad (Fragen 42-48)
    // -------------------------------------------------------------
    {
        id: 42,
        category: "Wirkungsgrad",
        question: "Wie lautet die physikalische Formel zur Berechnung des Wirkungsgrades η (eta)?",
        options: [
            "η = P_zu / P_ab",
            "η = P_ab / P_zu",
            "η = P_ab · P_zu",
            "η = P_verlust / P_zu"
        ],
        correctIndex: 1,
        explanation: "Der Wirkungsgrad η beschreibt das Verhältnis der nutzbaren, abgegebenen Leistung zur zugeführten Leistung: <strong>η = P<sub>ab</sub> / P<sub>zu</sub></strong>. Er ist immer kleiner als 1 (bzw. 100 %)."
    },
    {
        id: 43,
        category: "Wirkungsgrad",
        question: "Ein Gleichrichtergerät nimmt eingangsseitig 200 W auf und liefert ausgangsseitig bei 24 V einen Strom von 7 A. Berechne den Wirkungsgrad η in Prozent. (PDF-Aufgabe)",
        options: [
            "84 %",
            "168 %",
            "12 %",
            "92 %"
        ],
        correctIndex: 0,
        explanation: "Zugeführte Leistung P_zu = 200 W.<br>Nutzbare abgegebene Leistung P_ab = U · I = 24 V · 7 A = 168 W.<br>Wirkungsgrad:<br><strong>η = 168 W / 200 W = 0,84 = 84 %</strong>."
    },
    {
        id: 44,
        category: "Wirkungsgrad",
        question: "Warum kann ein realer physikalischer Energiewandler niemals einen Wirkungsgrad von 100 % oder mehr erreichen?",
        options: [
            "Weil die Netzspannung zu instabil ist",
            "Wegen unvermeidbarer Verluste (z. B. Reibung, Kabelerwärmung), die in unerwünschte thermische Energie (Wärme) umgewandelt werden",
            "Weil Elektronen im Leiter verloren gehen",
            "Dies ist gesetzlich verboten"
        ],
        correctIndex: 1,
        explanation: "Bei jeder realen Energieumwandlung entstehen Verluste (wie Erwärmung durch Wicklungswiderstände oder Reibung im Lager). Diese Verlustenergie geht an die Umgebung verloren, wodurch die abgegebene Nutzleistung immer kleiner als die zugeführte Leistung ist."
    },
    {
        id: 45,
        category: "Wirkungsgrad",
        question: "Ein Motor hat einen Wirkungsgrad von η = 80 % und nimmt 500 W elektrische Leistung auf. Welche mechanische Leistung gibt er an seiner Welle ab?",
        options: [
            "625 W",
            "400 W",
            "100 W",
            "450 W"
        ],
        correctIndex: 1,
        explanation: "Umgestellt nach P_ab lautet die Formel: P_ab = η · P_zu.<br>Rechnung:<br><strong>P_ab = 0,80 · 500 W = 400 W</strong>."
    },
    {
        id: 46,
        category: "Wirkungsgrad",
        question: "Wie berechnet sich die Verlustleistung P_verlust, wenn zugeführte und abgegebene Leistung bekannt sind?",
        options: [
            "P_verlust = P_zu + P_ab",
            "P_verlust = P_zu - P_ab",
            "P_verlust = P_ab / P_zu",
            "P_verlust = P_zu · P_ab"
        ],
        correctIndex: 1,
        explanation: "Da die Gesamtenergie erhalten bleibt, setzt sich die zugeführte Leistung aus abgegebener Leistung und der Verlustleistung zusammen (P_zu = P_ab + P_verlust). Umgestellt gilt: <strong>P_verlust = P_zu - P_ab</strong>."
    },
    {
        id: 47,
        category: "Wirkungsgrad",
        question: "Ein Verstärker nimmt eine Leistung von 50 W auf und liefert 10 W Musikleistung an die Lautsprecher. Wie hoch ist der Wirkungsgrad?",
        options: [
            "20 %",
            "50 %",
            "5 %",
            "80 %"
        ],
        correctIndex: 0,
        explanation: "Rechnung:<br><strong>η = P<sub>ab</sub> / P<sub>zu</sub> = 10 W / 50 W = 0,20 = 20 %</strong>."
    },
    {
        id: 48,
        category: "Wirkungsgrad",
        question: "Bei einem Transformator beträgt die zugeführte Leistung 1.000 W und die Verlustleistung 50 W. Welcher Wirkungsgrad wird erreicht?",
        options: [
            "5 %",
            "90 %",
            "95 %",
            "99 %"
        ],
        correctIndex: 2,
        explanation: "Abgegebene Leistung berechnen: P_ab = P_zu - P_verlust = 1.000 W - 50 W = 950 W.<br>Wirkungsgrad:<br><strong>η = 950 W / 1000 W = 0,95 = 95 %</strong>."
    },

    // -------------------------------------------------------------
    // KATEGORIE: Leitungswiderstand (Fragen 49-55)
    // -------------------------------------------------------------
    {
        id: 49,
        category: "Leitungswiderstand",
        question: "Wie hängt der Leitungswiderstand R_L eines Kabels von der Länge l ab?",
        options: [
            "Er ist umgekehrt proportional (längeres Kabel = kleinerer Widerstand)",
            "Er ist direkt proportional (längeres Kabel = größerer Widerstand)",
            "Er verhält sich quadratisch zur Länge",
            "Die Länge hat keinen Einfluss auf den Widerstand"
        ],
        correctIndex: 1,
        explanation: "Je länger der Weg für die Elektronen ist, desto häufiger stoßen sie mit den Atomen zusammen. Der Drahtwiderstand ist daher direkt proportional zur Länge: Doppelter Weg bedeutet doppelter Widerstand (R<sub>L</sub> ∝ l)."
    },
    {
        id: 50,
        category: "Leitungswiderstand",
        question: "Wie hängt der Leitungswiderstand R_L eines Kabels von seiner Querschnittsfläche A ab?",
        options: [
            "Er ist direkt proportional (dünneres Kabel = kleinerer Widerstand)",
            "Er ist umgekehrt proportional (dickeres Kabel = kleinerer Widerstand)",
            "Er bleibt immer konstant",
            "Er ist umgekehrt proportional zum Quadrat der Länge"
        ],
        correctIndex: 1,
        explanation: "Ein größerer Querschnitt bietet den fließenden Elektronen mehr Platz (Vergleich mit einer breiten Autobahn). Der Widerstand sinkt somit. Er ist umgekehrt proportional zum Querschnitt (R<sub>L</sub> ∝ 1 / A)."
    },
    {
        id: 51,
        category: "Leitungswiderstand",
        question: "Welche Einheit besitzt die spezifische Leitfähigkeit χ (kappa) eines Materials?",
        options: [
            "Ohm pro Meter (Ω/m)",
            "Meter pro Ohm-Quadratmillimeter [m/(Ω·mm²)]",
            "Ohm-Quadratmillimeter pro Meter (Ω·mm²/m)",
            "Siemens (S)"
        ],
        correctIndex: 1,
        explanation: "Die Einheit der spezifischen Leitfähigkeit χ lautet: <strong>m/(Ω·mm²)</strong>. Sie gibt an, welche Leitfähigkeit ein Draht von 1 m Länge und 1 mm² Querschnitt besitzt."
    },
    {
        id: 52,
        category: "Leitungswiderstand",
        question: "Welche Einheit besitzt der spezifische Widerstand ρ (rho) eines Materials?",
        options: [
            "Meter pro Ohm-Quadratmillimeter [m/(Ω·mm²)]",
            "Ohm-Quadratmillimeter pro Meter (Ω·mm²/m)",
            "Siemens pro Meter (S/m)",
            "Ohm (Ω)"
        ],
        correctIndex: 1,
        explanation: "Der spezifische Widerstand ρ ist der Kehrwert der spezifischen Leitfähigkeit χ. Seine Einheit lautet: <strong>Ω·mm²/m</strong>."
    },
    {
        id: 53,
        category: "Leitungswiderstand",
        question: "Ein Kupfer- und ein Aluminiumdraht haben denselben Widerstand (120 mΩ) und dieselbe Länge (27 m). Wie groß ist der Querschnittsunterschied (Zunahme) des Aluminiumdrahtes im Vergleich zum Kupferdraht? (PDF-Aufgabe)",
        options: [
            "Beide sind exakt gleich groß",
            "Aluminium muss um ca. 2,41 mm² dicker sein",
            "Aluminium muss um 4,02 mm² dünner sein",
            "Kupfer muss um 1,5 mm² dicker sein"
        ],
        correctIndex: 1,
        explanation: "Kupfer leitet besser (χ = 56) als Alu (χ = 35).<br>Berechnung der Querschnitte für 120 mΩ = 0,12 Ω und 27 m:<br>A_Cu = 27 / 56 · 0,12 ≈ 4,02 mm²<br>A_Al = 27 / 35 · 0,12 ≈ 6,43 mm²<br>Differenz:<br><strong>Δ A = 6,43 - 4,02 = 2,41 mm²</strong>."
    },
    {
        id: 54,
        category: "Leitungswiderstand",
        question: "Welchen Wert hat die spezifische Leitfähigkeit χ von Kupfer bei Raumtemperatur?",
        options: [
            "35 m/(Ω·mm²)",
            "56 m/(Ω·mm²)",
            "62 m/(Ω·mm²)",
            "0,0178 m/(Ω·mm²)"
        ],
        correctIndex: 1,
        explanation: "Für Kupfer gilt der genormte Richtwert von <strong>χ = 56 m/(Ω·mm²)</strong>. (Der Kehrwert ρ ≈ 0,0178 ist der spezifische Widerstand)."
    },
    {
        id: 55,
        category: "Leitungswiderstand",
        question: "Welchen Wert hat die spezifische Leitfähigkeit χ von Aluminium bei Raumtemperatur?",
        options: [
            "56 m/(Ω·mm²)",
            "35 m/(Ω·mm²)",
            "10 m/(Ω·mm²)",
            "0,0286 m/(Ω·mm²)"
        ],
        correctIndex: 1,
        explanation: "Aluminium leitet schlechter als Kupfer. Der Standardwert beträgt <strong>χ = 35 m/(Ω·mm²)</strong>."
    },

    // -------------------------------------------------------------
    // KATEGORIE: Wechselstrom (Fragen 56-63)
    // -------------------------------------------------------------
    {
        id: 56,
        category: "Wechselstrom",
        question: "Ein Tongenerator erzeugt Frequenzen von 22 kHz. Wie hoch ist die zugehörige Periodendauer T? (PDF-Aufgabe)",
        options: [
            "22 ms",
            "45,45 µs",
            "4,55 ms",
            "45,45 ns"
        ],
        correctIndex: 1,
        explanation: "Die Periodendauer T ist der Kehrwert der Frequenz (T = 1/f).<br>Gegeben: f = 22 kHz = 22.000 Hz.<br>Rechnung:<br><strong>T = 1 / 22.000 Hz ≈ 0,00004545 s = 45,45 µs</strong>."
    },
    {
        id: 57,
        category: "Wechselstrom",
        question: "Die Zeitablenkung eines Oszilloskops ist auf 50 µs je Teilung (div) eingestellt. Welche Frequenz hat ein Signal mit genau einer Schwingung je Teilung? (PDF-Aufgabe)",
        options: [
            "20,0 kHz",
            "50,0 kHz",
            "20,0 Hz",
            "5,0 kHz"
        ],
        correctIndex: 0,
        explanation: "Eine volle Schwingung entspricht 1 Teilung, also ist die Periodendauer T = 50 µs = 50 · 10^-6 s.<br>Frequenz:<br><strong>f = 1/T = 1 / 50 · 10^-6 s = 20.000 Hz = 20,0 kHz</strong>."
    },
    {
        id: 58,
        category: "Wechselstrom",
        question: "Die Zeilenablenkung eines analogen Fernsehbildes beträgt 15.625 Hz. Welche Zeit (T) vergeht zwischen zwei Zeilenanfängen? (PDF-Aufgabe)",
        options: [
            "15,6 ms",
            "64,0 µs",
            "6,4 ms",
            "64,0 ns"
        ],
        correctIndex: 1,
        explanation: "Rechnung:<br><strong>T = 1/f = 1 / 15.625 Hz = 0,000064 s = 64,0 µs</strong>."
    },
    {
        id: 59,
        category: "Wechselstrom",
        question: "Wie berechnet sich der Effektivwert (U_eff) einer sinusförmigen Wechselspannung aus ihrem Spitzenwert (U_max)?",
        options: [
            "U_eff = U_max · √2",
            "U_eff = U_max / √2 ≈ 0,707 · U_max",
            "U_eff = U_max / 2",
            "U_eff = U_max · 2"
        ],
        correctIndex: 1,
        explanation: "Der Effektivwert (U_eff) einer sinusförmigen Spannung entspricht ca. 70,7 % des Spitzenwertes: <strong>U_eff = U_max / √2 ≈ 0,707 · U_max</strong>."
    },
    {
        id: 60,
        category: "Wechselstrom",
        question: "Was beschreibt der Spitze-Spitze-Wert (u_ss) bei einem Wechselstromsignal?",
        options: [
            "Den arithmetischen Mittelwert",
            "Den Abstand vom positiven Maximum zum negativen Minimum (u_ss = 2 · û)",
            "Den Effektivwert mal Zwei",
            "Die Dauer einer Halbwelle"
        ],
        correctIndex: 1,
        explanation: "Der Spitze-Spitze-Wert (u_ss) erstreckt sich von der positiven Spitze zur negativen Spitze des Signals. Bei einer symmetrischen Sinuskurve ist er genau doppelt so groß wie der Spitzenwert (u_ss = 2 · û)."
    },
    {
        id: 61,
        category: "Wechselstrom",
        question: "Was versteht man unter dem Augenblickswert (i oder u) eines Wechselstromsignals?",
        options: [
            "Den absoluten Höchstwert der Amplitude",
            "Den Wert des Stroms oder der Spannung zu einem ganz bestimmten Zeitpunkt t",
            "Den Durchschnittswert über eine Periode",
            "Die gemessene Gesamtleistung"
        ],
        correctIndex: 1,
        explanation: "Der Augenblickswert (Momentanwert) ist der Momentanzustand einer sich zeitlich ändernden Größe zu einem definierten Zeitpunkt t. Im Diagramm entspricht er der y-Koordinate zu einem bestimmten x-Wert (Zeit)."
    },
    {
        id: 62,
        category: "Wechselstrom",
        question: "Wie groß ist der arithmetische Mittelwert einer vollständigen Periode eines reinen Wechselstromes?",
        options: [
            "Genau gleich dem Spitzenwert",
            "Immer Null",
            "Gleich dem Effektivwert",
            "Er hängt von der Frequenz ab"
        ],
        correctIndex: 1,
        explanation: "Da bei einem echten Wechselstrom die Polarität wechselt und die Fläche der positiven Halbwelle exakt der Fläche der negativen Halbwelle entspricht, heben sich beide im zeitlichen Mittel auf. Der arithmetische Mittelwert ist somit immer Null."
    },
    {
        id: 63,
        category: "Wechselstrom",
        question: "Welche Kurvenformen sind laut Definition für einen elektrischen Wechselstrom möglich?",
        options: [
            "Ausschließlich sinusförmige Verläufe",
            "Sinus-, dreieck- und rechteckförmige Verläufe (und weitere periodische Kurvenformen)",
            "Nur Verläufe, die über Null Volt liegen",
            "Nur Zackenkurven"
        ],
        correctIndex: 1,
        explanation: "Laut Definition muss ein Wechselstrom lediglich periodisch seine Richtung und Größe ändern und einen Mittelwert von Null aufweisen. Daher sind neben Sinuskurven auch Dreieck-, Sägezahn- und Rechteckspannungen echte Wechselströme."
    }
];
