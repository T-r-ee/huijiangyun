<template>
  <div :class="{'item':true ,'padding':set}">
    <div class="top">
      <slot name="top"></slot>
    </div>
    <div class="bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlockComponent",
  props: { set: Boolean },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    initMap() {},
  },
};
</script>

<style lang="scss" scoped>
.item {
  color: white;
  margin: 0 5px 16px;
  padding: 19px 10px 0px;
  box-sizing: border-box;
  background: url(../assets/titleback.png) 100% no-repeat;
  background-size: 100% 100%;
  .top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 13px;
    box-sizing: border-box;
    .video {
      width: 22px;
      height: 16px;
    }
    .signal {
      width: 22px;
      height: 22px;
      margin-left: 8px;
    }
    .green {
      color: rgba(0, 168, 46, 1);
      margin-left: 8px;
      font-size: 18px;
    }
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    .lng {
      width: 18px;
      height: 18px;
      margin-right: 10px;
    }
    .status {
      display: flex;
      .icon {
        background-color: rgba(224, 32, 32, 1);
        border-radius: 50%;
        width: 6px;
        height: 6px;
        margin-top: 5px;
      }
      .value {
        margin-left: 5px;
        width: 32px;
        height: 16px;
        overflow-wrap: break-word;
        color: rgba(224, 32, 32, 1);
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
}
.padding {
  padding-top: 15px;
  margin-bottom: 8px;
}
</style>
