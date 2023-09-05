<template>
  <section class="problems-solutions">
    <div class="container">
      <h1>{{$t('problemsSection.title')}}</h1>
      <div class="row">
        <div class="column">
          <div class="list">
            <ul>
              <li v-for="(problem, index) in problems" :key="index">{{ problem }}</li>
            </ul>
          </div>
        </div>
        <div class="column">
          <img src="/src/assets/problems.png" alt="Problems and Solutions Image" class="image" />
        </div>
        <div class="column">
          <div class="list">
            <ul>
              <li v-for="(solution, index) in solutions" :key="index">{{ solution }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Problems',
  data() {
    return {
      problems: [
        this.$t('problemsSection.problems.0'),
        this.$t('problemsSection.problems.1'),
        this.$t('problemsSection.problems.2'),
      ],
      solutions: [
        this.$t('problemsSection.solutions.0'),
        this.$t('problemsSection.solutions.1'),
        this.$t('problemsSection.solutions.2'),
      ],
    };
  },
};
</script>

<style scoped>
  .problems-solutions {
    padding: 2rem 0;
    text-align: justify;
  }

  .problems-solutions .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .problems-solutions .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .problems-solutions .column {
    flex-basis: calc(33.33% - 1rem);
    margin: 0.5rem;
  }

  .problems-solutions .list {
    padding: 10% 0;
  }

  .problems-solutions h2 {
    font-size: 1.5em;
    font-weight: 600;
  }

  .problems-solutions ul {
    list-style: none;
  }

  .problems-solutions li {
    padding: 7% 0;
  }

  .problems-solutions img {
    max-width: 100%;
    height: auto;
    margin-top: 4rem;
  }

  @media (max-width: 768px) {
    .problems-solutions .column {
      flex-basis: 100%;
    }
  }
</style>
