<template>
  <router-view />
</template>

<style lang="scss">
@font-face {
  font-family: "Sensation_Bold";
  src: local("Sensation_Bold"), url(./assets/fonts/Sensation/Sansation_Bold.ttf) format("truetype");
  font-weight: bold;
}
@font-face {
  font-family: "Sensation_Light";
  src: local("Sensation_Light"), url(./assets/fonts/Sensation/Sansation_Light.ttf) format("truetype");
  font-weight: lighter;
}
@font-face {
  font-family: "Sensation_Regular";
  src: local("Sensation_Regular"), url(./assets/fonts/Sensation/Sansation_Regular.ttf) format("truetype");
  font-weight: normal;
}

#app {
  font-family: Sensation_Bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

html, body {
 height: 100vh;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #22272B;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
