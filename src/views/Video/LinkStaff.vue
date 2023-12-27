<template>
  <div class="content">
    <div class="left">
      <div class="video">
        <div class="font">视频1</div>
      </div>
      <div class="video">
        <div class="shadow">视频2</div>
      </div>
      <div class="video">
        <div class="shadow">视频3</div>
      </div>
      <div class="video">
        <div class="shadow">视频4</div>
      </div>
    </div>
    <div class="right">
      <div class="video-name">视频1</div>
      <div class="video-operate">
        <div class="holder">
          <img src="../../assets/videoHolder.png" />
          <img src="../../assets/videoCamera.png" />
        </div>
        <div class="play">
          <img src="../../assets/videoLoad.png" />
        </div>
        <div class="operate">
          <img src="../../assets/videoReload.png" />
          <img src="../../assets/videoSound.png" />
          <img src="../../assets/videoExpand.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoView",
  data() {
    return {
      alertShow: false,
      locateShow: false,
      value1: "",
      msg: "video",
      path: "../../assets/",
      img: [
        "menu",
        "voyage",
        "communicate",
        "locate",
        "menuvideo",
        "device",
        "alarm",
        "log",
        "report",
      ],

      value: "",
    };
  },
  mounted() {},
  methods: {
    goto(e) {
      if (this.$route.path === e || !e) return;
      this.$router.push(e);
    },

    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  flex: 1;
  display: flex;
  .left {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    gap: 10px;
    width: 242px;
    height: 100%;
    .video {
      color: white;
      background-image: url(../../assets/videoBack.png);

      background-repeat: no-repeat;
      .shadow {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .font {
        display: flex;
        justify-content: flex-end;
        margin: 3px 8px 0 0;
      }
    }
  }
  .right {
    position: relative;
    flex: 1;
    margin-left: 20px;
    width: 100%;
    background-image: url(../../assets/videoplay.png);
    background-size: cover;
    background-repeat: no-repeat;
    .video-name {
      background-color: rgba(0, 0, 0, 0.7);
      height: 40px;
      width: 140px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 24px;
    }
    .video-operate {
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.7);
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .holder {
        display: flex;
        img {
          cursor: pointer;
          margin-left: 27px;
        }
        img:nth-child(1) {
          width: 28px;
          height: 20px;
        }
        img:nth-child(2) {
          width: 22px;
          height: 20px;
        }
      }
      .play {
        width: 168px;
        height: 20px;
        background: url(../../assets/videoProgress.png);
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          cursor: pointer;
          width: 30px;
          height: 30px;
        }
      }
      .operate {
        display: flex;
        img {
          cursor: pointer;
          margin-right: 27px;
        }
        img:nth-child(1) {
          width: 24px;
          height: 24px;
        }
        img:nth-child(2) {
          width: 26px;
          height: 20px;
        }
        img:nth-child(3) {
          width: 22px;
          height: 20px;
        }
      }
    }
  }
}
</style>
