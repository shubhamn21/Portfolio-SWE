<template>
  <div id='about' class='section mb-6'>
    <p class='title'>About Me</p>
    <hr>
    <div class='columns'>
      <div class='column'>
        <p class='mb-5'>Hello! My name is Shubham Nimbalkar from California, USA and I am an aspiring software engineer. I have been
          extremely interested in web development since the start of high school, when I would create websites for friends and
          family, as well as learning how client and server applications function.</p>
        <p class='mt-5 mb-5'>My primary focus involves creating and developing end to end products inclined towards data science. Currently backend, devops and data science are my favorite areas to work in.</p>
        <p>My preferred technologies include:</p>
        <div id='technologies'>
          <p class='mt-4'>
            <i class='far fa-file-code'></i>
            <i class='fas fa-angle-right'></i>
            Python
            <i class='fas fa-angle-right mx-1'></i>
            Swift
            <i class='fas fa-angle-right mx-1'></i>
            Java
            <i class='fas fa-angle-right mx-1'></i>
            C++
          </p>
          <p class='mt-3'>
            <i class='fab fa-medapps'></i>
            <i class='fas fa-angle-right'></i>
            AWS/GCP/Linux
            <i class='fas fa-angle-right mx-1'></i>
            Kubernetes
            <i class='fas fa-angle-right mx-1'></i>
            Docker
            <i class='fas fa-angle-right mx-1'></i>
            Git
          </p>
          <p class='mt-3'>
            <i class='fas fa-database'></i>
            <i class='fas fa-angle-right'></i>
            MongoDB, MySQL, Postgres
            <i class='fas fa-angle-right mx-1'></i>
            Elastic, Splunk
            <i class='fas fa-angle-right mx-1'></i>
            Superset, Kibana
          </p>
        </div>
      </div>
      <div class='column has-text-centered mb-6'>
        <div class='img-container'>
          <img src='/mwp.jpg' alt='Profile Image' />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class About extends Vue {
}
</script>

<style scoped>
i {
  margin-right: 5px;
}

img {
  width: auto;
  border-radius: 12px;
}

#technologies {
  font-size: 14px;
}

@media screen and (max-width: 768px) {
  img {
    margin-top: 20px;
  }
}
</style>
