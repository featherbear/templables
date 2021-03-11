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
  card {
    h2 {
      color: #555;
    }
    p {
      color: #888;
    }

    padding: 0 5px 5px 10px;

    border: 1px solid #555;
    border-radius: 5px;

    // box-shadow: 17px 17px 28px 0px rgba(0,0,0,0.33);

    text-align: center;

    cursor: pointer;
    user-select: none;
  }
</style>
