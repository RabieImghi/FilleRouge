<template>
    <div class="asideBare">
        <aside class="bg-white pt-4" id="aside">
            <section class="addQuesion container-mf border-bottom pb-3" v-if="tokenExists">
                <router-link to="/user/AskQuesion">
                  <button  class="btn btn-primary w-100 fw-bold f-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="me-2 bi bi-patch-question" viewBox="0 0 16 16">
                        <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.7 1.7 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745"/>
                        <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"/>
                        <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0"/>
                    </svg>
                    Ask A question
                </button>  
                </router-link>
            </section>
            <section class="countStatique container-mf pt-4">
                <div class="bg-white asideHome">
                    <div class="row">
                        <div class="col-6 pt-4 pb-4 border">
                            <div class="p-2 contentColumn text-secondary fw-bold d-flex flex-column gap-2 text-center border-left border-primary ">
                                <span class="text-primary">Question</span>  1000
                            </div>
                        </div>
                        <div class="col-6 pt-4 pb-4 border ">
                            <div class="p-2 contentColumn text-secondary fw-bold d-flex flex-column gap-2 text-center border-left border-danger">
                                <span class="text-danger">Answers</span>  1999
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6 pt-4 pb-4 border ">
                            <div class="p-2 contentColumn text-secondary fw-bold d-flex flex-column gap-2 text-center border-left border-success">
                                <span class="text-success">Best Answers</span>  783
                            </div>
                        </div>
                        <div class="col-6 pt-4 pb-4 border ">
                            <div class="p-2 contentColumn text-secondary fw-bold d-flex flex-column gap-2 text-center border-left border-warning">
                                <span class="text-warning">Users</span>  232
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="topMembers container-mf border-top mt-4 pt-4">
                <div class="headerMembers d-flex gap-3 align-items-end">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="pb-2 bi bi-people" viewBox="0 0 16 16">
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                    </svg>
                    <span class="h3 text-color-primary fw-bold">Top Users</span>   
                </div>
                <div class="BodMembers px-2 mt-3">
                    <div v-for="user in TopUsers" :key="user.id" 
                        class="user d-flex justify-content-between align-items-center flex-wrap border mt-2 p-2">
                        <img src="../../assets/img/user.png" width="60px" alt="">
                        <div class="infoUser fw-bold d-flex flex-column align-items-center">
                            <span class="color-premary">{{user.name}}</span>
                            <span class="text-secondary">{{ user.question }} Question</span>
                        </div>
                        <button  :class="user.level">{{user.level}}</button>
                    </div>
                </div>
                
            </section>
            <section class="topMembers container-mf border-top mt-4 pt-4 mb-">
                <div class="headerMembers d-flex gap-3 align-items-end">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="pb-2 bi bi-tags" viewBox="0 0 16 16">
                        <path d="M3 2v4.586l7 7L14.586 9l-7-7zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586z"/>
                        <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1z"/>
                    </svg>
                    <span class="h3 text-color-primary fw-bold">Trending Tages</span>   
                </div>
                <div v-for="tage in TopTages" :key="tage.id" 
                    class="BodMembers d-flex flex-wrap justify-content-between px-2 mt-3">
                    <div class="user d-flex gap-2 justify-content-between align-items-center flex-wrap border mt-2 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-tags-fill" viewBox="0 0 16 16">
                        <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                        <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043z"/>
                        </svg>
                        <div class="infoUser fw-bold d-flex flex-column align-items-center">
                            <span class="color-premary">{{tage.name}}</span>
                        </div>
                    </div>
                </div>
                
            </section>
        </aside>
    </div>
</template>
<script>
    export default{
        name: 'AppAside',
        data(){
            return{
                TopUsers: [
                    {id:1,name:"Rabie",question:9,level:"Explainer"},
                    {id:2,name:"Hamza",question:21,level:"Professional"},
                    {id:3,name:"Khalid",question:43,level:"Beginner"},
                    {id:4,name:"Kamal",question:43,level:"Enlightened"},
                ],
                TopTages: [
                    {id:1,name:"VueJs"},
                    {id:2,name:"LARAVEL"},
                    {id:3,name:"DEVELOPMMENT"},
                    {id:4,name:"Langage"},
                ],
            }
                
        },
        computed: {
            tokenExists() {
                return localStorage.getItem('token');
            },
        },
    }
</script>
<style>
    aside{
        height: calc(100vh - 80px);
        overflow-y: scroll;
        box-shadow: 5px 10px 20px rgba(128, 128, 128, 0.245);
        transition: transform 0.3s ease;
    }
    #aside{
        width: 100% !important;
    }
    aside::-webkit-scrollbar{
        display: none;
    }
    .col-6{
        padding-left: 0px !important;
        padding-right: 0px !important;
    }
    .contentColumn{
        border-left: 4px solid ;
    }
    .togleButton{
        display: none !important;
        z-index: 1 !important;
        position: absolute;
        top: 80px;
        right: 0px;
    }
    @media screen and (max-width: 1250px) {
        .togleButton{
            display: flex !important;
        }
        aside {
        transform: translateX(-100%);
        }
    }
</style>