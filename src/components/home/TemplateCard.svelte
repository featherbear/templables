<script lang="ts">
  import type { Template } from "../../types/Template";
  import { bodyStyle } from "../../utils/centralCompute";

  export let data: Template;
  let iframe: HTMLIFrameElement;

  $: {
    if (iframe) {
      const head =  `
        <style>
          body {
            /* font-size: ${bodyStyle.fontSize}; */
            color: ${bodyStyle.color};
            font-family: ${bodyStyle.fontFamily};
          }
        </style>
        `;
      iframe.srcdoc = head + (data.data || "");
    }
  }
</script>

<card>
  <div class="title">
    {data.title || ""}
  </div>
  <div class="formPreview" on:click={() => console.log("Preview")}>
    <iframe
      bind:this={iframe}
      sandbox=""
      seamless
      frameborder="0"
      title="preview">{data.data}</iframe
    >
  </div>
  <div class="buttons">
    <span style="display: none;"
      >Create {data.created}, Modified {data.modified}</span
    >
    <div class="button">Edit</div>
  </div>
</card>

<style lang="scss">
  card {
    border: 1px solid grey;
    border-radius: 5px;
    max-width: 300px;
    position: relative;

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


    .title {
      color: #222;
    }

    .description {
      color: #666;
    }

    .formPreview {
      text-align: center;
      position: relative;

      &::before {
        content: " ";
        background-color: rgba(0, 0, 0, 0.1);
        position: absolute;
        height: 100%;
        width: 100%;
      }

      &:hover::after {
        content: "Enter";
        // left: 0;
        // position: absolute;

        height: 100%;
        width: 100%;
        top: 0;

        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
      }

      iframe {
      }
    }

    .buttons {
      text-align: center;
      .button {
          cursor: pointer;
          &:hover {
              background-color: grey;
          }
        //   border: 1px solid grey;
        //   border-radius: 1px;
        //   max-width: 
      }
    }
  }
</style>
