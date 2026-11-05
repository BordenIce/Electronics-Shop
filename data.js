// Product catalog. Add a product by appending an object to the right category.
// "img" is a file name inside the images/ folder. Products using placeholder-*.svg need a real photo.
const CATALOG = {
 "laptops": {
  "title": "Laptops",
  "products": [
   {
    "id": "laptops-1",
    "name": "ASUS ROG Strix G17",
    "brand": "ASUS",
    "price": 2000,
    "img": "item1Laptop.png",
    "options": [
     {
      "label": "RAM",
      "values": [
       "16GB",
       "32GB"
      ]
     },
     {
      "label": "Storage",
      "values": [
       "512GB",
       "1TB"
      ]
     },
     {
      "label": "Graphic Card",
      "values": [
       "RTX 4050",
       "RTX 3060"
      ]
     },
     {
      "label": "Processor",
      "values": [
       "AMD Ryzen 9",
       "Intel Core i5"
      ]
     }
    ],
    "colors": []
   },
   {
    "id": "laptops-2",
    "name": "Gigabyte AORUS 17H BXF",
    "brand": "Gigabyte",
    "price": 2000,
    "img": "item2Laptop.png",
    "options": [
     {
      "label": "RAM",
      "values": [
       "16GB",
       "32GB"
      ]
     },
     {
      "label": "Storage",
      "values": [
       "512GB",
       "1TB"
      ]
     },
     {
      "label": "Graphic Card",
      "values": [
       "RTX 4080",
       "RTX 3060"
      ]
     },
     {
      "label": "Processor",
      "values": [
       "AMD Ryzen 8",
       "Intel Core i7"
      ]
     }
    ],
    "colors": []
   },
   {
    "id": "laptops-3",
    "name": "Asus TUF Gaming F15",
    "brand": "ASUS",
    "price": 1500,
    "img": "item3Laptop.png",
    "options": [
     {
      "label": "RAM",
      "values": [
       "16GB",
       "32GB"
      ]
     },
     {
      "label": "Storage",
      "values": [
       "512GB",
       "1TB"
      ]
     },
     {
      "label": "Graphic Card",
      "values": [
       "RTX 4050",
       "RTX 3060"
      ]
     },
     {
      "label": "Processor",
      "values": [
       "AMD Ryzen 9",
       "Intel Core i5"
      ]
     }
    ],
    "colors": []
   },
   {
    "id": "laptops-4",
    "name": "HP Victus 16",
    "brand": "HP",
    "price": 1500,
    "img": "item4Laptop.png",
    "options": [
     {
      "label": "RAM",
      "values": [
       "16GB",
       "32GB"
      ]
     },
     {
      "label": "Storage",
      "values": [
       "512GB",
       "1TB"
      ]
     },
     {
      "label": "Graphic Card",
      "values": [
       "RTX 4050",
       "RTX 3060"
      ]
     },
     {
      "label": "Processor",
      "values": [
       "AMD Ryzen 9",
       "Intel Core i5"
      ]
     }
    ],
    "colors": []
   },
   {
    "id": "laptops-5",
    "name": "Apple MacBook Air 13 M3",
    "brand": "Apple",
    "price": 1099,
    "img": "placeholder-laptop.svg",
    "options": [
     {
      "label": "RAM",
      "values": [
       "8GB",
       "16GB"
      ]
     },
     {
      "label": "Storage",
      "values": [
       "256GB",
       "512GB"
      ]
     }
    ],
    "colors": [
     {
      "name": "Midnight",
      "hex": "#2e3642",
      "img": ""
     },
     {
      "name": "Starlight",
      "hex": "#f0e4d3",
      "img": ""
     },
     {
      "name": "Space Grey",
      "hex": "#7d7e80",
      "img": ""
     },
     {
      "name": "Silver",
      "hex": "#e3e4e5",
      "img": ""
     }
    ]
   },
   {
    "id": "laptops-6",
    "name": "Dell XPS 15",
    "brand": "Dell",
    "price": 1800,
    "img": "placeholder-laptop.svg",
    "options": [
     {
      "label": "RAM",
      "values": [
       "16GB",
       "32GB"
      ]
     },
     {
      "label": "Storage",
      "values": [
       "512GB",
       "1TB"
      ]
     },
     {
      "label": "Graphic Card",
      "values": [
       "RTX 4050",
       "RTX 4060"
      ]
     }
    ],
    "colors": []
   },
   {
    "id": "laptops-7",
    "name": "Lenovo Legion 5",
    "brand": "Lenovo",
    "price": 1200,
    "img": "placeholder-laptop.svg",
    "options": [
     {
      "label": "RAM",
      "values": [
       "16GB",
       "32GB"
      ]
     },
     {
      "label": "Storage",
      "values": [
       "512GB",
       "1TB"
      ]
     },
     {
      "label": "Graphic Card",
      "values": [
       "RTX 4050",
       "RTX 4060"
      ]
     }
    ],
    "colors": []
   },
   {
    "id": "laptops-8",
    "name": "Acer Nitro V 15",
    "brand": "Acer",
    "price": 900,
    "img": "placeholder-laptop.svg",
    "options": [
     {
      "label": "RAM",
      "values": [
       "8GB",
       "16GB"
      ]
     },
     {
      "label": "Storage",
      "values": [
       "512GB",
       "1TB"
      ]
     },
     {
      "label": "Graphic Card",
      "values": [
       "RTX 3050",
       "RTX 4050"
      ]
     }
    ],
    "colors": []
   },
   {
    "id": "laptops-9",
    "name": "MSI Katana 15",
    "brand": "MSI",
    "price": 1100,
    "img": "placeholder-laptop.svg",
    "options": [
     {
      "label": "RAM",
      "values": [
       "16GB",
       "32GB"
      ]
     },
     {
      "label": "Storage",
      "values": [
       "512GB",
       "1TB"
      ]
     },
     {
      "label": "Processor",
      "values": [
       "Intel Core i7",
       "AMD Ryzen 7"
      ]
     }
    ],
    "colors": []
   }
  ]
 },
 "phones": {
  "title": "Phones",
  "products": [
   {
    "id": "phones-2",
    "name": "Apple iPhone 15 Plus",
    "brand": "Apple",
    "price": 1500,
    "img": "iPhoneBlack.png",
    "options": [
     {
      "label": "RAM",
      "values": [
       "6GB",
       "8GB"
      ]
     },
     {
      "label": "Storage",
      "values": [
       "128GB",
       "256GB",
       "512GB"
      ]
     }
    ],
    "colors": [
     {
      "name": "Black",
      "hex": "#1f1f1f",
      "img": "iPhoneBlack.png"
     },
     {
      "name": "Blue",
      "hex": "#2aeafca8",
      "img": "iPhoneBlue.png"
     },
     {
      "name": "Green",
      "hex": "#8ddc91",
      "img": "iPhoneGreen.png"
     },
     {
      "name": "Pink",
      "hex": "#f3d3e3",
      "img": "iPhonePink.png"
     },
     {
      "name": "Gold",
      "hex": "#F2EDD0",
      "img": "iPhoneGold.png"
     }
    ]
   },
   {
    "id": "phones-3",
    "name": "Samsung Galaxy S24 Ultra",
    "brand": "Samsung",
    "price": 1000,
    "img": "item3Phone.png",
    "options": [
     {
      "label": "RAM",
      "values": [
       "6GB",
       "8GB"
      ]
     },
     {
      "label": "Storage",
      "values": [
       "128GB",
       "256GB",
       "512GB"
      ]
     }
    ],
    "colors": [
     {
      "name": "Black",
      "hex": "#1f1f1f",
      "img": ""
     },
     {
      "name": "Grey",
      "hex": "#484c4d",
      "img": ""
     },
     {
      "name": "Violet",
      "hex": "#db69db",
      "img": ""
     },
     {
      "name": "Yellow",
      "hex": "#F2EDD0",
      "img": ""
     }
    ]
   },
   {
    "id": "phones-4",
    "name": "Xiaomi Redmi Note 12Pro",
    "brand": "Xiaomi",
    "price": 200,
    "img": "item4Phone.png",
    "options": [
     {
      "label": "RAM",
      "values": [
       "6GB",
       "8GB"
      ]
     },
     {
      "label": "Storage",
      "values": [
       "128GB",
       "256GB",
       "512GB"
      ]
     }
    ],
    "colors": [
     {
      "name": "Black",
      "hex": "#1f1f1f",
      "img": ""
     },
     {
      "name": "Blue",
      "hex": "#2aeafca8",
      "img": ""
     },
     {
      "name": "White",
      "hex": "#ffffff",
      "img": ""
     }
    ]
   },
   {
    "id": "phones-5",
    "name": "Motorola G32",
    "brand": "Motorola",
    "price": 110,
    "img": "item5PhoneBlack.png",
    "options": [
     {
      "label": "RAM",
      "values": [
       "6GB",
       "8GB"
      ]
     },
     {
      "label": "Storage",
      "values": [
       "128GB",
       "256GB",
       "512GB"
      ]
     }
    ],
    "colors": [
     {
      "name": "Black",
      "hex": "#1f1f1f",
      "img": ""
     },
     {
      "name": "Red",
      "hex": "#fc2a2ad6",
      "img": ""
     },
     {
      "name": "Brown",
      "hex": "#ae6e3c",
      "img": ""
     }
    ]
   },
   {
    "id": "phones-6",
    "name": "Google Pixel 8",
    "brand": "Google",
    "price": 699,
    "img": "placeholder-phone.svg",
    "options": [
     {
      "label": "RAM",
      "values": [
       "8GB"
      ]
     },
     {
      "label": "Storage",
      "values": [
       "128GB",
       "256GB"
      ]
     }
    ],
    "colors": [
     {
      "name": "Obsidian",
      "hex": "#1f1f1f",
      "img": ""
     },
     {
      "name": "Hazel",
      "hex": "#a7b09a",
      "img": ""
     },
     {
      "name": "Rose",
      "hex": "#f3d3e3",
      "img": ""
     }
    ]
   },
   {
    "id": "phones-7",
    "name": "OnePlus 12",
    "brand": "OnePlus",
    "price": 799,
    "img": "placeholder-phone.svg",
    "options": [
     {
      "label": "RAM",
      "values": [
       "12GB",
       "16GB"
      ]
     },
     {
      "label": "Storage",
      "values": [
       "256GB",
       "512GB"
      ]
     }
    ],
    "colors": [
     {
      "name": "Black",
      "hex": "#1f1f1f",
      "img": ""
     },
     {
      "name": "Green",
      "hex": "#2f6b57",
      "img": ""
     }
    ]
   },
   {
    "id": "phones-8",
    "name": "Nothing Phone (2)",
    "brand": "Nothing",
    "price": 579,
    "img": "placeholder-phone.svg",
    "options": [
     {
      "label": "RAM",
      "values": [
       "8GB",
       "12GB"
      ]
     },
     {
      "label": "Storage",
      "values": [
       "128GB",
       "256GB",
       "512GB"
      ]
     }
    ],
    "colors": [
     {
      "name": "Dark Grey",
      "hex": "#3a3d40",
      "img": ""
     },
     {
      "name": "White",
      "hex": "#f4f4f4",
      "img": ""
     }
    ]
   },
   {
    "id": "phones-9",
    "name": "Samsung Galaxy A54",
    "brand": "Samsung",
    "price": 349,
    "img": "placeholder-phone.svg",
    "options": [
     {
      "label": "RAM",
      "values": [
       "6GB",
       "8GB"
      ]
     },
     {
      "label": "Storage",
      "values": [
       "128GB",
       "256GB"
      ]
     }
    ],
    "colors": [
     {
      "name": "Black",
      "hex": "#1f1f1f",
      "img": ""
     },
     {
      "name": "Violet",
      "hex": "#b9a0e0",
      "img": ""
     },
     {
      "name": "Lime",
      "hex": "#d4e47a",
      "img": ""
     }
    ]
   },
   {
    "id": "phones-10",
    "name": "OPPO Reno11",
    "brand": "OPPO",
    "price": 399,
    "img": "placeholder-phone.svg",
    "options": [
     {
      "label": "RAM",
      "values": [
       "8GB",
       "12GB"
      ]
     },
     {
      "label": "Storage",
      "values": [
       "256GB",
       "512GB"
      ]
     }
    ],
    "colors": [
     {
      "name": "Green",
      "hex": "#6fa88f",
      "img": ""
     },
     {
      "name": "Grey",
      "hex": "#9aa0a6",
      "img": ""
     }
    ]
   }
  ]
 },
 "headphones": {
  "title": "Headphones",
  "products": [
   {
    "id": "headphones-1",
    "name": "Razer Kraken V3 X",
    "brand": "Razer",
    "price": 60,
    "img": "item1Headphones1.png",
    "options": [
     {
      "label": "Battery",
      "values": [
       "50Hour",
       "30Hour"
      ]
     }
    ],
    "colors": [
     {
      "name": "Black",
      "hex": "#000000",
      "img": ""
     },
     {
      "name": "Silver",
      "hex": "#d1d1d1",
      "img": ""
     },
     {
      "name": "White",
      "hex": "#ffffff",
      "img": ""
     },
     {
      "name": "Pink",
      "hex": "#f3d3e3",
      "img": ""
     }
    ]
   },
   {
    "id": "headphones-2",
    "name": "HyperX Stinger Core Wireless",
    "brand": "HyperX",
    "price": 70,
    "img": "item2Headphones.png",
    "options": [
     {
      "label": "Battery",
      "values": [
       "50Hour",
       "30Hour"
      ]
     }
    ],
    "colors": [
     {
      "name": "Black",
      "hex": "#000000",
      "img": ""
     },
     {
      "name": "Silver",
      "hex": "#d1d1d1",
      "img": ""
     },
     {
      "name": "White",
      "hex": "#ffffff",
      "img": ""
     },
     {
      "name": "Pink",
      "hex": "#f3d3e3",
      "img": ""
     }
    ]
   },
   {
    "id": "headphones-3",
    "name": "JBL Live Flex",
    "brand": "JBL",
    "price": 90,
    "img": "item3Headphones.png",
    "options": [
     {
      "label": "Battery",
      "values": [
       "50Hour",
       "30Hour"
      ]
     }
    ],
    "colors": [
     {
      "name": "Black",
      "hex": "#000000",
      "img": ""
     },
     {
      "name": "Silver",
      "hex": "#d1d1d1",
      "img": ""
     },
     {
      "name": "White",
      "hex": "#ffffff",
      "img": ""
     },
     {
      "name": "Pink",
      "hex": "#f3d3e3",
      "img": ""
     }
    ]
   },
   {
    "id": "headphones-4",
    "name": "AirPods Pro 2",
    "brand": "AirPods",
    "price": 200,
    "img": "item4Headphones.png",
    "options": [
     {
      "label": "Battery",
      "values": [
       "50Hour",
       "30Hour"
      ]
     }
    ],
    "colors": [
     {
      "name": "Black",
      "hex": "#000000",
      "img": ""
     },
     {
      "name": "Silver",
      "hex": "#d1d1d1",
      "img": ""
     },
     {
      "name": "White",
      "hex": "#ffffff",
      "img": ""
     },
     {
      "name": "Pink",
      "hex": "#f3d3e3",
      "img": ""
     }
    ]
   },
   {
    "id": "headphones-5",
    "name": "Sony WH-1000XM5",
    "brand": "Sony",
    "price": 349,
    "img": "placeholder-headphones.svg",
    "options": [
     {
      "label": "Battery",
      "values": [
       "30Hour"
      ]
     }
    ],
    "colors": [
     {
      "name": "Black",
      "hex": "#000000",
      "img": ""
     },
     {
      "name": "Silver",
      "hex": "#d1d1d1",
      "img": ""
     },
     {
      "name": "Blue",
      "hex": "#2c4a7a",
      "img": ""
     }
    ]
   },
   {
    "id": "headphones-6",
    "name": "Bose QuietComfort Ultra",
    "brand": "Bose",
    "price": 429,
    "img": "placeholder-headphones.svg",
    "options": [
     {
      "label": "Battery",
      "values": [
       "24Hour"
      ]
     }
    ],
    "colors": [
     {
      "name": "Black",
      "hex": "#000000",
      "img": ""
     },
     {
      "name": "White",
      "hex": "#ffffff",
      "img": ""
     },
     {
      "name": "Sand",
      "hex": "#d9c7a8",
      "img": ""
     }
    ]
   },
   {
    "id": "headphones-7",
    "name": "Sennheiser Momentum 4",
    "brand": "Sennheiser",
    "price": 299,
    "img": "placeholder-headphones.svg",
    "options": [
     {
      "label": "Battery",
      "values": [
       "60Hour"
      ]
     }
    ],
    "colors": [
     {
      "name": "Black",
      "hex": "#000000",
      "img": ""
     },
     {
      "name": "White",
      "hex": "#ffffff",
      "img": ""
     }
    ]
   },
   {
    "id": "headphones-8",
    "name": "Apple AirPods Max",
    "brand": "Apple",
    "price": 499,
    "img": "placeholder-headphones.svg",
    "options": [
     {
      "label": "Battery",
      "values": [
       "20Hour"
      ]
     }
    ],
    "colors": [
     {
      "name": "Space Grey",
      "hex": "#7d7e80",
      "img": ""
     },
     {
      "name": "Silver",
      "hex": "#d1d1d1",
      "img": ""
     },
     {
      "name": "Pink",
      "hex": "#f3d3e3",
      "img": ""
     },
     {
      "name": "Sky Blue",
      "hex": "#a9c4de",
      "img": ""
     }
    ]
   },
   {
    "id": "headphones-9",
    "name": "Beats Studio Pro",
    "brand": "Beats",
    "price": 349,
    "img": "placeholder-headphones.svg",
    "options": [
     {
      "label": "Battery",
      "values": [
       "40Hour"
      ]
     }
    ],
    "colors": [
     {
      "name": "Black",
      "hex": "#000000",
      "img": ""
     },
     {
      "name": "Navy",
      "hex": "#1f2f4f",
      "img": ""
     },
     {
      "name": "Sandstone",
      "hex": "#d9c7a8",
      "img": ""
     }
    ]
   }
  ]
 },
 "cameras": {
  "title": "Cameras",
  "products": [
   {
    "id": "cameras-1",
    "name": "Canon EOS R50",
    "brand": "Canon",
    "price": 800,
    "img": "item1Camera.png",
    "options": [
     {
      "label": "Lens",
      "values": [
       "18-140mm",
       "18-105mm"
      ]
     },
     {
      "label": "Display type",
      "values": [
       "LCD",
       "OLED"
      ]
     }
    ],
    "colors": []
   },
   {
    "id": "cameras-2",
    "name": "Sony Cyber-Shot HX400",
    "brand": "Sony",
    "price": 250,
    "img": "item2Camera.png",
    "options": [
     {
      "label": "Lens",
      "values": [
       "18-140mm",
       "18-105mm"
      ]
     },
     {
      "label": "Display type",
      "values": [
       "LCD",
       "OLED"
      ]
     }
    ],
    "colors": []
   },
   {
    "id": "cameras-3",
    "name": "Fujifilm X-T4 + XF",
    "brand": "Fujifilm",
    "price": 1800,
    "img": "item3Camera.png",
    "options": [
     {
      "label": "Lens",
      "values": [
       "18-140mm",
       "18-105mm"
      ]
     },
     {
      "label": "Display type",
      "values": [
       "LCD",
       "OLED"
      ]
     }
    ],
    "colors": []
   },
   {
    "id": "cameras-4",
    "name": "Nikon D7500 Digital",
    "brand": "Nikon",
    "price": 800,
    "img": "item4Camera.png",
    "options": [
     {
      "label": "Lens",
      "values": [
       "18-140mm",
       "18-105mm"
      ]
     },
     {
      "label": "Display type",
      "values": [
       "LCD",
       "OLED"
      ]
     }
    ],
    "colors": []
   },
   {
    "id": "cameras-5",
    "name": "Canon EOS R10",
    "brand": "Canon",
    "price": 880,
    "img": "placeholder-camera.svg",
    "options": [
     {
      "label": "Lens",
      "values": [
       "18-45mm",
       "18-150mm"
      ]
     },
     {
      "label": "Memory card",
      "values": [
       "64GB",
       "128GB"
      ]
     }
    ],
    "colors": []
   },
   {
    "id": "cameras-6",
    "name": "Sony Alpha a6400",
    "brand": "Sony",
    "price": 900,
    "img": "placeholder-camera.svg",
    "options": [
     {
      "label": "Lens",
      "values": [
       "16-50mm",
       "18-135mm"
      ]
     },
     {
      "label": "Memory card",
      "values": [
       "64GB",
       "128GB"
      ]
     }
    ],
    "colors": []
   },
   {
    "id": "cameras-7",
    "name": "Nikon Z fc",
    "brand": "Nikon",
    "price": 850,
    "img": "placeholder-camera.svg",
    "options": [
     {
      "label": "Lens",
      "values": [
       "16-50mm",
       "28mm"
      ]
     },
     {
      "label": "Memory card",
      "values": [
       "64GB",
       "128GB"
      ]
     }
    ],
    "colors": []
   },
   {
    "id": "cameras-8",
    "name": "Panasonic Lumix G7",
    "brand": "Panasonic",
    "price": 500,
    "img": "placeholder-camera.svg",
    "options": [
     {
      "label": "Lens",
      "values": [
       "14-42mm",
       "14-140mm"
      ]
     },
     {
      "label": "Memory card",
      "values": [
       "32GB",
       "64GB"
      ]
     }
    ],
    "colors": []
   },
   {
    "id": "cameras-9",
    "name": "Fujifilm X-S20",
    "brand": "Fujifilm",
    "price": 1250,
    "img": "placeholder-camera.svg",
    "options": [
     {
      "label": "Lens",
      "values": [
       "15-45mm",
       "18-55mm"
      ]
     },
     {
      "label": "Memory card",
      "values": [
       "64GB",
       "128GB"
      ]
     }
    ],
    "colors": []
   }
  ]
 },
 "tv": {
  "title": "TVs",
  "products": [
   {
    "id": "tv-1",
    "name": "Toshiba 4K Smart Fire",
    "brand": "Toshiba",
    "price": 280,
    "img": "item1TV.png",
    "options": [
     {
      "label": "Size",
      "values": [
       "32 Inch",
       "43 Inch"
      ]
     },
     {
      "label": "Resolution",
      "values": [
       "1080p",
       "4K"
      ]
     }
    ],
    "colors": []
   },
   {
    "id": "tv-2",
    "name": "Toshiba 4K Smart Fire",
    "brand": "Toshiba",
    "price": 150,
    "img": "item2TV.png",
    "options": [
     {
      "label": "Size",
      "values": [
       "32 Inch",
       "43 Inch"
      ]
     },
     {
      "label": "Resolution",
      "values": [
       "1080p",
       "4K"
      ]
     }
    ],
    "colors": []
   },
   {
    "id": "tv-3",
    "name": "Toshiba 4K Smart Fire",
    "brand": "Toshiba",
    "price": 590,
    "img": "item3TV.png",
    "options": [
     {
      "label": "Size",
      "values": [
       "32 Inch",
       "43 Inch"
      ]
     },
     {
      "label": "Resolution",
      "values": [
       "1080p",
       "4K"
      ]
     }
    ],
    "colors": []
   },
   {
    "id": "tv-4",
    "name": "Toshiba 4K Smart Fire",
    "brand": "Toshiba",
    "price": 320,
    "img": "item4TV.png",
    "options": [
     {
      "label": "Size",
      "values": [
       "32 Inch",
       "43 Inch"
      ]
     },
     {
      "label": "Resolution",
      "values": [
       "1080p",
       "4K"
      ]
     }
    ],
    "colors": []
   },
   {
    "id": "tv-5",
    "name": "LG OLED C3",
    "brand": "LG",
    "price": 1300,
    "img": "placeholder-tv.svg",
    "options": [
     {
      "label": "Size",
      "values": [
       "42 Inch",
       "55 Inch",
       "65 Inch"
      ]
     },
     {
      "label": "HDR",
      "values": [
       "HDR10",
       "Dolby Vision"
      ]
     }
    ],
    "colors": []
   },
   {
    "id": "tv-6",
    "name": "Sony Bravia XR X90L",
    "brand": "Sony",
    "price": 1100,
    "img": "placeholder-tv.svg",
    "options": [
     {
      "label": "Size",
      "values": [
       "55 Inch",
       "65 Inch"
      ]
     },
     {
      "label": "HDR",
      "values": [
       "HDR10",
       "Dolby Vision"
      ]
     }
    ],
    "colors": []
   },
   {
    "id": "tv-7",
    "name": "Samsung QLED Q60C",
    "brand": "Samsung",
    "price": 600,
    "img": "placeholder-tv.svg",
    "options": [
     {
      "label": "Size",
      "values": [
       "43 Inch",
       "55 Inch",
       "65 Inch"
      ]
     },
     {
      "label": "HDR",
      "values": [
       "HDR10+"
      ]
     }
    ],
    "colors": []
   },
   {
    "id": "tv-8",
    "name": "Hisense A7 4K",
    "brand": "Hisense",
    "price": 450,
    "img": "placeholder-tv.svg",
    "options": [
     {
      "label": "Size",
      "values": [
       "43 Inch",
       "55 Inch"
      ]
     },
     {
      "label": "HDR",
      "values": [
       "HDR10",
       "Dolby Vision"
      ]
     }
    ],
    "colors": []
   },
   {
    "id": "tv-9",
    "name": "TCL C645 QLED",
    "brand": "TCL",
    "price": 500,
    "img": "placeholder-tv.svg",
    "options": [
     {
      "label": "Size",
      "values": [
       "50 Inch",
       "55 Inch",
       "65 Inch"
      ]
     },
     {
      "label": "HDR",
      "values": [
       "HDR10",
       "Dolby Vision"
      ]
     }
    ],
    "colors": []
   }
  ]
 }
};
