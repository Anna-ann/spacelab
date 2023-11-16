<template>
    <section>
        <div class="row">
            <div class="d-flex justify-content-center flex-wrap">
                <div class="col-md-6 col-lg-4">
                    <div class="card d-flex dark-theme">
                        <div class="features">
                            <div class="row">
                                <div class="col-lg-2">
                                    <div class="card-image">
                                        <img src="/src/assets/space3d.png" class="card-img-fluid" alt="Space3D">
                                    </div>
                                </div>
                                <div class="col-lg-10">
                                    <div class="card-title">
                                        <h3>Space3D</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="card-text">
                                    <p>{{ $t('hero.cards.0.text') }}</p>
                                </div>
                                <router-link to="/space3d">
                                    <button class="btn btn-primary">
                                        <p>{{ $t('hero.cards.1.buttonText') }}</p>
                                    </button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <div class="card d-flex dark-theme">
                        <div class="features">
                            <div class="row">
                                <div class="col-lg-2">
                                    <div class="card-image">
                                        <img src="/src/assets/spaceiot.png" class="card-img-fluid" alt="SpaceIoT">
                                    </div>
                                </div>
                                <div class="col-lg-10">
                                    <div class="card-title">
                                        <h3>SpaceIoT</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="card-text">
                                    <p>{{ $t('hero.cards.1.text') }}</p>
                                </div>
                                <router-link to="/spaceiot">
                                    <button class="btn btn-primary">
                                        <p>{{ $t('hero.cards.1.buttonText') }}</p>
                                    </button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <div class="card d-flex dark-theme">
                        <div class="features">
                            <div class="row">
                                <div class="col-lg-2">
                                    <div class="card-image">
                                        <img src="/src/assets/spacecubs.png" class="card-img-fluid" alt="SpaceCUBS">
                                    </div>
                                </div>
                                <div class="col-lg-10">
                                    <div class="card-title">
                                        <h3>SpaceCUBS</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="card-text">
                                    <p>{{ $t('hero.cards.2.text') }}</p>
                                </div>
                                <router-link to="/spacecubs">
                                    <button class="btn btn-primary">
                                        <p>{{ $t('hero.cards.1.buttonText') }}</p>
                                    </button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
export default {
    props: {
        imageSrc: String,
        imageAlt: String,
        title: String,
        text: String,
        linkTo: String,
        buttonText: String,
    },
};
</script>
  
<style scoped>
.card {
    background-color: var(--card-bg-color) !important;
    color: var(--text-color) !important;
    text-align: justify;
    color: #FAFAFA;
    border: none;
    display: flex;
}

.card:hover {
    text-align: justify;
    color: #FF6B00;
}

.card img {
    width: 50px;
}

.card-image {
    margin-right: 15px;
}

.card-title {
    font-size: 1.5em;
}

.card-text {
    margin: 10% 0;

}
</style>
  