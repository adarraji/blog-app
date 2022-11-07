import React from "react";
import styled from "styled-components";


const posts = [
  {
    "id": 1,
    "title": "iPhone 9",
    "descr": "An apple mobile which is nothing like apple",
    "img": "https://dummyjson.com/image/i/products/1/img.jpg",

  },
  {
    "id": 2,
    "title": "iPhone X",
    "descr": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "img": "https://dummyjson.com/image/i/products/2/img.jpg",
  },
  {
    "id": 3,
    "title": "Samsung Universe 9",
    "descr": "Samsung's new variant which goes beyond Galaxy to the Universe",
    "img": "https://dummyjson.com/image/i/products/3/img.jpg",
  },
  {
    "id": 4,
    "title": "OPPOF19",
    "descr": "OPPO F19 is officially announced on April 2021.",
    "img": "https://dummyjson.com/image/i/products/4/img.jpg",
  },
  {
    "id": 5,
    "title": "Huawei P30",
    "descr": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    "img": "https://dummyjson.com/image/i/products/5/img.jpg",
  },
  {
    "id": 6,
    "title": "MacBook Pro",
    "descr": "MacBook Pro 2021 with mini-LED display may launch between September, November",
    "img": "https://dummyjson.com/image/i/products/6/img.png",
  },
  {
    "id": 7,
    "title": "Samsung Galaxy Book",
    "img": "https://dummyjson.com/image/i/products/7/img.jpg",
  },
  {
    "id": 8,
    "title": "Microsoft Surface Laptop 4",
    "descr": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    "img": "https://dummyjson.com/image/i/products/8/img.jpg",
  },
  {
    "id": 9,
    "title": "Infinix INBOOK",
    "descr": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    "img": "https://dummyjson.com/image/i/products/9/img.jpg",
  },
  {
    "id": 10,
    "title": "HP Pavilion 15-DK1056WM",
    "descr": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    "img": "https://dummyjson.com/image/i/products/10/img.jpeg",

  },
  {
    "id": 11,
    "title": "perfume Oil",
    "descr": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
    "img": "https://dummyjson.com/image/i/products/11/img.jpg",
  },
  {
    "id": 12,
    "title": "Brown Perfume",
    "descr": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
    "img": "https://dummyjson.com/image/i/products/12/img.jpg",
  },
  {
    "id": 13,
    "title": "Fog Scent Xpressio Perfume",
    "descr": "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
    "img": "https://dummyjson.com/image/i/products/13/img.webp",
  },
  {
    "id": 14,
    "title": "Non-Alcoholic Concentrated Perfume Oil",
    "descr": "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
    "img": "https://dummyjson.com/image/i/products/14/img.jpg",
  },
  {
    "id": 15,
    "title": "Eau De Perfume Spray",
    "descr": "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
    "img": "https://dummyjson.com/image/i/products/15/img.jpg",
  },
  {
    "id": 16,
    "title": "Hyaluronic Acid Serum",
    "descr": "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
    "img": "https://dummyjson.com/image/i/products/16/img.jpg",
  },
  {
    "id": 17,
    "title": "Tree Oil 30ml",
    "descr": "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
    "img": "https://dummyjson.com/image/i/products/17/img.jpg",
  },
  {
    "id": 18,
    "title": "Oil Free Moisturizer 100ml",
    "descr": "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
    "img": "https://dummyjson.com/image/i/products/18/img.jpg",
  },
  {
    "id": 19,
    "title": "Skin Beauty Serum.",
    "descr": "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
    "img": "https://dummyjson.com/image/i/products/19/img.jpg",
  },
  {
    "id": 20,
    "title": "Freckle Treatment Cream- 15gm",
    "descr": "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
    "img": "https://dummyjson.com/image/i/products/20/img.jpg",
  },
  {
    "id": 21,
    "title": "- Daal Masoor 500 grams",
    "descr": "Fine quality Branded Product Keep in a cool and dry place",
    "img": "https://dummyjson.com/image/i/products/21/img.png",
  },
  {
    "id": 22,
    "title": "Elbow Macaroni - 400 gm",
    "descr": "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
    "img": "https://dummyjson.com/image/i/products/22/img.jpg",
  },
  {
    "id": 23,
    "title": "Orange Essence Food Flavou",
    "descr": "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
    "img": "https://dummyjson.com/image/i/products/23/img.jpg",
  },
  {
    "id": 24,
    "title": "cereals muesli fruit nuts",
    "descr": "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
    "img": "https://dummyjson.com/image/i/products/24/img.jpg",
  },
  {
    "id": 25,
    "title": "Gulab Powder 50 Gram",
    "descr": "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
    "img": "https://dummyjson.com/image/i/products/25/img.jpg",
  },
  {
    "id": 26,
    "title": "Plant Hanger For Home",
    "descr": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
    "img": "https://dummyjson.com/image/i/products/26/img.jpg",
  },
  {
    "id": 27,
    "title": "Flying Wooden Bird",
    "descr": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
    "img": "https://dummyjson.com/image/i/products/27/img.webp",
  },
  {
    "id": 28,
    "title": "3D Embellishment Art Lamp",
    "descr": "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
    "img": "https://dummyjson.com/image/i/products/28/img.jpg",
  },
  {
    "id": 29,
    "title": "Handcraft Chinese style",
    "descr": "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
    "img": "https://dummyjson.com/image/i/products/29/img.webp",
  },
  {
    "id": 30,
    "title": "Key Holder",
    "descr": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    "img": "https://dummyjson.com/image/i/products/30/img.jpg",
  }
]


const Home = () => {
  return (
    <div>Home</div>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #b9e7e7;
`;

export default Home