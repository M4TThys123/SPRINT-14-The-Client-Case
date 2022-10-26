<script>
    // const navButton = root.getElementById("nav__button")
    // const nav = root.querySelector("nav")

    // function hideNav(){
    //     nav.classList.toggle("none")
    //     console.log('werkt')
    // }

    // navButton.addEventListener('click', hideNav)

</script>

<header>
    <div class="nav__button--wrapper">
        <button class="nav__button" id="nav__button">
            <i class='bx bx-menu'></i>
            <div class="circle">22</div>
        </button>
    </div>
</header>


<style>
    header{
        background-color: var(--geel);
        height: 3.5em;
        padding: .75em;
        display: flex;
        align-items: center;
    }
    .nav__button--wrapper{
        position: relative;
    }
    .nav__button{
        font-size: 2.5em;   
    }
    .nav__button:hover{

    }
    .circle{
        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        bottom: 12px;
        left: 21.5px;
        
        font-size: 12px;
        font-weight: bold;
        width: 20px;
        height: 20px;

        background-color: #DB504C;
        color: #FAF0D7;
        box-shadow: 	0 0 0 4px var(--geel); 
   	    border-radius: 50%;
    }

    :global(.none){
        display: none;
    }
</style>

