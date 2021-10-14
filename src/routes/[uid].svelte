<script context="module">
  import Client from './../../utils/client';
  import PrismicDom from 'prismic-dom';
  import Image from "svelte-image";

  export async function load({ page }) {
      const { uid } = page.params
    const document = await Client.getByUID('page',uid);
    return {
      props: {
        document
      }
    };
  }
</script>

<script>
    export let document;
</script>

<svelte:head>
    <title>{document.data.title}</title>
</svelte:head>

<div class="header container" style="background-image: url('{document.data.image.url}')">
    <h1>{document.data.title}</h1>
</div>

<div class="container">
{@html PrismicDom.RichText.asHtml(document.data.content)}
</div>
