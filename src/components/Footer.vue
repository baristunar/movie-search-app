<template>
  <div>
    <footer  class="bg-dark">
      <div class="container-fluid">
        <p class="p-2">Created by Barış Tunar</p>
        <div class="social-media">
          
          <a href="https://github.com/baristunar" target="_blank"
            ><i class="fab fa-github"></i
          ></a>
          <a href="https://www.linkedin.com/in/baristunar/" target="_blank"
            ><i class="fab fa-linkedin"></i
          ></a>
          <a href="https://baristunar.medium.com/" target="_blank"
            ><i class="fab fa-medium-m"></i
          ></a>
          <a href="https://www.instagram.com/baris.tunar/" target="_blank"
            ><i class="fab fa-instagram"></i
          ></a>
        </div>
      </div>
    </footer>
  </div>
</template>




<style scoped>
footer {
  position: fixed;
  height: 100px;
  bottom: 0;
  left:0;
  width: 100%;
}
p {
  font-size: 1.2rem;
}
.container-fluid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  align-items: center;
}
a {
  color: #fff;
  font-size: 1.5rem;
  padding: 5px;
}
a:hover {
  color: #bb2d3b;
}
</style>