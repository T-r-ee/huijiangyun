<template>
  <div class="main">
    <div id="load" v-show="show">
      <div class="load_img">
        <!-- 加载动画 -->
        <img class="jzxz1" src="../assets/jzxz1.png" />
        <img class="jzxz2" src="../assets/jzxz2.png" />
      </div>
    </div>

    <div class="header">
      <div class="mes">
        <h1>
          <img src="../assets/logo.png" />测试大屏
        </h1>
      </div>
    </div>

    <div class="unit">
      <div v-for="item of mess" :key="item" class="unit-form">
        <div class="unit-header">{{ item.name }}</div>
        <div class="unit-content">
          <span class="value">{{ item.value }}</span>
          <span class="unit">台</span>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="unit-form">
        <div class="unit-header">报警列表</div>

        <div class="mes-content">


           <vue-seamless-scroll :data="alarm" class="wp-1 hp-1" :class-option="classOption">
            <div class="alarm" v-for="list of alarm" :key="list">
              <div class="alarm-name">
                <img src="../assets/ksh35.png" />
                {{ list.name }}
              </div>
              <div class="alarm-mes">
                <div class="back-border">报警时间: {{ list.created }}</div>

                <div class="back-border" style="margin-top: 10px">{{ list.mess }}</div>
              </div>

              <img src="../assets/ksh34.png" style="position: absolute; top: -2px; left: -2px" />
              <img src="../assets/ksh34.png" style="position: absolute; top: -2px; right: -2px" />
              <img src="../assets/ksh34.png" style="position: absolute; bottom: -2px; right: -2px" />
              <img src="../assets/ksh34.png" style="position: absolute; bottom: -2px; left: -2px" />
            </div>
          </vue-seamless-scroll> 
        </div>
      </div>

      <div class="unit-form" style="flex: 2">
        <div class="unit-header">全国分布地图</div>
        <div id="container" />
      </div>

       <div class="unit-form">
        <div class="unit-header">每日在线网关数量</div>
        <div class="mes-content">
          <div> 
          <!-- <vue-seamless-scroll :data="mobus" class="wp-1 hp-1" :class-option="classOption2"> -->
            <span v-for="list of mobus" :key="list" class="mobus">
              <div>
                <img src="../assets/device-red.png" style="width: 3.9rem; margin-right: 15px" />
              </div>

              <div class="mobus-box">
                <div class="mobus-mess">
                  <div> 网关数量 </div>

                  <span style="position: relative; margin-top: 4px">
                    <img src="../assets/cpu_use.png" class="rotate" style="width: 3rem" />
                    <span class="mess">{{ list.num }}</span>
                  </span>
                </div>

                <div class="mobus-mess">
                  <div>日期</div>

                  <span style="position: relative; margin-top: 4px">
                    <img src="../assets/nei_cun_use.png" class="rotate" style="width: 3rem" />
                    <span class="mess">{{ list.created }}</span>
                  </span>
                </div>
              </div>

              <img src="../assets/bj-1.png"
                style="position: absolute; top: 0; left: 0; transform: scale(0.8)" />
              <img src="../assets/bj-2.png" style="
                position: absolute;
                top: 0;
                right: 0;
                transform: scale(0.8);
              " />
              <img src="../assets/bj-3.png" style="
                position: absolute;
                bottom: 0;
                right: 0;
                transform: scale(0.8);
              " />
              <img src="../assets/bj-4.png" style="
                position: absolute;
                bottom: 0;
                left: 0;
                transform: scale(0.8);
              " />
              <div style="
                background-image: linear-gradient( to right,  rgba(0, 0, 0, 0.3), white,  rgba(0, 0, 0, 0.3)  );
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                width: 100%;
                height: 1px;
              "></div>
            </span>
          <!-- </vue-seamless-scroll> -->
          </div> 
        </div>
      </div>  
    </div>
  </div>
</template>

<script> 
import AMapLoader from "@amap/amap-jsapi-loader";
import vueSeamlessScroll from "vue-seamless-scroll";
import iconTeam from '@/assets/mobus.png';
window._AMapSecurityConfig = {
            securityJsCode: 'e8891b268ccccc847af597f8cdc9d95a',
          };
export default {
  name: "DashboardEditor",
  components: {
    vueSeamlessScroll
  },
  data() {
    return {
      show:  true,
      emptyGif:
        "https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3",
      mess: [
        { name: "网关数量", value: 10 },
        { name: "在线数量", value: 2 },
        { name: "离线数量", value: 8 }
      ],
      mobus: [
        { num: 5, created: "7/11" },
        { num: 3, created: "7/12" },
        { num: 7, created: "7/13" },
          { num: 5, created: "7/14" }, 
      ],
      alarm: [
        { name: "网关1", mess: "网关1报警", created: "2023-7-15 15:00:00" },
        { name: "网关2", mess: "网关2报警", created: "2023-7-16 16:00:00" },
        { name: "网关3", mess: "网关3报警", created: "2023-7-17 17:00:00" },
        { name: "网关4", mess: "网关4报警", created: "2023-7-18 18:00:00" },
        { name: "网关5", mess: "网关5报警", created: "2023-7-19 19:00:00" } 
      ],
      title: ["报警列表", "全国分布地图", "每日在线网关数"]
    };
  },
  computed: {
   // ...mapGetters(["name", "avatar", "roles"]),
    classOption() {
      return {
        step: 0.6, // 数值越大速度滚动越快
        limitMoveNum: this.alarm.length, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      };
    },
    classOption2() {
      return {
        step: 0.6,  
        limitMoveNum: this.mobus.length,  
        hoverStop: true,  
        direction: 1, 
        openWatch: true,  
        singleHeight: 0,  
        singleWidth: 0,  
        waitTime: 1000  
      };
    }
  },
  mounted() {
    this.initMap();
    var time = setTimeout(() => {
      this.show = false;
      clearTimeout(time);
    }, 3000);
    //console.log(1)
  },
  methods: {
    initMap() {
      
      AMapLoader.load({
        key: "b067cf49aefe199b58ff2c9d3bf1843d",
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ["AMap.Icon", "AMap.Marker"]
      })
        .then(AMap => {
          this.map = new AMap.Map("container", {
            // zoom: 10
            resizeEnable: true,
          });
          const markerData = [];
          const default_icon = new AMap.Icon({//正常
            image:  iconTeam,
            imageSize: new AMap.Size(40, 60),
          });
          let marker = new AMap.Marker({
            position: new AMap.LngLat(118.356448,35.104672),
            icon: default_icon,
          }); 
           markerData.push(marker);
            marker = new AMap.Marker({
            position: new AMap.LngLat(120.269281,31.469022),
            icon: default_icon,
          }); 
          markerData.push(marker); 
          this.map.add(markerData); 
           this.map.setFitView();
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  background-size: 100% 100%;
  background-position: center;
  background-image: url(../assets/bg.png);
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
 
  #load {
    width: 100%;
    height: 100%;
    position: absolute;
    background: url(../assets/bg.png) no-repeat #061537;
    background-size: 100% 100%;
    top: 0;
    left: 0;
    z-index: 999;
  animation: fadeOut 3s ease-in;
    .load_img {
      position: absolute;
      left: calc(50% - 182px);
      top: calc(50% - 182px);

      img {
        position: absolute;
        left: 0;
        top: 0;
      }

      .jzxz1 {
        animation: xz1 8s infinite linear;
      }

      .jzxz2 {
        animation: xz2 7s infinite linear;
      }
    }
  }
@keyframes fadeOut {
  0% {
    opacity: 1; /* 初始状态，完全可见 */
  }
  70% {
    opacity: 1; /* 保持可见，持续约2.1秒 */
  }
  100% {
    opacity: 0; /* 最终状态，完全透明 */
  }
}
  @keyframes xz1 {
    from {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(180deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @keyframes xz2 {
    from {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(-180deg);
    }

    to {
      transform: rotate(-360deg);
    }
  }

  .header {
    height: 100px;
    background: url(../assets/head_bg.png) no-repeat center center;
    background-size: 100% 100%;
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .mes {
      width: 90%;

      h1 {
        color: #fff;
        text-align: center;

        img {
          width: 5rem;
          display: inline-block;
          vertical-align: middle;
          margin-right: 0.2rem;
        }
      }
    }
  }

  .unit-form {
    flex: 1;
    display: flex;
    gap: 10px;
    background: rgb(4, 58, 129, 0.5) url(../assets/line.png);

    color: white;
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

    // &::before {
    //   position: absolute;
    //   bottom: 0;
    //   left: 0;
    //   content: "";
    //   width: 20px;
    //   height: 20px;
    //   border-bottom: 3px solid #02a6b5;
    //   border-left: 3px solid #02a6b5;
    // }
    // &::after {
    //   position: absolute;
    //   top: 0;
    //   right: 0;
    //   content: "";
    //   width: 20px;
    //   height: 20px;
    //   border-top: 3px solid #02a6b5;
    //   border-right: 3px solid #02a6b5;
    // }

    .unit-header {
      padding: 10px 10px 10px 20px;
      letter-spacing: 1px;
      border-bottom: 1px solid #04306b;
      font-size: 1.2rem;
      position: relative;
      border-width: 50%;
      font-weight: bold;
      background: linear-gradient(to right,
          rgba(2, 166, 181, 0.7),
          transparent);

      &::before {
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(-50%);
        content: "";
        width: 10px;
        height: 22px;
        border-left: 5px solid #fac858;
      }
    }
  }

  .unit {
    display: flex;
    justify-content: space-between;
    height: 116px;

    .unit-content {
      width: 100%;
      height: 100%;
      display: flex;
      flex: 1;
      font-size: 20px;
      font-weight: bold;
      padding: 10px;
      overflow: hidden;
    }
  }

  .content {
    display: flex;
    color: white;
    position: relative;
    height: calc(100% - 213px);

    #container {
      padding: 0px;
      margin: 0px;
      width: 100%;
      height: 100%;
    }

    .mes-content {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      flex: 1;
      padding: 10px;
      overflow: hidden;

      .mobus {
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 5px;
        margin-bottom: 20px;
        box-sizing: border-box;
        border: 1px solid rgba(25, 186, 139, 0.17);
        display: flex;
        padding: 20px;
        position: relative;

        .mobus-box {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;

          .mobus-mess {
            display: flex;
            flex-direction: column;
            width: 50%;
            height: 100%;
            align-items: center;
            position: relative;

            &:nth-child(1)::after {
              content: '';
              position: absolute;
              right: 0;
              top: 0;
              width: 1px;
              height: 20px;
              background-color: white;
            }

            .rotate {
              animation: xz1 7s infinite linear;


            }

            .mess {
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
            }
          }
        }
      }

      .alarm {
        background-color: rgba(0, 0, 0, 0.3);
        padding: 10px;
        border-radius: 5px;
        margin-bottom: 10px;
        box-sizing: border-box;
        position: relative;
        display: flex;
        border: 1px solid #1380bd;
        width: 100%;

        .alarm-mes {
          width: 66%;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          padding: 8px;
        }

        .alarm-name {
          width: 33%;
          box-sizing: border-box;
          padding: 5px;
          position: relative;

          &::after {
            content: '';
            position: absolute;
            top: 0px;
            right: 15px;
            width: 1px;
            height: 100%;
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.3));
          }
        }
      }

      .back-border {
        width: 100%;
        background: url(../assets/ksh38.png) no-repeat;
        background-size: 100% 100%;
        box-sizing: border-box;
        padding: 10px;
      }
    }
  }
}</style>
