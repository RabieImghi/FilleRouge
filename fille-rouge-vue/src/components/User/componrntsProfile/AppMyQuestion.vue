<template>
    <div class="sectionBadge pe-4">
        <div class="bg-white shadow">
            <section class="cover" >
                <div class="coverInfo row p-3">
                    <div class="profile col-2 d-flex flex-column justify-content-end">
                        <input type="file" class="d-none" id="fileinputProfil">
                        <img @click="uploadsImageProfile" class="cursor-point imageProfil" src="../../../assets/img/user.png" alt="image" width="140px">
                    </div>
                    <div class="infoProfile col p-4">
                        <input type="file" class="d-none" id="fileinput">
                        <div @click="uploadsImageCover" class="fw-bold h1 text-white-md text-end cursor-point">Tap Upload Your <br>
                            Cover Photo</div>
                        <div class="containName infoProfileHiden  m-1 rounded-1 d-flex justify-content-between align-items-center">
                            <btn class="btn btn-dark p-1 h4 mt-2 fw-bold mx-3">Rabie_Imghi</btn>
                            <div class="buttons d-flex gap-4 ">
                                <router-link to='/Settings'> <button class="btn btn-dark m-1">Edit</button></router-link>
                                <button class="Enlightened m-1">Enlightened</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
            <div class="border-bottom container-mf pt-4 pb-4 d-flex justify-content-between align-items-center">
                <span class="fw-bold text-secondary">Home / <span class="text-secondary-500"> RabieImghi</span></span>  
                <button class="btn btn-light shadow fw-bold text-secondary">Show All Your Question</button>
            </div> 
            
            <section class="container-mf mt-4 pt-2">
                <div class="border-bottom pb-4 pt-4" v-for="post in Posts" :key="post.id">
                    <div class="container-mf mobileQuestion row">
                        <div class="imageInfoUser col-1 gap-3 d-flex flex-column justify-content-center align-items-center">
                            <img src="../../../assets/img/user.png" width="80px" alt="User">
                            <div class="raitting d-flex flex-column  justify-content-center align-items-center gap-2">
                                <router-link to="">
                                    <img src="../../../assets/img/raitting.png" width="20px" class="rotate-180" alt="raitin">
                                </router-link>
                                <span class="text-secondary fw-bold">123</span>
                                <router-link to="">
                                    <img src="../../../assets/img/raitting.png" width="20px" alt="raitin">
                                </router-link>
                            </div>
                        </div>
                        <div class="infoQuestion col-11">
                            <div class="userInfo d-flex gap-5 pt-2 pb-3">
                                <span class="color-premary fw-bold">{{post.name}}</span>
                                <button  :class='post.badge'>{{post.badge}}</button>
                                <span class="text-secondary">Asked : <span class="text-danger">{{post.date}}</span></span>
                                <span class="text-secondary">In : <span class="text-danger">{{post.category}}</span></span>
                            </div>
                            <router-link to="/Answers" class="nav-link">
                                <span class=" h3 fw-bold">{{post.question}}</span>
                                <p class="text-secondary pt-3">{{post.questionDetail}}</p>  
                            </router-link>
                            <div class="Tages  d-flex gap-3 align-items-center flex-wrap">
                                <div  v-for="tag in post.tages" :key="tag" 
                                class="user d-flex gap-2 justify-content-between align-items-center flex-wrap border mt-2 p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-tags" viewBox="0 0 16 16">
                                        <path d="M3 2v4.586l7 7L14.586 9l-7-7zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586z"/>
                                        <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1z"/>
                                    </svg>
                                    <div class="infoUser fw-bold d-flex flex-column align-items-center">
                                        <span  class="color-premary">{{tag}}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="statistiqueQuistion shadow d-flex flex-wrap gap-3 justify-content-between align-items-center p-3 mt-3 ">
                                <div class="statiqueInfo d-flex gap-5 align-items-centerlign">
                                    <span class="border bg-white p-1 rounded-1 text-secondary fw-bold d-flex gap-2 flex-wrap align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="pb-1 bi bi-reply" viewBox="0 0 16 16">
                                        <path d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.7 8.7 0 0 0-1.921-.306 7 7 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254l-.042-.028a.147.147 0 0 1 0-.252l.042-.028zM7.8 10.386q.103 0 .223.006c.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96z"/>
                                        </svg>
                                        {{post.answor}} Answers
                                    </span>
                                    <span class="border bg-white p-1 rounded-1 text-secondary fw-bold d-flex gap-2 flex-wrap align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                                        </svg>
                                        {{post.views}} Views
                                    </span>
                                </div>
                                <div class="addAnswere">
                                    <router-link to="/Answers" class="btn btn-primary f-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="me-2 bi bi-patch-plus" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5"/>
                                            <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"/>
                                        </svg>
                                        Answer
                                    </router-link>
                                </div>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </section>
            <footer class="text-center text-secondary border-top mt-4 fw-bold pt-3">
                © Copyright AskMe. All Rights Reserved <br>
                Designed by Rabie Ait Imghi
            </footer>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'AppBadge',
        data(){
            return {
                Posts : [
                    {
                        id:1,
                        name: 'Rabie Imghi',
                        badge: 'Professional',
                        date:' April 19, 2023',
                        category : 'PHP',
                        question: 'Is this statement, “i see him last night” can be understood as “I saw him last night”?',
                        questionDetail: 'Recently heard about Heap which seems pretty cool, but I’m not sure if it would really be valuable, or simply another tool that I need to check. We are not at the point of using HubSpot/Marketo yet so Heap’s free but I’m not sure if it would really be valuable, or simply another tool that I need to check. We are not at the point of using',
                        tages : ["tag1", "tag2", "tag3"],
                        answor : 10,
                        views : 20,
                    },
                    {
                        id:2,
                        name: 'Rabie Imghi',
                        badge: 'Professional',
                        date:' April 19, 2023',
                        category : 'PHP',
                        question: 'How do native speakers tell I’m foreign based on my English alone?',
                        questionDetail: 'Recently heard about Heap which seems pretty cool, but I’m not sure if it would really be valuable, or simply another tool that I need to check. We are not at the point of using HubSpot/Marketo yet so Heap’s free but I’m not sure if it would really be valuable, or simply another tool that I need to check. We are not at the point of using',
                        tages : ["tag1", "tag2", "tag3", "tag4"],
                        answor : 10,
                        views : 20,
                    },
                    {
                        id:3,
                        name: 'Rabie Imghi',
                        badge: 'Professional',
                        date:' April 19, 2023',
                        category : 'PHP',
                        question: 'Why are the British confused about us calling bread rolls “biscuits” when they call bread rolls “puddings”?',
                        questionDetail: 'Recently heard about Heap which seems pretty cool, but I’m not sure if it would really be valuable, or simply another tool that I need to check. We are not at the point of using HubSpot/Marketo yet so Heap’s free but I’m not sure if it would really be valuable, or simply another tool that I need to check. We are not at the point of using',
                        tages : ["tag1", "tag2", "tag3"],
                        answor : 10,
                        views : 20,
                    },
                    {
                        id:4,
                        name: 'Rabie Imghi',
                        badge: 'Professional',
                        date:' April 19, 2023',
                        category : 'PHP',
                        question: 'Google Analytics reads like a seismic chart lately',
                        questionDetail: 'Recently heard about Heap which seems pretty cool, but I’m not sure if it would really be valuable, or simply another tool that I need to check. We are not at the point of using HubSpot/Marketo yet so Heap’s free but I’m not sure if it would really be valuable, or simply another tool that I need to check. We are not at the point of using',
                        tages : ["tag1", "tag2", "tag3"],
                        answor : 10,
                        views : 20,
                    }
                ],
            };
        },
        methods:{
            uploadsImageCover(){
                document.getElementById('fileinput').click();
            },
            uploadsImageProfile(){
                document.getElementById('fileinputProfil').click();

            }
        },
    }
</script>
<style>
    .row{
        width: 100%;
        margin: 0 !important;
    }
    .coverInfo{
        background: rgba(0, 0, 0, 0.476);
    }
    .containName{
        background: rgba(255, 255, 255, 0.341);
    }
    .cover{
        background-image: url("../../../assets/img/cover.jpg");
    }
    .imageProfil{
        border: 6px solid white;
        border-radius: 50%;
    }
    .statique{
        width: 180px;
    }
   .linksosial{
    width: 340px;
   }
</style>