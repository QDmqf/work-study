<template>
  <div class="other-cont-info">
    <qiyi-rich-text
      v-model="formData.contractContent"
      :config="{
        fontsize_formats: '10px 12px 14px 16px 18px 24px',
        content_style: 'p {font-size: 13px}',
        paste_data_images: true,
        images_upload_handler: imagesUploadHandler,
      }"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import QiyiRichText from "./rich.vue";
// import * as Api from "@/api/other";

export default defineComponent({
  name: "OtherFormContractInfo",
  components: {
    QiyiRichText,
  },

  setup() {
    const formData = ref({
      contractContent: "",
    });
    const uploadingImgCount = ref(0);

    const imagesUploadHandler = async (
      blobInfo: any,
      success: any,
      failure: any
    ) => {
      const formData = new FormData();
      const file = blobInfo.blob();
      const filename = blobInfo.filename();
      formData.append("contextPath", "contract_info");
      formData.append("file", file, filename);
      uploadingImgCount.value++;
    };

    return {
      formData,
      imagesUploadHandler,
    };
  },
});
</script>

<style lang="scss" scoped></style>
