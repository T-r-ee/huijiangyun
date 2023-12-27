<template>
  <div class="main">
    <div id="container" />
     <!-- <MenuComponent></MenuComponent> -->
    <div class="aside">
      <img
        class="thumbnail_38"
        referrerpolicy="no-referrer"
        src="../assets/asideMap.png"
      />
      <span class="name">地图</span>
      <img
        class="thumbnail_39"
        referrerpolicy="no-referrer"
        src="../assets/asideDistance.png"
      />
      <span class="name">距离</span>
      <img
        class="image_16"
        referrerpolicy="no-referrer"
        src="../assets/asideWeather.png"
      />
      <span class="name">气象</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AMapLoader from "@amap/amap-jsapi-loader"; 
// import MenuComponent from '@/components/MenuComponent.vue'
window._AMapSecurityConfig = {
  securityJsCode: "e8891b268ccccc847af597f8cdc9d95a",
};
export default {
  name: "HomeView",
  components: {
    // MenuComponent
    
  },
  data() {
    return {
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
      path: "../assets/",
      activeIndex: "1",
      activeIndex2: "1",
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
  mounted() {
    this.initMap();
  },
  methods: {
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
    initMap() {
      AMapLoader.load({
        key: "b067cf49aefe199b58ff2c9d3bf1843d",
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ["AMap.Icon", "AMap.Marker"],
      })
        .then((AMap) => {
          this.map = new AMap.Map("container", {
            // zoom: 10
            resizeEnable: true,
          });
          // const markerData = [];
          // const default_icon = new AMap.Icon({//正常
          //   image:  iconTeam,
          //   imageSize: new AMap.Size(40, 60),
          // });
          // let marker = new AMap.Marker({
          //   position: new AMap.LngLat(118.356448,35.104672),
          //   icon: default_icon,
          // });
          //  markerData.push(marker);
          //   marker = new AMap.Marker({
          //   position: new AMap.LngLat(120.269281,31.469022),
          //   icon: default_icon,
          // });
          // markerData.push(marker);
          // this.map.add(markerData);
          this.map.setFitView();
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  position: relative;
  #container {
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 100%;
  }
  .menu {
    position: absolute;
    top: 10px;
    left: 15px;
    width: 720px;
    height: 60px;
    background: url(../assets/menuback.png)
      100% no-repeat;
    background-size: 100% 100%;
    ul {
      display: flex;
      align-items: center;
      li {
        display: flex;
        flex-direction: column;
        border-radius: 2px;
        width: 80px;
        height: 60px;
        img {
          width: 20px;
          height: 20px;
          margin: 10px 0 0 30px;
        }
        .locate {
          width: 18px;
          height: 22px;
        }
        .video {
          width: 22px;
          height: 16px;
          margin-bottom: 6px;
        }
        .name {
          width: 56px;
          height: 14px;
          overflow-wrap: break-word;
          color: rgba(79, 179, 255, 1);
          font-size: 14px;
          line-height: 21px;
          margin: 7px 0 9px 12px;
        }
      }
      li:hover {
        background-color: rgba(0, 145, 255, 1);
        .name {
          color: white;
        }
      }
    }
    .locate-hover {
      width: 560px;
      height: 161px;
      background: url(../assets/locatelog.png) 100% no-repeat;
      background-size: 100% 100%;
      color: white;
      display: flex;
      margin-top: 10px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .top {
        width: 470px;
        display: flex;
        justify-content: space-between;

        .icon {
          display: flex;
          align-items: center;
          box-sizing: border-box;
          img {
            width: 1px;
            height: 18px;
            margin-right: 19px;
          }
        }
        span {
          margin-right: 20px;
        }
        .blue {
          color: rgba(0, 145, 255, 1);
        }
      }
      .bottom {
        width: 470px;
        margin-top: 20px;

        ::v-deep .el-input__inner {
          background: transparent;
          width: 100%;
          border: none;
          padding-left: 0px;
          //  border: 1px solid rgba(32, 64, 124, 1);
        }

        ::v-deep .el-range-input {
          background: transparent;
          border: 1px solid rgba(32, 64, 124, 1);
          flex: 1;
          color: white;
        }

        ::v-deep .el-range-separator {
          color: white;
        }
        ::v-deep .el-input__icon {
          display: none;
        }
      }
    }
    .alert-hover {
      height: 410px;
      background: url(../assets/alarmlog.png)
        100% no-repeat;
      background-size: 100% 100%;
      width: 560px;
      margin-left: 240px;
      margin-top: 10px;
      color: white;
      display: flex;
      margin-top: 10px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .top {
        width: 496px;
        display: flex;
        margin-top: 20px;
        justify-content: space-between;
        // margin-left: 10px;
        font-size: 18px;
        font-weight: 700;
        .icon {
          display: flex;
          align-items: center;
          box-sizing: border-box;
          img {
            width: 1px;
            height: 18px;
            //  margin-right: 5px;
          }
        }
        span {
          // margin-right: 20px;
        }
        .blue {
          color: rgba(0, 145, 255, 1);
        }
      }
      .bottom {
        // width: 470px;
        margin-top: 20px;

        .list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;

          .list-item {
            height: 300px;
            border: 1px solid rgba(32, 64, 124, 1);
            box-sizing: border-box;
            padding: 10px;
            width: 152px;
            .item-top {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              border-bottom: 1px solid rgba(32, 64, 124, 1);
              box-sizing: border-box;
              padding-bottom: 8px;
              margin: 15px 0px;
              .name {
                margin-bottom: 10px;
              }
            }
            .top-red {
              color: rgba(224, 32, 32, 1);
            }
            .top-yellow {
              color: rgba(247, 181, 0, 1);
            }
            .top-blue {
              color: rgba(0, 145, 255, 1);
            }
            .item-bottom {
              .msg {
                margin-bottom: 10px;
              }
            }
          }
        }
      }
    }
    .aside-left {
      height: 410px;
      background: url(../assets/asideleft.png) 100% no-repeat;
      background-size: 100% 100%;
      width: 560px;
      margin-left: 10px;
      margin-top: 450px;
      // position: absolute;
      // left: 10px;
      // bottom:0px;
      color: white;
      display: flex;
     
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px 10px 10px 30px;
      box-sizing: border-box;
      .title {
        width: 304px;
        height: 46px;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 16px;
        font-family: SourceHanSansCN-Medium;
        font-weight: 500;
        text-align: center;
        line-height: 23px;
        margin-bottom: 20px;
      }
      .list {
        font-size: 14px;
        .list-item{
          margin-bottom:10px
        }
      }
    }
  }
  .aside {
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
}
</style>
