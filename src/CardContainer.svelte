<cardContainer>
  <slot />
</cardContainer>

<style lang="scss">
  cardContainer {
    padding: 10px;

    display: grid;
    grid-gap: 20px;

    /* Desktop */
    @media screen and (min-width: 1024px) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
</style>
