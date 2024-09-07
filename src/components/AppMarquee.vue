<template>
  <div class="wrapper">
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="['item', scrollDirection === 'left' ? 'item__left' : 'item__right']"
      :style="getItemStyle(index, item.backgroundImage)"
    >
      <div class="result__box">
        {{ item.result }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
    props: {
        scrollDirection: {
            type: String,
            default: 'left',
            validator: value => ['left', 'right'].includes(value)
        }
    },
    setup(props) {
        
        const items = ref([
            { backgroundImage: 'url("/src/assets/images/image1.jpg")', result: 'Topik 4' },
            { backgroundImage: 'url("/src/assets/images/image2.jpg")', result: 'Topik 5' },
            { backgroundImage: 'url("/src/assets/images/image3.jpg")', result: 'Topik 6' },
            { backgroundImage: 'url("/src/assets/images/image4.jpg")', result: 'Topik 4' },
            { backgroundImage: 'url("/src/assets/images/image5.jpg")', result: 'Topik 6' },
            { backgroundImage: 'url("/src/assets/images/image6.jpg")', result: 'Topik 5' },
            { backgroundImage: 'url("/src/assets/images/image7.jpg")', result: 'Topik 5' },
            { backgroundImage: 'url("/src/assets/images/image8.jpg")', result: 'Topik 6' }
        ]);
        
        const getItemStyle = (index, backgroundImage) => {
            const delay = (40 / items.value.length) * (items.value.length - index - 1) * -1;
            return {
                animationDelay: `${delay}s`,
                backgroundImage: backgroundImage,
                backgroundSize: '100%',
                backgroundPosition: 'center'
            };
        };

        return {
            getItemStyle,
            items,
            scrollDirection: props.scrollDirection
        }
    }
}
</script>

<style>


</style>
