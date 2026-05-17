# ● ━ MORSE | 모스부호 변환기

> 점(·)과 선(—) 두 가지 신호로 이루어진 인류 최초의 디지털 통신 시스템을 체험해보세요.

## 📸 미리보기

![Hero Section](https://img.shields.io/badge/Dark_Theme-Amber_Accent-f0b040?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## ✨ 주요 기능

| 기능 | 설명 |
|------|------|
| 📖 **모스부호 소개** | 모스부호의 정의, 역사, SOS 신호, 현재 활용까지 한눈에 |
| ⚙️ **작동 원리** | 점/선의 길이, 신호·글자·단어 간격을 시각적으로 설명 |
| 🔄 **양방향 변환** | 텍스트 → 모스부호, 모스부호 → 텍스트 실시간 변환 |
| 🔊 **소리 재생** | Web Audio API로 모스부호 신호음 재생 |
| 💡 **플래시 시각화** | 신호 재생 시 화면 깜빡임 + 시그널 라이트 효과 |
| 🎚️ **속도/주파수/볼륨 조절** | 슬라이더로 재생 속도(WPM), 톤 주파수(Hz), 볼륨 조절 |
| 📊 **모스부호 차트** | 알파벳·숫자·특수문자 대조표 (클릭 시 소리 재생) |
| 📋 **복사 기능** | 변환 결과를 클립보드에 한 번에 복사 |

---

## 🚀 시작하기

### 프로젝트 구조

```
Morse Code/
├── index.html    # 메인 HTML 구조
├── style.css     # 스타일시트 (다크 테마 + 반응형)
├── script.js     # 변환 로직 + 오디오 + 인터랙션
└── README.md     # 프로젝트 설명서
```

---

## 🎮 사용법

### 텍스트 → 모스부호
1. **"텍스트 → 모스부호"** 모드가 선택된 상태에서
2. 입력창에 변환할 텍스트를 입력 (예: `HELLO WORLD`)
3. 실시간으로 모스부호가 출력됩니다
4. **▶ 재생** 버튼으로 소리 재생

### 모스부호 → 텍스트
1. **"모스부호 → 텍스트"** 버튼 클릭
2. 모스부호를 입력 (예: `.... . .-.. .-.. ---`)
   - 신호 사이: 공백 1개
   - 단어 사이: `/` 사용
3. 텍스트로 변환된 결과 확인

### 사운드 설정
- **재생 속도**: 5~35 WPM (Words Per Minute)
- **주파수**: 300~1000 Hz (톤 높낮이)
- **볼륨**: 0~100%

---

## 🛠️ 기술 스택

- **HTML5** — 시맨틱 마크업
- **CSS3** — CSS 변수, Grid, Flexbox, 애니메이션, 반응형 디자인
- **JavaScript (ES6+)** — 모듈 없이 순수 JS
- **Web Audio API** — 브라우저 내장 오디오 합성
- **Google Fonts** — Inter, JetBrains Mono

---

## 📱 반응형 디자인

데스크톱, 태블릿, 모바일 모두 지원합니다.

- **768px 이하**: 1열 레이아웃으로 자동 전환
- 네비게이션 간소화
- 변환기 세로 배치
- 슬라이더 세로 정렬

---

## 📄 라이선스

이 프로젝트는 자유롭게 사용, 수정, 배포할 수 있습니다.

---

<p align="center">
  <strong>· — — ·</strong>&nbsp;&nbsp;Made with Morse Code&nbsp;&nbsp;<strong>· — — ·</strong>
</p>
