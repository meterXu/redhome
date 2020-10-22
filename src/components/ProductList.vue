<template>
    <div class="products-container bg">
        <ul id="products" class="products">
            <li v-for="item in items" :key="item.url">
                <a :href="item.url" target="_blank">{{item.title}}</a>
            </li>
        </ul>
        <div class="refresh" @click="refresh" title="换张背景"></div>
    </div>
</template>

<script>
    export default {
        name: "ProductList",
        data() {
            return {
                items: this.$config.items,
                canRefresh: true
            };
        },
        methods: {
            refresh() {
                if(this.canRefresh){
                    this.canRefresh = false
                    this.$parent.$refs.wallpaper.refresh()
                    const that = this
                    setTimeout(() => {
                        that.canRefresh = true
                    }, 1000)
                }
            }
        }
    };
</script>

<style scoped>
    a {
        text-decoration-line: none;
        color: #e63d3d;
    }

    .products-container {
        font-family: 微软雅黑;
        font-size: 62.5%;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        overflow: auto;
    }

    .bg {
        background-repeat: no-repeat;
        background-position-x: center;
        background-position-y: center;
        background-size: cover;
        opacity: 0.8;
    }

    .notFoundBg {
        background-color: #333333;
    }

    .products {
        list-style-type: none;
        margin: 0 auto;
        width: 80%;
        padding: 0;
        vertical-align: middle;
        text-align: center;
        top: 20%;
        position: relative;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }

    .products:after {
        content: ".";
        clear: both;
        display: block;
        height: 0;
        overflow: hidden;
        visibility: hidden;
    }

    .products li {
        width: 215px;
        height: 160px;
        line-height: 160px;
        font-size: 3em;
        font-weight: normal;
        color: #222222;
        background: rgba(232, 232, 232, 0.2);
        box-shadow: 0px 1px 2px #c3bfbf;
        text-shadow: 0px 1px 0px #333;
        cursor: pointer;
        margin-left: 15px;
        margin-right: 15px;
        margin-bottom: 20px;
        user-select: none;
    }

    .products li a {
        height: 100%;
        width: 100%;
        display: block;
        color: #41ffe5;
        text-decoration-line: none;
    }

    .products li:hover {
        background: rgba(44, 118, 211, 0.2);
    }

    .products li:hover a {
        color: #f8fff7;
        text-shadow: 0px 1px 0px #333;
    }

    .products li:active {
        background: rgba(248, 61, 28, 0.2);
    }

    .products li:active a {
        color: #222222;
        text-shadow: 0px 1px 0px #fff;
    }

    .refresh {
        width: 40px;
        height: 40px;
        position: fixed;
        background: url(../assets/refresh.svg) no-repeat center center;
        background-size: 80%;
        right: 20px;
        bottom: 20px;
        cursor: pointer;
        border-radius: 20px;
        background-color: rgba(232, 232, 232, 0.2);
    }

    .refresh:hover {
        width: 40px;
        height: 40px;
        position: fixed;
        background: url(../assets/refresh_hover.svg) no-repeat center center;
        background-size: 80%;
        right: 20px;
        bottom: 20px;
        cursor: pointer;
        border-radius: 20px;
        background-color: rgba(44, 118, 211, 0.2);
    }

    @media screen and (max-width: 375px) {
        .products {
            justify-content: center;
            width: 90%;
        }

        .products li {
            width: 100%;
        }
    }
</style>
