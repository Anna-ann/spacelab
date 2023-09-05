<template>
  <section class="problems-solutions">
    <div class="container">
      <h1>{{$t('problemsSection.title')}}</h1>
      <div class="row">
        <div class="column">
          <div class="problem-list">
            <ul>
              <li>{{$t('problemsSection.problems.0')}}</li>
              <li>{{$t('problemsSection.problems.1')}}</li>
              <li>{{$t('problemsSection.problems.2')}}</li>
            </ul>
          </div>
        </div>
        <img src="/src/assets/problems.png" alt="Problems and Solutions Image" class="image" />
        <div class="column">
          <div class="solution-list">
            <ul>
              <li>{{$t('problemsSection.solutions.0')}}</li>
              <li>{{$t('problemsSection.solutions.1')}}</li>
              <li>{{$t('problemsSection.solutions.2')}}</li>
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
    justify-content: space-around;
  }

  .problems-solutions .column {
    flex: 1; 
  }

  .problem-list ul,
  .solution-list ul {
    list-style: none;
    padding: 10% 0;
  }

  .problem-list li,
  .solution-list li {
    padding: 7% 0;
  }

  .problems-solutions img {
    max-width: 40%;
    height: 100%;
    margin-top: 2rem;
  }
</style>
