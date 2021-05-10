图像分类 demo，区分头像和模糊背景

## install

```bash
npm install
```

如果安装较慢可设置 BOA_TUNA=1

```bash
BOA_TUNA=1 npm install
```

## usage

- cli

```bash
node bin.js ./test.jpg
```

or

```bash
node bin.js --showlabel ./test.jpg
```

- js api

````js
const predict = require('image-classfication-demo');
(async () => {
  const v1 = await predict('./test.png');
  console.log(v1);
})();
```

## output
```json
{
  "labelMap": { "avator": 0, "blurBackground": 1 },
  "labelArray": ["avator", "blurBackground"],
  "feature": { "shape": [256, 256, 3] }
}
````

参见 [分类图片中的前端组件](https://alibaba.github.io/pipcook/#/zh-cn/tutorials/component-image-classification)。

所用数据集有所不同，这里用的是[http://ai-sample.oss-cn-hangzhou.aliyuncs.com/image_classification/datasets/imageclass-test.zip](http://ai-sample.oss-cn-hangzhou.aliyuncs.com/image_classification/datasets/imageclass-test.zip)

## pipeline

[https://github.com/alibaba/pipcook/blob/v1.3.0/example/pipelines/databinding-image-classification-mobilenet.json](https://github.com/alibaba/pipcook/blob/v1.3.0/example/pipelines/databinding-image-classification-mobilenet.json)

## colab

训练模型所用 [colab 地址](https://colab.research.google.com/drive/1xu8O0N0FbDuB1Q9sRg88gYfzv96nWzCD#scrollTo=-PFr0ddCmo6P)
