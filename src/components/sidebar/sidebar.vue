<template>


    <nav class="menu menu-vertical" :class="{ 'menu-collapse': isCollapse, 'menu-expand':!isCollapse}" >

        <div class="header">
            <i class="fa fa-bars" aria-hidden="true" @click="collapse"></i>
        </div>
        {{bus}}

        <div class="side-outer" id="side-outer">
            <div v-if="showByCategory">
                <div class="category" v-for="(values, key) in categoryMap">
                    <div class="title">
                        <i class="fa fa-inbox" aria-hidden="true"></i>
                        <span>{{key}}</span>
                    </div>

                    <div v-if="values.length != 0" class="content">
                        <div class="item" v-for="v in values"><a :href="'#project-' + v.id" data-scroll>{{v.name}}</a>
                        </div>

                    </div>
                </div>
            </div>
            <div v-else>
                <div class="category">
                    <div v-if="projects.length != 0" class="content ">
                        <div class="item extra-space" v-for="p in projects"><a :href="'#project-' + p.id" data-scroll>{{p.name}}</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import eventHub from "../event/EventHub"

    export default {
        props: ["categoryMap", "showByCategory", "projects", "bus"],
        created: function() {
            var vm = this;
            eventHub.$on('collapseSign', function(isCollapse){
                if(!isCollapse) {
                    vm.collapse();
                }
            });
        },
        data: function () {
            return {
                isCollapse: true
            }
        },
        methods: {
            collapse: function () {
                let vm = this;
                let menuContent = document.querySelector("#side-outer");
                if (!vm.isCollapse) {
                    vm.isCollapse = !vm.isCollapse;
                    setTimeout(function () {
                        menuContent.style.display = "none";
                    }, 350);

                } else {
                    vm.isCollapse = !vm.isCollapse;
                    //console.log(222);
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