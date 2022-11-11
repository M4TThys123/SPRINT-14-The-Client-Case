<script>
  import * as prismicH from "@prismicio/helpers";

  export let data;

  const paragraaf = 2; 
  const arrParagraaf = data.documents[paragraaf].data;
  console.log(arrParagraaf);

</script>

<section class="row">
  <span>{arrParagraaf.hoofdstuk}</span>
  <h2>Werkveld en maatschappij</h2>
  <div class="prismic__row">
    {@html prismicH.asHTML(arrParagraaf.content)}
  </div>
</section>

<style>

</style>
