document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // 1. Navigation & Tab Routing
    // -------------------------------------------------------------
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');

    window.switchSection = function(targetId) {
        sections.forEach(sec => {
            if (sec.id === targetId) {
                sec.classList.add('active');
            } else {
                sec.classList.remove('active');
            }
        });

        navLinks.forEach(link => {
            if (link.dataset.section === targetId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // On mobile, close sidebar after clicking
        if (sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }

        // Special initializers
        if (targetId === 'kapitel7') {
            initOscilloscope();
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.dataset.section;
            switchSection(target);
        });
    });

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

    // -------------------------------------------------------------
    // 2. LocalStorage Progress Tracking
    // -------------------------------------------------------------
    const chapterCheckboxes = document.querySelectorAll('.chapter-read-checkbox');
    const progressBarFill = document.querySelector('.progress-bar-fill');
    const progressPercentText = document.getElementById('progress-percent');
    const progressCountText = document.getElementById('progress-count');

    // Load initial states
    function updateProgressUI() {
        let completedChapters = 0;
        const totalChapters = 7;

        for (let i = 1; i <= totalChapters; i++) {
            const isRead = localStorage.getItem(`et_chapter_${i}_read`) === 'true';
            const checkbox = document.getElementById(`chk-chapter-${i}`);
            const navLink = document.querySelector(`.nav-link[data-section="kapitel${i}"]`);

            if (checkbox) checkbox.checked = isRead;
            
            if (navLink) {
                if (isRead) {
                    navLink.classList.add('completed');
                } else {
                    navLink.classList.remove('completed');
                }
            }

            if (isRead) completedChapters++;
        }

        // Update progress bar
        const percentage = Math.round((completedChapters / totalChapters) * 100);
        if (progressBarFill) progressBarFill.style.width = `${percentage}%`;
        if (progressPercentText) progressPercentText.textContent = `${percentage}%`;
        if (progressCountText) progressCountText.textContent = `${completedChapters}/${totalChapters}`;
        
        // Update dashboard widgets if present
        const dbProgressFill = document.getElementById('db-progress-fill');
        const dbProgressText = document.getElementById('db-progress-text');
        if (dbProgressFill) dbProgressFill.style.width = `${percentage}%`;
        if (dbProgressText) dbProgressText.textContent = `${percentage}% abgeschlossen`;
    }

    chapterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const chapterNum = e.target.dataset.chapter;
            localStorage.setItem(`et_chapter_${chapterNum}_read`, e.target.checked);
            updateProgressUI();
        });
    });

    // -------------------------------------------------------------
    // 3. Ohm's Law Calculator & Interactive Triangle
    // -------------------------------------------------------------
    const ohmCalcType = document.getElementById('ohm-calc-type');
    const ohmInputs = document.getElementById('ohm-inputs');
    const ohmResultDiv = document.getElementById('ohm-result');
    const triangleParts = document.querySelectorAll('.triangle-part');

    // Helper to generate inputs based on selected calculation
    function renderOhmInputs() {
        const type = ohmCalcType.value;
        let html = '';
        ohmResultDiv.innerHTML = '';

        if (type === 'U') {
            html = `
                <div class="form-group">
                    <label>Stromstärke I (A)</label>
                    <input type="number" id="ohm-input-i" value="2" step="any" placeholder="z.B. 2">
                </div>
                <div class="form-group">
                    <label>Widerstand R (Ω)</label>
                    <input type="number" id="ohm-input-r" value="100" step="any" placeholder="z.B. 100">
                </div>
            `;
        } else if (type === 'I') {
            html = `
                <div class="form-group">
                    <label>Spannung U (V)</label>
                    <input type="number" id="ohm-input-u" value="230" step="any" placeholder="z.B. 230">
                </div>
                <div class="form-group">
                    <label>Widerstand R (Ω)</label>
                    <input type="number" id="ohm-input-r" value="40" step="any" placeholder="z.B. 40">
                </div>
            `;
        } else if (type === 'R') {
            html = `
                <div class="form-group">
                    <label>Spannung U (V)</label>
                    <input type="number" id="ohm-input-u" value="12" step="any" placeholder="z.B. 12">
                </div>
                <div class="form-group">
                    <label>Stromstärke I (A)</label>
                    <input type="number" id="ohm-input-i" value="0.5" step="any" placeholder="z.B. 0.5">
                </div>
            `;
        } else if (type === 'G') {
            html = `
                <div class="form-group">
                    <label>Stromstärke I (A)</label>
                    <input type="number" id="ohm-input-i" value="0.05" step="any" placeholder="z.B. 0.05">
                </div>
                <div class="form-group">
                    <label>Spannung U (V)</label>
                    <input type="number" id="ohm-input-u" value="6" step="any" placeholder="z.B. 6">
                </div>
            `;
        }

        ohmInputs.innerHTML = html;

        // Add event listeners to new inputs
        const inputs = ohmInputs.querySelectorAll('input');
        inputs.forEach(inp => inp.addEventListener('input', calculateOhm));
        calculateOhm();
    }

    function calculateOhm() {
        const type = ohmCalcType.value;
        let resultHtml = '';

        if (type === 'U') {
            const i = parseFloat(document.getElementById('ohm-input-i').value);
            const r = parseFloat(document.getElementById('ohm-input-r').value);
            if (!isNaN(i) && !isNaN(r)) {
                const u = i * r;
                resultHtml = `
                    <p>Gesuchte Spannung <strong>U = R · I</strong></p>
                    <div class="calc-step">U = ${r} Ω · ${i} A</div>
                    <div class="result-value">U = ${u.toFixed(2)} V</div>
                `;
            }
        } else if (type === 'I') {
            const u = parseFloat(document.getElementById('ohm-input-u').value);
            const r = parseFloat(document.getElementById('ohm-input-r').value);
            if (!isNaN(u) && !isNaN(r) && r !== 0) {
                const i = u / r;
                const g = 1 / r;
                resultHtml = `
                    <p>Gesuchte Stromstärke <strong>I = U / R</strong></p>
                    <div class="calc-step">I = ${u} V / ${r} Ω</div>
                    <div class="result-value">I = ${i.toFixed(4)} A (${(i*1000).toFixed(2)} mA)</div>
                    <p style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                        Der Leitwert beträgt: G = 1/R = ${(g*1000).toFixed(2)} mS
                    </p>
                `;
            }
        } else if (type === 'R') {
            const u = parseFloat(document.getElementById('ohm-input-u').value);
            const i = parseFloat(document.getElementById('ohm-input-i').value);
            if (!isNaN(u) && !isNaN(i) && i !== 0) {
                const r = u / i;
                const g = i / u;
                resultHtml = `
                    <p>Gesuchter Widerstand <strong>R = U / I</strong></p>
                    <div class="calc-step">R = ${u} V / ${i} A</div>
                    <div class="result-value">R = ${r.toFixed(2)} Ω</div>
                    <p style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                        Der Leitwert beträgt: G = I/U = ${(g*1000).toFixed(2)} mS
                    </p>
                `;
            }
        } else if (type === 'G') {
            const u = parseFloat(document.getElementById('ohm-input-u').value);
            const i = parseFloat(document.getElementById('ohm-input-i').value);
            if (!isNaN(u) && !isNaN(i) && u !== 0) {
                const g = i / u;
                const r = u / i;
                resultHtml = `
                    <p>Gesuchter Leitwert <strong>G = I / U</strong></p>
                    <div class="calc-step">G = ${i} A / ${u} V</div>
                    <div class="result-value">G = ${(g*1000).toFixed(2)} mS (${g.toFixed(6)} S)</div>
                    <p style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                        Der Widerstand beträgt: R = 1/G = ${r.toFixed(2)} Ω
                    </p>
                `;
            }
        }

        ohmResultDiv.innerHTML = resultHtml;
    }

    if (ohmCalcType) {
        ohmCalcType.addEventListener('change', (e) => {
            renderOhmInputs();
            // Sync triangle active state
            triangleParts.forEach(part => {
                if (part.dataset.symbol === e.target.value) {
                    part.classList.add('selected');
                } else {
                    part.classList.remove('selected');
                }
            });
        });
        
        // Triangle click handler
        triangleParts.forEach(part => {
            part.addEventListener('click', () => {
                const symbol = part.dataset.symbol;
                ohmCalcType.value = symbol;
                ohmCalcType.dispatchEvent(new Event('change'));
            });
        });

        renderOhmInputs(); // Initial build
    }

    // -------------------------------------------------------------
    // 4. Line Resistance Calculator
    // -------------------------------------------------------------
    const lineMatSelect = document.getElementById('line-material');
    const lineLengthInput = document.getElementById('line-length');
    const lineAreaInput = document.getElementById('line-area');
    const lineCurrentInput = document.getElementById('line-current');
    const lineResultDiv = document.getElementById('line-result');

    const materials = {
        copper: { name: 'Kupfer', kappa: 56, rho: 0.0178 },
        aluminum: { name: 'Aluminium', kappa: 35, rho: 0.0286 },
        silver: { name: 'Silber', kappa: 62, rho: 0.0161 },
        gold: { name: 'Gold', kappa: 45, rho: 0.0222 },
        iron: { name: 'Eisen', kappa: 10, rho: 0.1000 }
    };

    function calculateLineResistance() {
        if (!lineMatSelect || !lineLengthInput || !lineAreaInput || !lineResultDiv) return;

        const materialKey = lineMatSelect.value;
        const length = parseFloat(lineLengthInput.value);
        const area = parseFloat(lineAreaInput.value);
        const current = parseFloat(lineCurrentInput.value) || 0;

        const mat = materials[materialKey];

        if (isNaN(length) || length <= 0 || isNaN(area) || area <= 0) {
            lineResultDiv.innerHTML = '<p class="text-error">Bitte trage gültige Werte für Länge und Querschnitt ein.</p>';
            return;
        }

        // RL = l / (kappa * A)
        const resistance = length / (mat.kappa * area);
        
        let resultHtml = `
            <p>Berechneter Leitungswiderstand (<strong>R<sub>L</sub> = l / (χ · A)</strong>):</p>
            <div class="calc-step">R<sub>L</sub> = ${length} m / (${mat.kappa} m/(Ω·mm²) · ${area} mm²)</div>
            <div class="result-value">R<sub>L</sub> = ${resistance.toFixed(4)} Ω (${(resistance * 1000).toFixed(2)} mΩ)</div>
            <p style="font-size:0.85rem; color:var(--text-secondary); margin-top:0.5rem;">
                Material: ${mat.name} | Spezifischer Widerstand ρ ≈ ${mat.rho.toFixed(4)} Ω·mm²/m | Leitfähigkeit χ = ${mat.kappa} m/(Ω·mm²)
            </p>
        `;

        if (current > 0) {
            const vDrop = resistance * current;
            const pLoss = resistance * current * current;
            resultHtml += `
                <div style="margin-top: 1rem; border-top: 1px solid var(--accent-light); padding-top: 1rem;">
                    <p>Spannungsfall am Kabel bei <strong>I = ${current} A</strong> (<strong>U<sub>L</sub> = R<sub>L</sub> · I</strong>):</p>
                    <div class="calc-step">U<sub>L</sub> = ${resistance.toFixed(5)} Ω · ${current} A</div>
                    <div class="result-value" style="font-size: 1.25rem;">U<sub>L</sub> = ${vDrop.toFixed(3)} V (${(vDrop * 1000).toFixed(1)} mV)</div>
                    
                    <p style="margin-top:0.75rem;">Verlustleistung im Kabel (Wärme) (<strong>P<sub>V</sub> = R<sub>L</sub> · I<sup>2</sup></strong>):</p>
                    <div class="calc-step">P<sub>V</sub> = ${resistance.toFixed(5)} Ω · (${current} A)<sup>2</sup></div>
                    <div class="result-value" style="font-size: 1.25rem; color: var(--color-error);">P<sub>V</sub> = ${pLoss.toFixed(3)} W</div>
                </div>
            `;
        }

        lineResultDiv.innerHTML = resultHtml;
    }

    if (lineMatSelect) {
        lineMatSelect.addEventListener('change', calculateLineResistance);
        lineLengthInput.addEventListener('input', calculateLineResistance);
        lineAreaInput.addEventListener('input', calculateLineResistance);
        lineCurrentInput.addEventListener('input', calculateLineResistance);
        calculateLineResistance(); // Initial calculation
    }

    // -------------------------------------------------------------
    // 5. AC Oscilloscope Simulation (Canvas)
    // -------------------------------------------------------------
    let scopeCanvas, ctx;
    let amplitudeSlider, frequencySlider;
    let uMaxReadout, uEffReadout, periodReadout, freqReadout;
    let animationId = null;
    let timeOffset = 0;

    function initOscilloscope() {
        scopeCanvas = document.getElementById('scope-canvas');
        if (!scopeCanvas) return;

        ctx = scopeCanvas.getContext('2d');
        amplitudeSlider = document.getElementById('scope-amp');
        frequencySlider = document.getElementById('scope-freq');

        uMaxReadout = document.getElementById('scope-readout-umax');
        uEffReadout = document.getElementById('scope-readout-ueff');
        periodReadout = document.getElementById('scope-readout-t');
        freqReadout = document.getElementById('scope-readout-f');

        // Handle resizing of canvas resolution to match css layout
        function resizeCanvas() {
            const rect = scopeCanvas.getBoundingClientRect();
            scopeCanvas.width = rect.width;
            scopeCanvas.height = rect.height;
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        if (animationId) {
            cancelAnimationFrame(animationId);
        }

        function drawScope() {
            if (!ctx) return;
            const w = scopeCanvas.width;
            const h = scopeCanvas.height;

            // Clear screen (CRT dark grid)
            ctx.fillStyle = '#1e1813';
            ctx.fillRect(0, 0, w, h);

            // Draw grid lines
            ctx.strokeStyle = '#2d231a';
            ctx.lineWidth = 1;
            
            const divisionsX = 8;
            const divisionsY = 6;
            const stepX = w / divisionsX;
            const stepY = h / divisionsY;

            for (let i = 1; i < divisionsX; i++) {
                ctx.beginPath();
                ctx.moveTo(i * stepX, 0);
                ctx.lineTo(i * stepX, h);
                ctx.stroke();
            }
            for (let i = 1; i < divisionsY; i++) {
                ctx.beginPath();
                ctx.moveTo(0, i * stepY);
                ctx.lineTo(w, i * stepY);
                ctx.stroke();
            }

            // Draw center axes (thicker/dotted)
            ctx.strokeStyle = '#423326';
            ctx.lineWidth = 1.5;
            
            // X-Axis
            ctx.beginPath();
            ctx.moveTo(0, h / 2);
            ctx.lineTo(w, h / 2);
            ctx.stroke();
            
            // Y-Axis
            ctx.beginPath();
            ctx.moveTo(w / 2, 0);
            ctx.lineTo(w / 2, h);
            ctx.stroke();

            // Read sliders
            const peakVoltage = parseFloat(amplitudeSlider.value);
            const frequency = parseFloat(frequencySlider.value);

            // Calculations
            const uEff = peakVoltage / Math.sqrt(2);
            const period = 1 / frequency; // in seconds
            const periodMs = period * 1000;

            // Update readout labels
            uMaxReadout.textContent = `${peakVoltage.toFixed(0)} V`;
            uEffReadout.textContent = `${uEff.toFixed(1)} V`;
            freqReadout.textContent = `${frequency.toFixed(0)} Hz`;
            
            if (periodMs >= 1) {
                periodReadout.textContent = `${periodMs.toFixed(2)} ms`;
            } else {
                periodReadout.textContent = `${(period * 1e6).toFixed(0)} µs`;
            }

            // Draw Waveform
            ctx.strokeStyle = '#D4A373'; // Warm gold color for the electron beam
            ctx.lineWidth = 3;
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#D4A373';
            
            ctx.beginPath();
            
            // Scaling factors for rendering
            // Amplitude: let 325V correspond to 80% of half height
            const maxAmpPx = (h / 2) * 0.85;
            const amplitudePx = (peakVoltage / 325) * maxAmpPx;

            // Frequency/Timebase scaling: 
            // We want to show a reasonable number of cycles. Let 100 Hz span 2 full cycles.
            // Screen width represents a fixed time, say 40 ms.
            const screenDuration = 0.04; // 40 milliseconds
            
            for (let x = 0; x < w; x++) {
                const time = (x / w) * screenDuration;
                // y = A * sin(2 * pi * f * t - offset)
                const y = h / 2 - amplitudePx * Math.sin(2 * Math.PI * frequency * time - timeOffset);
                
                if (x === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            ctx.stroke();
            
            // Reset shadows
            ctx.shadowBlur = 0;

            // Draw indicator details
            ctx.fillStyle = '#8C6239';
            ctx.font = '11px Inter';
            ctx.fillText(`Y-Abweichung: 50 V / div`, 10, h - 25);
            ctx.fillText(`X-Ablenkung: 5 ms / div`, 10, h - 10);

            // Animate phase offset to make it look active
            timeOffset += 0.05;

            animationId = requestAnimationFrame(drawScope);
        }

        drawScope();
    }

    // -------------------------------------------------------------
    // 6. Interactive Exercises solving checks
    // -------------------------------------------------------------
    const exercisesData = {
        ex1: { correctAnswers: ["5.75", "5,75"], id: "ex1" },
        ex2: { correctAnswers: ["128", "128m", "0.128", "0,128"], id: "ex2" },
        ex3: { correctAnswers: ["4.57", "4,57", "4.5675", "4,5675"], id: "ex3" },
        ex4: { correctAnswers: ["75", "75m", "0.075", "0,075"], id: "ex4" },
        ex5: { correctAnswers: ["150"], id: "ex5" },
        ex6: { correctAnswers: ["33.3", "33,3", "33.33", "33,33"], id: "ex6" },
        ex7: { correctAnswers: ["125"], id: "ex7" },
        ex8: { correctAnswers: ["39600", "39.600"], id: "ex8" },
        ex9: { correctAnswers: ["2.41", "2,41", "2.4", "2,4"], id: "ex9" },
        ex10: { correctAnswers: ["45.45", "45,45", "0.045", "0,045"], id: "ex10" }
    };

    // Load solved status from localStorage
    function loadExercisesStatus() {
        Object.keys(exercisesData).forEach(key => {
            const isSolved = localStorage.getItem(`et_exercise_${key}_solved`) === 'true';
            const badge = document.getElementById(`badge-${key}`);
            const input = document.getElementById(`input-${key}`);
            const btnCheck = document.getElementById(`btn-check-${key}`);

            if (isSolved && badge) {
                badge.className = "exercise-badge solved";
                badge.textContent = "✓ Gelöst";
                if (input) input.disabled = true;
                if (btnCheck) btnCheck.style.display = "none";
            }
        });
        updateDashboardStats();
    }

    window.checkExercise = function(id) {
        const input = document.getElementById(`input-${id}`);
        const feedback = document.getElementById(`feedback-${id}`);
        const badge = document.getElementById(`badge-${id}`);
        const btnCheck = document.getElementById(`btn-check-${id}`);

        if (!input || !feedback) return;

        const val = input.value.trim().toLowerCase();
        const data = exercisesData[id];

        let matched = false;
        for (let ans of data.correctAnswers) {
            if (val === ans) {
                matched = true;
                break;
            }
        }

        if (matched) {
            feedback.innerHTML = `<span style="color: var(--color-success); font-weight:600;">✓ Richtig! Gut gemacht.</span>`;
            if (badge) {
                badge.className = "exercise-badge solved";
                badge.textContent = "✓ Gelöst";
            }
            if (btnCheck) btnCheck.style.display = "none";
            input.disabled = true;
            localStorage.setItem(`et_exercise_${id}_solved`, 'true');
            updateDashboardStats();
        } else {
            feedback.innerHTML = `<span style="color: var(--color-error); font-weight:600;">✗ Nicht ganz korrekt. Überprüfe deine Rechnung oder klicke auf 'Lösungsweg anzeigen'.</span>`;
        }
    };

    window.toggleSolution = function(id) {
        const solDiv = document.getElementById(`solution-${id}`);
        if (!solDiv) return;

        if (solDiv.style.display === 'block') {
            solDiv.style.display = 'none';
        } else {
            solDiv.style.display = 'block';
        }
    };

    // Initialize exercises
    loadExercisesStatus();

    // -------------------------------------------------------------
    // 7. Quiz Logic Engine
    // -------------------------------------------------------------
    let shuffledQuestions = [];
    let currentQuestionIdx = 0;
    let quizScore = 0;
    let hasAnswered = false;

    const quizWelcomeSec = document.getElementById('quiz-welcome-sec');
    const quizPlaySec = document.getElementById('quiz-play-sec');
    const quizResultSec = document.getElementById('quiz-result-sec');

    const quizQCountLabel = document.getElementById('quiz-q-count');
    const quizProgressFill = document.getElementById('quiz-progress-fill');
    const quizQuestionEl = document.getElementById('quiz-question');
    const quizOptionsEl = document.getElementById('quiz-options');
    const quizFeedbackEl = document.getElementById('quiz-feedback');
    const quizExplanationEl = document.getElementById('quiz-explanation');
    const btnQuizNext = document.getElementById('btn-quiz-next');

    const scoreRingCircle = document.getElementById('score-ring-circle');
    const scoreRingValue = document.getElementById('score-ring-value');
    const quizTierLabel = document.getElementById('quiz-tier');
    const quizStatsLabel = document.getElementById('quiz-stats');
    const quizHistoryList = document.getElementById('quiz-history-list');

    window.startQuiz = function() {
        // Shuffle the 20 questions and pick 10 of them for a shorter, punchier quiz
        const pool = [...quizQuestions];
        shuffledQuestions = pool.sort(() => 0.5 - Math.random()).slice(0, 10);
        
        currentQuestionIdx = 0;
        quizScore = 0;
        hasAnswered = false;

        quizWelcomeSec.style.display = 'none';
        quizResultSec.style.display = 'none';
        quizPlaySec.style.display = 'block';

        showQuestion();
    };

    function showQuestion() {
        hasAnswered = false;
        quizFeedbackEl.style.display = 'none';
        btnQuizNext.textContent = "Überprüfen";
        btnQuizNext.disabled = true;

        const currentQ = shuffledQuestions[currentQuestionIdx];

        // Progress bar and labels
        quizQCountLabel.textContent = `Frage ${currentQuestionIdx + 1} von ${shuffledQuestions.length}`;
        const pct = ((currentQuestionIdx) / shuffledQuestions.length) * 100;
        quizProgressFill.style.width = `${pct}%`;

        // Render question
        // Parse equations if any (like U = R * I)
        quizQuestionEl.innerHTML = `
            <span style="font-size: 0.8rem; text-transform: uppercase; color: var(--accent-gold); font-weight:700; display:block; margin-bottom:0.5rem;">
                Thema: ${currentQ.category}
            </span>
            ${currentQ.question}
        `;

        // Render options
        quizOptionsEl.innerHTML = '';
        currentQ.options.forEach((opt, idx) => {
            const letter = String.fromCharCode(65 + idx); // A, B, C, D
            const card = document.createElement('div');
            card.className = 'quiz-option';
            card.innerHTML = `
                <div class="quiz-option-letter">${letter}</div>
                <div class="quiz-option-text">${opt}</div>
            `;
            card.addEventListener('click', () => selectOption(idx, card));
            quizOptionsEl.appendChild(card);
        });
    }

    let selectedOptionIdx = -1;

    function selectOption(idx, cardElement) {
        if (hasAnswered) return;

        selectedOptionIdx = idx;
        
        // Remove select states from all options
        const allCards = quizOptionsEl.querySelectorAll('.quiz-option');
        allCards.forEach(c => {
            c.style.borderColor = 'var(--accent-light)';
            c.style.backgroundColor = 'var(--bg-secondary)';
        });

        // Highlight selected card
        cardElement.style.borderColor = 'var(--accent-color)';
        cardElement.style.backgroundColor = 'var(--accent-soft)';

        btnQuizNext.disabled = false;
    }

    window.handleQuizNext = function() {
        if (!hasAnswered) {
            // Validate the answer
            hasAnswered = true;
            const currentQ = shuffledQuestions[currentQuestionIdx];
            const allCards = quizOptionsEl.querySelectorAll('.quiz-option');

            // Apply correct / incorrect styling
            allCards.forEach((card, idx) => {
                if (idx === currentQ.correctIndex) {
                    card.className = 'quiz-option correct';
                } else if (idx === selectedOptionIdx) {
                    card.className = 'quiz-option incorrect';
                }
            });

            // Show feedback explanations
            quizFeedbackEl.style.display = 'block';
            if (selectedOptionIdx === currentQ.correctIndex) {
                quizScore++;
                quizExplanationEl.innerHTML = `
                    <div class="info-box success" style="margin-bottom:0;">
                        <span class="info-box-icon">✓</span>
                        <div class="info-box-content">
                            <h5>Richtig!</h5>
                            <p style="margin-bottom:0; font-size:0.9rem;">${currentQ.explanation}</p>
                        </div>
                    </div>
                `;
            } else {
                quizExplanationEl.innerHTML = `
                    <div class="info-box warning" style="margin-bottom:0;">
                        <span class="info-box-icon">✗</span>
                        <div class="info-box-content">
                            <h5>Falsch beantwortet</h5>
                            <p style="margin-bottom:0; font-size:0.9rem;">${currentQ.explanation}</p>
                        </div>
                    </div>
                `;
            }

            // Update button label
            if (currentQuestionIdx === shuffledQuestions.length - 1) {
                btnQuizNext.textContent = "Ergebnisse anzeigen";
            } else {
                btnQuizNext.textContent = "Nächste Frage";
            }
        } else {
            // Go to next question or show results
            currentQuestionIdx++;
            if (currentQuestionIdx < shuffledQuestions.length) {
                showQuestion();
            } else {
                showQuizResults();
            }
        }
    };

    function showQuizResults() {
        quizPlaySec.style.display = 'none';
        quizResultSec.style.display = 'block';

        // Calculate score percentage
        const totalQ = shuffledQuestions.length;
        const pct = (quizScore / totalQ) * 100;
        
        // Progress ring drawing
        const r = 60; // radius
        const circ = 2 * Math.PI * r;
        const offset = circ - (pct / 100) * circ;

        if (scoreRingCircle) {
            scoreRingCircle.style.strokeDasharray = `${circ}`;
            // Force reflow for transitions
            scoreRingCircle.getBoundingClientRect();
            scoreRingCircle.style.strokeDashoffset = `${offset}`;
        }
        
        if (scoreRingValue) {
            scoreRingValue.textContent = `${quizScore}/${totalQ}`;
        }

        // Tiers / Grades
        let tierText = "";
        let tierDesc = "";
        let grade = 1;

        if (quizScore === 10) {
            tierText = "Echte(r) Elektrotechniker(in)!";
            tierDesc = "Hervorragend! Du hast alle Fragen richtig beantwortet und bist bestens auf die Klassenarbeit vorbereitet.";
            grade = 1;
        } else if (quizScore >= 8) {
            tierText = "Sehr gut vorbereitet!";
            tierDesc = "Tolle Leistung! Die wichtigsten Formeln und Konzepte sitzen. Du bist auf einem sicheren Weg zur Eins oder Zwei.";
            grade = 2;
        } else if (quizScore >= 6) {
            tierText = "Gutes Basiswissen!";
            tierDesc = "Du hast die Grundlagen verstanden, solltest aber manche Details (wie den Leitungswiderstand oder Wechselstrom) noch einmal wiederholen.";
            grade = 3;
        } else if (quizScore >= 4) {
            tierText = "Ausreichend - Mehr Übung nötig!";
            tierDesc = "Das reicht zum Bestehen, aber für eine gute Note solltest du die Rechner benutzen und die Erklärungen aufmerksam durchlesen.";
            grade = 4;
        } else {
            tierText = "Da fehlt noch einiges!";
            tierDesc = "Keine Sorge! Elektrotechnik ist am Anfang schwer. Lies dir noch einmal die Kapitel 1, 2 und 3 durch und versuche es erneut.";
            grade = 5;
        }

        quizTierLabel.textContent = tierText;
        quizStatsLabel.innerHTML = `Du hast <strong>${pct}%</strong> der Fragen richtig beantwortet.<br>${tierDesc}`;

        // Save to LocalStorage
        saveQuizAttempt(quizScore, totalQ);
        renderQuizHistory();
        updateDashboardStats();
    }

    function saveQuizAttempt(score, total) {
        const historyStr = localStorage.getItem('et_quiz_history') || '[]';
        const history = JSON.parse(historyStr);
        const date = new Date().toLocaleDateString('de-DE', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        history.unshift({
            date: date,
            score: score,
            total: total
        });

        // Limit to 5 entries
        if (history.length > 5) history.pop();

        localStorage.setItem('et_quiz_history', JSON.stringify(history));

        // Save high score
        const currentBest = parseInt(localStorage.getItem('et_quiz_highscore') || '0');
        if (score > currentBest) {
            localStorage.setItem('et_quiz_highscore', score);
        }
    }

    function renderQuizHistory() {
        if (!quizHistoryList) return;

        const historyStr = localStorage.getItem('et_quiz_history') || '[]';
        const history = JSON.parse(historyStr);

        if (history.length === 0) {
            quizHistoryList.innerHTML = `<li class="history-item"><span style="color:var(--text-secondary);">Noch keine Versuche verzeichnet.</span></li>`;
            return;
        }

        quizHistoryList.innerHTML = history.map(h => `
            <li class="history-item">
                <span>${h.date}</span>
                <strong>${h.score} / ${h.total} Richtig (${Math.round((h.score/h.total)*100)}%)</strong>
            </li>
        `).join('');
    }

    window.resetQuiz = function() {
        quizResultSec.style.display = 'none';
        quizPlaySec.style.display = 'none';
        quizWelcomeSec.style.display = 'block';
        
        renderQuizHistory();
    };

    // -------------------------------------------------------------
    // 8. Dashboard Widgets & Stats Update
    // -------------------------------------------------------------
    function updateDashboardStats() {
        // High score
        const bestScore = localStorage.getItem('et_quiz_highscore') || '0';
        const dbBestScore = document.getElementById('db-best-score');
        if (dbBestScore) dbBestScore.textContent = `${bestScore} / 10`;

        // Solved exercises
        let solvedCount = 0;
        const totalExercises = Object.keys(exercisesData).length;
        Object.keys(exercisesData).forEach(key => {
            if (localStorage.getItem(`et_exercise_${key}_solved`) === 'true') {
                solvedCount++;
            }
        });
        const dbSolvedEx = document.getElementById('db-solved-exercises');
        if (dbSolvedEx) dbSolvedEx.textContent = `${solvedCount} / ${totalExercises}`;

        // Latest attempt date
        const historyStr = localStorage.getItem('et_quiz_history') || '[]';
        const history = JSON.parse(historyStr);
        const dbLatestAttempt = document.getElementById('db-latest-attempt');
        if (dbLatestAttempt) {
            if (history.length > 0) {
                dbLatestAttempt.textContent = history[0].date.split(',')[0];
            } else {
                dbLatestAttempt.textContent = "Keine";
            }
        }
    }

    window.resetAllProgress = function() {
        if (confirm('Möchtest du wirklich deinen gesamten Lernfortschritt, deine gelösten Aufgaben und deinen Quiz-Highscore zurücksetzen?')) {
            // Clear all et_ keys
            for (let i = localStorage.length - 1; i >= 0; i--) {
                const key = localStorage.key(i);
                if (key && key.startsWith('et_')) {
                    localStorage.removeItem(key);
                }
            }
            // Reset UI states
            updateProgressUI();
            loadExercisesStatus();
            updateDashboardStats();
            alert('Lernfortschritt erfolgreich zurückgesetzt!');
            switchSection('dashboard');
        }
    };

    // Initialize all UI elements
    updateProgressUI();
    updateDashboardStats();
    renderQuizHistory();

    // Default view: Dashboard
    switchSection('dashboard');
});
