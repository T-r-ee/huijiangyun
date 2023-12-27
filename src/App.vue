<template>
  <div class="app">
    <div :class="{'back':true, 'back-image':setimage}">
      <div class="head">
        <div class="image-title">
          <img
            class="image_mid"
            referrerpolicy="no-referrer"
            src="../src/assets/mid.png"
          />
        </div>
        <img
          class="image_left"
          referrerpolicy="no-referrer"
          src="../src/assets/left.png"
        />
        <img
          class="image_right"
          referrerpolicy="no-referrer"
          src="../src/assets/right.png"
        />

        <div class="box_3">
          <img
            class="image_4"
            referrerpolicy="no-referrer"
            src="../src/assets/icon.png"
          />
          <span class="text_1">汇江云船艇信息管理系统</span>
          <span class="text_2"
            >2023 年 8 月 1 日（农历六月 十五） 星期三 12:00</span
          >

          <el-select class="select" v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>

      <div class="content">
        <div class="aside">
          <div class="list">
            <TitleBar>
              <template v-slot:value>
                <div class="title-bar">
                  <div class="name">我的船队</div>
                  <div class="value">（2/20）</div>
                  <div class="btn">
                    <span class="font">全部</span>
                  </div>
                </div>
              </template>
            </TitleBar>

            <div style="height: 15px; width: 100%"></div>

            <BlockComponent v-for="(item, index) of list" :key="index">
              <template v-slot:top>
                <span class="text_4">民安&nbsp;1&nbsp;号</span>
                <div>
                  <img
                    referrerpolicy="no-referrer"
                    src="../src/assets/video.png"
                  />
                  <img
                    class="signal"
                    referrerpolicy="no-referrer"
                    src="../src/assets/signal.png"
                  />
                  <span class="green">VSAT</span>
                  <span class="green">4G</span>
                </div>
              </template>
              <template v-slot:bottom>
                <div>
                  <img
                    class="lng"
                    referrerpolicy="no-referrer"
                    src="../src/assets/lng.png"
                  />
                  <span class="text_7">120.37855'E&nbsp;,&nbsp;31.48718'N</span>
                </div>
                <div class="status">
                  <div class="icon"></div>
                  <span class="value">在线</span>
                </div>
              </template>
            </BlockComponent>
          </div>
          <div class="notice">
            <TitleBar>
              <template v-slot:value>
                <div class="title-bar">
                  <div class="name">航行通告</div>
                </div>
              </template>
            </TitleBar>
            <div style="height: 15px; width: 100%"></div>
            <BlockComponent
              :set="true"
              v-for="(item, index) of list"
              :key="index"
            >
              <template v-slot:top>
                <div class="msg">
                  <div class="time">2023-08-08&nbsp;19:00</div>
                  <div class="value">
                    长寿冯家湾化工码头二期工程施工行情通告（渝航通&nbsp;[2023]&nbsp;0144&nbsp;号&nbsp;）
                  </div>
                </div>
              </template>
            </BlockComponent>
          </div>
        </div>

        <div class="router">
          <MenuComponent></MenuComponent>
          <router-view />
          <!-- <div id="container" /> -->
        </div>
      </div>
      <!-- <router-view/> -->
    </div>
  </div>
</template>

<script>
import MenuComponent from '@/components/MenuComponent.vue'
import BlockComponent from "./components/BlockComponent.vue";
import TitleBar from "./components/TitleBar.vue";
import AMapLoader from "@amap/amap-jsapi-loader";
// import iconTeam from '@/assets/mobus.png';
window._AMapSecurityConfig = {
  securityJsCode: "e8891b268ccccc847af597f8cdc9d95a",
};
export default {
  components: {
    TitleBar,
    BlockComponent,
    MenuComponent
  },
  data() {
    return {
      setimage:false,
      list: [1, 2, 3, 4, 5, 6, 7, 8],
      options: [
        {
          value: "选项1",
          label: "用户1",
        },
        {
          value: "选项2",
          label: "用户2",
        },
        {
          value: "选项3",
          label: "用户3",
        },
        {
          value: "选项4",
          label: "用户4",
        },
        {
          value: "选项5",
          label: "用户5",
        },
      ],
      value: "",
    };
  },
  mounted() {
     
  
    this.initMap();
  },
  created(){
     this.$bus.$on('set-image', (data) => {
      this.setimage = data;
        console.log(  this.setimage) 
    });
  },
  methods: {
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
.app {
  width: 1920px;
  height: 1080px;
  background: url(../src/assets/cs.png) 100% no-repeat;
  background-size: 100% 100%;
  .back {
    width: 100%;
    height: 100%;
    background: url(../src/assets/back2.png) 100% no-repeat;
    background-size: 100% 100%;

    .head {
      display: flex;
      position: relative;
      width: 1920px;
      height: 86px;
      .image-title {
        height: 74px;
        background: url(../src/assets/uptitle.png) 100% no-repeat;
        background-size: 100% 100%;
        width: 1920px;

        .image_mid {
          width: 572px;
          height: 74px;
          margin-left: 674px;
        }
      }

      .image_left {
        position: absolute;
        left: 0;
        top: 5px;
        width: 755px;
        height: 70px;
      }

      .image_right {
        position: absolute;
        left: 1165px;
        top: 5px;
        width: 755px;
        height: 70px;
      }

      .box_3 {
        position: absolute;
        left: 0;
        top: 5px;
        width: 1920px;
        height: 74px;
        background: url(../src/assets/downtitle.png) 0px -1px no-repeat;
        background-size: 1771px 75px;
        .image_4 {
          width: 183px;
          height: 31px;
          margin: 21px 0 0 41px;
        }

        .text_1 {
          width: 373px;
          height: 36px;
          overflow-wrap: break-word;
          color: rgba(234, 234, 234, 1);
          font-size: 36px;
          font-family: PangMenZhengDao;
          font-weight: NaN;
          text-align: left;
          white-space: nowrap;
          line-height: 41px;
          margin: 14px 0 0 544px;
        }

        .text_2 {
          width: 346px;
          height: 16px;
          overflow-wrap: break-word;
          color: rgba(234, 234, 234, 1);
          font-size: 16px;
          line-height: 24px;
          margin: 28px 0 0 248px;
        }

        .select {
          margin-left: 30px;
          width: 100px;
        }
      }

      ::v-deep .el-input__inner {
        background: transparent;
        border: none;
      }
    }
    .content {
      margin-top: 2px;
      display: flex;
      .aside {
        margin-left: 30px;
        .list {
          overflow: hidden;
          position: relative;
          width: 350px;
          height: 634px;
          background: url(../src/assets/listback.png) 100% no-repeat;
          background-size: 100% 100%;
          .title-bar {
            display: flex;
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
        .notice {
          color: white;
          overflow: hidden;
          position: absolute;
          left: 30px;
          top: 729px;
          width: 350px;
          height: 341px;
          background: url(../src/assets/listback.png) 100% no-repeat;
          background-size: 100% 100%;
          .msg {
            display: flex;
            flex-direction: column;
            .time {
              color: rgba(146, 155, 170, 1);
              font-size: 14px;
            }
          }
        }
      }
      .router {
        height: 990px;
        // background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga8fec28abdfed825f5cec41caf4c472e18be9ed76089264bf06b8fae18154f42)
        //   100% no-repeat;
        // background-size: 100% 100%;
        width: 100%;
        position: relative;
        box-sizing: border-box;
        padding: 0 3px 3px 0;
        overflow: hidden;
        #container {
          padding: 0px;
          margin: 0px;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .back-image{
     background: url(../src/assets/back2.png) 100% no-repeat;
  }
}
</style>
