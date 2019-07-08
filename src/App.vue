<template>
  <div id="app">
    <h1>Mixins and Custom Directives</h1>
    <ul class="nav">
      <li>
        <router-link
          to="mixins"
          exact
          v-on:click="activetab = 1;"
          v-bind:class="[activetab === 1 ? 'active' : '']"
          >Mixins example</router-link
        >
      </li>
      <li>
        <router-link
          to="scroll"
          exact
          v-on:click="activetab = 2;"
          v-bind:class="[activetab === 2 ? 'active' : '']"
          >Custom Directives example</router-link
        >
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      activetab: 0
    };
  }
};
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
}
h1,
h2,
h3 {
  font-weight: 300;
}
#app {
  text-align: center;
  margin: 60px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 700px;
  position: relative;
}
button {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  border: 1px solid black;
  background: white;
  padding: 10px 15px;
  margin: 10px auto;
  outline: 0;
  cursor: pointer;
  min-width: 86px;
}
.nav {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding-inline-start: 0;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
}
.nav li {
  flex: 1 0 auto;
  border-right: 1px solid black;
}
.nav li:last-child {
  border-right: none;
}
.nav li a {
  text-decoration: none;
  color: #000;
  padding: 20px;
  display: block;
  cursor: pointer;
}
.nav li .active {
  background-color: #e6e6e6;
}
.modal-demo,
.tooltip-demo {
  width: 50%;
}
.modal {
  background: #e6ffff;
  color: #333333;
  padding: 20px;
  width: 200px;
  position: absolute;
  top: 50px;
  z-index: 2000;
  left: 50%;
  transform: translateX(-120px);
  border: 1px solid #000;
}
.title {
  font-size: 24px;
  padding-bottom: 10px;
}
h3 span {
  cursor: pointer;
}
.main {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
.tooltip-demo {
  position: relative;
}
.tooltip {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: #333333;
  color: #e6ffff;
  width: 250px;
  border-color: #e6ffff;
  padding: 15px;
}
.hint {
  display: block;
  text-align: center;
}
.tooltip:before {
  width: 0;
  height: 0;
  content: " ";
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid #333333;
  position: absolute;
  top: -20px;
  left: 50%;
}
</style>
