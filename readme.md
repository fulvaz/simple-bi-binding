how to implement a two way binding lib?
====


definition
----
binding between data and view!

observer pattern
---

observer
    - nofify (notify view to update)
    - reg (add setter)


improved observer
----

nofify: 用setter取代手动调用去通知dom更新
reg: 自动劫持class的data, 为每个data添加setter


模板渲染
---

为了简化说明, 这里的模板渲染只是一堆模板字符串, 使用replace进行字符串替换.

流程
---

### model -> view
data的值变化 -> 调用setter -> 使用data重新渲染字符串 -> 将字符串渲染到DOM

### view -> model
1. 从DOM中找到v-model的元素(一切为了简化)
2. 为元素绑定change事件(不用input怎么改?)
3. change事件修改data

问题
----

毕竟是一个极其简单的例子, 所以不存在模板解析 --- 后果是: input要在input unfocus之后才会刷新预览结果

有兴趣可以继续往下写, 那就是一个react或者是变化检测了