<script lang="ts">
  const isAppRemote = process.env.APP_ENDPOINT !== "local";

  console.log(
    `Application version __buildVersion using ENDPOINT ${process.env.APP_ENDPOINT}`
  );

  import Card from "./Card.svelte";
  import CardContainer from "./CardContainer.svelte";
  import TemplateCard from "./components/home/TemplateCard.svelte";
  import type { Template } from "./types/Template";

  if (isAppRemote) {
    fetch(process.env.APP_ENDPOINT + "/auth", {
      headers: { Authorization: "Basic ________" },
    }).then((r) => r.json());
  }
  const getData = async (): Promise<{ templates: Template[] }> => {
    if (isAppRemote) {
      return fetch(process.env.APP_ENDPOINT + "/templates").then((r) =>
        r.json()
      );
    }

    return fetch("stubFormData.json").then((r) => r.json());

    return {
      templates: [
        { title: "Local 1", description: "" },
        { title: "Local 2", description: "" },
      ],
    };
  };
</script>

<div class="container">
  <header>
    <h1>Templables</h1>
    {#if isAppRemote}
      <a>Login</a>
      <a>Register</a>
    {/if}
  </header>

  <main>
    {#await getData()}
      TODO: Loading spinner
    {:then json}
      <CardContainer>
        {#each json.templates as t}
          <TemplateCard data={t} />
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

      user-select: none;
    }
  }
</style>
