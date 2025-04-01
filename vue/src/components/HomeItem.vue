<template>
  <div class="item">
    <h3>
      <slot name="heading"></slot>
    </h3>
  </div>
</template>

<style scoped>
.item {
  display: flex;
}

h3 {
  width: 100%;
  font-size: xx-large;
  font-weight: 500;
  display: flex;
  justify-content: center;
}

@media (min-width: 315px) {
  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>