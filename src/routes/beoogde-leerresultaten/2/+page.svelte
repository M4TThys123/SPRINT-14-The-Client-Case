<script>
  import * as prismicH from "@prismicio/helpers";
  export let data;
  // console.log(data);

  const Competenties = 11 //1.2

  const arrCompetenties = data.documents[Competenties].data;
  console.log(arrCompetenties);
  console.log(data.documents);
</script>

<section>
  <span>{arrCompetenties.hoofdstuk}</span>
  <h2>{arrCompetenties[0]}</h2>
  <div>
    {@html prismicH.asHTML(arrCompetenties.content)}
  </div>
</section>

<style>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  
}

</style>
