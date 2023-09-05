<template>
  <section class="team" id="team">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <h1>{{$t('team.title')}}</h1>

          <div class="d-flex justify-content-center flex-wrap">
            <div class="card mb-5 mx-3" v-for="(card, index) in cards" :key="index" style="width: 13.5rem;">
              <img :src="getImageUrl(index + 1)" class="card-img-fluid" alt="...">
              <div class="card-body">
                <h3 class="card-title">{{$t(`team.cards.${index}.title`)}}</h3>
                <p class="card-text">{{$t(`team.cards.${index}.text`)}}</p>
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
  name: 'Team',
  data() {
    return {
      cards: [
        {
          title: 'Arman Bekembayev',
        },
        {
          title: 'Alexander Bychkov',
        },
        {
          title: 'Dauren Aubakirov',
        },
        {
          title: 'Sayat Akhmedzhanov',
        },
      ],
    };
  },
  methods: {
    getImageUrl(index) {
      return `/src/assets/team/${index}.png`;
    },
  },
};
</script>

<style>
.team img {
  width: 90%;
}
</style>
