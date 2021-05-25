## 实现一个组件间通信代码

在 vue2 里面，遇到 组件间通信的时候一般我会用到如下代码

```
// channel.js
import Vue from "vue";

export default new Vue();
```

```
// A.vue
<script>
	import channel from "./channel.js"
	export default {
		mounted() {
			channel.$on("btnClick", () => {
				console.log('xxx')
			});
		}
	}
</script>
```

```
// B.vue
<template>
  <div>
  	<button @click="handleBtnClick" value="click"/>
  </div>
</template>

<script>
	import channel from "./channel.js"
	export default {
		methods: {
			handleBtnClick: function() {
      channel.$emit('btnClick') 
			}
		}
	}
<script>
```

# 补充 vue3 


但是最近读到《JavaScript设计模式与开发实际》这本书，里面提到发布订阅者模式（也叫观察者模式），就想到了组件间通信的场景，现在就来尝试实现一下


