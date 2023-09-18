<template>
  <section class="team" id="team">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h1>{{$t('team.title')}}</h1>

          <div class="d-flex justify-content-center flex-wrap">
            <div class="card mb-5 mx-3" style="width: 13.5rem;">
              <img src="/src/assets/team/1.png" class="card-img-fluid" alt="...">
              <div class="card-body">
                <h3 class="card-title">{{$t('team.cards.0.title')}}</h3>
                <p class="card-text">{{$t('team.cards.0.text')}}</p>
              </div>
            </div>

            <div class="card mb-5 mx-3" style="width: 13.5rem;">
              <img src="/src/assets/team/2.png" class="card-img-fluid" alt="...">
              <div class="card-body">
                <h3 class="card-title">{{$t('team.cards.1.title')}}</h3>
                <p class="card-text">{{$t('team.cards.1.text')}}</p>
              </div>
            </div>

            <div class="card mb-5 mx-3" style="width: 13.5rem;">
              <img src="/src/assets/team/3.png" class="card-img-fluid" alt="...">
              <div class="card-body">
                <h3 class="card-title">{{$t('team.cards.2.title')}}</h3>
                <p class="card-text">{{$t('team.cards.2.text')}}</p>
              </div>
            </div>

            <div class="card mb-5 mx-3" style="width: 13.5rem;">
              <img src="/src/assets/team/4.png" class="card-img-fluid" alt="...">
              <div class="card-body">
                <h3 class="card-title">{{$t('team.cards.3.title')}}</h3>
                <p class="card-text">{{$t('team.cards.3.text')}}</p>
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
  name: 'Team'
};
</script>

<style>
.team img {
  width: 90%;
}
</style>
