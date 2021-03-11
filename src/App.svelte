<script lang="ts">
  export let name: string;
  console.log("Application version __buildVersion using ENDPOINT process.env.APP_ENDPOINT");

  import Card from "./Card.svelte";
  import CardContainer from "./CardContainer.svelte";
  import type { TemplateData } from "./types/TemplateData";

  const handleFetchResponse = async (
    fetcher
  ): Promise<{ templates: TemplateData[] }> => fetcher.then((r) => r.json());
</script>

<div class="container">
  <header>
    <h1>Templables</h1>
  </header>

  <main>
    {#await handleFetchResponse(fetch("stubFormData.json"))}
      TODO: Loading spinner
    {:then json}
      <CardContainer>
        {#each json.templates as t}
          <Card data={t} />
        {/each}
        <Card data={{ title: "", description: "Create a new template" }} />
      </CardContainer>
    {/await}

    <p>
      <!-- Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
      how to build Svelte apps. -->
    </p>
  </main>

  <footer>App Version: __buildVersion</footer>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    text-align: center;

    header {
      h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
      }
    }

    main {
      flex: 1;
      // max-width: 240px;
      // margin: 0 auto;

      // @media (min-width: 640px) {
      //   max-width: none;
      // }
    }

    footer {
      padding: 0.5em;
      background-color: #ff8a62;
    }
  }
</style>
