import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Sushi',
  components: {Swiper, SwiperSlide},
  props: {
  },
  data() {
    return {
      sliderData: [
        {name: 'sushi', img: '/src/assets/slide.png'},
        {name: 'sushi', img: '/src/assets/slide.png'},
        {name: 'sushi', img: '/src/assets/slide.png'},
        {name: 'sushi', img: '/src/assets/slide.png'},
        {name: 'sushi', img: '/src/assets/slide.png'},
        {name: 'sushi', img: '/src/assets/slide.png'},
      ],
      menuData: ['Меню', 'Акции', 'Новости', 'О нас', 'Карьера', 'Отзывы'],
      infoButton: [
        {className: 'self', text: 'Самовывоз 20 ммн'},
        {className: 'delivery', text: 'Доставка 60 ммн'},
        {className: 'promo', text: 'Промокод'},
        {className: 'coins', text: 'Суши-коины'},
        {className: 'gifts', text: 'Подарки'},
      ],
      miniCards: [
        {name: 'WOK', img: '/src/assets/vty.png' },
        {name: 'WOK', img: '/src/assets/vty.png' },
        {name: 'WOK', img: '/src/assets/vty.png' },
        {name: 'WOK', img: '/src/assets/vty.png' },
        {name: 'WOK', img: '/src/assets/vty.png' },
        {name: 'WOK', img: '/src/assets/vty.png' },
        {name: 'WOK', img: '/src/assets/vty.png' },
        {name: 'WOK', img: '/src/assets/vty.png' },
        {name: 'WOK', img: '/src/assets/vty.png' },
        {name: 'WOK', img: '/src/assets/vty.png' },
        {name: 'WOK', img: '/src/assets/vty.png' },
        {name: 'WOK', img: '/src/assets/vty.png' },
        {name: 'WOK', img: '/src/assets/vty.png' },
        {name: 'WOK', img: '/src/assets/vty.png' },
        {name: 'WOK', img: '/src/assets/vty.png' }
      ],
      catalogData: [
        {name: 'Нигири с тунцом опаленным', img: '/src/assets/3.png', price: 2.90, text: 'руб. за 1 порцию (1шт)' },
        {name: 'Нигири с тунцом опаленным', img: '/src/assets/3.png', price: 2.90, text: 'руб. за 1 порцию (1шт)' },
        {name: 'Нигири с тунцом опаленным', img: '/src/assets/3.png', price: 2.90, text: 'руб. за 1 порцию (1шт)' },
        {name: 'Нигири с тунцом опаленным', img: '/src/assets/3.png', price: 2.90, text: 'руб. за 1 порцию (1шт)' },
        {name: 'Нигири с тунцом опаленным', img: '/src/assets/3.png', price: 2.90, text: 'руб. за 1 порцию (1шт)' },
        {name: 'Нигири с тунцом опаленным', img: '/src/assets/3.png', price: 2.90, text: 'руб. за 1 порцию (1шт)' },
        {name: 'Нигири с тунцом опаленным', img: '/src/assets/3.png', price: 2.90, text: 'руб. за 1 порцию (1шт)' },
        {name: 'Нигири с тунцом опаленным', img: '/src/assets/3.png', price: 2.90, text: 'руб. за 1 порцию (1шт)' },
        {name: 'Нигири с тунцом опаленным', img: '/src/assets/3.png', price: 2.90, text: 'руб. за 1 порцию (1шт)' },
        {name: 'Нигири с тунцом опаленным', img: '/src/assets/3.png', price: 2.90, text: 'руб. за 1 порцию (1шт)' },
        {name: 'Нигири с тунцом опаленным', img: '/src/assets/3.png', price: 2.90, text: 'руб. за 1 порцию (1шт)' },
        {name: 'Нигири с тунцом опаленным', img: '/src/assets/3.png', price: 2.90, text: 'руб. за 1 порцию (1шт)' },
      ],
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true

      }
    }
  },
  created() {},
  mounted() {
  },
  computed: {
  },
  methods: {
  },
}
