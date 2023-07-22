const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Movado",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/movado1.png",
      },
      {
        code: "blue",
        img: "./img/movado2.png",
      },
      {
        code: "gray",
        img: "./img/movado3.png",
      },
      {
        code: "pink",
        img: "./img/movado4.png",
      },
      {
        code: "red",
        img: "./img/movado5.png",
      },

    ],
  },
  {
    id: 2,
    title: "Seiko",
    price: 149,
    colors: [
      {
        code: "black",
        img: "./img/seiko1.png",
      },
      {
        code: "gray",
        img: "./img/seiko2.png",
      },
      {
        code: "brown",
        img: "./img/seiko3.png",
      },
      {
        code: "gold",
        img: "./img/seiko4.png",
      },
      {
        code: "green",
        img: "./img/seiko5.png",
      },
    
    ],
  },
  {
    id: 3,
    title: "Fossil",
    price: 199,
    colors: [
      {
        code: "skyblue",
        img: "./img/fossil1.png",
      },
      {
        code: "gray",
        img: "./img/fossil2.png",
      },
      {
        code: "black",
        img: "./img/fossil3.png",
      },
      {
        code: "yellow",
        img: "./img/fossil4.png",
      },
      {
        code: "pink",
        img: "./img/fossil5.png",
      },
    ],
  },
  {
    id: 4,
    title: "Titan",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/titan1.png",
      },
      {
        code: "blue",
        img: "./img/titan2.png",
      },
      {
        code: "gray",
        img: "./img/titan3.png",
      },
      {
        code: "pink",
        img: "./img/titan4.png",
      },
      {
        code: "purple",
        img: "./img/titan5.png",
      },
    ],
  },
  {
    id: 5,
    title: "Citizen",
    price: 135,
    colors: [
      {
        code: "green",
        img: "./img/citizen1.png",
      },
      {
        code: "black",
        img: "./img/citizen2.png",
      },
      {
        code: "gold",
        img: "./img/citizen3.png",
      },
      {
        code: "purple",
        img: "./img/citizen4.png",
      },
      {
        code: "blue",
        img: "./img/citizen5.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
