// 변수 ---------------------------
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const STAR_COUNT = (window.innerWidth + window.innerHeight) / 9, // 별 개수
  STAR_SIZE = 3,
  STAR_MIN_SCALE = 0.1, // 최소 스케일
  OVERFLOW_THRESHOLD = 50;

let scale = 1, // 1픽셀
  width,
  height;
let stars = []; // 별 배열

// 함수 실행-----------------------

generate();
resize();
step();

// 함수 등록-----------------------

window.onresize = resize;

// 함수---------------------------

function generate() {
  // 별배열에 별객체 푸쉬
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: 0,
      y: 0,
      z: STAR_MIN_SCALE + Math.random() * (0.7 - STAR_MIN_SCALE)
    });
  }
}

function placeStar(star) {
  // 별 위치 생성
  star.x = Math.random() * width;
  star.y = Math.random() * height;
}

function resize() {
  scale = window.devicePixelRatio || 1;
  width = window.innerWidth * scale;
  height = window.innerHeight * scale;
  canvas.width = width;
  canvas.height = height;
  stars.forEach(placeStar);
}

function step() {
  context.clearRect(0, 0, width, height);
  render();
  requestAnimationFrame(step);
}

function render() {
  stars.forEach((star, index) => {
    context.beginPath();
    context.lineCap = "round";
    context.lineWidth = STAR_SIZE * star.z * scale;
    context.strokeStyle =
      index % 9 === 0
        ? "rgba(255,255,255)"
        : "rgba(255,255,255," + (0.3 + 0.7 * Math.random()) + ")";
    // 별 반짝임 opacity
    context.lineTo(star.x, star.y);
    context.stroke();
  });
}
