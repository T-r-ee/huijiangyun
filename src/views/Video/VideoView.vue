<template>
  <div class="main">
    <!-- <MenuComponent></MenuComponent> -->
    <div class="aside">
      <img
        class="thumbnail_38"
        referrerpolicy="no-referrer"
        src="../../assets/asideMap.png"
      />
      <span class="name">地图</span>
      <img
        class="thumbnail_39"
        referrerpolicy="no-referrer"
        src="../../assets/asideDistance.png"
      />
      <span class="name">距离</span>
      <img
        class="image_16"
        referrerpolicy="no-referrer"
        src="../../assets/asideWeather.png"
      />
      <span class="name">气象</span>
    </div>
    <div class="placeholder"></div>
    <div class="nav">
      <div class="top">
        <span class="blue">民安 1 号</span>
        <span class="icon">
          <img src="../../assets/verticalline.png" />
          <span> 120.37855'E&nbsp;,&nbsp;31.48718'N</span>
          <img src="../../assets/verticalline.png" />
        </span>
        <span>666888999</span>
      </div>
      <div class="bottom">
        <div
          :class="['nav-list', item.check ? 'checked' : '']"
          v-for="(item, index) of navArray"
          :key="index"
          @click="goto(item.url, index)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
// import MenuComponent from "@/components/MenuComponent.vue";
export default {
  name: "VideoView",
  // components: { MenuComponent },
  data() {
    return {
      navArray: [
        { name: "全景视频", check: true, url: "/video/view" },
        { name: "船员视频", check: false, url: "/video/staff" },
        { name: "安保视频", check: false, url: "/video/staff" },
        { name: "货仓视频", check: false },
        { name: "助航视频", check: false },
      ],
      activeIndex: "1",
      activeIndex2: "1",
      asidelist: {
        title: "长寿冯本湾化工码头二期工程施工行情通告(渝航通[2023] 0144 号)",
        log: [
          "一、施工时间: 2023年8月26 日至2023 年10月31 日，每日0700至2000 时",
          "二、施工时间: 2023年8月26 日至2023 年10月31 日，每日0700至2000 时",
          "三、施工时间: 2023年8月26 日至2023 年10月31 日，每日0700至2000 时",
          "四、施工时间: 2023年8月26 日至2023 年10月31 日，每日0700至2000 时",
          "五、施工时间: 2023年8月26 日至2023 年10月31 日，每日0700至2000 时",
          "六、施工时间: 2023年8月26 日至2023 年10月31 日，每日0700至2000 时",
        ],
      },
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
      alarmLog: [
        {
          name: "中心报警区",
          value: "1只",
          color: "top-red",
          log: ["民安1号"],
        },
        {
          name: "2级报警区",
          value: "1只",
          color: "top-yellow",
          log: ["民安2号", "民安3号"],
        },
        {
          name: "3级报警区",
          value: "1只",
          color: "top-blue",
          log: ["民安4号", "民安5号", "民安6号"],
        },
      ],
      menu: [
        { icon: "menu", name: "功能菜单" },
        { icon: "voyage", name: "智慧航行" },
        { icon: "communicate", name: "船岸通信" },
        { icon: "locate", name: "位置服务" },
        { icon: "menuvideo", name: "智能视频" },
        { icon: "device", name: "设备管理" },
        { icon: "alarm", name: "碰壁提醒" },
        { icon: "log", name: "航行日志" },
        { icon: "report", name: "油料报表" },
      ],
      value: "",
    };
  },
  mounted() {},
  methods: {
    goto(e, index) {
      this.navArray.filter((item) => {
        item.check = false;
      });
      this.navArray[index].check = true;
      if (this.$route.path === e || !e) return;

      this.$router.push(e);
    },

    toggleHover(e, index) {
      if (e) {
        switch (index) {
          case 3:
            this.menu[index].icon = this.img[index] + "off";
            this.locateShow = true;
            break;
          case 6:
            this.menu[index].icon = this.img[index] + "off";
            this.alarmShow = true;
            break;
          default:
            break;
        }
      } else {
        switch (index) {
          case 3:
            this.menu[index].icon = this.img[index];
            this.locateShow = false;
            break;
          case 6:
            this.menu[index].icon = this.img[index];
            this.alarmShow = false;
            break;
          default:
            break;
        }
      }
    },

    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 15px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  .aside {
    z-index: 1;
    position: absolute;
    right: 0;
    top: 10px;
    display: flex;
    padding: 15px 0;
    flex-direction: column;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, 1);
    border-radius: 23px;
    width: 45px;
    height: 180px;
    justify-content: space-between;
    align-items: center;
    img {
      width: 20px;
      height: 20px;
    }
  }
  .placeholder {
    width: 1px;
    height: 70px;
  }
  .nav {
    height: 100px;
    background: url(../../assets/videoMidBack.png) 100% no-repeat;
    background-size: 100% 100%;
    width: 1490px;
    padding: 20px 30px 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .top {
      font-size: 24px;
      color: white;
      display: flex;
      font-weight: 700;
      .icon {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        img {
          width: 1px;
          height: 18px;
          margin: 0 20px;
        }
      }

      .blue {
        color: rgba(0, 145, 255, 1);
      }
    }
    .bottom {
      display: flex;
      margin-right: 20px;
      .nav-list {
        // width: 64px;
        height: 16px;
        color: rgba(160, 160, 160, 1);
        font-size: 16px;
        line-height: 24px;
        padding-bottom: 15px;
        margin-right: 50px;
        position: relative;

        &:hover {
          color: rgba(0, 145, 255, 1);
          cursor: pointer;
          &::before {
            content: "";
            position: absolute;
            width: 10px;
            height: 1px;
            background: rgba(0, 145, 255, 1);
            bottom: 0px;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
      .checked {
        color: rgba(0, 145, 255, 1);
        cursor: pointer;
        &::before {
          content: "";
          position: absolute;
          width: 10px;
          height: 1px;
          background: rgba(0, 145, 255, 1);
          bottom: 0px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }
  .container {
    flex: 1;
    display: flex;
    background: url(../../assets/videoBottom.png) 100% no-repeat;
    background-size: 100% 100%;
    margin-top: 14px;
    padding: 10px;
    box-sizing: border-box;
  }
}
</style>
