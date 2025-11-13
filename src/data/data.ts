export const data = {
  "products": [
    {
      "id": "mobile-h1",
      "name": "Handy1",
      "category": "mobile",
      "description": "The standard model mobile phone with excellent features.",
      "image_url": "/images/handy1.jpg",
      "variants": [
        {
          "sku": "H1-128",
          "name": "128GB",
          "storage": 128,
          "price": 699.99,
          "inStock": true
        },
        {
          "sku": "H1-512",
          "name": "512GB",
          "storage": 512,
          "price": 899.99,
          "inStock": true
        }
      ]
    },
    {
      "id": "mobile-h1pro",
      "name": "Handy1 Pro",
      "category": "mobile",
      "description": "The premium model mobile phone with advanced camera and display.",
      "image_url": "/images/handy1pro.jpg",
      "variants": [
        {
          "sku": "H1P-128",
          "name": "128GB",
          "storage": 128,
          "price": 999.99,
          "inStock": true
        },
        {
          "sku": "H1P-512",
          "name": "512GB",
          "storage": 512,
          "price": 1199.99,
          "inStock": false
        }
      ]
    },
    {
      "id": "earbuds-hb1",
      "name": "HandyBuds 1",
      "category": "earbuds",
      "description": "Standard wireless earbuds with reliable sound quality.",
      "image_url": "/images/handybuds1.jpg",
      "variants": [
        {
          "sku": "HB1-STD",
          "name": "Standard",
          "color": "Black",
          "price": 99.99,
          "inStock": true
        }
      ]
    },
    {
      "id": "earbuds-hb1pro",
      "name": "HandyBuds 1 Pro",
      "category": "earbuds",
      "description": "Premium wireless earbuds with active noise cancellation (ANC).",
      "image_url": "/images/handybuds1pro.jpg",
      "variants": [
        {
          "sku": "HB1P-STD",
          "name": "Pro",
          "color": "White",
          "price": 149.99,
          "inStock": true
        }
      ]
    }
  ],
  "accessories": [
    {
      "id": "acc-charger",
      "name": "Universal Fast Charger",
      "category": "charger",
      "description": "High-speed charger compatible with all Handy phones.",
      "price": 29.99,
      "compatibility": ["mobile-h1", "mobile-h1pro", "all-mobiles"],
      "image_url": "/images/charger.jpg",
      "inStock": true
    },
    {
      "id": "acc-case",
      "name": "Clear Protective Case",
      "category": "phone-case",
      "description": "Durable, clear case that fits all Handy phones.",
      "price": 19.99,
      "compatibility": ["mobile-h1", "mobile-h1pro", "all-mobiles"],
      "image_url": "/images/phonecase.jpg",
      "inStock": true
    }
  ]
}