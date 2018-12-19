<template>
  <div>
    <p>
      <label>
        String：
        <input type="text" v-model="stringType">
      </label>
    </p>
    <p>
      <label>
        Number：
        <input type="text" v-model="numberType">
      </label>
    </p>
    <p>
      <label>
        Boolean：
        <input type="radio" name="boolean" value="true" v-model="booleanType">
        <label>True</label>
        <input type="radio" name="boolean" value="false" v-model="booleanType">
        <label>False</label>
      </label>
    </p>
    <div>
      <label>
        List：
        <div v-for="(item,i) in listType" :key="i">
          <input type="text" v-model="listType[i]">
        </div>
      </label>
    </div>
    <p>
      Object：
    </p>
    <p>
      <label>
        Name：
        <input type="text" v-model="objectType.name">
      </label>
      <label>
        Age：
        <input type="number" v-model="objectType.age">
      </label>
    </p>
    <div>
      Sex：
      <input type="radio" name="sex" value="0" v-model="objectType.sex">
      <label>man</label>
      <input type="radio" name="sex" value="1" v-model="objectType.sex">
      <label>woman</label>
    </div>
    <p>
      <button v-on:click="storeLocalStorage()">entry local storage</button>
      <button v-on:click="deleteLocalStorage()">delete local storage</button>
    </p>
  </div>

</template>

<script>
export default {
  name: 'LocalStorageView',
  localStorage: {
    stringKey: {
      type: String
    },
    numberKey: {
      type: Number
    },
    booleanKey: {
      type: Boolean
    },
    listKey: {
      type: Array
    },
    objectKey: {
      type: Object
    }
  },
  data: () => {
    return {
      stringType: 'Vue',
      numberType: 10,
      listType: [
        'item1', 'item2', 'item3'
      ],
      objectType: {
        name: 'John',
        age: 25,
        sex: '0'
      },
      booleanType: true
    }
  },
  methods: {
    storeLocalStorage: function () {
      this.$localStorage.set('stringKey', this.stringType)
      this.$localStorage.set('numberKey', this.numberType)
      this.$localStorage.set('booleanKey', this.booleanType)
      this.$localStorage.set('listKey', this.listType)
      this.$localStorage.set('objectKey', this.objectType)
    },
    deleteLocalStorage: function () {
      this.$localStorage.remove('stringKey')
      this.$localStorage.remove('numberKey')
      this.$localStorage.remove('booleanKey')
      this.$localStorage.remove('listKey')
      this.$localStorage.remove('objectKey')
    }
  }
}
</script>
