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
      color: #222;
    }
    p {
      color: #666;
    }

    padding: 0 5px 5px 10px;

    border: 1px solid #ccc;
    border-radius: 5px;

    text-align: center;

    cursor: pointer;
    user-select: none;

    background-color: #fff;
    transition: background-color 0.2s;
    &:hover {
      background-color: #eee;
    }
  }
</style>
