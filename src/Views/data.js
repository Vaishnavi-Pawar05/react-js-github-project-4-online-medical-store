const PRODUCTS = [
  {
    "productId": "1",
    "name": "Paracetamol",
    "subSentence": "Reliable fever and pain relief",
    "description": "Paracetamol is a common medication used to treat pain and fever. It is available in various forms including tablets and syrups.",
    "price": 25,
    "minGram": 500,
    "maxGram": 1000,
    "images": [
      "https://5.imimg.com/data5/SELLER/Default/2024/3/402898852/DG/BG/MD/45418571/500mg-paracetamol-tablet-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2023/10/349824765/ZG/EJ/YC/45418571/pcd-pharma-franchise-in-himachal-pradesh-1000x1000.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2021/12/PZ/BK/YG/45418571/paradak-500-1000x1000.JPG",
      "https://icdn.tnmeds.com/cache/data/tnimages/14888-500x500.jpg"
    ]
  },
  {
    "productId": "2",
    "name": "Crocin",
    "subSentence": "Fast-acting pain and fever reducer",
    "description": "Crocin contains paracetamol and is used for headache, body ache, and fever relief.",
    "price": 30,
    "minGram": 500,
    "maxGram": 650,
    "images": [
      "https://meds.myupchar.com/126765/da8c8db73d2c48d8807c76b912891592.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/8/539521883/DO/UE/VU/17376909/crocin-advance-tablet-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/PDFImage/2025/8/539523915/JI/OM/PY/17376909/crocin-advance-tablet-1000x1000.png",
      "https://5.imimg.com/data5/SELLER/PDFImage/2025/8/539523918/UU/OP/DD/17376909/crocin-advance-tablet-1000x1000.png"
    ]
  },
  {
    "productId": "3",
    "name": "Calpol",
    "subSentence": "Gentle relief for children",
    "description": "Calpol is a pediatric paracetamol syrup used for reducing fever and relieving pain in infants and children.",
    "price": 45,
    "minGram": 120,
    "maxGram": 250,
    "images": [
       "https://www.thefamilychemist.co.uk/wp-content/uploads/2022/05/calpol-6-suspension-80ml.jpg",
      "https://c7.alamy.com/comp/2B89AB9/calpol-sixplus-with-syringe-on-isolated-white-background-2B89AB9.jpg",
      "https://c7.alamy.com/comp/A3MM4A/close-up-vertical-portrait-of-girl-taking-medicine-from-a-spoon-A3MM4A.jpg",
      "https://c7.alamy.com/comp/2B89ABC/calpol-sixplus-box-on-isolated-white-background-2B89ABC.jpg"
    ]
  },
  {
    "productId": "4",
    "name": "Ibuprofen",
    "subSentence": "Anti-inflammatory painkiller",
    "description": "Ibuprofen is used to reduce fever and treat pain or inflammation caused by many conditions.",
    "price": 40,
    "minGram": 200,
    "maxGram": 400,
    "images": ["https://pics.walgreens.com/prodimg/644980/450.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJLfZdQJ5Yz0KwvOLSZDXpF9IMaGi9zjrt1A&s",
      "https://assets.poison.org/1116x837/b6e1c5d05f/ibuprofen-in-glass.jpg/m/640x0/filters:quality(70):format(webp)"
    ]
  },
  {
    "productId": "5",
    "name": "Combiflam",
    "subSentence": "Dual action pain relief",
    "description": "Combiflam combines ibuprofen and paracetamol for effective relief from pain and inflammation.",
    "price": 50,
    "minGram": 400,
    "maxGram": 650,
    "images": [
      "https://assets.truemeds.in/Images/ProductImage/TM-TACR1-009412/combiflam-tablet-20_combiflam-tablet-20--TM-TACR1-009412_3.png?width=320",
      "https://assets.truemeds.in/Images/ProductImage/TM-TACR1-009412/combiflam-tablet-20_combiflam-tablet-20--TM-TACR1-009412_1.png?width=320",
      "https://assets.truemeds.in/Images/ProductImage/TM-TACR1-009412/combiflam-tablet-20_combiflam-tablet-20--TM-TACR1-009412_2.png?width=320",
      "https://assets.truemeds.in/Images/ProductImage/TM-TACR1-009412/combiflam-tablet-20_combiflam-tablet-20--TM-TACR1-009412_4.png?width=320"
    ]
  },
  {
    "productId": "6",
    "name": "Benadryl",
    "subSentence": "Allergy and cold relief",
    "description": "Benadryl is an antihistamine used to relieve symptoms of allergy, hay fever, and the common cold.",
    "price": 35,
    "minGram": 8,
    "maxGram": 25,
    "images": [
      "https://images.ctfassets.net/t975yazu1avh/7xD9MJW7WCCauOzBkJ8jHx/a967b5d45cfac56a7e772bc8d6e5eef9/BEN_Allergy_ES_Tabs_CLA1.webp?fm=webp&w=640",
      "https://images.ctfassets.net/t975yazu1avh/5XV5yzc3WvPyqndcUGpGQE/52151809595af1a49b3c73a081e0d61a/BEN_300450235244_US_Allergy_Extra_Strength_Tablets_24CT_00000_Original-file.webp?fm=webp&w=3840",
      "https://images.ctfassets.net/t975yazu1avh/6Q1VR98lPTAWK6zK9XB4XE/227f049312df9b48cb0be041379c93ef/benadryl-extra-strength-tablets-package-back.webp?fm=webp&w=640",
      "https://images.ctfassets.net/t975yazu1avh/1kleSAyLEOrMXuR2ENOHXW/a0f71d5f7000520ef2b5d9adb5276838/BEN_Allergy_ES_Tabs_BEN1.webp?fm=webp&w=640"
    ]
  },
  {
    "productId": "8",
    "name": "Ascoril",
    "subSentence": "Expectorant for cough",
    "description": "Ascoril is used to treat cough associated with bronchitis, bronchial asthma, and emphysema.",
    "price": 60,
    "minGram": 100,
    "maxGram": 200,
    "images": [
      "https://res.cloudinary.com/tripleaim-software/image/upload/c_scale,w_184,f_auto/v1667244853/drugImages/ascoril-d_qxw87y.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIQyaKfn6pnCcXWyunMklcVnD4GvMQJDRETA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLNHfokQnm1U2AX3Vg-_CWYqE1qPB2vdeJTQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaJy6rZ5UMX_eiuqzm9lLqLhdqIwlCfyrrxg&s"
    ]
  },
  {
    "productId": "9",
    "name": "Vicks Action 500",
    "subSentence": "Advanced cold relief",
    "description": "Vicks Action 500 provides relief from multiple cold symptoms including headache and body ache.",
    "price": 40,
    "minGram": 500,
    "maxGram": 650,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIvEJkkwgLXXSgPm59H8V_JgZVqKwGNB-QiA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZRqAF9HjCH7KaAzfA7FcOstGZi7HmHRnmQ&s",
      "https://www.bbassets.com/media/uploads/p/xl/40208833_3-vicks-action-500-advanced.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Zl5jRsGbMHDA-GZhx8OAX3R43JL7vgxmZQ&s"
    ]
  },
  {
    "productId": "10",
    "name": "Amoxicillin",
    "subSentence": "Broad-spectrum antibiotic",
    "description": "Amoxicillin is a penicillin antibiotic used to treat bacterial infections.",
    "price": 80,
    "minGram": 250,
    "maxGram": 500,
    "images": [
      "https://5.imimg.com/data5/SELLER/Default/2022/9/FT/AS/TY/132158408/amoxicillin-tablets-500-mg-500x500.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_oM713nsr_adjF5kP2tPAsGh4MsvlbTQssg&s",
      "https://5.imimg.com/data5/SELLER/Default/2022/11/TH/KE/CK/82036934/amoxicillin-250-mg-capsules-500x500.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtqDNV4KAcXn7AmDN2sVFDH828lDB3FHzbWQ&s"
    ]
  },
  {
    "productId": "11",
    "name": "Azithromycin",
    "subSentence": "Effective against infections",
    "description": "Azithromycin is an antibiotic used for various bacterial infections including ear infections and pneumonia.",
    "price": 120,
    "minGram": 250,
    "maxGram": 500,
    "images": [
      "https://www.mountainside-medical.com/cdn/shop/files/Azithromycin-250-mg-Tablets-by-Teva-Pharmaceuticals-NDC-50111-0787-10_465x465.jpg?v=1767121754",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROsyI6VtKlafoATUGCATWE42drdTGj2LOPMw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmlHP7XqjTBQOl-FNMH_6_ccPcz0CUxOuI3g&s",
    ]
  },
  {
    "productId": "12",
    "name": "Ciprofloxacin",
    "subSentence": "Powerful antibiotic",
    "description": "Ciprofloxacin is used to treat a variety of bacterial infections.",
    "price": 90,
    "minGram": 250,
    "maxGram": 500,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLq4umS5CZPxbs5_bTbBBdbjkk_uWH7YlGpw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfz0N86Cuh5GnsB-moVWkleaI46WgRR13xEQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtd7fKYrHwKWW3tv4SS8vmDp40JXi1m6uOiQ&s",
    ]
  },
  {
    "productId": "13",
    "name": "Vitamin C Tablets",
    "subSentence": "Boost immunity",
    "description": "Vitamin C tablets help in boosting immunity and preventing vitamin C deficiency.",
    "price": 150,
    "minGram": 500,
    "maxGram": 1000,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT9YfGA_NnPliNJK83mWNSdEmXOMs5d1_N4Q&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0HR8EYidnD4aDMHrVxd-q1nVwaR2ILp7Mww&s",
      "https://m.media-amazon.com/images/I/710OFbun3cL._SY450_.jpg",
    ]
  },
  {
    "productId": "14",
    "name": "Zincovit",
    "subSentence": "Multivitamin supplement",
    "description": "Zincovit is a multivitamin and multimineral supplement for overall health.",
    "price": 200,
    "minGram": 15,
    "maxGram": 45,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhDwtC9PLDUkTLrCANrZFFzrOnRSik4LgpxQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqSXnNW5HvUhXoXS__UYOLLvU1KUMEsFgc7g&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7aSmMocBGvfXDcNn7zFG52aG-5k_nUMrStQ&s",
    ]
  },
  {
    "productId": "15",
    "name": "Revital H",
    "subSentence": "Energy and vitality",
    "description": "Revital H is a health supplement that provides energy and supports overall vitality.",
    "price": 250,
    "minGram": 30,
    "maxGram": 60,
    "images": [
      "https://rukmini1.flixcart.com/image/1500/1500/xif0q/vitamin-supplement/8/v/c/-original-imahbf6qkq4bqcgw.jpeg?q=70",
      "https://cdn01.pharmeasy.in/dam/products_otc/270552/revital-men-complete-multivitamin-with-natural-ginseng-30-capsules-6.01-1749723066.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjBhSwHQjg41Q3_4z0CP50nC9yTXmUeHu5HQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYUrg3rroJGnNRyNMXhsZvnAyaRcK4LUBvJg&s"
    ]
  },
  {
    "productId": "16",
    "name": "Shelcal",
    "subSentence": "Calcium supplement",
    "description": "Shelcal provides calcium and vitamin D for bone health.",
    "price": 180,
    "minGram": 500,
    "maxGram": 1000,
    "images": [
      "https://cdn01.pharmeasy.in/dam/products_otc/K78299/shelcal-500mg-bottle-of-30-tablets-6.01-1754575084.jpg",
      "https://d3plwh5kl8nxwl.cloudfront.net/Shelcal500_D3_02_01_1_a4c7c9bc1e.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdYt-t_WUZ5fHXrkW3WTWY_JCBcZwLuC9aFA&s",
      "https://www.clinikally.com/cdn/shop/files/Shelcal500Calcium_VitaminD3Bone_MuscleHealthTablet40Tablets3.jpg?v=1769513427&width=1000"
    ]
  },
  {
    "productId": "17",
    "name": "Digene",
    "subSentence": "Antacid for digestion",
    "description": "Digene is an antacid used to relieve acidity and indigestion.",
    "price": 20,
    "minGram": 200,
    "maxGram": 400,
    "images": [
       "https://www.planethealth.in/image/cache/catalog/44578-500x500.png",
      "https://distrapi.blob.core.windows.net/strapi-uploads/assets/Digene_Syrup_Uses_1122d05da1.webp",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEzvvHACyRq6SEUP5fvlqt3PdramdFd7dkKg&shttps://via.placeholder.com/300x300?text=Digene+2",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwd0UmtqiYcUdW8dYAS9wm1FyDGD76ODnhfw&s"
    ]
  },
  {
    "productId": "18",
    "name": "Gelusil",
    "subSentence": "Relief from acidity",
    "description": "Gelusil provides quick relief from heartburn and acidity.",
    "price": 25,
    "minGram": 150,
    "maxGram": 300,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY6lDgkMecTPb6LnsSZlPSFd9WnsCZkGzDIg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-O485m_DxGOwiz0XxaCmc822FRBMne1QDiA&s",
      "https://images.apollo247.in/pub/media/catalog/product/G/E/GEL0002_3_1.jpg",

    ]
  },
  {
    "productId": "19",
    "name": "ENO",
    "subSentence": "Effervescent antacid",
    "description": "ENO is an effervescent antacid that relieves gas and acidity.",
    "price": 15,
    "minGram": 5,
    "maxGram": 10,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPTMArW7v51au2ulxPzfQVOOBHxK8IRGSfqA&s",
      "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/home/desktop/ENO-Range-short-desktop.jpg?auto=format",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVmW9lUhokw3EpYfT1e916WCx4kP3le78SwA&s",
      "https://www.bbassets.com/media/uploads/p/s/1220957_1-eno-fruit-salt-lemon.jpg"
    ]
  },
  {
    "productId": "20",
    "name": "Metformin",
    "subSentence": "Diabetes management",
    "description": "Metformin is used to control blood sugar levels in type 2 diabetes.",
    "price": 70,
    "minGram": 500,
    "maxGram": 1000,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSS1IhwW1n9MrllE-zMXsoclUjakZydBKOww&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_LN92nC2WQP1T85KM3SBkcKNBYoUxkOfB3A&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWYy5dv8b1gIRFxoo-kABS5gzExi7MDRIGsg&s",
      "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2023/11/diabetes_metformin_GettyImages526612260_Thumb.jpg"
    ]
  },
  {
    "productId": "21",
    "name": "Glycomet",
    "subSentence": "Blood sugar control",
    "description": "Glycomet contains metformin and helps in managing diabetes.",
    "price": 75,
    "minGram": 500,
    "maxGram": 1000,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8J4I1ysTiLFfpX9feYxSdSqekR2YJXtmKpg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQboXM-FRUzFNPPxfb6yh8S5ICMvCpAwNK5lg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5mXkYMwOytGZ8BgPPo0X97Sca7zWR_Ln40g&s",
    ]
  },
];

export default PRODUCTS;