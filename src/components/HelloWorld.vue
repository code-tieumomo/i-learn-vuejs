<template>
  <div class="container">
    <div class="box pendulum one">h</div>
    <div class="box">e</div>
    <div class="box">l</div>
    <div class="box">l</div>
    <div class="box">o</div>
    <div class="box">w</div>
    <div class="box">o</div>
    <div class="box">r</div>
    <div class="box">l</div>
    <div class="box pendulum two">d</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  :root {
    --duration: 1s;
  }

  .container {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-size: 40px;
    text-transform: uppercase;
  }

  .box {
    position: relative;
    width: 40px;
    height: 150px;
    line-height: 250px;
    text-align: center;
    transform-origin: top center;
  }

  .box::before,
  .box::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }

  .box::before {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    background: #444;
  }

  .box::after {
    width: 3px;
    height: calc(100% - 20px);
    background: #444;
  }

  .one {
    animation: one var(--duration) cubic-bezier(0.65, 0, 0.35, 1) 0s infinite
      forwards;
  }

  .two {
    transform: rotate(-45deg);
    animation: two var(--duration) cubic-bezier(0.65, 0, 0.35, 1)
      calc(var(--duration) / 2) infinite forwards;
  }

  @keyframes one {
    0%,
    100% {
      transform: rotate(45deg);
    }
    30%,
    60% {
      transform: rotate(0deg);
    }
  }

  @keyframes two {
    0%,
    100% {
      transform: rotate(-45deg);
    }
    30%,
    60% {
      transform: rotate(0deg);
    }
  }
</style>