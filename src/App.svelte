<script lang="ts">
  export let name: string;
  console.log("__buildVersion");

  import Card from "./Card.svelte";
  import CardContainer from "./CardContainer.svelte";
</script>

<main>
  <h1>Templables</h1>
  <!-- <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p> -->
</main>

{#await fetch("/stubFormData.json").then((r) => r.json())}
  TODO: Loading spinner
{:then json}
  <CardContainer>
    {#each json.templates as t}
      <Card data={t} />
    {/each}
    <Card data={{ title: "", description: "Create a new template" }} />
  </CardContainer>
{/await}

<footer>App Version: __buildVersion</footer>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
