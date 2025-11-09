//마우스 커서 이펙트
const trails = document.querySelectorAll(".trail");
const smoothPointer = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
};
const totalPointsArray = [40, 35, 30, 25, 20, 15, 10];

window.addEventListener("mousemove", (event) => {
  gsap.to(smoothPointer, {
    x: event.clientX,
    y: event.clientY,
    duration: 0.5,
    ease: "power2.out",
  });
});

function updatePath() {
  trails.forEach((path, index) => {
    let points = path.points || [];
    points.unshift({ ...smoothPointer });
    while (points.length > totalPointsArray[index]) {
      points.pop();
    }
    path.points = points;

    if (points.length > 1) {
      let d = `M ${points[0].x} ${points[0].y}`;
      for (let i = 1; i < points.length; i++) {
        d += ` L ${points[i].x} ${points[i].y}`;
      }
      path.setAttribute("d", d);
    }
  });

  requestAnimationFrame(updatePath);
}

updatePath(requestAnimationFrame);
//
//시작 메인 타이포그래피 애니메이션

const duration = 0.5;
const numberOfTargets = gsap.utils.toArray('.utill > div').length
const pause = 1.2;
const stagger = duration + pause;
const delay = stagger * (numberOfTargets - 1) + pause;
const tl = gsap.timeline();

gsap.set('.utill > div',{transformOrigin:'100% 50% -50'})

tl.from('.utill > div',{
  rotationX:90,
  opacity:0,
  duration:duration,
  stagger:{
    each:stagger,
    repeatDelay:delay
  }
})

//
//
//
  let x = 0;
      let targetX = 0;
      const speed = 0.010;

      const section01 = document.querySelectorAll(".section01 img");
      const img00 = section01[0];
      const img01 = section01[1];
      const img02 = section01[2];
      const img03 = section01[3];
      const img04 = section01[4];
      const img05 = section01[5];
      const img06 = section01[6];

      window.addEventListener("mousemove", (event) => {
        x = event.pageX - window.innerWidth / 2;
      });

      const loop = () => {
        targetX += (x - targetX) * speed;

        img00.style.transform = `translateX(${targetX / 10}px)`;
        img01.style.transform = `translateX(${targetX / 18}px)`;
        img02.style.transform = `translateX(${targetX / 13}px)`;
        img03.style.transform = `translateX(${targetX / 17}px)`;
        img04.style.transform = `translateX(${targetX / 12}px)`;
        img05.style.transform = `translateX(${targetX / 10}px)`;
        img06.style.transform = `translateX(${targetX / 14}px)`;
        window.requestAnimationFrame(loop);
      };
      loop();