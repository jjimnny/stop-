// 시간변수를 초기화, 진행중인지 판단하는 변수
let hours = 0, minutes = 0, seconds = 0;
let timerInterval = null;
let isRunning = false;

// HTML 요소 가져오기
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const savePointEl = document.getElementById("save-point");

// 버튼 요소 가져기
const startBtn = document.getElementById("btn-start");
const stopBtn = document.getElementById("btn-stop");
const resetBtn = document.getElementById("btn-reset");
const saveBtn = document.getElementById("btn-save");

// 시계를 두자로 바꿔주기 
function format(n) {
  return n.toString().padStart(2, "0");
}

// 화면시간 업데이트 - HTML에 있는 거 바꾸기
function updateDisplay() {
  hoursEl.textContent = format(hours);
  minutesEl.textContent = format(minutes);
  secondsEl.textContent = format(seconds);
}

// 스톱워치 시작
function startWatch() {
  if (isRunning) return;
  isRunning = true;
  timerInterval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}

// 스톱워치 멈춤
function stopWatch() {
  clearInterval(timerInterval);
  isRunning = false;
}

// 초기화
function resetWatch() {
  stopWatch();
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
  savePointEl.innerHTML = "";
}

// 시간 저장하기
function saveTime() {
  const time = `${format(hours)}:${format(minutes)}:${format(seconds)}`;
  const p = document.createElement("p");
  p.textContent = `⏱ ${time}`;
  savePointEl.appendChild(p);
}

// 버튼 누르면 함수 연결
startBtn.addEventListener("click", startWatch);
stopBtn.addEventListener("click", stopWatch);
resetBtn.addEventListener("click", resetWatch);
saveBtn.addEventListener("click", saveTime);