<template>
  <div class="bar">
    <img
      class="title-bar"
      referrerpolicy="no-referrer"
      src="../assets/backbar.png"
    />
    <div class="title-font">
      <slot name="value"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TitleBar",

  data() {
    return { height: String };
  },
  computed: {},
  mounted() {},
  methods: {
    initMap() {},
  },
};
</script>

<style lang="scss" scoped>
.bar {
  margin-bottom: 5px;
  .title-bar {
    width: 350px;
    height: 26px;
  }

  .title-font {
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    width: 350px;
    height: 36px;
    background: url(../assets/bar.png) 100% no-repeat;
    background-size: 100% 100%;

    .name {
      width: 72px;
      height: 18px;
      color: rgba(234, 249, 254, 1);
      font-size: 18px;
      font-weight: 700;
      line-height: 27px;
      margin: 8px 0 0 20px;
    }
    .value {
      width: 65px;
      height: 16px;
      color: rgba(234, 234, 234, 1);
      font-size: 16px;
      line-height: 24px;
      margin: 10px 0 0 18px;
    }
    .btn {
      background-color: rgba(255, 255, 255, 1);
      border-radius: 2px;
      height: 18px;
      width: 40px;
      margin: 13px 10px 0 125px;
      .font {
        width: 28px;
        height: 14px;
        overflow-wrap: break-word;
        color: rgba(0, 145, 255, 1);
        font-size: 14px;
        line-height: 21px;
        margin: 2px 0 0 6px;
      }
    }
  }
}
</style>
