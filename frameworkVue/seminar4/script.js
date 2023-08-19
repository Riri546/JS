var example1 = new Vue({
    el: '#example-1',
    data: {
      // sort: item,
      sortKey: 'name',
      checked: false,
      searchString: "",
      items: [
        { price: '1', name: 'mm' },
        { price: '22', name: 'aa' },
        { price: '55', name: 'dd' },
        { price: '77', name: 'gg' },
        { price: '123', name: 'kk' },
        { price: '53', name: 'mn' },
      ]
    },
    computed: {
      sortedItems: function () {
        let searchString = this.searchString;
        const sortedArray = this.items.sort((a, b) => {
          if (a[this.sortKey] < b[this.sortKey]) return -1
          if (a[this.sortKey] > b[this.sortKey]) return 1
          return 0
        });
        if (!searchString) { 
          return sortedArray;
        } else {
          searchString = searchString.trim().toLowerCase();
          const search_array = sortedArray.filter((item) => {
            if (item.name.toLowerCase().indexOf(searchString) !== -1) {
              return item;
            }
          });
          return search_array;
        }
      },
    }
  })