<script>
  import * as prismicH from "@prismicio/helpers";
  export let data;

  const Competenties = 11 //1.2
  const arrCompetenties = data.documents[Competenties].data;
</script>

<section class="row">
  <span>{arrCompetenties.hoofdstuk}</span>
  <h2>Competenties</h2>
  <div class="prismic__row">
    {@html prismicH.asHTML(arrCompetenties.content)}
  </div>
</section>

