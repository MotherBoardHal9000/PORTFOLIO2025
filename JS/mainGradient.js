const COLORS = [
  { r: 87, g: 77, b: 249 }, // blue
  { r: 118, g: 91, b: 245 }, // purple
   { r: 117, g: 54, b: 255 }, // purpleII
];

// class는 constructor만드는 신문법이다.
class Canvas {
  constructor() {
    this.canvas = document.createElement("canvas"); //this는 새로 생성되는 object를 뜻함 즉 this.canvas는 뭐냐 새로생성되는 object의 canvas라는 속성에는 여기적힌 canvas란 값을 대입해 주세요
     //this 는 새로 생성되는 object를 뜻한다. this.age = 15 이렇게 새로 생성되는 object에 값 부여 가능
    this.canvas.style.width = 100+"%";
    this.canvas.style.height = 1080 + "px";
    this.canvas.style.backgroundColor = '#6A5BFF';
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    this.pixelRatio = document.body.PixelRatio > 1 ? 2 : 1;
    this.totalParticles = 12;
    this.particles = [];
    this.maxRadius =1600;
    this.minRadius =900;

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = window.innerWidth;
    this.stageHeight = window.innerHeight;
    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.globalCompositeOperation = `saturation`;
    this.createParticles();
  }

  createParticles() {
    let curColor = 0;
    this.particles = [];

    for (let i = 0; i < this.totalParticles; i++) {
      const item = new GlowParticle(
        Math.random() * this.stageWidth,
        Math.random() * this.stageHeight,
        Math.random() * (this.maxRadius - this.minRadius) + this.minRadius,
        COLORS[curColor]
      );

      if (++curColor >= COLORS.length) {
        curColor = 0;
      }

      this.particles[i] = item;
    }
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    for (let i = 0; i < this.totalParticles; i++) {
      const item = this.particles[i];
      item.animate(this.ctx, this.stageWidth, this.stageHeight);
    }
  }
}

window.onload = () => {
  new Canvas();
};

const PI2 = Math.PI * 2;

class GlowParticle {
  constructor(x, y, radius, rgb) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.rgb = rgb;

    this.vx = Math.random() * 3;
    this.vy = Math.random() * 3;

    this.sinValue = Math.random();
  }

  animate(ctx, stageWidth, stageHeight) {
    this.sinValue += 1;

    this.radius += Math.sin(this.sinValue);

    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0) {
      this.vx *= -1;
      this.x += 10;
    } else if (this.x > stageWidth) {
      this.vx *= -1;
      this.x -= 10;
    }

    if (this.y < 0) {
      this.vy *= -1;
      this.y += 10;
    } else if (this.y > stageHeight) {
      this.vy *= -1;
      this.y -= 10;
    }

    ctx.beginPath();
    const g = ctx.createRadialGradient(
      this.x,
      this.y,
      this.radius * 0.01,
      this.x,
      this.y,
      this.radius
    );
    g.addColorStop(0, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 1)`);
    g.addColorStop(1, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 0)`);

    ctx.fillStyle = g;
    ctx.arc(this.x, this.y, this.radius, 0, PI2, false);
    ctx.fill();
  }
}

if (matchMedia("only screen and (max-width: 768px)").matches){
  class Canvas {
  constructor() {
    this.canvas = document.createElement("canvas"); //this는 새로 생성되는 object를 뜻함 즉 this.canvas는 뭐냐 새로생성되는 object의 canvas라는 속성에는 여기적힌 canvas란 값을 대입해 주세요
    //  //this 는 새로 생성되는 object를 뜻한다. this.age = 15 이렇게 새로 생성되는 object에 값 부여 가능
     this.canvas.style.background =  "#6f55ffff";
    this.canvas.style.width = 100 +"vw";
    this.canvas.style.height = 850+"px";
    this.canvas.style.margin = "none";
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);


    this.pixelRatio = document.body.PixelRatio > 1 ? 2 : 1;
    this.totalParticles = 10;
    this.particles = [];
    this.maxRadius =1360;
    this.minRadius =1250;

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    window.requestAnimationFrame(this.animate.bind(this));



  }

  resize() {
    this.stageWidth = window.innerWidth;
    this.stageHeight = window.innerHeight;
    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.globalCompositeOperation = `saturation`;
    this.createParticles();
  }

  createParticles() {
    let curColor = 0;
    this.particles = [];

    for (let i = 0; i < this.totalParticles; i++) {
      const item = new GlowParticle(
        Math.random() * this.stageWidth,
        Math.random() * this.stageHeight,
        Math.random() * (this.maxRadius - this.minRadius) + this.minRadius,
        COLORS[curColor]
      );

      if (++curColor >= COLORS.length) {
        curColor = 0;
      }

      this.particles[i] = item;
    }
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    for (let i = 0; i < this.totalParticles; i++) {
      const item = this.particles[i];
      item.animate(this.ctx, this.stageWidth, this.stageHeight);
    }
  }
}

window.onload = () => {
  new Canvas();
};

const PI2 = Math.PI * 2;

class GlowParticle {
  constructor(x, y, radius, rgb) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.rgb = rgb;

    this.vx = Math.random() * 3;
    this.vy = Math.random() * 3;

    this.sinValue = Math.random();
  }

  animate(ctx, stageWidth, stageHeight) {
    this.sinValue += 1;

    this.radius += Math.sin(this.sinValue);

    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0) {
      this.vx *= -1;
      this.x += 10;
    } else if (this.x > stageWidth) {
      this.vx *= -1;
      this.x -= 10;
    }

    if (this.y < 0) {
      this.vy *= -1;
      this.y += 10;
    } else if (this.y > stageHeight) {
      this.vy *= -1;
      this.y -= 10;
    }

    ctx.beginPath();
    const g = ctx.createRadialGradient(
      this.x,
      this.y,
      this.radius * 0.01,
      this.x,
      this.y,
      this.radius
    );
    g.addColorStop(0, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 1)`);
    g.addColorStop(1, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 0)`);

    ctx.fillStyle = g;
    ctx.arc(this.x, this.y, this.radius, 0, PI2, false);
    ctx.fill();
  }
}
}