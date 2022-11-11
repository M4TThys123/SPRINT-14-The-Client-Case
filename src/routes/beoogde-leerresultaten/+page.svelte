<script>
  import * as prismicH from "@prismicio/helpers";

  export let data;

  const humanity = 5; //1.1
  const arrHumanity = data.documents[humanity].data;
  console.log(arrHumanity);

</script>

<section class="row">
  <span>{arrHumanity.hoofdstuk}</span>
  <h2>Humanity-centered digital designers</h2>
  <div class="prismic__row">
    {@html prismicH.asHTML(arrHumanity.content)}
  </div>
</section>

<style>

</style>
