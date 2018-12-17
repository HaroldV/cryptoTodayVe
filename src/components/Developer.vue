<template>
    <div class="mdl-cell mdl-cell--6-col">
        <div class="demo-card-square mdl-card mdl-shadow--2dp">
            <div class="mdl-card__title mdl-card--expand" v-bind:style="{ backgroundImage: 'url(' + dev.img + ')' }">
                <h2 class="mdl-card__title-text">{{dev.name}}</h2>
            </div>
            <div class="mdl-card__supporting-text">
                <strong>{{dev.headline}}</strong>
            </div>
            <div class="mdl-card__actions mdl-card--border">
            <span v-for="link in dev.socialLinks">
                <a v-bind:href="link.url" target="_blank" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                    <i v-bind:class="link.icon"></i>
                </a>
            </span>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Developer",
        props: {
            dev: {  type: Object  }
        }
    }
</script>

<style scoped>
    demo-card-square.mdl-card {
        width: 320px;
        height: 320px;
    }
    .demo-card-square > .mdl-card__title {
        color: #efd500;
        background: bottom right 15% no-repeat #1e8600;
    }
    .demo-card-square > .mdl-button  {
        display: inline-block;
    }
    
    .fab {
        color: #1e8600;
        font-size: 20px;
    }
</style>