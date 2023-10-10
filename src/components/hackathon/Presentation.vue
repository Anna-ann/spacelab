<template>
    <div>
        <h1>Our Solution Presentation</h1>
        <div class="presentation-container">
            <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vQNvUhWlS6zLM1SGtytvVIRCr0HQMXewcdqWkfCgwsn4aOMsQNs0INNT-JsC1G9o0SNdnqZxQmwdFNA/embed?start=false&loop=false&delayms=3000"
                frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Presentation',
};
</script>
  
<style scoped>
h1 {
    padding-top: 2rem;
    text-align: center;
}

.presentation-container {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
    max-width: 100%;
    margin: 0 auto;
}

.presentation-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 768px) {
    h1 {
        font-size: 1.5rem;
    }
}
</style>
  