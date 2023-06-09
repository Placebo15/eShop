import product1 from './assets/1.png';
import product2 from './assets/2.png';
import product3 from './assets/3.png';
import product4 from './assets/4.png';
import product5 from './assets/5.png';
import product6 from './assets/6.webp';
import product7 from './assets/7.webp';
import product8 from './assets/8.webp';
import angle2_1 from './assets/2-1.png';
import angle2_2 from './assets/2-2.png';
import angle2_3 from './assets/2-3.png';


export const PRODUCTS = [
    {
        id: 1,
        productName: "Iphone 13",
        price: 999.0,
        productImage: product1,
        productImages: [product1, product2, product3, product6],
        description: "The latest iPhone with advanced features.",
        specification: [
            "Display: 6.1-inch Super Retina XDR display",
            "Processor: A15 Bionic chip",
            "Camera: Dual-camera system with 12MP Ultra Wide and Wide cameras",
            "Battery: Built-in rechargeable lithium-ion battery",
        ],


        comments: [
            { username: "User1", comment: "Great phone!", rating: 5 },
            { username: "User2", comment: "Nice features.", rating: 4 },
        ],



    },
    {
        id: 2,
        productName: "Laptop Asus x550c",
        price: 1200.0,
        productImage: product2,
        productImages: [product2, angle2_1, angle2_2, angle2_3],
        description: "Powerful laptop for work and entertainment.",
        specification: [
            "Processor: Intel Core i7",
            "RAM: 16GB DDR4",
            "Storage: 1TB SSD",
            "Graphics: NVIDIA GeForce GTX 1050",
        ],
        comments: [
            { username: "User3", comment: "Fast and reliable.", rating: 5 },
            { username: "User4", comment: "Great for gaming.", rating: 4 },
        ],
    },
    {
        id: 3,
        productName: "Camera Cannon E05",
        price: 669.0,
        productImage: product3,
        productImages: [product3, product2, product3, product6],
        description: "High-quality camera for professional photography.",
        specification: [
            "Resolution: 24.2 megapixels",
            "Sensor Size: APS-C",
            "ISO Range: 100-25600",
            "Continuous Shooting: Up to 6 frames per second",
        ],
        comments: [
            { username: "User5", comment: "Excellent image quality.", rating: 5 },
            { username: "User6", comment: "Easy to use.", rating: 4 },
        ],
    },
    {
        id: 4,
        productName: "Van Gogh Denim Jacket",
        price: 150.0,
        productImage: product4,
        productImages: [product4, product2, product3, product6],
        description: "Stylish denim jacket with Van Gogh artwork.",
        specification: [
            "Material: Denim",
            "Artwork: Van Gogh's Starry Night",
            "Closure: Button",
            "Available Sizes: S, M, L, XL",
        ],
        comments: [
            { username: "User7", comment: "Unique design.", rating: 5 },
            { username: "User8", comment: "Good quality.", rating: 4 },
        ],
    },
    {
        id: 5,
        productName: "LED Strip Lights 65.6FT",
        price: 50.0,
        productImage: product5,
        productImages: [product5, product2, product3, product6],
        description: "Colorful LED strip lights for home decoration.",
        specification: [
            "Length: 65.6 feet",
            "Color Options: RGB",
            "Control: Remote control or mobile app",
            "Power Source: AC adapter",
        ],
        comments: [
            { username: "User9", comment: "Great ambiance.", rating: 5 },
            { username: "User10", comment: "Easy to install.", rating: 4 },
        ],
    },
    {
        id: 6,
        productName: "Don't Trip sweater",
        price: 59.99,
        productImage: product6,
        productImages: [product6, product2, product3, product6],
        description: "Comfortable sweater with a catchy slogan.",
        specification: [
            "Material: Cotton blend",
            "Sleeve Length: Long sleeves",
            "Available Sizes: S, M, L, XL",
            "Color Options: Black, Gray, Navy",
        ],
        comments: [
            { username: "User11", comment: "Nice and cozy.", rating: 5 },
            { username: "User12", comment: "Good fit.", rating: 4 },
        ],
    },
    {
        id: 7,
        productName: "Golf T-shirt",
        price: 36.0,
        productImage: product7,
        productImages: [product7, product2, product3, product6],
        description: "Stylish and comfortable T-shirt for golf enthusiasts.",
        specification: [
            "Material: Polyester",
            "Sleeve Length: Short sleeves",
            "Available Sizes: S, M, L, XL",
            "Color Options: White, Blue, Green",
        ],
        comments: [
            { username: "User13", comment: "Great for golfing.", rating: 5 },
            { username: "User14", comment: "Good quality fabric.", rating: 4 },
        ],
    },
    {
        id: 8,
        productName: "Don't Trip cap",
        price: 10.0,
        productImage: product8,
        productImages: [product8, product2, product3, product6],
        description: "Stylish cap with a catchy slogan.",
        specification: [
            "Material: Cotton",
            "Adjustment: Strapback",
            "Color Options: Black, White, Red",
        ],
        comments: [
            { username: "User15", comment: "Nice cap.", rating: 5 },
            { username: "User16", comment: "Fits well.", rating: 4 },
        ],
    },
];
