<template id="contacts">

    <div class="fadeIn animated">
        <main class="contacts_wrap">
            <div class="container">
                <div class="breadcrumb_wrap">
                    <ul class="breadcrumb">
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>Login</li>
                    </ul>
                </div>
                <div class="about_us jc_center">
                    <h1 class="about_us-caption">
                        Немного о нас в картинках:
                    </h1>
                </div>
                <div class="gallery_wrap row">
                    <a href="img/crm.png" data-fancybox="images" data-caption="Image 1">
                        <img src="img/crm.png"/>
                    </a>
                    <a href="img/crm2.png" data-fancybox="images" data-caption="Image 2">
                        <img src="img/crm2.png"/>
                    </a>
                    <a href="img/epam.jpg" data-fancybox="images" data-caption="Image 3">
                        <img src="img/epam.jpg"/>
                    </a>
                </div>


            </div>
        </main>
        <div class="about_us jc_center">
            <h1 class="about_us-caption">
                Мы находимся:
            </h1>
        </div>
        <div class="fadeIn animated" id="map"></div>
    </div>



</template>

<style>
    .contacts_wrap{
        margin-bottom: 70px;
    }
    .about_us-caption{
        font-size: 30px;
        font-weight: 400;
    }
</style>


<script>

    require ('@fancyapps/fancybox/dist/jquery.fancybox')

    export default {
        mounted() {
            var uluru = {lat: 49.229, lng: 28.47};
            var map = new window.google.maps.Map(document.getElementById('map'), {
                zoom: 11,
                center: uluru
            });
            var marker = new google.maps.Marker({
                position: uluru,
                map: map
            });




        },
        created(){
            $('[data-fancybox="images"]').fancybox({
                thumbs: {
                    autoStart: true
                },
                buttons: [
                    'close'
                ]
            });
        },
        data() {

            return {

            }

        },
        methods: {

        }
    }

</script>