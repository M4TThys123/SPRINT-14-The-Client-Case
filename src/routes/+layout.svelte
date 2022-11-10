<script>
  import { page } from "$app/stores";

  let navOpen = false;

  function handleNav() {
    navOpen = !navOpen;
  }

  const hoofdstuk1 = [
    {
      id: 1.1,
      name: "1.1 Humanity-centered digital designers",
      route: "/beoogde-leerresultaten/",
      hoofdstuk: 1,
      apiId: 5,
    },
    {
      id: 1.2,
      name: "1.2 Competenties",
      route: "/beoogde-leerresultaten/2",
      hoofdstuk: 1,
      apiId: 11,
    },
    {
      id: 1.3,
      name: "1.3 Werkveld en maatschappij",
      route: "/beoogde-leerresultaten/3",
      hoofdstuk: 1,
      apiId: 2,
    },
    {
      id: 1.4,
      name: "1.4 Ontwikkelingen",
      route: "/beoogde-leerresultaten/4",
      hoofdstuk: 1,
      apiId: 4,
    },
    {
      id: 1.5,
      name: "1.5 Ambities en dilemma’s",
      route: "/beoogde-leerresultaten/5",
      hoofdstuk: 1,
      apiId: 12,
    },
  ];
  const hoofdstuk2 = [
    {
      id: 2.1,
      name: "2.1 Onderwijsvisie en didactiek",
      route: "/onderwijsleeromgeving",
      hoofdstuk: 2,
      apiId: 15,
    },
    {
      id: 2.2,
      name: "2.2 Curriculumopbouw",
      route: "/Onderwijsleeromgeving/2",
      hoofdstuk: 2,
      apiId: 0,
    },
    {
      id: 2.3,
      name: "2.3 Borging onderwijskwaliteit",
      route: "/Onderwijsleeromgeving/3",
      hoofdstuk: 2,
      apiId: 18,
    },
    {
      id: 2.4,
      name: "2.4 Onderwijs en praktijk",
      route: "/Onderwijsleeromgeving/4",
      hoofdstuk: 2,
      apiId: 1,
    },
    {
      id: 2.5,
      name: "2.5 Onderwijs en onderzoek",
      route: "/Onderwijsleeromgeving/5",
      hoofdstuk: 2,
      apiId: 7,
    },
    {
      id: 2.6,
      name: "2.6 Internationalisering",
      route: "/Onderwijsleeromgeving/6",
      hoofdstuk: 2,
      apiId: 16,
    },
    {
      id: 2.7,
      name: "2.7 Studenten begeleiding",
      route: "/Onderwijsleeromgeving/7",
      hoofdstuk: 2,
      apiId: 14,
    },
    {
      id: 2.8,
      name: "2.8 Digitale en analoge voorzieningen",
      route: "/Onderwijsleeromgeving/8",
      hoofdstuk: 2,
      apiId: 22,
    },
    {
      id: 2.9,
      name: "2.9 Ambities en dilemma's",
      route: "/Onderwijsleeromgeving/9",
      hoofdstuk: 2,
      apiId: 10,
    },
  ];
  const hoofdstuk3 = [
    {
      id: 3.1,
      name: "3.1 Toetsbeleid en -plan",
      route: "/toetsing",
      hoofdstuk: 3,
      apiId: 17,
    },
    {
      id: 3.2,
      name: "3.2 Toetsprogramma en -praktijk",
      route: "/toetsing/2",
      hoofdstuk: 3,
      apiId: 9,
    },
    {
      id: 3.3,
      name: "3.3 Toetsing en feedback",
      route: "/toetsing/3",
      hoofdstuk: 3,
      apiId: 4,
    },
    {
      id: 3.4,
      name: "3.4 Borging en kwaliteit",
      route: "/toetsing/4",
      hoofdstuk: 3,
      apiId: 11,
    },
    {
      id: 3.5,
      name: "3.5 Ambities en dilemma's",
      route: "/toetsing/5",
      hoofdstuk: 3,
      apiId: 21,
    },
  ];
  const hoofdstuk4 = [
    {
      id: 4.1,
      name: "4.1 Afstudeerproces",
      route: "/gerealiseerde-leerresultaten",
      hoofdstuk: 4,
      apiId: 19,
    },
    {
      id: 4.2,
      name: "4.2 Borging afstudeerniveau vanuit examencommissie",
      route: "/gerealiseerde-leerresultaten/2",
      hoofdstuk: 4,
      apiId: 8,
    },
    {
      id: 4.3,
      name: "4.3 Ambities en dilemma's",
      route: "/gerealiseerde-leerresultaten/3",
      hoofdstuk: 4,
      apiId: 20,
    },
  ];

  let navHoofdstuk = hoofdstuk4;

  function navButtonEen() {
    navHoofdstuk = hoofdstuk1;
  }

  function navButtonTwee() {
    navHoofdstuk = hoofdstuk2;
  }

  function navButtonDrie() {
    navHoofdstuk = hoofdstuk3;
  }

  function navButtonVier() {
    navHoofdstuk = hoofdstuk4;
  }
</script>

<div class="flex">
  <main class="" class:pushMainToRight={navOpen}>
    <slot />
  </main>
</div>

<!-- <Footer/> -->
<style>
@media only screen and (max-width: 600px) {

    main{
        /* margin-left: 400px; */
        max-width: 800px;
        width: 100%;

    }
  }


    :global(:root){
    --yellow: #F4E500;
    --cream-white: #F0EBF0;
    --cream-red: #DB504C;
    --dark-grey: #2F3135;
    --nav-accent-color: #50545B;
    --nav-text-grey: #8E9296;
  }
  :global(*) {
    font-family: Open sans;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    color: black;
  }
  :global(button){
    border: none;
    background: none;
    cursor: pointer;
  }
  :global(a){
    text-decoration: none;
    list-style: none;
  }  
  :global(li){
    list-style: none;
  }

  :global(.tranform__left){
    transform: translate(-400px, 0px);
  }
  :global(.tranform__right){
    transform: translate(400px, 0px);
  }
  :global(.block-img img){
    width: 100%;
  }

  /* Algemen page style */

  :global(main span){
    font-size: 1.3rem;
    border: 2px solid black;
    background-color: var(--yellow);
    padding: .25rem;
    margin-bottom: -2px;
}

:global(main h2){
    padding: .25rem;
    margin-bottom: 1rem;
    margin-top: 4px;
    font-size: 1.3rem;
    border: 2px solid black;
}


</style>
