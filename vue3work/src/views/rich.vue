<template>
  <Editor
    v-model="content"
    :init="init"
    tag-name="div"
    api-key="p794cjmyosz4oehj1qpbsj9f24wd2r3ftkqmo01grrxcwkce"
  />
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/themes/silver"; // 引用主题文件
import "tinymce/icons/default"; // 引用图标文件
import "tinymce/plugins/link";
// import "tinymce/plugins/code"
import "tinymce/plugins/table";
import "tinymce/plugins/lists";
// import "tinymce/plugins/advlist"
// import "tinymce/plugins/anchor"
// import "tinymce/plugins/autolink" //锚点
// import "tinymce/plugins/autoresize"
// import "tinymce/plugins/autosave"
// import "tinymce/plugins/charmap" //特殊字符
// import "tinymce/plugins/code" //查看源码
// import "tinymce/plugins/codesample" //插入代码
// import "tinymce/plugins/directionality" //
// import "tinymce/plugins/fullpage" //页面属性编辑
// import "tinymce/plugins/fullscreen" //全屏
// import "tinymce/plugins/help" //帮助
// import "tinymce/plugins/hr" //横线
// import "tinymce/plugins/image"; //图片
// import "tinymce/plugins/imagetools" //图片工具
// import "tinymce/plugins/importcss" //图片工具
// import "tinymce/plugins/insertdatetime" //时间插入
// import "tinymce/plugins/media"; //媒体插入
// import "tinymce/plugins/nonbreaking" //
// import "tinymce/plugins/noneditable" //不间断空格
// import "tinymce/plugins/pagebreak" //分页
// import "tinymce/plugins/paste"; //粘贴
// import "tinymce/plugins/preview" //预览
// import "tinymce/plugins/print" //打印
// import "tinymce/plugins/quickbars" //快捷菜单
// import "tinymce/plugins/save" //保存
// import "tinymce/plugins/searchreplace" //查询替换
// import "tinymce/plugins/spellchecker" //拼写检查
// import "tinymce/plugins/tabfocus" //
// import "tinymce/plugins/template" //插入模板
// import "tinymce/plugins/textpattern" //
// import "tinymce/plugins/toc" //
// import "tinymce/plugins/visualblocks" //
// import "tinymce/plugins/visualchars" //
// import "tinymce/plugins/wordcount" //数字统计

// demo 参考 https://gitee.com/unitui/unituicli3/blob/master/src/unitui/sub/Uedit.vue

export default defineComponent({
  name: "QiyiRichText",
  components: { Editor },
  props: {
    config: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  setup(props) {
    console.log("props===", props.config);

    // let configObj = props.config
    // watch(() => props.config, async (val: any) => {
    //   console.log('val===', val);
    //   // init = {
    //   //   ...init,
    //   //   ...val
    //   // };
    //   configObj = { ...val }
    // },{ immediate: true })
    const init = {
      language: "zh_CN",
      menubar: false,
      autoresize_bottom_margin: 50,
      width: "100%",
      min_height: 300,
      max_height: 300,
      toolbar_mode: "none",
      // plugin 需要先 import 进来
      plugins: props.config.plugins || "paste media image link table lists",
      toolbar:
        "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment | table",
      // toolbar: 'undo redo paste print fontsizeselect fontselect template fullpage|wordcount ltr rtl visualchars visualblocks toc spellchecker searchreplace|save preview pagebreak nonbreaking|media image|outdent indent aligncenter alignleft alignright alignjustify lineheight  underline quicklink h2 h3 blockquote numlist bullist table removeformat forecolor backcolor bold italic  strikethrough hr charmap link insertdatetime|subscript superscript cut codesample code |anchor preview fullscreen|help',
      content_style:
        props.config.content_style ||
        "p { margin: 5px 0; font-size: 16px; font-family: Microsoft YaHei; }",
      fontsize_formats:
        props.config.fontsize_formats ||
        "8px 10px 12px 14px 16px 18px 24px 36px 48px",
      font_formats:
        "微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;",
      branding: false,
      elementpath: false,
      resize: false, // 禁止改变大小
      statusbar: false, // 隐藏底部状态栏
      // 图片上传
      images_upload_handler:
        props.config.imagesUploadHandler ||
        function (blobInfo: any, success: any) {
          debugger;
          const reader = new FileReader();
          reader.readAsDataURL(blobInfo.blob());
          reader.onload = function () {
            success(reader.result);
          };
        },
    };
    tinymce.init;

    return {
      init,
      content: "",
    };
  },
});
</script>
