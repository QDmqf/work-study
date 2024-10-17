<template>
  <div class="select-company-content">
    {{ dialogFlag }}
    <span @click="handleClose">自组建按钮</span>
    <el-dialog title="选择我方主体" width="50%" v-model="dialogFlag">
      <el-button type="primary" size="mini" @click="search"> 搜索 </el-button>
      <el-form ref="form" :model="formData" :show-message="false" size="small">
        <el-table :data="formData.copyCompanyList" border max-height="150">
          <el-table-column
            label="已选择我方主体名称"
            prop="name"
            align="left"
          />
          <el-table-column label="Date" width="180">
            <template #default="scope">
              <div style="display: flex; align-items: center">
                <span style="margin-left: 10px">{{ scope.row.id }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column labe="我方主体属性" align="left" width="150">
            <!-- <template #header>
              <span class="require">*</span>
              我方主体属性1399
            </template> -->
            <!-- <template #default="{ row, $index }">
              <el-form-item
                :rules="rules.attr"
                :prop="'copyCompanyList.' + $index + '.attr'"
              >
                <el-select
                  v-model="row.attr"
                  placeholder="请选择"
                  clearable
                >
                  <el-option
                    v-for="item in attrEnum"
                    :key="item.value"
                    :value="item.value"
                    :label="item.label"
                  />
                </el-select>
              </el-form-item>
            </template> -->
          </el-table-column>
          <el-table-column label="操作" align="left" width="80">
            <template #default="scope">
              <el-button
                type="text"
                size="small"
                class="delete-button"
                @click="delSelectionChange(scope.row)"
              >
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form>
      <el-table class="companyList" border :data="companyList" max-height="150">
        <el-table-column label="我方主体名称" prop="name" align="left">
          <template #default="scope">
            <div @dblclick="handleSelectionChange(scope.row)">
              {{ scope.row.name }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="left" width="80">
          <template #default="scope">
            <el-button
              size="small"
              type="text"
              @click="handleSelectionChange(scope.row)"
            >
              选择
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogFlag = false">取消</el-button>
          <el-button type="primary" @click="dialogFlag = false">
            确定
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
// import { querySearch, memoryField } from "@/utils/format";
// import { COMMON_COPY_COMPANY_LIST } from "@/constants/session-storage";

interface FormType {
  copyCompanyList: Array<IFileItem>;
}
interface IFileItem {
  id: number;
  name: string;
}
export default defineComponent({
  name: "SelectCompanyDetail",
  props: {
    showDialog: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:showDialog"],
  setup(props, { emit }) {
    const dialogFlag = ref(props.showDialog);
    const handleClose = () => {
      dialogFlag.value = true;
      emit("update:showDialog", dialogFlag.value);
    };
    // interface ICustomConfirmInfo {
    //   orderNo: string,
    //   revisedAmount: number | string
    //   emailFiles: Array<IFileItem>
    //   remark: string
    //   currencyName: string
    // }
    // const customConfirmForm = ref<ICustomConfirmInfo>({
    //   orderNo: '',
    //   revisedAmount: '',
    //   emailFiles: [],
    //   remark: '',
    //   currencyName: ''
    // })

    // const showDialog = ref(true);
    // const form: formType = reactive({
    //   copyCompanyList: [],
    // });
    const formData = ref<FormType>({
      copyCompanyList: [
        {
          id: 1,
          name: "12312",
        },
      ],
    });
    const companyName = ref("");
    const companyList: any = ref([]);

    // const closeDialog = () => {
    //   // showDialog.value = false;
    // };

    const search = () => {
      // const value = companyName.value.trim();
      // if (value) {
      //   memoryField(COMMON_COPY_COMPANY_LIST, value);
      // }
      getCompany();
    };

    // 获取我方公司
    const getCompany = async () => {
      // const { data } = await Api.getCompanyList({
      //   status: 0,
      //   nameLike: companyName.value.trim()
      // });
      companyList.value = [
        {
          id: 1,
          name: "123123",
        },
        {
          id: 2,
          name: "123123",
        },
        {
          id: 3,
          name: "123123",
        },
        {
          id: 4,
          name: "123123",
        },
      ];
    };

    // 选择公司
    const handleSelectionChange = (item: any) => {
      const param = { ...item, attr: "" };
      console.log(
        "form.value.copyCompanyList00000===",
        formData.value.copyCompanyList
      );
      const listAct = formData.value.copyCompanyList
        ? formData.value.copyCompanyList
        : [];
      listAct.push(param);
      formData.value.copyCompanyList = listAct;
      // const accID = form.value.copyCompanyList.map((row: any) => row.id);
      // if (!accID.includes(item.id)) {
      //   console.log('param===', param);

      //   form.value.copyCompanyList.push(param);
      // }
      console.log(
        "form.value.copyCompanyList===",
        formData.value.copyCompanyList
      );
    };
    const delSelectionChange = (row: any) => {
      console.log(row);
    };

    return {
      handleClose,
      delSelectionChange,
      dialogFlag,
      // showDialog,
      formData,
      // COMMON_COPY_COMPANY_LIST,
      companyName,
      companyList,
      // closeDialog,
      // querySearch,
      search,
      handleSelectionChange,
    };
  },
});
</script>

<style lang="scss" scoped>
.select-company-content {
  :deep(.el-dialog) {
    .el-dialog__body {
      padding-top: 10px;
      .search {
        margin-bottom: 15px;
        .el-autocomplete {
          width: 70%;
          margin-right: 5px;
        }
      }
      .el-table {
        margin-top: 20px;
        .require {
          color: #f56c6c;
          margin-right: 4px;
        }
        .el-table__header {
          th {
            background-color: #f4f4f5 !important;
            .cell {
              color: #909399;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
}
</style>
