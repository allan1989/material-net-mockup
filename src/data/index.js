import { getUniqueValues, getAllValues } from './utils';

export const data = [
  {
    id: 1,
    brand: "Asus",
    img: "https://media.materiel.net/r150/products/MN0005595304_1.jpg",
    price: "599.95",
    product: "Asus R540UA-DM1021T",
    specs: "Bureautique, 15,6\", Core i3-7020U, RAM 4 Go, SSD 128 Go + HDD 1 To, Windows 10, 1,90 kg"
  },
  {
    id: 2,
    brand: "Asus",
    img: "https://media.materiel.net/r150/products/MN0005515173_1.jpg",
    price: "949.95",
    product: "ASUS Vivobook S15 S531FA-EJ140T",
    specs: "Bureautique, 15,6\", Core i5-8265U, RAM 8 Go, SSD 256 Go + HDD 1 To, Windows 10, 1,80 kg"
  },
  {
    id: 3,
    brand: "Lenovo",
    img: "https://media.materiel.net/r150/products/MN0005648620_1.jpg",
    price: "649.95",
    product: "LENOVO Ideapad S340-15API (81NC002VFR)",
    specs: "Bureautique, 15,6\", Ryzen 5-3500U, RAM 8 Go, SSD 128 Go + HDD 1 To, Windows 10, 1,60 kg"
  },
  {
    id: 4,
    brand: "Dell",
    img: "https://media.materiel.net/r150/products/MN0005427924_1.jpg",
    price: "969.95",
    product:"DELL G3 15-3590 (PNF46)",
    specs: "Gamer, 15,6\", Core i5-9300H, GTX 1650, RAM 8 Go, SSD 256 Go + HDD 1 To, Windows 10, 2,34 kg"
  },
  {
    id: 5,
    brand: "Dell",
    img: "https://media.materiel.net/r150/products/MN0005379376_1_0005436118.jpg",
    price: "1799.95",
    product: "DELL G7 17-7790 (RW10Y)",
    specs: "Gamer, 17,3\", Core i7-9750H, RTX 2060, RAM 8 Go, SSD 256 Go + HDD 1 To, Windows 10, 3,14 kg"
  },
  {
    id: 6,
    brand: "Dell",
    img: "https://media.materiel.net/r150/products/MN0005316112_1.jpg",
    price: "1749.95",
    product:"DELL G5 15-5590 (HVJ8G)",
    specs: "Gamer, 15,6\", Core i7-8750H, RTX 2060, RAM 16 Go, SSD 256 Go + HDD 1 To, Windows 10, 2,68 kg"
  },
  {
    id: 7,
    brand: "HP",
    img: "https://media.materiel.net/r150/products/MN0005431347_1_0005431505_0005435599.jpg",
    price: "1899.95",
    product: "HP Omen 17-cb0034nf",
    specs:"Gamer, 17,3\", Core i7-9750H, RTX 2070, RAM 8 Go, SSD 512 Go + HDD 1 To, Windows 10, 3,32 kg"
  },
  {
    id: 8,
    brand: "Acer",
    img: "https://media.materiel.net/r150/products/MN0005629160_1.jpg",
    price: "2999.95",
    product: "ACER Predator Helios 700 PH717-71-72MT",
    specs: "Gamer, 17,3\", Core i7-9750H, RTX 2080, RAM 32 Go, SSD 512 go + HDD 1 To, Windows 10, 4,8 kg"
  },
  {
    id: 9,
    brand: "Acer",
    img: "https://media.materiel.net/r150/products/MN0005414222_1_0005414268_0005477395.jpg",
    price: "1199.95",
    product: "ACER Nitro 5 AN515-54-70EX",
    specs: "Gamer, 15,6\", Core i7-9750H, GTX 1650, RAM 8 Go, SSD 256 Go + HDD 1 To, Windows 10, 2,30 kg"
  },
  {
    id: 10,
    brand: "Acer",
    img: "https://media.materiel.net/r150/products/MN0005480399_1.jpg",
    price: "629.95",
    product: "ACER Aspire 3 A315-42-R8P6",
    specs: "Bureautique, 15,6\", Ryzen 5 3500U, RAM 4 Go, SSD 128 Go + HDD 1 To, Windows 10, 1,90 kg"
  }
];

export const brandsArrayUniqueValues = getUniqueValues(data);

export const brandsArrayAllValues = getAllValues(data);


export const options = {
  product: "Nom (Défaut)",
  brand: "Marque",
  priceAsc: "Du - cher au + cher",
  priceDesc: "Du + cher au - cher"
}
