// ===== Morse Code Mapping =====
const MORSE_MAP = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--',
    '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...',
    ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-',
    '"': '.-..-.', '$': '...-..-', '@': '.--.-.',
};

const REVERSE_MORSE = {};
for (const [char, code] of Object.entries(MORSE_MAP)) {
    REVERSE_MORSE[code] = char;
}

const PUNCTUATION_CHARS = ['.', ',', '?', "'", '!', '/', '(', ')', '&', ':', ';', '=', '+', '-', '_', '"', '$', '@'];

// ===== Korean Morse Code (SKATS) =====
const KOREAN_MORSE = {
    'ㄱ': '.-..', 'ㄴ': '..-.', 'ㄷ': '-...', 'ㄹ': '...-',
    'ㅁ': '--', 'ㅂ': '.--', 'ㅅ': '--.', 'ㅇ': '-.-',
    'ㅈ': '.--.', 'ㅊ': '-.-.', 'ㅋ': '-..-', 'ㅌ': '--..',
    'ㅍ': '---', 'ㅎ': '.---',
    'ㅏ': '.', 'ㅑ': '..', 'ㅓ': '-.', 'ㅕ': '...',
    'ㅗ': '.-', 'ㅛ': '-..', 'ㅜ': '....', 'ㅠ': '.-.',
    'ㅡ': '-', 'ㅣ': '..-',
};
const REVERSE_KOREAN = {};
for (const [j, c] of Object.entries(KOREAN_MORSE)) REVERSE_KOREAN[c] = j;

const CHOSUNG = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
const JUNGSUNG = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
const JONGSUNG = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

const DOUBLE_CONS = { 'ㄲ': ['ㄱ', 'ㄱ'], 'ㄸ': ['ㄷ', 'ㄷ'], 'ㅃ': ['ㅂ', 'ㅂ'], 'ㅆ': ['ㅅ', 'ㅅ'], 'ㅉ': ['ㅈ', 'ㅈ'] };
const COMP_VOWEL = { 'ㅐ': ['ㅏ', 'ㅣ'], 'ㅒ': ['ㅑ', 'ㅣ'], 'ㅔ': ['ㅓ', 'ㅣ'], 'ㅖ': ['ㅕ', 'ㅣ'], 'ㅘ': ['ㅗ', 'ㅏ'], 'ㅙ': ['ㅗ', 'ㅏ', 'ㅣ'], 'ㅚ': ['ㅗ', 'ㅣ'], 'ㅝ': ['ㅜ', 'ㅓ'], 'ㅞ': ['ㅜ', 'ㅓ', 'ㅣ'], 'ㅟ': ['ㅜ', 'ㅣ'], 'ㅢ': ['ㅡ', 'ㅣ'] };
const COMP_JONG = { 'ㄳ': ['ㄱ', 'ㅅ'], 'ㄵ': ['ㄴ', 'ㅈ'], 'ㄶ': ['ㄴ', 'ㅎ'], 'ㄺ': ['ㄹ', 'ㄱ'], 'ㄻ': ['ㄹ', 'ㅁ'], 'ㄼ': ['ㄹ', 'ㅂ'], 'ㄽ': ['ㄹ', 'ㅅ'], 'ㄾ': ['ㄹ', 'ㅌ'], 'ㄿ': ['ㄹ', 'ㅍ'], 'ㅀ': ['ㄹ', 'ㅎ'], 'ㅄ': ['ㅂ', 'ㅅ'] };

const KOREAN_CONSONANTS = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
const KOREAN_VOWELS = ['ㅏ', 'ㅑ', 'ㅓ', 'ㅕ', 'ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ', 'ㅣ'];

function isHangul(ch) { const c = ch.charCodeAt(0); return c >= 0xAC00 && c <= 0xD7A3; }

function expandJamo(j) {
    if (DOUBLE_CONS[j]) return DOUBLE_CONS[j];
    if (COMP_VOWEL[j]) return COMP_VOWEL[j];
    if (COMP_JONG[j]) return COMP_JONG[j];
    return [j];
}

function decomposeHangul(ch) {
    const code = ch.charCodeAt(0) - 0xAC00;
    const cho = CHOSUNG[Math.floor(code / (21 * 28))];
    const jung = JUNGSUNG[Math.floor((code % (21 * 28)) / 28)];
    const jong = JONGSUNG[code % 28];
    const jamo = [...expandJamo(cho), ...expandJamo(jung)];
    if (jong) jamo.push(...expandJamo(jong));
    return jamo;
}

// Compose jamo string back into Hangul syllables
const CHO_IDX = { 'ㄱ': 0, 'ㄲ': 1, 'ㄴ': 2, 'ㄷ': 3, 'ㄸ': 4, 'ㄹ': 5, 'ㅁ': 6, 'ㅂ': 7, 'ㅃ': 8, 'ㅅ': 9, 'ㅆ': 10, 'ㅇ': 11, 'ㅈ': 12, 'ㅉ': 13, 'ㅊ': 14, 'ㅋ': 15, 'ㅌ': 16, 'ㅍ': 17, 'ㅎ': 18 };
const JUNG_IDX = { 'ㅏ': 0, 'ㅐ': 1, 'ㅑ': 2, 'ㅒ': 3, 'ㅓ': 4, 'ㅔ': 5, 'ㅕ': 6, 'ㅖ': 7, 'ㅗ': 8, 'ㅘ': 9, 'ㅙ': 10, 'ㅚ': 11, 'ㅛ': 12, 'ㅜ': 13, 'ㅝ': 14, 'ㅞ': 15, 'ㅟ': 16, 'ㅠ': 17, 'ㅡ': 18, 'ㅢ': 19, 'ㅣ': 20 };
const JONG_IDX = { '': 0, 'ㄱ': 1, 'ㄲ': 2, 'ㄴ': 4, 'ㄷ': 7, 'ㄹ': 8, 'ㅁ': 16, 'ㅂ': 17, 'ㅅ': 19, 'ㅆ': 20, 'ㅇ': 21, 'ㅈ': 22, 'ㅊ': 23, 'ㅋ': 24, 'ㅌ': 25, 'ㅍ': 26, 'ㅎ': 27 };
const VOWEL_COMBINE = { 'ㅏㅣ': 'ㅐ', 'ㅑㅣ': 'ㅒ', 'ㅓㅣ': 'ㅔ', 'ㅕㅣ': 'ㅖ', 'ㅗㅏ': 'ㅘ', 'ㅗㅏㅣ': 'ㅙ', 'ㅗㅣ': 'ㅚ', 'ㅜㅓ': 'ㅝ', 'ㅜㅓㅣ': 'ㅞ', 'ㅜㅣ': 'ㅟ', 'ㅡㅣ': 'ㅢ' };
const CONS_COMBINE = { 'ㄱㄱ': 'ㄲ', 'ㄷㄷ': 'ㄸ', 'ㅂㅂ': 'ㅃ', 'ㅅㅅ': 'ㅆ', 'ㅈㅈ': 'ㅉ' };
const _CONS = new Set(KOREAN_CONSONANTS);
const _VOWS = new Set(KOREAN_VOWELS);

function composeKorean(jamoStr) {
    const j = [...jamoStr];
    let out = '', i = 0;
    while (i < j.length) {
        if (j[i] === ' ') { out += ' '; i++; continue; }

        // Check for double consonant as 초성 (e.g. ㅅ+ㅅ+vowel → ㅆ as 초성)
        let cho = j[i], choLen = 1;
        if (_CONS.has(j[i]) && i + 1 < j.length && j[i] === j[i + 1] && CONS_COMBINE[j[i] + j[i + 1]]) {
            if (i + 2 < j.length && _VOWS.has(j[i + 2])) {
                cho = CONS_COMBINE[j[i] + j[i + 1]];
                choLen = 2;
            }
        }

        if (_CONS.has(j[i]) && i + choLen < j.length && _VOWS.has(j[i + choLen])) {
            // Collect vowels and try compound
            let vs = j[i + choLen], vi = i + choLen + 1;
            while (vi < j.length && _VOWS.has(j[vi]) && VOWEL_COMBINE[vs + j[vi]]) {
                vs += j[vi]; vi++;
            }
            const jung = VOWEL_COMBINE[vs] || vs;

            // Try final consonant (종성)
            let jong = '', consumed = vi;
            if (vi < j.length && _CONS.has(j[vi])) {
                // Check for double consonant 종성 (ㄲ, ㅆ)
                const dbl = (vi + 1 < j.length && j[vi] === j[vi + 1]) ? CONS_COMBINE[j[vi] + j[vi + 1]] : null;
                if (dbl) {
                    // Double consonant: is it 종성 or 초성 of next syllable?
                    if (vi + 2 < j.length && _VOWS.has(j[vi + 2])) {
                        // ㅆ + vowel → 초성 of next syllable, no 종성
                    } else {
                        jong = dbl; consumed = vi + 2;
                    }
                } else if (vi + 1 < j.length && _VOWS.has(j[vi + 1])) {
                    // single cons + vowel → 초성 of next syllable
                } else {
                    jong = j[vi]; consumed = vi + 1;
                }
            }

            const ci = CHO_IDX[cho], ji = JUNG_IDX[jung], ki = JONG_IDX[jong] ?? 0;
            if (ci !== undefined && ji !== undefined) {
                out += String.fromCharCode(0xAC00 + (ci * 21 + ji) * 28 + ki);
            } else { out += cho + jung + jong; }
            i = consumed;
        } else { out += j[i]; i++; }
    }
    return out;
}

// ===== State =====
let currentMode = 'text-to-morse';
let isPlaying = false;
let stopRequested = false;
let audioCtx = null;

// ===== DOM Elements =====
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const inputLabel = document.getElementById('input-label');
const outputLabel = document.getElementById('output-label');
const charCount = document.getElementById('char-count');
const convertBtn = document.getElementById('convert-btn');
const clearBtn = document.getElementById('clear-input-btn');
const copyBtn = document.getElementById('copy-output-btn');
const playBtn = document.getElementById('play-btn');
const playIcon = document.getElementById('play-icon');
const stopIcon = document.getElementById('stop-icon');
const playBtnText = document.getElementById('play-btn-text');
const speedSlider = document.getElementById('speed-slider');
const freqSlider = document.getElementById('freq-slider');
const volumeSlider = document.getElementById('volume-slider');
const speedValue = document.getElementById('speed-value');
const freqValue = document.getElementById('freq-value');
const volumeValue = document.getElementById('volume-value');
const signalLight = document.querySelector('.signal-light');
const currentCharEl = document.getElementById('current-char');

const chartGrid = document.getElementById('chart-grid');
const navbar = document.getElementById('navbar');

// ===== Conversion Functions =====
function textToMorse(text) {
    const result = [];
    for (const char of text) {
        if (char === ' ') { result.push('/'); continue; }
        if (isHangul(char)) {
            decomposeHangul(char).forEach(j => { if (KOREAN_MORSE[j]) result.push(KOREAN_MORSE[j]); });
        } else {
            const upper = char.toUpperCase();
            if (MORSE_MAP[upper]) result.push(MORSE_MAP[upper]);
        }
    }
    return result.join(' ');
}

function morseToText(morse, reverseMap) {
    return morse.trim().split(/\s*\/\s*/).map(word =>
        word.trim().split(/\s+/).map(code => reverseMap[code] || '').join('')
    ).join(' ');
}

// ===== Mode Toggle =====
document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (isPlaying) return;
        document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentMode = btn.dataset.mode;
        updateLabels();
        inputText.value = '';
        outputText.innerHTML = '<span class="output-placeholder">변환 결과가 여기에 표시됩니다</span>';
        outputText.classList.toggle('text-mode', currentMode === 'morse-to-text');
        charCount.textContent = '0자';
    });
});

function updateLabels() {
    if (currentMode === 'text-to-morse') {
        inputLabel.textContent = '텍스트 입력';
        outputLabel.textContent = '모스부호 출력';
        inputText.placeholder = '변환할 텍스트를 입력하세요';
    } else {
        inputLabel.textContent = '모스부호 입력';
        outputLabel.textContent = '텍스트 출력';
        inputText.placeholder = '모스부호를 입력하세요';
    }
}

// ===== Convert =====
function doConvert() {
    const input = inputText.value.trim();
    if (!input) {
        outputText.innerHTML = '<span class="output-placeholder">변환 결과가 여기에 표시됩니다</span>';
        return;
    }
    if (currentMode === 'text-to-morse') {
        outputText.classList.remove('text-mode');
        outputText.textContent = textToMorse(input) || '(변환할 수 없는 문자입니다)';
    } else {
        outputText.classList.add('text-mode');
        const enResult = morseToText(input, REVERSE_MORSE);
        const koRaw = morseToText(input, REVERSE_KOREAN);
        const koResult = composeKorean(koRaw);
        outputText.innerHTML = '';
        if (enResult) {
            const enLine = document.createElement('div');
            enLine.className = 'decode-line';
            enLine.innerHTML = `<span class="decode-label">EN</span> ${enResult}`;
            outputText.appendChild(enLine);
        }
        if (koResult) {
            const koLine = document.createElement('div');
            koLine.className = 'decode-line';
            koLine.innerHTML = `<span class="decode-label">KO</span> ${koResult}`;
            outputText.appendChild(koLine);
        }
        if (!enResult && !koResult) {
            outputText.textContent = '(변환할 수 없는 문자입니다)';
        }
    }
}

convertBtn.addEventListener('click', doConvert);
inputText.addEventListener('input', () => {
    charCount.textContent = `${inputText.value.length}자`;
    doConvert();
});
inputText.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); doConvert(); }
});
clearBtn.addEventListener('click', () => {
    inputText.value = '';
    outputText.innerHTML = '<span class="output-placeholder">변환 결과가 여기에 표시됩니다</span>';
    charCount.textContent = '0자';
});

// ===== Copy =====
copyBtn.addEventListener('click', () => {
    const text = outputText.textContent;
    if (!text || text === '변환 결과가 여기에 표시됩니다') return;
    navigator.clipboard.writeText(text).then(() => showToast('클립보드에 복사되었습니다!'));
});

// ===== Toast =====
function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

// ===== Audio =====
function getAudioCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
}

function playTone(frequency, duration, volume) {
    return new Promise(resolve => {
        const ctx = getAudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = frequency;
        gain.gain.value = volume;
        // Smooth ramp to avoid clicks
        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.005);
        gain.gain.setValueAtTime(volume, ctx.currentTime + duration / 1000 - 0.005);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + duration / 1000);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + duration / 1000);
        setTimeout(resolve, duration);
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ===== Play Morse =====
async function playMorse() {
    let morseStr;
    if (currentMode === 'text-to-morse') {
        morseStr = textToMorse(inputText.value.trim());
    } else {
        morseStr = inputText.value.trim();
    }
    if (!morseStr) return;

    isPlaying = true;
    stopRequested = false;
    playIcon.style.display = 'none';
    stopIcon.style.display = 'block';
    playBtnText.textContent = '정지';
    playBtn.style.background = 'var(--red)';

    // Helper to read current slider values in real-time
    const getSettings = () => ({
        freq: parseInt(freqSlider.value),
        vol: parseInt(volumeSlider.value) / 100,
        dot: 1200 / parseInt(speedSlider.value),
    });

    // Build display labels: one label per morse code unit
    const morseChars = morseStr.split(' ');
    const displayLabels = [];
    if (currentMode === 'text-to-morse') {
        const raw = inputText.value.trim();
        for (const char of raw) {
            if (char === ' ') {
                displayLabels.push('(공백)');
            } else if (isHangul(char)) {
                const jamo = decomposeHangul(char);
                jamo.forEach(j => { if (KOREAN_MORSE[j]) displayLabels.push(j); });
            } else {
                const upper = char.toUpperCase();
                if (MORSE_MAP[upper]) displayLabels.push(upper);
            }
        }
    } else {
        morseChars.forEach(code => {
            if (code === '/') displayLabels.push('(공백)');
            else displayLabels.push(REVERSE_MORSE[code] || code);
        });
    }

    for (let i = 0; i < morseChars.length; i++) {
        if (stopRequested) break;
        const code = morseChars[i];

        if (code === '/') {
            currentCharEl.textContent = '(공백)';
            await sleep(getSettings().dot * 7);
            continue;
        }

        currentCharEl.textContent = `${displayLabels[i] || ''} → ${code}`;

        for (let j = 0; j < code.length; j++) {
            if (stopRequested) break;
            const s = getSettings();
            const symbol = code[j];
            const dur = symbol === '.' ? s.dot : s.dot * 3;

            // Visual
            signalLight.classList.add('on');

            await playTone(s.freq, dur, s.vol);

            signalLight.classList.remove('on');

            // Gap between signals in same letter
            if (j < code.length - 1) await sleep(s.dot);
        }
        // Gap between letters
        if (i < morseChars.length - 1 && morseChars[i + 1] !== '/') {
            await sleep(getSettings().dot * 3);
        }
    }

    // Reset
    isPlaying = false;
    stopRequested = false;
    playIcon.style.display = 'block';
    stopIcon.style.display = 'none';
    playBtnText.textContent = '재생';
    playBtn.style.background = 'var(--accent)';
    signalLight.classList.remove('on');
    currentCharEl.textContent = '';
}

playBtn.addEventListener('click', () => {
    if (isPlaying) {
        stopRequested = true;
    } else {
        playMorse();
    }
});

// ===== Sliders =====
speedSlider.addEventListener('input', () => speedValue.textContent = `${speedSlider.value} WPM`);
freqSlider.addEventListener('input', () => freqValue.textContent = `${freqSlider.value} Hz`);
volumeSlider.addEventListener('input', () => volumeValue.textContent = `${volumeSlider.value}%`);

// ===== Reset Defaults =====
document.getElementById('reset-settings-btn').addEventListener('click', () => {
    speedSlider.value = 15;
    freqSlider.value = 600;
    volumeSlider.value = 70;
    speedValue.textContent = '15 WPM';
    freqValue.textContent = '600 Hz';
    volumeValue.textContent = '70%';
    showToast('기본값으로 초기화되었습니다');
});

// ===== Chart =====
const chartData = {
    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
    numbers: '0123456789'.split(''),
    punctuation: PUNCTUATION_CHARS,
    korean_cons: KOREAN_CONSONANTS,
    korean_vowels: KOREAN_VOWELS,
};

function renderChart(tab) {
    chartGrid.innerHTML = '';
    const chars = chartData[tab];
    const isKorean = tab.startsWith('korean');
    chars.forEach(char => {
        const code = isKorean ? KOREAN_MORSE[char] : MORSE_MAP[char];
        if (!code) return;
        const item = document.createElement('div');
        item.className = 'chart-item';
        item.innerHTML = `<span class="char">${char}</span><span class="code">${code}</span>`;
        item.addEventListener('click', () => playChartItem(char, code, item));
        chartGrid.appendChild(item);
    });
}

async function playChartItem(char, code, element) {
    if (isPlaying) return;
    isPlaying = true;
    element.classList.add('playing');

    const freq = parseInt(freqSlider.value);
    const vol = parseInt(volumeSlider.value) / 100;
    const wpm = parseInt(speedSlider.value);
    const dotDuration = 1200 / wpm;

    for (let i = 0; i < code.length; i++) {
        const symbol = code[i];
        const dur = symbol === '.' ? dotDuration : dotDuration * 3;
        await playTone(freq, dur, vol);
        if (i < code.length - 1) await sleep(dotDuration);
    }

    element.classList.remove('playing');
    isPlaying = false;
}

document.querySelectorAll('.chart-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.chart-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderChart(tab.dataset.tab);
    });
});

renderChart('alphabet');

// ===== Navbar scroll =====
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== Smooth scroll for nav links =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
