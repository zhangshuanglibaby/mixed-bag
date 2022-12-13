<!--
 * @Date: 2022-12-13 14:04:57
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-13 22:24:40
 * @Description: 这是****文件
-->
<template>
  <div>
    <a-card :bordered="false" class="new_card">
      <FormTable
        :columns="columns"
        :pagination="false"
        :data-source="tableData"
        bordered>
        <div slot="mytitle0" style="padding-left: 10px; text-align: left; font-size: 12px">
          <div>核对方法</div>
          <div style="word-break: break-all; white-space: pre-wrap">
            <span>列：</span>
            1=2+ …… +14
          </div>
          <div style="word-break: break-all; white-space: pre-wrap">
            <span>行：</span>
            1=3+ …… +12
          </div>
        </div>
        <!-- <TitleSlot
        v-for="v in numArr(1, 13)"
        :key="v"
        :slot="'mytitle' + v"
        type="1"
        :num="v"
        :name="columnName(v)"
        :height="142"></TitleSlot> -->
       <!-- <TitleSlot slot="mytitle1" :height="176"></TitleSlot> -->
        <TitleSlot
          slot="mytitle1"
          :type="1"
          :num="1"
          name="合计"
          :height="218"
          ></TitleSlot>
          <TitleSlot
            slot="mytitle2"
            :type="3"
            :nums="[2, 3, 4]"
            :names="['合计', '调节器', '建议程序处罚']"
            :height="218"
          ></TitleSlot>
        <TitleSlot
          v-for="v in numArr(5, 8)"
          :type="1"
          :key="v"
          :slot="`mytitle${v}`"
          :name="columnName(v)"
          :num="v"
          :height="154"
          ></TitleSlot>
          <TitleSlot
            slot="mytitle9"
            :type="1"
            name="结案(起)"
            :num="9"
            :height="218"
          ></TitleSlot>
          <TitleSlot
            slot="mytitle10"
            :type="3"
            :nums="[10, 11]"
            :names="['合计', '女']"
            :num="19"
            :height="186"
          ></TitleSlot>
          <TitleSlot
            v-for="v in numArr(12,13)"
            :key="v"
            :slot="`mytitle${v}`"
            :type="1"
            :num="v"
            :name="columnName(v)"
            :height="154"
          ></TitleSlot>
      </FormTable>
    </a-card>
  </div>
</template>
<script>
import data from './data/index.js'
import FormTable from './component/FormTable.vue'
import TitleSlot from './component/TitleSlot.vue'
export default {
  name: 'tableView',
  components: {
    FormTable,
    TitleSlot
  },
  data () {
    return {
      tableData: [],
      columns: []
    }
  },
  mounted () {
    this.tableData = this.produceData()
    this.columns = this.produceColumns()
    console.log(this.produceData())
    console.log(this.columns, 'this.columns this.columns ')
  },
  computed: {
    columnName () {
      return (index) => {
        const arr = [
          '合计',
          '违法犯罪案件',
          '治安事件',
          '火灾事故',
          '交通事故',
          '治安灾害事故',
          '灾害事故',
          '自杀',
          '纠纷',
          '家庭暴力',
          '公民求助',
          '走失寻人',
          '警务监督'
        ]
        return arr[index - 1]
      }
    },
    numArr () {
      return (num1, num2) => {
        const length = num2 + 1
        const arr = []
        for (let i = num1; i < length; i++) {
          arr.push(i)
        }
        return arr
      }
    }
  },
  methods: {
    // 构造表格数据
    produceData () {
      const tableData = data
      tableData.forEach((item, index) => {
        // 增加序号
        item.column04 = index + 1
        // 假设有13列的数据 则继续填充列
        for (let i = 1; i < 14; i++) {
          item['column' + i] = '-'
        }
      })
      return tableData
    },
    // 构造列数据
    produceColumns () {
      // 构造核对方法
      const columns = []
      // S 处理第一列的格式
      columns.push({
        dataIndex: 'column01',
        width: 65,
        colSpan: 4, // 跨4列
        slots: { title: 'mytitle0' }, // 标题插槽-自定义渲染
        customRender: (text, row, index) => { // 渲染函数 可以设置表格行/列合并
          // 由数据结构可以看出来 第一行的数据占了12行，第13、20、21、22只占了一行，第14行占了6行
          const rowSpan = {
            1: 12,
            13: 1,
            14: 6,
            20: 1,
            21: 1,
            22: 1
          }
          const obj = {
            children: text,
            attrs: {}
          }
          // column04 其实是序号那列
          const obj1 = rowSpan[parseInt(row.column04)]
          const colSpan = {
            22: 4 // 附记那行占4列
          }
          const obj2 = colSpan[parseInt(row.column04)]
          if (typeof obj1 !== 'undefined') {
            obj.attrs.rowSpan = obj1
            // 对于只占一行的数据 跨3列
            if (obj1 === 1) {
              obj.attrs.colSpan = 3
            }
          } else {
            obj.attrs.rowSpan = 0 // 这里一定要设置为0  让占行的其他数据不展示
          }
          if (typeof obj2 !== 'undefined') {
            obj.attrs.colSpan = obj2
          }
          return obj
        }
      })
      // E 处理第一列的格式

      // S 处理第二列的格式
      columns.push({
        dataIndex: 'column02',
        width: 65,
        colSpan: 0,
        customRender: (text, row, index) => {
          const rowSpan = {}
          const colSpan = {}
          const length = data.length // 总共的行数
          // 初始化让第二列的数据 让第二列每行的格子都跨2列
          for (let i = 1; i < length + 1; i++) {
            colSpan[i] = 2
          }
          colSpan[2] = 1
          colSpan[16] = 1
          colSpan[13] = 0
          colSpan[20] = 0
          colSpan[21] = 0
          colSpan[22] = 0
          const obj = {
            children: text,
            attrs: {}
          }
          // console.log(colSpan, 'colSpancolSpan')
          const obj1 = rowSpan[parseInt(row.column04)]
          const obj2 = colSpan[parseInt(row.column04)]
          if (typeof obj1 !== 'undefined') {
            obj.attrs.rowSpan = obj1
          }
          obj.attrs.colSpan = obj2
          return obj
        }
        // customCell: (record, rowIndex) => {

        // }
      })
      // E 处理第二列的格式

      // S 处理第三列的格式
      columns.push({
        dataIndex: 'column03',
        width: 100,
        colSpan: 0,
        customRender: (text, row, index) => {
          const colSpan = {}
          const length = data.length // 总共的行数
          for (let i = 0; i < length + 1; i++) {
            // 第三列大多没数据 可以设置0
            colSpan[i] = 0
          }
          colSpan[2] = 1
          colSpan[16] = 1
          const obj = {
            children: text,
            attrs: {}
          }
          const isColSpan = parseInt(row.column04)
          isColSpan && (obj.attrs.colSpan = colSpan[parseInt(row.column04)])
          return obj
        }
      })
      // E 处理第三列的格式

      // S 处理第四列的格式
      columns.push({
        dataIndex: 'column04',
        width: 40,
        colSpan: 0,
        customRender: (text, row, index) => {
          const obj = {
            children: text,
            attrs: {}
          }
          const length = data.length // 总共的行数
          // 最后一行不需要展示序号
          if (index === length - 1) {
            obj.attrs.colSpan = 0
          }
          return obj
        }
      })
      // E 处理第四列的格式

      columns.push({
        slots: { title: 'mytitle1' },
        dataIndex: 'column1',
        width: 65,
        customRender: (text, row, index) => {
          const length = data.length // 总共的行数
          const obj = {
            children: text,
            attrs: {}
          }
          // 针对处理附记那行
          if (index === length - 1) {
            obj.attrs.colSpan = 13
            obj.children = (
              <div style="text-align:left;padding-left:20px">
                <div style="display:flex;align-items:center;">1.在所有报警情况中无效报警&nbsp;&nbsp;15&nbsp;&nbsp;起；</div>
                <div style="display:flex;align-items:center;">2.公安机关针对家庭暴力行为出具告诫书&nbsp;&nbsp;15&nbsp;&nbsp;起；</div>
              </div>
            )
          }
          return obj
        }
      })

      // 处理标题
      const obj = {
        title: '查处违法人员', // 第一层
        children: []
      }
      obj.children.push({
        slots: { title: 'mytitle2' },
        dataIndex: 'column2',
        width: 65,
        colSpan: 3
      })
      for (let i = 3; i < 5; i++) {
        obj.children.push({
          dataIndex: 'column' + i,
          width: 65,
          colSpan: 0
        })
      }
      console.log(obj.children, 'kkkk')
      // const obj2 = {
      //   title: '年龄',
      //   children: []
      // }
      // for (let i = 5; i < 9; i++) {
      //   obj2.children.push({
      //     slots: { title: 'mytitle' + i },
      //     dataIndex: 'column' + i,
      //     width: 65
      //   })
      // }
      // obj.children.push(obj2)
      // const obj3 = {
      //   title: '行政处罚',
      //   children: []
      // }
      // obj3.children.push({
      //   slots: { title: 'mytitle9' },
      //   dataIndex: 'column9',
      //   width: 65,
      //   colSpan: 1
      // })
      // const obj4 = {
      //   title: '本月抓获',
      //   children: []
      // }
      // obj4.children.push({
      //   slots: { title: 'mytitle10' },
      //   dataIndex: 'column10',
      //   width: 65,
      //   colSpan: 2
      // })
      // for (let i = 11; i < 12; i++) {
      //   obj4.children.push({
      //     dataIndex: 'column' + i,
      //     width: 65,
      //     colSpan: 0
      //   })
      // }
      // obj3.children.push(obj4)
      // obj.children.push(obj3)
      // columns.push(obj)
      // for (let i = 12; i < 14; i++) {
      //   columns.push({
      //     slots: { title: 'mytitle' + i },
      //     dataIndex: 'column' + i,
      //     width: 65,
      //     customRender: (text, row, index) => {
      //       const obj = {
      //         children: text,
      //         attrs: {}
      //       }
      //       const length = data.length // 总共的行数
      //       if (index === length - 1) {
      //         obj.attrs.colSpan = 0
      //       }
      //       return obj
      //     }
      //   })
      // }
      columns.push(obj)
      for (let i = 5; i < 14; i++) {
        columns.push({
          slots: { title: 'mytitle' + i },
          dataIndex: 'column' + i,
          with: 65,
          customRender: (text, row, index) => {
            const obj = {
              children: text,
              attrs: {}
            }
            const length = data.length // 总共的行数
            if (index === length - 1) {
              obj.attrs.colSpan = 0
            }
            return obj
          }
        })
      }
      console.log(columns, 'col')
      return columns
    }
  }
}
</script>
<style lang='less' scoped>
.new_card {
  height: 100%;
}
</style>
