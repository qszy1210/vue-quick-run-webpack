<template>
  <div>this is app base, name is {{ name }}


    <HasSlot>
      <div slot="aaa" >aaaaa</div>
    </HasSlot>
  </div>

</template>

<script>
import HasSlot from './components/HasSlot';
export default {
  components: {
    HasSlot
  },
  data() {
    return {
      name: "vue start",
    };
  },
};
</script>
