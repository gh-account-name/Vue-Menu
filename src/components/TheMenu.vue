<template>
    <header>
        <nav>
            <div class="bg-dark-color py-2">
                <div class="container d-flex justify-content-between">
                    <div class="logo d-flex align-items-center">
                        <img src="@/assets/img/logo.svg" class="img-fluid" alt="logo">
                    </div>
                    <div class="d-flex align-items-center">
                        <span v-show="!mobile" class="text-color-gray me-4"><i class="bi bi-geo-alt"></i> Москва и область</span>
                        <div :class="{ 'bell-active': messages }" @click="messages = 0" style="transform: rotate(-45deg); cursor: pointer;"><i class="bi bi-bell text-color-white"></i>
                        </div>
                        <div v-show="mobile" @click="mobileNavIsOpen = !mobileNavIsOpen" class="ms-4">
                            <i v-if="!mobileNavIsOpen" class="bi bi-list fs-4 text-color-white"></i>
                            <i v-else class="bi bi-x-lg fs-4 text-color-white"></i>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="nav container" v-show="!mobile">
                <li class="nav-item-custom">
                    <RouterLink :to="{ name: 'home' }">Преимущества Tele2</RouterLink>
                </li>
                <li class="nav-item-custom">
                    <RouterLink :to="{ name: 'about' }">Тарифы</RouterLink>
                </li>
                <li class="nav-item-custom">
                    <RouterLink :to="{ name: '' }">Акции и спецпредложения</RouterLink>
                </li>
                <li class="nav-item-custom">
                    <RouterLink :to="{ name: '' }">Промотариф Tele2</RouterLink>
                </li>
                <li class="nav-item-custom">
                    <RouterLink :to="{ name: '' }">Технология eSIM</RouterLink>
                </li>
                <li class="nav-item-custom">
                    <RouterLink :to="{ name: '' }">Подключение нового абонента</RouterLink>
                </li>
                <li class="nav-item-custom nav-item-placeholder"></li>
            </ul>
            <Transition>
                <div class="mobile-nav-container position-absolute bg-white-color" v-show="mobileNavIsOpen && mobile">
                    <ul class="nav mobile-nav d-flex flex-column container">
                        <li class="nav-item-custom fw-bold px-2 px-sm-0">
                            <RouterLink @click="mobileNavIsOpen = false" :to="{ name: 'home' }">Преимущества Tele2</RouterLink>
                        </li>
                        <li class="nav-item-custom fw-bold px-2 px-sm-0">
                            <RouterLink @click="mobileNavIsOpen = false" :to="{ name: 'about' }">Тарифы</RouterLink>
                        </li>
                        <li class="nav-item-custom fw-bold px-2 px-sm-0">
                            <RouterLink @click="mobileNavIsOpen = false" :to="{ name: '' }">Акции и спецпредложения</RouterLink>
                        </li>
                        <li class="nav-item-custom fw-bold px-2 px-sm-0">
                            <RouterLink @click="mobileNavIsOpen = false" :to="{ name: '' }">Промотариф Tele2</RouterLink>
                        </li>
                        <li class="nav-item-custom fw-bold px-2 px-sm-0">
                            <RouterLink @click="mobileNavIsOpen = false" :to="{ name: '' }">Технология eSIM</RouterLink>
                        </li>
                        <li class="nav-item-custom fw-bold px-2 px-sm-0">
                            <RouterLink @click="mobileNavIsOpen = false" :to="{ name: '' }">Подключение нового абонента</RouterLink>
                        </li>
                    </ul>
                </div>
            </Transition>
        </nav>
    </header>
</template>


<script>
import { RouterLink } from 'vue-router';
import { useScreenStore } from '../stores/screenStore.js'

export default {
    data() {
        return {
            mobileNavIsOpen: false,
            messages: 2,
        };
    },
    computed: {
        mobile() {
            return useScreenStore().mobile;
        }
    },
    components: { RouterLink }
}
</script>

<style>
.nav-item-custom a {
    text-decoration: none;
    color: var(--gray-color);
    padding: 0.875rem 0.563rem;
    display: block;
    transition: 0.3s;
    position: relative;
}

.nav-item-custom a::after,
.nav-item-placeholder::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: var(--gray-color);
    transition: 0.3s;
}

.nav-item-custom:hover a,
.nav-item-custom.active a {
    color: var(--dark-color);
    transition: 0.3s;
}

.nav-item-custom:hover a::after,
.nav-item-custom.active a::after {
    height: 2px;
    background-color: var(--dark-color);
    transition: 0.3s;
}

.nav-item-placeholder {
    position: relative;
    flex: 1;
}

.mobile-nav-container {
    left: 0;
    width: 100%;
}

@keyframes bell {
    0% {
        transform: rotate(-45deg);
    }

    10% {
        transform: rotate(-15deg);
    }

    20% {
        transform: rotate(-45deg);
    }

    80% {
        transform: rotate(-45deg);
    }

    90% {
        transform: rotate(-75deg);
    }

    100% {
        transform: rotate(-45deg);
    }
}

.bell-active {
    animation: bell 1s 1s both infinite;
}

.bell-active>i::after {
    display: block;
    content: "";
    width: 9px;
    height: 9px;
    border-radius: 100%;
    border: 2px solid var(--dark-color);
    background-color: aqua;
    position: absolute;
    left: 50%;
    top: 20%;
}

@media (max-width: 1200px) {
    .nav-item-custom a {
        font-size: 14px;
    }
}

@media (max-width: 992px) {
    .nav-item-custom a {
        font-size: 12px;
        padding: 0.75rem 0.25rem;
    }
}

@media (max-width: 767px) {
    .nav-item-custom a {
        font-size: 16px;
    }
}
</style>