<template>
  <div>
    <div>
      String：{{stringType}}
    </div>
    <div>
      Number：{{numberType}}
    </div>
    <div>
      Boolean：{{booleanType}}
    </div>
    <div>
      List：
      <li v-for="(item,i) in listType" :key="i">
        {{item}}
      </li>
    </div>
    <div>
      Object：
      <div v-if="Object.keys(objectType).length !== 0">
        <div>
          Name：{{objectType.name}}
        </div>
        <div>
          Age：{{objectType.age}}
        </div>
        <div>
          Sex:{{sex[objectType.sex]}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LocalStorageGet',
  data: () => {
    return {
      stringType: '',
      numberType: 0,
      listType: [],
      objectType: {},
      booleanType: false,
      sex: ['man', 'woman']
    }
  },
  mounted () {
    this.stringType = this.$localStorage.get('stringKey', 'not entry')
    this.numberType = this.$localStorage.get('numberKey')
    this.listType = this.$localStorage.get('listKey')
    this.objectType = this.$localStorage.get('objectKey')
    this.booleanType = this.$localStorage.get('booleanKey')
  }
}
</script>
