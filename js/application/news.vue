<template>
    <div class="container fadeIn animated">

        <div class="breadcrumb_wrap">
            <ul class="breadcrumb">
                <li>
                    <a href="#">News</a>
                </li>
                <li>Login</li>
            </ul>
        </div>
        <div class="blog-card">
            <div class="photo photo1"></div>
            <ul class="details">
                <li class="author"><a href="#">Yulii Tarutin</a></li>
                <li class="date">23.01.2017</li>
                <li class="tags">
                    <ul>
                        <li><a href="#">Learn</a></li>
                        <li><a href="#">Code</a></li>
                        <li><a href="#">HTML</a></li>
                        <li><a href="#">CSS</a></li>
                    </ul>
                </li>
            </ul>
            <div class="description">
                <h1>Learning to Code</h1>
                <h2>Opening a door to the future</h2>
                <p class="summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                <a href="#">Read More</a>
            </div>
        </div>
        <div class="blog-card alt">
            <div class="photo photo2"></div>
            <ul class="details">
                <li class="author"><a href="#">Adam Colton</a></li>
                <li class="date">23.01.2017</li>
                <li class="tags">
                    <ul>
                        <li><a href="#">Learn</a></li>
                        <li><a href="#">Code</a></li>
                        <li><a href="#">JavaScript</a></li>
                    </ul>
                </li>
            </ul>
            <div class="description">
                <h1>Mastering the Language</h1>
                <h2>Java is not the same as JavaScript</h2>
                <p class="summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                <a href="#">Read More</a>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    $green: #75D13B;
    $grey: #e9e9e9;

    @mixin transition($dur, $prop: all) {
        transition: $prop $dur ease;
        -webkit-transition: $prop $dur ease;
    }

    @mixin bgImg($url) {
        background: url($url) center no-repeat;
        background-size: cover;
    }


    .blog-card {
        @include transition(0.3s, height);
        max-width: 370px;
        background: #fff;
        border-radius: 3px;
        box-shadow: 0 3px 7px -3px rgba(0, 0, 0, 0.3);
        margin: 0 auto 1.6%;
        overflow: hidden;
        position: relative;
        font-size: 14px;
        line-height: 1.45em;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        &:hover {
            .details {
                left: 0;
            }

            &.alt {
                .details {
                    right: 0;
                }
            }
        }

        &.alt {
            .details {
                right: -100%;
                left: inherit;
            }
        }

        .photo {
            height: 200px;
            position: relative;

            &.photo1 {
                @include bgImg("http://i62.tinypic.com/34oq4o0.jpg");
            }

            &.photo2 {
                @include bgImg("http://i60.tinypic.com/xeiv79.jpg");
            }
        }

        .details {
            @include transition(0.3s);

            background: rgba(0, 0, 0, 0.6);
            box-sizing: border-box;
            color: #fff;
            list-style: none;
            margin: 0;
            padding: 10px 15px;
            height: 200px;

            position: absolute;
            top: 0;
            left: -100%;

            > li {
                padding: 3px 0;
            }

            li:before, .tags ul:before {
                font-family: FontAwesome;
                margin-right: 10px;
                vertical-align: middle;
            }

            .author:before {
                content: "\f007";
            }

            .date:before {
                content: "\f133";
            }

            .tags {
                ul {
                    &:before {
                        content: "\f02b";
                    }

                    list-style: none;
                    margin: 0;
                    padding: 0;
                }

                li {
                    display: inline-block;
                    margin-right: 3px;
                }
            }

            a {
                color: inherit;
                border-bottom: 1px dotted;

                &:hover {
                    color: $green;
                }
            }
        }

        .description {
            padding: 10px;
            box-sizing: border-box;
            position: relative;

            h1 {
                line-height: 1em;
                margin: 0 0 10px 0;
            }

            h2 {
                color: $grey / 1.5;
                line-height: 1.2em;
                text-transform: uppercase;
                font-size: 1em;
                font-weight: 400;
                margin: 1.2% 0;
            }

            p {
                position: relative;
                margin: 0;
                padding-top: 20px;

                &:after {
                    content: "";
                    background: $green;
                    height: 6px;
                    width: 40px;

                    position: absolute;
                    top: 6px;
                    left: 0;
                }
            }

            a {
                color: $green;
                margin-bottom: 10px;
                float: right;

                &:after {
                    @include transition(0.3s);

                    content: "\f061";
                    margin-left: -10px;
                    opacity: 0;
                    vertical-align: middle;
                }

                &:hover:after {
                    margin-left: 5px;
                    opacity: 1;
                }
            }
        }
    }

    @media screen and (min-width: 600px) {
        .blog-card {
            height: 200px;
            max-width: 600px;

            &:hover {
                .photo {
                    transform: rotate(5deg) scale(1.3);
                }

                &.alt .photo {
                    transform: rotate(-5deg) scale(1.3);
                }
            }

            &.alt {
                .details {
                    padding-left: 30px;
                }

                .description {
                    float: right;

                    &:before {
                        transform: skewX(5deg);
                        right: -15px;
                        left: inherit;
                    }
                }

                .photo {
                    float: right;
                }
            }

            .photo {
                @include transition(0.5s);

                float: left;
                height: 100%;
                width: 40%;
            }

            .details {
                width: 40%;
            }

            .description {
                float: left;
                width: 60%;
                z-index: 0;

                &:before {
                    transform: skewX(-5deg);
                    content: "";
                    background: #fff;
                    width: 100%;
                    z-index: -1;

                    position: absolute;
                    left: -15px;
                    top: 0;
                    bottom: 0;
                }
            }
        }
    }
</style>


<script>


    export default {
        mounted() {


        },
        created() {


        },
        data() {

            return {

            }

        },
        methods: {}
    }
</script>