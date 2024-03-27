<template>
  <div>
    <el-autocomplete
      style="width: 100%"
      popper-class="autoAddressClass"
      v-model="mapData.address"
      :fetch-suggestions="querySearch"
      :trigger-on-focus="false"
      placeholder="请输入详细地址"
      @select="handleSelect"
      clearable
    >
      <template #default="{ item }">
        <div class="autoAddressClass_item">
          <ElIcon :size="20" color="balck">
            <Search />
          </ElIcon>
          <div>
            <div class="title">{{ item.title }}</div>
            <span class="address ellipsis">{{ item.address }}</span>
          </div>
        </div>
      </template>
    </el-autocomplete>
    <div :id="'map' + keyData" style="height: 300px; width: 800px"></div>
  </div>
  <el-dialog v-model="dialogVisible" title="下载二维码" width="50%">
    <div>
      <qrcode-vue
        v-if="qrCodeUrl"
        :value="qrCodeUrl"
        :size="300"
        level="H"
        id="codeLabel"
      />
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="handleDownloadQrCode">
          下载
        </el-button>
        <!-- <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="dialogVisible = false">
              确定
            </el-button> -->
      </span>
    </template>
  </el-dialog>
  <el-button type="primary" @click="handleDownload"> 下载坦克 </el-button>
</template>
<script setup>
import { ref, onMounted, defineProps } from "vue";
import QrcodeVue from "qrcode.vue";

const props = defineProps({
  keyData: Number,
});
const qrCodeUrl = ref("");
const dialogVisible = ref(true);
const mapData = ref({
  address: "", //详细地址
  point: "", //经纬度
  lat: "", //经度
  lng: "", //纬度
});
const BMap = window.BMapGL;

let Map = null;
let mk = null;
onMounted(() => {
  //初始化地图 禁用地图默认点击弹框
  // Map = new BMap.Map("map" + props.keyData, { enableMapClick: false });
  // // var point = new BMap.Point(, latitude);
  // // 初始化 地图经纬度 层级
  // Map.centerAndZoom("北京", 17);
  // Map.enableScrollWheelZoom(true);
});

function querySearch(str, cb) {
  var options = {
    //检索完成后的回调函数
    onSearchComplete: function (res) {
      var arr = [];
      if (local.getStatus() == BMAP_STATUS_SUCCESS) {
        for (var i = 0; i < res.getCurrentNumPois(); i++) {
          arr.push(res.getPoi(i));
        }
      }
      //获取到数据时，通过回调函数cb返回到<el-autocomplete>组件中进行显示
      cb(arr);
    },
  };
  //创建LocalSearch构造函数
  var local = new BMap.LocalSearch(Map, options);
  local.search(str);
}

function handleSelect(item) {
  // 保存当前数据
  mapData.value = {
    address: item.address,
    point: item.point.lat + "," + item.point.lng,
    lat: item.point.lat,
    lng: item.point.lng,
  };
  //清除地图上所有覆盖物
  Map.clearOverlays();
  //根据所选坐标重新创建Marker 记住打开可拖拽 默认是不打开的
  mk = new BMap.Marker(item.point);
  //将覆盖物重新添加到地图中
  Map.addOverlay(mk);
  //将地图的中心点更改为选定坐标点
  Map.panTo(item.point);
}

const handleDownload = (row) => {
  console.log("row===", row);
  // qrCodeUrl.vale = `https://sign-dev.iqiyi.com?id=`;
  console.log("qrCodeUrl.vale===", qrCodeUrl.vale);
  dialogVisible.value = true;
  setTimeout(() => {
    qrCodeUrl.value = `http://www.baidu.com`;
  }, 1000);
};
// 下载二维码
const handleDownloadQrCode = () => {
  const canvas = document.getElementById("codeLabel");
  console.log("canvas===", canvas);
  const url = canvas.toDataURL("image/png"); // 通过 toDataURL 返回一个包含图片展示的 data URI
  console.log("url===", url);
  const aDom = document.createElement("a");
  aDom.download = "签到二维码"; // 设置下载的文件名
  aDom.href = url;
  document.body.appendChild(aDom);
  aDom.click();
  aDom.remove();
};
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
