<template>
  <div class="menu">
    <ul>
      <li
        v-for="(item, index) of menu"
        :key="index"
        :class="{ hover: isActive === index }"
        @mouseover="toggleHover(true, index)"
        @mouseout="toggleHover(false, index)"
        @click="goto(item.src, index)"
      >
        <img
          :src="require('@/assets/' + item.icon + '.png')"
          :class="{
            locate: index === 3 ? true : false,
            video: index === 4 ? true : false,
          }"
        />
        <div class="name">{{ item.name }}</div>
      </li>
    </ul>

    <div class="locate-hover" v-if="isActive === 3">
      <div class="top">
        <span class="blue">民安 1 号</span>
        <span class="icon">
          <img src="../assets/verticalline.png" />
          <span> 120.37855'E&nbsp;,&nbsp;31.48718'N</span>
          <img src="../assets/verticalline.png" />
        </span>
        <span>666888999</span>
      </div>

      <div class="bottom">
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </div>
    </div>
    <div class="alert-hover" v-if="isActive === 6">
      <div class="top">
        <span class="blue">民安 1 号</span>
        <span class="icon">
          <img src="../assets/verticalline.png" /> &nbsp; &nbsp;
          <span> 120.37855'E&nbsp;,&nbsp;31.48718'N</span>&nbsp; &nbsp;
          <img src="../assets/verticalline.png" />
        </span>
        <span>666888999</span>
      </div>

      <div class="bottom">
        <div class="list">
          <div v-for="(item, index) of alarmLog" :key="index" class="list-item">
            <div :class="['item-top', item.color]">
              <span class="name">{{ item.name }}</span>
              <span>{{ item.value }}</span>
            </div>
            <div class="item-bottom">
              <div class="msg" v-for="(msg, i) of item.log" :key="i">
                {{ msg }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="aside-left">
        <div class="title">
          {{ asidelist.title }}
        </div>

        <div class="list">
          <div class="list-item" v-for="(item, index) of asidelist.log" :key="index">
            {{ item }}
          </div>
        </div>
      </div> -->
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
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
      isActive: -1,
      lastActive: -1,
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
        { icon: "menu", name: "功能菜单", src: "/map" },
        { icon: "voyage", name: "智慧航行", src: "/voyage/overview" },
        { icon: "communicate", name: "船岸通信" },
        { icon: "locate", name: "位置服务" },
        { icon: "menuvideo", name: "智能视频", src: "/video/view" },
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
    goto(msg, index) {
      if (this.isActive === index) {
        this.toggleHover(true, index);
        this.isActive = -1;
        return;
      }
      console.log(index)
       if(index===2)this.$bus.$emit('set-image', false);
      else this.$bus.$emit('set-image',true);
      this.lastActive = this.isActive;
      this.isActive = index;
      
      if (this.lastActive) this.toggleHover(false, this.lastActive);

      if (this.$route.path === msg || !msg) return;
      this.$router.push(msg);
    },
    toggleHover(e, index) {
      if (e) {
        if (index === 1 || index === 3 || index === 4 || index === 6)
          this.menu[index].icon = this.img[index] + "off";
      } else {
        if (this.isActive === index) return;
        if (index === 1 || index === 3 || index === 4 || index === 6)
          this.menu[index].icon = this.img[index];
      }
    },

    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  z-index: 1;
  position: absolute;
  top: 10px;
  left: 15px;
  width: 720px;
  height: 60px;
  background: url(../assets/menuback.png) 100% no-repeat;
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
        // width: 56px;
        height: 14px;
        overflow-wrap: break-word;
        color: rgba(79, 179, 255, 1);
        font-size: 14px;
        line-height: 21px;
        margin: 7px 0 9px 12px;
      }
    }
    .hover {
      background-color: rgba(0, 145, 255, 1);
      .name {
        color: white;
      }
    }
    li:hover {
      cursor: pointer;
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
    background: url(../assets/alarmlog.png) 100% no-repeat;
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
      .list-item {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
