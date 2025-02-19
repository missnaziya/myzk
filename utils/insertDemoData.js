const fs = require('fs');
const csv = require('csv-parser');
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const csvFilePath = './shipping-details.csv';


const demoProducts = [
  // charger section start
  {
    id: "bb8e0a4e-98d1-4c25-adfc-0c46113aec7a",
    title: "5V 1A Mobile Charger",
    price: 499,
    salePrice: 149,
    rating: 5,
    description:
      "5V 1A Mobile Charger. Wall Charger. USB Power Adapter. Wall Charger for All iOS & Android Devices, Tablets, Smart Watch, Bluetooth Speakers, TWS Wireless Neckband, Power Bank. Color: White.",
    mainImage: "5vcharger-primary.webp",
    alternateImage1: "5vcharger1.webp",
    alternateImage2: "5vcharger2.webp",
    alternateImage3: "5vcharger3.webp",
    alternateImage4: "5vcharger4.webp",
    slug: "5v-1ACharger-charger",
    manufacturer: "dtm",
    categoryId: "17daa71c-28a2-4a03-a421-49f87ba5ee21",
    inStock: 10,
  },
  {
    id: "3dc9ab53-cc23-4932-9418-a4611dafdf8c",
    title: "5V-2.4A Mobile Charger",
    price: 499,
    salePrice: 199,
    rating: 5,
    description:
      "The charger provides a 5V output with a current of 2.4A. This allows for faster charging than standard 1A chargers but is not as fast as some high-power chargers (like 18W or 30W fast chargers).",
    mainImage: "5v_2.4_primarycharger.webp",
    alternateImage1: "5v_2.4charger_1.webp",
    alternateImage2: "5v_2.4charger_2.webp",
    alternateImage3: "5v_2.4charger_3.webp",
    alternateImage4: "5v_2.4charger_4.webp",
    slug: "5V-2.4A-mobile-charger-first-charger",
    manufacturer: "dtm",
    categoryId: "17daa71c-28a2-4a03-a421-49f87ba5ee21",
    inStock: 10,
  },
  {
    id: "0c77e50e-4e81-4038-b59d-024b0b70811f",
    title: "20W PD Charger",
    price: 799,
    salePrice: 249,
    rating: 5,
    description:
      "PD 20W CHARGER MATERIAL : ABS PLASTIC WEIGHT: 90G COLOUR: WHITE INPUT: 270V OUTPUT: 3A WATTAGE: 20W",
    mainImage: "pdcharger-primary.webp",
    alternateImage1: "pdcharger1.webp",
    alternateImage2: "pdcharger2.webp",
    alternateImage3: "pdcharger3.webp",
    alternateImage4: "pdcharger4.webp",
    slug: "pd-charger-a-charger",
    manufacturer: "dtm",
    categoryId: "17daa71c-28a2-4a03-a421-49f87ba5ee21",
    inStock: 10,
  },
  {
    id: "3b110cc4-d75f-4138-8f99-9b0d6a394aee",
    title: "Dual Port USB Charger",
    price: 199,
    salePrice: 99,
    rating: 5,
    description:
      "Dual Port Convenience: Charge two devices simultaneously with the dual-port design. Safety Features: Overcharge protection to ensure the safety of your devices. Color: White.",
    mainImage: "dualcharger_primary.webp",
    alternateImage1: "dualcharger_1.webp",
    alternateImage2: "dualcharger_2.webp",
    alternateImage3: "dualcharger_3.webp",
    alternateImage4: "dualcharger_4.webp",
    slug: "dual-port-charger-new-products-dual",
    manufacturer: "dtm",
    categoryId: "17daa71c-28a2-4a03-a421-49f87ba5ee21",
    inStock: 10,
  },
  // chager section end 
 
  // Water Tank Alarm Section start
  {
    id: "56681bf5-dfc5-46cb-9486-6082ee845cda",
    title: "Water Tank Alarm",
    price: 799,
    salePrice: 249,
    rating: 5,
    description:
      "Type: Wired, Buzzer & LED Indicator Sensors: Float Switch Power Source: AC Power (Battery Backup Optional) Material: Weatherproof Plastic Casing",
    mainImage: "wateralarm-primary.webp",
    alternateImage1: "wateralarm_1.webp",
    alternateImage2: "wateralarm_2.webp",
    alternateImage3: "wateralarm_3.webp",
    alternateImage4: "wateralarm_4.webp",
    slug: "water-tank-alarm-new-products",
    manufacturer: "dtm",
    categoryId: "a21e4162-eaed-4e48-93a7-130b9a45bc34",
    inStock: 10,
  },

  {
    id: "569694fa-bff9-4f3a-ae6a-6a64ba7420e1",
    title: "Water Tank Alarm",
    price: 799,
    salePrice: 299,
    rating: 5,
    description:
      "Type: Wired, Buzzer & LED Indicator Sensors: Float Switch Power Material: Weatherproof Plastic Casing, Color: Red & White.",
    mainImage: "watertankalarm_primary.webp",
    alternateImage1: "watertankalarm_1.webp",
    alternateImage2: "watertankalarm_2.webp",
    alternateImage3: "watertankalarm_3.webp",
    alternateImage4: "watertankalarm_4.webp",
    slug: "water-tank-alarm-second-tank-alam-water",
    manufacturer: "dtm",
    categoryId: "a21e4162-eaed-4e48-93a7-130b9a45bc34",
    inStock: 10,
  },
  {
    id: "569694fa-bff9-4f3a-ae6a-6a64ba742021",
    title: "Water Tank Alarm",
    price: 799,
    salePrice: 249,
    rating: 5,
    description:
      "Type: Wired, Buzzer & LED Indicator Sensors: Float Switch Power Material: Weatherproof Plastic Casing, Color: White.",
    mainImage: "watertank_primary.webp",
    alternateImage1: "watertank_1.webp",
    alternateImage2: "watertank_2.webp",
    alternateImage3: "watertank_3.webp",
    alternateImage4: "watertank_4.webp",
    slug: "water-tank-alarm-second-tank-alam-first",
    manufacturer: "dtm",
    categoryId: "a21e4162-eaed-4e48-93a7-130b9a45bc34",
    inStock: 10,
  },

// Water Tank Alarm Section end
  // Socket Board Section start
  {
    id: "12f68197-a1ec-425f-970d-5fd5487b291t",
    title: "Extension Board",
    price: 799,
    salePrice: 349,
    rating: 5,
    description:
      "4 Way Strip with Individual Switch (240V Multipurpose). 6A 4 Way Extension Board. Length: 3M Cord Length. 4 Universal Sockets. Color: Red & White.",
    mainImage: "extension_primary.webp",
    alternateImage1: "extension_1.webp",
    alternateImage2: "extension_2.webp",
    alternateImage3: "extension_3.webp",
    alternateImage4: "extension_4.webp",
    slug: "socket-board-red-extension",
    manufacturer: "dtm",
    categoryId: "0d1be367-75ac-4078-b363-2ba6c057eeb2",
    inStock: 10,
  },
 // Socket Board Section end
  // Mini UPS Router Section start
  {
    id: "652b6de0-daec-4acd-8ede-c129cf80ffe3",
    title: "Mini UPS ",
    price: 1999,
    salePrice: 799,
    rating: 5,
    description:
      "Mini UPS for 12V Wi-Fi Router Broadband Modem. UPS Power Backup During Power Cuts. Broadband Modem. Compatible with Routers, Set Top Box, Alexa, Mini Camera. Color: Black.",
    mainImage: "router_primary.webp",
    alternateImage1: "router_1.webp",
    alternateImage2: "router_2.webp",
    alternateImage3: "router_3.webp",
    alternateImage4: "router_4.webp",
    slug: "mini-wifi-ups-router-12v-wifi",
    manufacturer: "dtm",
    categoryId: "e59984e3-7ec2-445d-a5e0-1e6c001205a9",
    inStock: 10,
  },
// Mini UPS Router Section end
  // Data Cable Section start
  {
    id: "675218ea-83fe-4dd8-845c-f1e4cc05bfe4",
    title: "Oydis USB-A to Micro USB",
    price: 499,
    salePrice: 99,
    rating: 5,
    description:
      "USB-A to Micro USB Fast Charging Cable. 3A Braided & Metal. Length: 1m. Color: Red & Black.",
    mainImage: "redcable_primary.webp",
    alternateImage1: "redcable_1.webp",
    alternateImage2: "redcable_2.webp",
    alternateImage3: "redcable_3.webp",
    alternateImage4: "redcable_4.webp",
    slug: "micro-usb-a-braided-data-cable-one",
    manufacturer: "dtm",
    categoryId: "d59c9c3b-42fc-4258-a8ea-417659f084aa",
    inStock: 10,
  },

  {
    id: "3f384f1d-a149-41e4-b1a6-eedc8f8218a4",
    title: "USB-A to Micro USB",
    price: 499,
    salePrice: 99,
    rating: 5,
    description:
      "USB To Micro-USB. 3 Amp. Data sync at 480 Mbps. Cotton Braiding. Color: Black/Grey. Compatible with all Micro-USB devices.",
    mainImage: "greycable_primary.webp",
    alternateImage1: "greycable_1.webp",
    alternateImage2: "greycable_2.webp",
    alternateImage3: "greycable_3.webp",
    alternateImage4: "greycable_4.webp",
    slug: "micro-usb-braided-data-cable-first-3ab-two",
    manufacturer: "dtm",
    categoryId: "d59c9c3b-42fc-4258-a8ea-417659f084aa",
    inStock: 10,
  },
  {
    id: "01a0348e-9cfb-41df-8245-46f80116g9d3",
    title: "USB-A to Micro USB",
    price: 499,
    salePrice: 149,
    rating: 5,
    description:
      "1M 3Amp USB-A to Micro USB. Compatible for Smartphones, Tablets, Laptops & other Micro USB devices, 480Mbps Data Sync. Quick Charge 3.0 Color: Black",
    mainImage: "d-blackcable_primary.webp",
    alternateImage1: "d-blackcable_1.webp",
    alternateImage2: "d-blackcable_2.webp",
    alternateImage3: "d-blackcable_3.webp",
    alternateImage4: "d-blackcable_4.webp",
    slug: "micro-usb-pvc-data-cable-first-micro-cable-three",
    manufacturer: "dtm",
    categoryId: "d59c9c3b-42fc-4258-a8ea-417659f084aa",
    inStock: 10,
  },
  {
    id: "24e0cd8c-c4c8-4dcb-a75d-2b76c2ebcaf6",
    title: "USB-A to Micro USB",
    price: 499,
    salePrice: 99,
    rating: 5,
    description:
      "USB-A to Micro USB. 3A Fast Charging Cable. Compatible with Android Phones/Tablets, 480mbps Data Transfer Speed. Tangle-Free USB Cable. Round.",
    mainImage: "v-whitecable_primary.webp",
    alternateImage1: "v-whitecable_1.webp",
    alternateImage2: "v-whitecable_2.webp",
    alternateImage3: "v-whitecable_3.webp",
    alternateImage4: "v-whitecable_4.webp",
    slug: "micro-usb-pvc-data-cable-first-four",
    manufacturer: "dtm",
    categoryId: "d59c9c3b-42fc-4258-a8ea-417659f084aa",
    inStock: 10,
  },
  {
    id: "3c110c29-afc3-42e9-a040-1f3ababc0508",
    title: " USB to Type C",
    price: 499,
    salePrice: 119,
    rating: 5,
    description:
      "USB to Type C Premium. Fast Charging Data Cable. Length: 1m. 3A Braided & Metal. Type C Premium Fast Charging Data Cable. Color: White & Black.",
    mainImage: "blackwhitecable_primary.webp",
    alternateImage1: "blackwhitecable_1.webp",
    alternateImage2: "blackwhitecable_2.webp",
    alternateImage3: "blackwhitecable_3.webp",
    alternateImage4: "blackwhitecable_4.webp",
    slug: "type-c-braided-data-cable-p-five",
    manufacturer: "dtm",
    categoryId: "d59c9c3b-42fc-4258-a8ea-417659f084aa",
    inStock: 10,
  },
  {
    id: "71def91f-9bf7-43ef-97c9-5ff8b8ec54b5",
    title: " USB to Type C",
    price: 499,
    salePrice: 149,
    rating: 5,
    description:
      "USB to Type C. Fast Charging. 2.5 Amp. Highly Durable. Compatible with Smartphones, Chargers, Wireless-Bluetooth, Power Banks. Color: Black.",
    mainImage: "c-braided_primary.webp",
    alternateImage1: "c-braided_1.webp",
    alternateImage2: "c-braided_2.webp",
    alternateImage3: "c-braided_3.webp",
    alternateImage4: "c-braided_4.webp",
    slug: "type-c-braided-data-cable-second-six",
    manufacturer: "dtm",
    categoryId: "d59c9c3b-42fc-4258-a8ea-417659f084aa",
    inStock: 10,
  },
  {
    id: "8a1fa7c2-c995-496f-9ddc-4289070096b2",
    title: "C to Type C ",
    price: 499,
    salePrice: 129,
    rating: 5,
    description:
      "5A FAST CHARGING, compatible with iPhones/iPads, 480 Mbps data transfer speed, tangle-free design, round shape, length: 1M, color:Red & Black.",
    mainImage: "c-to-c-cable_primary.webp",
    alternateImage1: "c-to-c-cable_1.webp",
    alternateImage2: "c-to-c-cable_2.webp",
    alternateImage3: "c-to-c-cable_3.webp",
    alternateImage4: "c-to-c-cable_4.webp",
    slug: "type-c-to-type-c-pvc-data-cable-seven",
    manufacturer: "dtm",
    categoryId: "d59c9c3b-42fc-4258-a8ea-417659f084aa",
    inStock: 10,
  },
  {
    id: "9fd0b36d-6c9b-4155-ac51-96003399da1c",
    title: " USB to Type C",
    price: 499,
    salePrice: 199,
    rating: 5,
    description:
      "USB to Type C. Fast Charging. Data Cable 1m. 2.5A. PVC Round Cable. Color:White.",
    mainImage: "usb-to-type-c-pvc_primary.webp",
    alternateImage1: "usb-to-type-c-pvc_1.webp",
    alternateImage2: "usb-to-type-c-pvc_2.webp",
    alternateImage3: "usb-to-type-c-pvc_3.webp",
    alternateImage4: "usb-to-type-c-pvc_4.webp",
    slug: "usb-to-type-c-pvc-cable-eight",
    manufacturer: "dtm",
    categoryId: "d59c9c3b-42fc-4258-a8ea-417659f084aa",
    inStock: 10,
  },
  {
    id: "d375df73-3807-4f19-9673-6e45097d03bc",
    title: " LightningCable",
    price: 499,
    salePrice: 129,
    rating: 5,
    description:
      "features: fast charging support, tangle-resistant design, stable and efficient data transfer",
    mainImage: "redlighting_primary.webp",
    alternateImage1: "redlighting_1.webp",
    alternateImage2: "redlighting_2.webp",
    alternateImage3: "redlighting_3.webp",
    alternateImage4: "redlighting_4.webp",
    slug: "lighting-data-cable-nine",
    manufacturer: "dtm",
    categoryId: "d59c9c3b-42fc-4258-a8ea-417659f084aa",
    inStock: 10,
  },
  {
    id: "d4cd83dd-c5c1-42df-9a04-f7965d20e66f",
    title: "USB-A to Micro USB",
    price: 499,
    salePrice: 99,
    rating: 5,
    description:
      "USB-A to Micro USB Fast Charging Cable. 1m 2A PVC Round Cable. USB Fast Charging Cable. Color: White.",
    mainImage: "whitecable_primary.webp",
    alternateImage1: "whitecable_1.webp",
    alternateImage2: "whitecable_2.webp",
    alternateImage3: "whitecable_3.webp",
    alternateImage4: "whitecable_4.webp",
    slug: "micro-usba-pvc-data-cable-ten",
    manufacturer: "dtm",
    categoryId: "d59c9c3b-42fc-4258-a8ea-417659f084aa",
    inStock: 10,
  },

  {
    id: "f3cd0bc6-210a-4cee-81bf-1c0386e4ab04",
    title: " USB to Type C",
    price: 499,
    salePrice: 99,
    rating: 5,
    description:
      "1M 3Amp USB-A to Micro USB. Compatible for Smartphones, Tablets, & other Micro USB devices, 480Mbps Data Sync. Quick Charge 3.0 Color: Black",
    mainImage: "c-blackcable_primary.webp",
    alternateImage1: "c-blackcable_1.webp",
    alternateImage2: "c-blackcable_2.webp",
    alternateImage3: "c-blackcable_3.webp",
    alternateImage4: "c-blackcable_4.webp",
    slug: "type-c-pvc-data-cable-3ac-eleven",
    manufacturer: "dtm",
    categoryId: "d59c9c3b-42fc-4258-a8ea-417659f084aa",
    inStock: 10,
  },

  {
    id: "f54cdd5c-32c4-4106-943a-9084f0ad1611",
    title: " USB to Type C",
    price: 499,
    salePrice: 99,
    rating: 5,
    description:
      "USB to Type C Fast Charging Data Cable. Length: 1m. 3A Braided Only. Type C Fast Charging Data Cable. Color: Gold & Black.",
    mainImage: "yellowcable_primary.webp",
    alternateImage1: "yellowcable_1.webp",
    alternateImage2: "yellowcable_2.webp",
    alternateImage3: "yellowcable_3.webp",
    alternateImage4: "yellowcable_4.webp",
    slug: "type-c-braided-data-cable-first-twelve",
    manufacturer: "dtm",
    categoryId: "d59c9c3b-42fc-4258-a8ea-417659f084aa",
    inStock: 10,
  },
  // data cable section end 
   // inspired-products
   {
    id: "3b110cc4-d75f-4138-8f99-9b0a6a394aee",
    title: "Dual Port USB Charger",
    price: 199,
    salePrice: 99,
    rating: 5,
    description:
      "Dual Port Convenience: Charge two devices simultaneously with the dual-port design. Safety Features: Overcharge protection to ensure the safety of your devices. Color: White.",
    mainImage: "dualcharger_primary.webp",
    alternateImage1: "dualcharger_1.webp",
    alternateImage2: "dualcharger_2.webp",
    alternateImage3: "dualcharger_3.webp",
    alternateImage4: "dualcharger_4.webp",
    slug: "dual-port-charger-new-inspired-products",
    manufacturer: "dtm",
    categoryId: "04f1df32-c249-4d8e-8597-4439155ccded",
    inStock: 10,
  },
  {
    id: "675218ea-83fe-4dd8-845c-f1e4cc05b654",
    title: " USB-A to Micro USB",
    price: 499,
    salePrice: 99,
    rating: 5,
    description:
      "USB-A to Micro USB Fast Charging Cable. 3A Braided & Metal. Length: 1m. Color: Red & Black.",
    mainImage: "redcable_primary.webp",
    alternateImage1: "redcable_1.webp",
    alternateImage2: "redcable_2.webp",
    alternateImage3: "redcable_3.webp",
    alternateImage4: "redcable_4.webp",
    slug: "micro-usb-a-braided-data-cable-inspired-products",
    manufacturer: "dtm",
    categoryId: "04f1df32-c249-4d8e-8597-4439155ccded",
    inStock: 10,
  },
  {
    id: "56681bf5-dfc5-46cb-9486-6032ee837cca",
    title: "Water Tank Alarm",
    price: 799,
    salePrice: 249,
    rating: 5,
    description:
      "Type: Wired, Buzzer & LED Indicator Sensors: Float Switch Power Source: AC Power (Battery Backup Optional) Material: Weatherproof Plastic Casing",
    mainImage: "wateralarm-primary.webp",
    alternateImage1: "wateralarm_1.webp",
    alternateImage2: "wateralarm_2.webp",
    alternateImage3: "wateralarm_3.webp",
    alternateImage4: "wateralarm_4.webp",
    slug: "water-tank-alarm-inspired-products",
    manufacturer: "dtm",
    categoryId: "04f1df32-c249-4d8e-8597-4439155ccded",
    inStock: 10,
  },
  {
    id: "12f68197-a1ec-425f-970d-5fd5487b75",
    title: "Extension Board",
    price: 799,
    salePrice: 349,
    rating: 5,
    description:
      "4 Way Strip with Individual Switch (240V Multipurpose). 6A 4 Way Extension Board. Length: 3M Cord Length. 4 Universal Sockets. Color: Red & White.",
    mainImage: "extension_primary.webp",
    alternateImage1: "extension_1.webp",
    alternateImage2: "extension_2.webp",
    alternateImage3: "extension_3.webp",
    alternateImage4: "extension_4.webp",
    slug: "socket-board-red-white-extension-inspired-products",
    manufacturer: "dtm",
    categoryId: "04f1df32-c249-4d8e-8597-4439155ccded",
    inStock: 10,
  },
 

  // new-products
  
  {
    id: "8a1fa7c2-c995-496f-9ddc-428907000099",
    title: "C to Type C ",
    price: 499,
    salePrice: 129,
    rating: 5,
    description:
      "5A FAST CHARGING, compatible with iPhones/iPads, 480 Mbps data transfer speed, tangle-free design, round shape, length: 1M, color:Red & Black.",
    mainImage: "c-to-c-cable_primary.webp",
    alternateImage1: "c-to-c-cable_1.webp",
    alternateImage2: "c-to-c-cable_2.webp",
    alternateImage3: "c-to-c-cable_3.webp",
    alternateImage4: "c-to-c-cable_4.webp",
    slug: "type-c-to-type-c-pvc-data-cable-new-products",
    manufacturer: "dtm",
    categoryId: "b035b863-5c5f-47c6-81b6-59f97ef87fb8",
    inStock: 10,
  },
  {
    id: "3dc9ab53-cc23-4932-9418-a4611dgdf8cg",
    title: "5V-2.4A Mobile Charger",
    price: 499,
    salePrice: 199,
    rating: 5,
    description:
      "The charger provides a 5V output with a current of 2.4A. This allows for faster charging than standard 1A chargers but is not as fast as some high-power chargers (like 18W or 30W fast chargers).",
    mainImage: "5v_2.4_primarycharger.webp",
    alternateImage1: "5v_2.4charger_1.webp",
    alternateImage2: "5v_2.4charger_2.webp",
    alternateImage3: "5v_2.4charger_3.webp",
    alternateImage4: "5v_2.4charger_4.webp",
    slug: "5V-2.4A-mobile-charger-first-new-products-5V-2.4A-mobile-charger",
    manufacturer: "dtm",
    categoryId: "b035b863-5c5f-47c6-81b6-59f97ef87fb8",
    inStock: 10,
  },
  {
    id: "f54cdd5c-32c4-4106-943a-9084f0ad567h",
    title: "USB-A to Micro USB",
    price: 499,
    salePrice: 99,
    rating: 5,
    description:
      "USB to Type C Fast Charging Data Cable. Length: 1m. 3A Braided Only. Type C Fast Charging Data Cable. Color: Gold & Black.",
    mainImage: "yellowcable_primary.webp",
    alternateImage1: "yellowcable_1.webp",
    alternateImage2: "yellowcable_2.webp",
    alternateImage3: "yellowcable_3.webp",
    alternateImage4: "yellowcable_4.webp",
    slug: "type-c-braided-data-cable-first-twelve-new-products",
    manufacturer: "dtm",
    categoryId: "b035b863-5c5f-47c6-81b6-59f97ef87fb8",
    inStock: 10,
  },
  {
    id: "652b6de0-daec-4acd-8ede-c129cf80ffk3",
    title: "Mini UPS ",
    price: 1999,
    salePrice: 799,
    rating: 5,
    description:
      "Mini UPS for 12V Wi-Fi Router Broadband Modem. UPS Power Backup During Power Cuts. Broadband Modem. Compatible with Routers, Set Top Box, Alexa, Mini Camera. Color: Black.",
    mainImage: "router_primary.webp",
    alternateImage1: "router_1.webp",
    alternateImage2: "router_2.webp",
    alternateImage3: "router_3.webp",
    alternateImage4: "router_4.webp",
    slug: "mini-wifi-ups-router-12v-wifi-new-products",
    manufacturer: "dtm",
    categoryId: "b035b863-5c5f-47c6-81b6-59f97ef87fb8",
    inStock: 10,
  },

  // top-selling
  {
    id: "9fd0b36d-6c9b-4155-ac51-96003399dk9c",
    title: " USB to Type C",
    price: 499,
    salePrice: 199,
    rating: 5,
    description:
      "USB to Type C. Fast Charging. Data Cable 1m. 2.5A. PVC Round Cable. Color:White.",
    mainImage: "usb-to-type-c-pvc_primary.webp",
    alternateImage1: "usb-to-type-c-pvc_1.webp",
    alternateImage2: "usb-to-type-c-pvc_2.webp",
    alternateImage3: "usb-to-type-c-pvc_3.webp",
    alternateImage4: "usb-to-type-c-pvc_4.webp",
    slug: "usb-to-type-c-pvc-cable-tops-products",
    manufacturer: "dtm",
    categoryId: "8fbe8ce6-5833-433b-9f6e-eecb2490508b",
    inStock: 10,
  },
  {
    id: "12f68197-a1ec-425f-970d-5fd5487bj76t",
    title: "Extension Board",
    price: 799,
    salePrice: 349,
    rating: 5,
    description:
      "4 Way Strip with Individual Switch (240V Multipurpose). 6A 4 Way Extension Board. Length: 3M Cord Length. 4 Universal Sockets. Color: Red & White.",
    mainImage: "extension_primary.webp",
    alternateImage1: "extension_1.webp",
    alternateImage2: "extension_2.webp",
    alternateImage3: "extension_3.webp",
    alternateImage4: "extension_4.webp",
    slug: "socket-board-red-extension-tops-products-tops-products",
    manufacturer: "dtm",
    categoryId: "8fbe8ce6-5833-433b-9f6e-eecb2490508b",
    inStock: 10,
  },
  {
    id: "3dc9ab53-cc23-4932-9418-a4611d09bdm6",
    title: "5V-2.4A Mobile Charger",
    price: 499,
    salePrice: 199,
    rating: 5,
    description:
      "The charger provides a 5V output with a current of 2.4A. This allows for faster charging than standard 1A chargers but is not as fast as some high-power chargers (like 18W or 30W fast chargers).",
    mainImage: "5v_2.4_primarycharger.webp",
    alternateImage1: "5v_2.4charger_1.webp",
    alternateImage2: "5v_2.4charger_2.webp",
    alternateImage3: "5v_2.4charger_3.webp",
    alternateImage4: "5v_2.4charger_4.webp",
    slug: "5V-2.4A-mobile-charger-first-charger-tops-products",
    manufacturer: "dtm",
    categoryId: "8fbe8ce6-5833-433b-9f6e-eecb2490508b",
    inStock: 10,
  },
  
  {
    id: "d375df73-3807-4f19-9673-6e45097d03bn",
    title: " LightningCable",
    price: 499,
    salePrice: 129,
    rating: 5,
    description:
      "features: fast charging support, tangle-resistant design, stable and efficient data transfer",
    mainImage: "redlighting_primary.webp",
    alternateImage1: "redlighting_1.webp",
    alternateImage2: "redlighting_2.webp",
    alternateImage3: "redlighting_3.webp",
    alternateImage4: "redlighting_4.webp",
    slug: "lighting-data-cable-nine-tops-products",
    manufacturer: "dtm",
    categoryId: "8fbe8ce6-5833-433b-9f6e-eecb2490508b",
    inStock: 10,
  },
  

];

const demoCategories = [
  {
    id: "04f1df32-c249-4d8e-8597-4439155ccded",
    name: "inspired-products",
    displayName: "Inspired Products",
    image: "inspiredproduct.jpg",
    href: "/inspired-products",
  },
  {
    id: "8fbe8ce6-5833-433b-9f6e-eecb2490508b",
    name: "topselling-products",
    displayName: "Topselling Products",
    image: "topselling.webp",
    href: "/topselling-products",
  },
  {
    id: "b035b863-5c5f-47c6-81b6-59f97ef87fb8",
    name: "new-products",
    displayName: "New Products",
    image: "124.webp",
    href: "/new-products",
  },

  {
    id: "17daa71c-28a2-4a03-a421-49f87ba5ee21",
    name: "charger",
    displayName: "Charger",
    image: "charger.webp",
    href: "/charger",
  },
  {
    id: "d59c9c3b-42fc-4258-a8ea-417659f084aa",
    name: "datacable",
    displayName: "Datacable",
    image: "cable.webp",
    href: "/datacable",
  },
  {
    id: "a21e4162-eaed-4e48-93a7-130b9a45bc34",
    name: "wateralarm",
    displayName: "Wateralarm",
    image: "alarm.webp",
    href: "/wateralarm",
  },

  {
    id: "0d1be367-75ac-4078-b363-2ba6c057eeb2",
    name: "extensionboard",
    displayName: "Extensionboard",
    image: "board.webp",
    href: "/extensionboard",
  },
  {
    id: "e59984e3-7ec2-445d-a5e0-1e6c001205a9",
    name: "miniups",
    displayName: "Miniups",
    image: "mini.webp",
    href: "/miniups",
  },
  // {
  //   id: "d30b85e2-e544-4f48-8434-33fe0b591579",
  //   name: "phone-gimbals",
  //   },
  // {
  //   id: "6c3b8591-b01e-4842-bce1-2f5585bf3a28",
  //   name: "mixer-grinders",
  // },
  // {
  //   id: "659a91b9-3ff6-47d5-9830-5e7ac905b961",
  //   name: "cameras",
  // },
  // {
  //   id: "3117a1b0-6369-491e-8b8b-9fdd5ad9912e",
  //   name: "smart-phones",
  // },
  // {
  //   id: "da6413b4-22fd-4fbb-9741-d77580dfdcd5",
  //   name: "mouses",
  // },
  // {
  //   id: "ss6412b4-22fd-4fbb-9741-d77580dfdcd2",
  //   name: "computers",
  // },
  // {
  //   id: "fs6412b4-22fd-4fbb-9741-d77512dfdfa3",
  //   name: "printers",
  // },
];

const admins = [  
  {
    id: "0rjlWofLvPqyZMlz36PZh",
    email: "admin@myzk.com",
    password: "$2a$05$hkkWv68R//Fd05mo6fp/b.IuTCOhGBhSdg.3VICdbWjbRgsnExhwG", //  pswd : admin@123
    role: "admin",
  },     
  {
    id: "0rjlWofLvPqyZMlz36PZi",
    email: "test@gmail.com",
    password: "$2a$05$hkkWv68R//Fd05mo6fp/b.IuTCOhGBhSdg.3VICdbWjbRgsnExhwG", //  pswd : admin@123
    role: "user",
  },     
]

// Function to insert data
async function insertCsvData() {
  const shippingData = [];

  // Read CSV file
  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', (row) => {

      // console.log("Row",row);
      
      // Push each row to the employees array
      shippingData.push({
        // id          :     row.id 
        product      :     row.product,
        sourceCity    :    row.sourceCity,
        destinationPincode: row.destinationPincode,
        city              :  row.city,
        state             :  row.state,
        destinationRegion :   row.destinationRegion,
        zone            :  row.zone,
        tat              :  parseInt(row.tat),
        prepaid           : row.prepaid ==  "Y" ? true :false,
        cod               : row.cod  ==  "Y" ? true :false,
        reversePickup     : row.reversePickup  ==  "Y" ? true :false,
        forwardPickup     : row.forwardPickup  ==  "Y" ? true :false,
        destinationCategory : row.destinationCategory ,
        pudoServiceable   : row.pudoServiceable  ==  "Y" ? true :false,
        b2cCodServiceable : row.b2cCodServiceable  ==  "Y" ? true :false,

        
      });
    })
    .on('end', async () => {
      try {
        
        // Insert data using Prisma (bulk insert)
        const result = await prisma.ShippingDetails.createMany({
          data: shippingData,
        });

        console.log(`${result.count} employees inserted successfully!`);
      } catch (error) {
        console.error('Error inserting data:', error);
      } finally {
        await prisma.$disconnect();
      }
    });
}


async function insertDemoData() {
  for (const category of demoCategories) {
    await prisma.category.create({
      data: category,
    });
  }
  console.log("Demo categories inserted successfully!");

  for (const product of demoProducts) {
    await prisma.product.create({
      data: product,
    });
  }

  console.log("Demo products inserted successfully!");
  for (const admin of admins) {
    await prisma.user.create({
      data: admin,
    });
  }
  console.log("Admin created successfully!");
}
insertCsvData()
insertDemoData()

  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });









// Path to your CSV file







// const { PrismaClient } = require("@prisma/client");

// const prisma = new PrismaClient();

// const demoProducts = [
//   {
//     id: "1",
//     title: "Smart phone",
//     price: 22,
//     rating: 5,
//     description: "This is smart phone description",
//     mainImage: "product1.webp",
//     slug: "smart-phone-demo",
//     manufacturer: "Samsung",
//     categoryId: "3117a1b0-6369-491e-8b8b-9fdd5ad9912e",
//     inStock: 0,
//   },
//   {
//     id: "2",
//     title: "SLR camera",
//     price: 24,
//     rating: 0,
//     description: "This is slr description",
//     mainImage: "product2.webp",
//     slug: "slr-camera-demo",
//     manufacturer: "Canon",
//     categoryId: "659a91b9-3ff6-47d5-9830-5e7ac905b961",
//     inStock: 0,
//   },
//   {
//     id: "3",
//     title: "Mixer grinder",
//     price: 25,
//     rating: 4,
//     description: "This is mixed grinder description",
//     mainImage: "product3.webp",
//     slug: "mixed-grinder-demo",
//     manufacturer: "ZunVolt",
//     categoryId: "6c3b8591-b01e-4842-bce1-2f5585bf3a28",
//     inStock: 1,
//   },
//   {
//     id: "4",
//     title: "Phone gimbal",
//     price: 21,
//     rating: 5,
//     description: "This is phone gimbal description",
//     mainImage: "product4.webp",
//     slug: "phone-gimbal-demo",
//     manufacturer: "Samsung",
//     categoryId: "d30b85e2-e544-4f48-8434-33fe0b591579",
//     inStock: 1,
//   },
//   {
//     id: "5",
//     title: "Tablet keyboard",
//     price: 52,
//     rating: 4,
//     description: "This is tablet keyboard description",
//     mainImage: "product5.webp",
//     slug: "tablet-keyboard-demo",
//     manufacturer: "Samsung",
//     categoryId: "ada699e5-e764-4da0-8d3e-18a8c8c5ed24",
//     inStock: 1,
//   },
//   {
//     id: "6",
//     title: "Wireless earbuds",
//     price: 74,
//     rating: 3,
//     description: "This is earbuds description",
//     mainImage: "product6.webp",
//     slug: "wireless-earbuds-demo",
//     manufacturer: "Samsung",
//     categoryId: "1cb9439a-ea47-4a33-913b-e9bf935bcc0b",
//     inStock: 1,
//   },
//   {
//     id: "7",
//     title: "Party speakers",
//     price: 35,
//     rating: 5,
//     description: "This is party speakers description",
//     mainImage: "product7.webp",
//     slug: "party-speakers-demo",
//     manufacturer: "SOWO",
//     categoryId: "7a241318-624f-48f7-9921-1818f6c20d85",
//     inStock: 1,
//   },
//   {
//     id: "8",
//     title: "Slow juicer",
//     price: 69,
//     rating: 5,
//     description: "Slow juicer desc",
//     mainImage: "product8.webp",
//     slug: "slow-juicer-demo",
//     manufacturer: "Bosch",
//     categoryId: "8d2a091c-4b90-4d60-b191-114b895f3e54",
//     inStock: 1,
//   },
//   {
//     id: "9",
//     title: "Wireless headphones",
//     price: 89,
//     rating: 3,
//     description: "This is wireless headphones description",
//     mainImage: "product9.webp",
//     slug: "wireless-headphones-demo",
//     manufacturer: "Sony",
//     categoryId: "4c2cc9ec-7504-4b7c-8ecd-2379a854a423",
//     inStock: 1,
//   },
//   {
//     id: "10",
//     title: "Smart watch",
//     price: 64,
//     rating: 3,
//     description: "This is smart watch description",
//     mainImage: "product10.webp",
//     slug: "smart-watch-demo",
//     manufacturer: "Samsung",
//     categoryId: "a6896b67-197c-4b2a-b5e2-93954474d8b4",
//     inStock: 1,
//   },
//   {
//     id: "11",
//     title: "Notebook horizon",
//     price: 52,
//     rating: 5,
//     description: "This is notebook description",
//     mainImage: "product11.webp",
//     slug: "notebook-horizon-demo",
//     manufacturer: "HP",
//     categoryId: "782e7829-806b-489f-8c3a-2689548d7153",
//     inStock: 1,
//   },
//   {
//     id: "12",
//     title: "Mens trimmer",
//     price: 54,
//     rating: 5,
//     description: "This is trimmer description",
//     mainImage: "product12.webp",
//     slug: "mens-trimmer-demo",
//     manufacturer: "Gillete",
//     categoryId: "313eee86-bc11-4dc1-8cb0-6b2c2a2a1ccb",
//     inStock: 0,
//   }
// ];


// const demoCategories = [
//   {
//     id: "7a241318-624f-48f7-9921-1818f6c20d85",
//     name: "speakers",
//   },
//   {
//     id: "313eee86-bc11-4dc1-8cb0-6b2c2a2a1ccb",
//     name: "trimmers",
//   },
//   {
//     id: "782e7829-806b-489f-8c3a-2689548d7153",
//     name: "laptops",
//   },
//   {
//     id: "a6896b67-197c-4b2a-b5e2-93954474d8b4",
//     name: "watches",
//   },
//   {
//     id: "4c2cc9ec-7504-4b7c-8ecd-2379a854a423",
//     name: "headphones",
//   },
//   {
//     id: "8d2a091c-4b90-4d60-b191-114b895f3e54",
//     name: "juicers",
//   },
//   {
//     id: "1cb9439a-ea47-4a33-913b-e9bf935bcc0b",
//     name: "earbuds",
//   },
//   {
//     id: "ada699e5-e764-4da0-8d3e-18a8c8c5ed24",
//     name: "tablets",
//   },
//   {
//     id: "d30b85e2-e544-4f48-8434-33fe0b591579",
//     name: "phone-gimbals",
//   },
//   {
//     id: "6c3b8591-b01e-4842-bce1-2f5585bf3a28",
//     name: "mixer-grinders",
//   },
//   {
//     id: "659a91b9-3ff6-47d5-9830-5e7ac905b961",
//     name: "cameras",
//   },
//   {
//     id: "3117a1b0-6369-491e-8b8b-9fdd5ad9912e",
//     name: "smart-phones",
//   },
//   {
//     id: "da6413b4-22fd-4fbb-9741-d77580dfdcd5",
//     name: "mouses"
//   },
//   {
//     id: "ss6412b4-22fd-4fbb-9741-d77580dfdcd2",
//     name: "computers"
//   },
//   {
//     id: "fs6412b4-22fd-4fbb-9741-d77512dfdfa3",
//     name: "printers"
//   }
// ];

// async function insertDemoData() {
  
//   for (const category of demoCategories) {
//     await prisma.category.create({
//       data: category,
//     });
//   }
//   console.log("Demo categories inserted successfully!");
  
//   for (const product of demoProducts) {
//     await prisma.product.create({
//       data: product,
//     });
//   }
//   console.log("Demo products inserted successfully!");
// }

// insertDemoData()
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

