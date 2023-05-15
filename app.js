const app = Vue.createApp({
  // data, functions
  // template: '<h2>I am the template</h2>'
  data() {
    return {
      url: "https://google.com",
      showBooks: true,
      books: [
        {
          title: "name of the wind",
          author: "patrick rothfuss",
          img: "assets/1.jfif",
          isFav: true,
        },
        {
          title: "Eloquent JavaScript",
          author: "Marijn Haverbeke",
          img: "assets/2.jfif",
          isFav: false,
        },
        {
          title: "JavaScript: The Good Parts",
          author: "Douglas Crockford",
          img: "assets/3.jfif",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
