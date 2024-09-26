

const names = ['abul', 'abul', 'sakib', 'tamim', 'masrafi','tamin'];
const number = [0,5,5,7,9,8,8,7,50];



const phonesArray = [
    {
      name: "iPhone 14",
      price: 999,
      camera: "12 MP",
      quantity: 2
    },
    {
      name: "Samsung Galaxy S23",
      price: 899,
      camera: "50 MP",
      quantity: 2
    },
    {
      name: "Google Pixel 7",
      price: 139,
      camera: "50 MP",
      quantity: 4
    },
    {
      name: "OnePlus 11",
      price: 749,
      camera: "48 MP",
      quantity: 2
    },
    {
      name: "Xiaomi Mi 13",
      price: 399,
      camera: "50 MP",
      quantity: 5
    }
  ];

  

function phonePrice(phones){
    let totalPrice = 0;
    for(const phone of phones){
        const price = phone.price * phone.quantity;
        totalPrice = totalPrice + price
    }
    return totalPrice

}

const price = phonePrice(phonesArray)

console.log(price)

