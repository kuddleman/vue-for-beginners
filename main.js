const app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './img/vmSocks-green.jpg',
    description: 'These socks are hot and heavy',
    link: 'https://www.google.com',
    inventory: 0,
    onSale: true,
    details: [
      "80% cotton", 
      "20% polyester", 
      "Gender-neutral"
    ],
    sizes: [ "XL", "L", "M", "S" ],
    cart: 0,
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: './img/vmSocks-green.jpg'
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: './img/vmSocks-blue.jpg'
      }
    ]
  },
  methods: {
    addToCart: function() {
      this.cart += 1;
    },
    subtractFromCart: function() {
      this.cart -= 1;
    },
    updateProduct: function(variantImage) {
      this.image = variantImage
    }
  }
})