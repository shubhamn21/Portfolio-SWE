<template>
  <div id='socials' class='section is-size-3'>
    <a href='https://github.com/shubhamn21' target='_blank' rel='noopener'>
      <ul>
        <i class='fab fa-github-square mb-4'></i>
      </ul>
    </a>
    <a href='https://www.linkedin.com/in/shubham-nimbalkar-81983215a/' target='_blank' rel='noopener'>
      <ul>
        <i class='fab fa-linkedin mb-4'></i>
      </ul>
    </a>
<!--    <a href='https://www.instagram.com/shubham_n21/' target='_blank' rel='noopener'>-->
<!--      <ul>-->
<!--        <i class="fab fa-instagram-square mb-4"></i>-->
<!--      </ul>-->
<!--    </a>-->
    <a href='https://leetcode.com/srnimbal/' target='_blank' rel='noopener'>
      <ul>
        <i class='fab fa-hackerrank mb-4'></i>
      </ul>
    </a>
    <div class='vertical'></div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Socials extends Vue {
}
</script>

<style scoped>
#socials {
  position: fixed;
  bottom: 0;
  left: 0px;
}

.vertical {
  border-left: 4px solid #202020;
  height: 200px;
  position: absolute;
  left: 50%;
}

i:hover {
  color: #908d90;
}
</style>
