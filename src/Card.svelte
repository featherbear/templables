<script lang="ts">
  import type { TemplateData } from "./types/TemplateData";
  export let data: TemplateData = {
    title: "",
    description: "",
  };
</script>

<card>
  <h2>{data.title}</h2>
  <p>{data.description}</p>
</card>

<style lang="scss">
 
</style>
