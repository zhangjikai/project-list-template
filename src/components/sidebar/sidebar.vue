<template>


    <nav class="menu menu-vertical" :class="{ 'menu-collapse': isCollapse, 'menu-expand':!isCollapse}">

        <div class="header">
            <i class="fa fa-bars" aria-hidden="true" @click="collapse"></i>
        </div>

        <div class="side-outer" id="side-outer">
            <div class="category">
                <div class="title">
                    <i class="fa fa-inbox" aria-hidden="true"></i>
                    <span>Java</span>

                </div>

                <div class="content">
                    <div class="item"><a>堆排序演示程序</a></div>
                    <div class="item"><a>连连看</a></div>
                </div>


            </div>

            <div class="category">
                <div class="title">
                    <i class="fa fa-inbox" aria-hidden="true"></i>
                    <span>HTML5 & JS</span>

                </div>
                <div class="item">
                    <!--<i class="fa fa-inbox" aria-hidden="true"></i>-->
                    <a>基于Three.js 框架的 3D 射击游戏</a>
                </div>
                <div class="item"><a>Markdown 在线阅读器</a></div>

            </div>

            <div class="category">
                <div class="title">
                    <i class="fa fa-inbox" aria-hidden="true"></i>
                    <span>HTML5 & JS</span>

                </div>
                <div class="item">
                    <!--<i class="fa fa-inbox" aria-hidden="true"></i>-->
                    <a>基于Three.js 框架的 3D 射击游戏</a>
                </div>
                <div class="item"><a>Markdown 在线阅读器</a></div>

            </div>

            <div class="category">
                <div class="title">
                    <i class="fa fa-inbox" aria-hidden="true"></i>
                    <span>HTML5 & JS</span>

                </div>
                <div class="item">
                    <!--<i class="fa fa-inbox" aria-hidden="true"></i>-->
                    <a>基于Three.js 框架的 3D 射击游戏</a>
                </div>
                <div class="item"><a>Markdown 在线阅读器</a></div>

            </div>

            <div class="category">
                <div class="title">
                    <i class="fa fa-inbox" aria-hidden="true"></i>
                    <span>HTML5 & JS</span>

                </div>
                <div class="item">
                    <!--<i class="fa fa-inbox" aria-hidden="true"></i>-->
                    <a>基于Three.js 框架的 3D 射击游戏</a>
                </div>
                <div class="item"><a>Markdown 在线阅读器</a></div>

            </div>

            <div class="category">
                <div class="title">
                    <i class="fa fa-inbox" aria-hidden="true"></i>
                    <span>HTML5 & JS</span>

                </div>
                <div class="item">
                    <!--<i class="fa fa-inbox" aria-hidden="true"></i>-->
                    <a>基于Three.js 框架的 3D 射击游戏</a>
                </div>
                <div class="item"><a>Markdown 在线阅读器</a></div>

            </div>

            <!--<div class="category">
                <div class="title">
                    <i class="fa fa-inbox" aria-hidden="true"></i>
                    <span>HTML5 & JS</span>

                </div>
                <div class="item">
                    &lt;!&ndash;<i class="fa fa-inbox" aria-hidden="true"></i>&ndash;&gt;
                    <a>基于Three.js 框架的 3D 射击游戏</a>
                </div>
                <div class="item"><a>Markdown 在线阅读器</a></div>

            </div>

            <div class="category">
                <div class="title">
                    <i class="fa fa-inbox" aria-hidden="true"></i>
                    <span>HTML5 & JS</span>

                </div>
                <div class="item">
                    &lt;!&ndash;<i class="fa fa-inbox" aria-hidden="true"></i>&ndash;&gt;
                    <a>基于Three.js 框架的 3D 射击游戏</a>
                </div>
                <div class="item"><a>Markdown 在线阅读器</a></div>

            </div>


            <div class="category">
                <div class="title">
                    <i class="fa fa-inbox" aria-hidden="true"></i>
                    <span>HTML5 & JS</span>

                </div>
                <div class="item">
                    &lt;!&ndash;<i class="fa fa-inbox" aria-hidden="true"></i>&ndash;&gt;
                    <a>基于Three.js 框架的 3D 射击游戏</a>
                </div>
                <div class="item"><a>Markdown 在线阅读器</a></div>

            </div>


            <div class="category">
                <div class="title">
                    <i class="fa fa-inbox" aria-hidden="true"></i>
                    <span>HTML5 & JS</span>

                </div>
                <div class="item">
                    &lt;!&ndash;<i class="fa fa-inbox" aria-hidden="true"></i>&ndash;&gt;
                    <a>基于Three.js 框架的 3D 射击游戏</a>
                </div>
                <div class="item"><a>Markdown 在线阅读器</a></div>

            </div>

            <div class="category">
                <div class="title">
                    <i class="fa fa-inbox" aria-hidden="true"></i>
                    <span>HTML5 & JS</span>

                </div>
                <div class="item">
                    &lt;!&ndash;<i class="fa fa-inbox" aria-hidden="true"></i>&ndash;&gt;
                    <a>基于Three.js 框架的 3D 射击游戏</a>
                </div>
                <div class="item"><a>Markdown 在线阅读器</a></div>

            </div>-->


        </div>
    </nav>

</template>

<script>
    export default {
        data: function () {
            return {
                isCollapse: false
            }
        },
        methods: {
            collapse: function () {
                var vm = this;
                var menuContent = document.querySelector("#side-outer");
                if (!vm.isCollapse) {

                    vm.isCollapse = !vm.isCollapse;
                    setTimeout(function () {
                        menuContent.style.display = "none";
                    }, 350);

                } else {
                    vm.isCollapse = !vm.isCollapse;
                    menuContent.style.display = "block";
                }

                vm.$emit('collapse_click', vm.isCollapse);
            }
        }
    }
</script>

<style lang="less">
    @import "sidebar.less";
</style>