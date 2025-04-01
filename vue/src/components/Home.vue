<script setup>
import HomeItem from './HomeItem.vue'
</script>

<template>

  <header>
    <a href="./Home.vue" class="header-txt">
          <h1>Koníčky</h1>
    </a>
  </header>

  <div class="buttons-container">
    <a href="./Home.vue" class="pohyb">
      <HomeItem>
        <template #heading>Pohybove</template>
      </HomeItem>
    </a>

    <a href="./Home.vue" class="umelec">
      <HomeItem>
        <template #heading>Umelecke</template>
      </HomeItem>
    </a>
    

    <a href="./Home.vue" class="hudba">
      <HomeItem>
        <template #heading>Hudobne</template>
      </HomeItem>
    </a>
    

    <a href="./Home.vue" class="rozum">
      <HomeItem>
        <template #heading>Rozumove</template>
      </HomeItem>
    </a>
    

    <a href="./Home.vue" class="dobrodruzne">
      <HomeItem>
        <template #heading>Dobrodruzne</template>
      </HomeItem>
    </a>
    

    <a href="" class="ine">
      <HomeItem>
        <template #heading>Ine</template>
      </HomeItem>
    </a>
  </div>
  
</template>

<style scoped>
a{
  width: 95%;
}

.pohyb{
  background-color: #D95F3A;
}

.umelec{
  background-color: #EF9849;
}

.hudba{
  background-color: #FCD6A5;
}

.rozum{
  background-color: #7BA8A3;
}

.dobrodruzne{
  background-color: #338F9A;
}

.ine{
  background-color: #1C4C70;
}

h1{
  color: #000;
  width: 100%;
  padding: 10px;
  font-weight: 650;
  font-size: 275%;

  display: flex;
  align-items: center;
}

header{
  background-color: #FFE9C5;
  height: 17%;
}

.buttons-container{
  height: 83%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.header-txt{
  display: flex;
  height: 100%;
}

.header:before {
  content: ' ';
  border-left: 1px solid var(--color-border);
}

.header:after {
  content: ' ';
  border-left: 1px solid var(--color-border);
}

.header:first-of-type:before {
  display: none;
}

.header:last-of-type:after {
  display: none;
}
</style>