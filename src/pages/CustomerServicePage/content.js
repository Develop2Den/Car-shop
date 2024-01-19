const getBlockItem = (header, description, items) => {
    const capitalizedHeader = header
        .split(' ')
        .map((elem) => `${elem.charAt(0)}${elem.slice(1).toLowerCase()}`)
        .join('');

    return {
        header,
        description,
        id: `cstmSrvc${capitalizedHeader}`,
        items: items.map((elem) => ({ itemName: elem[0], itemParagraphs: elem[1] })),
    };
};

const contentList = [
    getBlockItem('ORDER ISSUES', null, [
        [
            'DUTIES & TAXES',
            [
                "Duties and taxes are imposed to generate revenue and protect local industry; almost all shipments crossing international borders are subject to duty and tax assessment by the importing country's government.",
                'Customs officials assess duties and taxes based on information provided on the shipping label, the Commercial Invoice, and other relevant documents.',
                'The customs clearance services included as part of international services are meant to facilitate the import of goods intended for consumption in that country.',
                'Therefore, they do not include some special procedures that might be needed to meet governmental requirements for duties and tax relief at the time of export or import.',
            ],
        ],
        [
            'CANCELLATIONS',
            [
                'Customers can cancel products immediately after the order is created or after the products are shipped. In such cases, the user must be able to conveniently cancel or stop the delivery of products in the order.',
                'If your order is eligible for cancellation, a ‘cancel order’ button will be available till the order is delivered. Click this button to cancel your order.',
                "After submitting the cancellation, you'll receive a confirmation message on the screen. You'll also receive a message in the Message Center in Your Account.",
                'You also confirm that the order was canceled by visiting the Canceled Orders section in Your Orders.',
            ],
        ],
        [
            'PREORDERS',
            [
                'Pre-orders require full payment at the time of checkout.',
                'Estimated shipping dates are provided for each pre-order item, but are subject to change due to unforeseen circumstances.',
                'If you have pre-ordered multiple items, your entire order will be shipped together once all items are available.',
                'If you wish to cancel a pre-order, you must do so within 24 hours of placing the order to receive a full refund.',
                'We reserve the right to cancel any pre-order at any time and provide a full refund.',
                'By pre-ordering, you agree to these pre-order rules and our general terms and conditions.',
            ],
        ],
    ]),

    getBlockItem('DELIVERY', null, [
        [
            'ORDER TRACKING',
            [
                'After placing an order, you will receive an email containing all the details.',
                'We may also be in touch if we need further information to verify your payment.',
                'Once your order is confirmed, it will be dispatched within 2 business days.',
                "Depending on your location and chosen shipping method, delivery takes 2-7 business days after it's dispatched.",
                'We will keep you updated with tracking information and an estimated delivery date.',
                'You can also follow its journey by heading to ‘My Orders’ in your account, or if you opted for guest checkout, you can track the status of your order here.',
            ],
        ],
        [
            'SAME DAY DELIVERY',
            [
                'For $15.90 per order, Same Day delivery within 1 business day is available for select areas only. Place your order before 12 noon to receive your parcel by 9pm that evening - as some orders/locations may be delivered later in the evening, please do not order for delivery to a business address if the business is closed after 6pm.',
                'Passed 12 noon? If you place your order past 12 noon Monday to Thursday, you’ll get your parcel by 9pm the following business day Mon-Fri. Orders placed on Friday after 12 noon, weekends and public holidays will be shipped on the next business day.',
                'Exclusions apply, please see full list below. If a postcode and item are eligible, this delivery option will be made available at checkout.',
            ],
        ],
        [
            'CAN I CHANGE THE COLLECTION LOCATION FOR MY ORDER?',
            [
                'You now have the option to change your delivery options when your parcel is on its way, offering flexibility for your delivery. You can now change when and where your parcel is delivered after it has been sent.',
                'Being able to change delivery options means that you don’t have to worry if you are no longer going to be in.',
                'You will have peace of mind and control over when and where you receive your parcel.  ',
            ],
        ],
    ]),

    getBlockItem('RETURNS & REFUNDS', null, [
        [
            'CUSTOMISED ITEMS',
            [
                "To order a customized item, you must first select the item you would like to customize and click on the 'customize' button.",
                'Next, you will be directed to a customization page where you can choose your desired customization options such as color, size, and personalization details.',
                'Once you have selected your customization options, you can preview the final design before adding the item to your cart.',
                'Once your customized item is ready, we will ship it to the shipping address provided during checkout.',
                'Please note that customized items are final sale and cannot be returned or exchanged unless there is a defect in the product or an error in personalization caused by us.',
                'By ordering a customized item, you agree to these customized item ordering rules and our general terms and conditions.',
            ],
        ],
        [
            'REFUNDS',
            [
                'We want you to be completely satisfied with your purchase. If for any reason you are not, we offer a hassle-free refund policy.',
                'To be eligible for a refund, the item(s) must be unused, in its original packaging, and in the same condition as when you received it.',
                'We do not accept returns or exchanges for customized or personalized items unless there is a defect in the product or an error in personalization caused by us.',
                'Please note that shipping fees and any applicable taxes are non-refundable.',
                'If you received a wrong item due to an error on our part, we will send you the correct item free of charge and provide a prepaid return shipping label for the wrong item.',
                'We reserve the right to refuse a refund if the item(s) returned do not meet our refund policy requirements.',
                'By placing an order with us, you agree to our refund policy and our general terms and conditions.',
            ],
        ],
        [
            'FINAL SALE',
            [
                "Items marked as 'final sale' are non-returnable and non-refundable.",
                'Final sale items include clearance, discontinued, seasonal, and select promotional items.',
                'By purchasing a final sale item, you acknowledge and accept that the item is sold as-is with no warranty, and that it cannot be returned or exchanged for any reason.',
                'Final sale prices are final and cannot be combined with any other discounts or promotions.',
                'We reserve the right to cancel or modify a final sale item at any time and provide a full refund if the item is no longer available.',
            ],
        ],
        [
            'RETURNS PROCESS',
            [
                "Initiate the return: The customer initiates the return process by logging into their account on the online store's website and selecting the item(s) they wish to return.",
                'Reason for return: The customer is asked to provide a reason for the return, such as wrong size, wrong color, or defective item. They may also be asked to provide photos or other documentation to support their claim.',
                "Return approval: Once the return request is submitted, the online store's customer service team reviews the request and approves it if it meets the store's return policy.",
                'Shipping instructions: The customer is provided with shipping instructions, including a shipping label to print and attach to the package. The store may also provide instructions on how to package the item(s) for safe shipping.',
                'Return shipment: The customer ships the item(s) back to the online store, using the provided shipping label and packaging instructions. They may be responsible for covering the cost of return shipping, or the store may provide a prepaid shipping label.',
                'Item inspection: Once the item(s) are received by the online store, they are inspected to ensure that they are in the same condition as when they were shipped to the customer.',
                "Refund or exchange: If the item(s) pass inspection, the online store issues a refund to the customer's original payment method or initiates an exchange for a different size, color, or product. The customer may be notified via email or their account dashboard of the status of their return.",
            ],
        ],
        [
            'RETURNS POLICY & PROCESS',
            [
                'Returns Policy:',
                'At Postil, we want you to be completely satisfied with your purchase. If for any reason you are not satisfied, we accept returns of unused, undamaged, and unopened items within 30 days of purchase, except for final sale items. Items must be returned in their original packaging and with all tags and labels intact. Customers are responsible for the cost of return shipping, unless the item is defective or the store made an error. Refunds are issued to the original payment method and may take up to 10 business days to process.',
                'Returns Process:',
                "To initiate a return, simply log into your account on our website and select the item(s) you wish to return. You'll be asked to provide a reason for the return, such as wrong size, wrong color, or defective item. You may also be asked to provide photos or other documentation to support your claim.",
                "Once your return request is submitted, our customer service team will review it and approve it if it meets our return policy. We'll then provide you with shipping instructions, including a shipping label to print and attach to the package. We may also provide instructions on how to package the item(s) for safe shipping.",
                "You'll be responsible for shipping the item(s) back to us using the provided shipping label and packaging instructions. Once we receive the item(s), we'll inspect them to ensure that they are in the same condition as when they were shipped to you. If the item(s) pass inspection, we'll issue a refund to your original payment method or initiate an exchange for a different size, color, or product.",
            ],
        ],
    ]),

    getBlockItem(
        'PAYMENT',
        'At Postil’ Shop, you are shopping pieces from our luxury brands and partners around the globe, expertly curated for you by our team. Prices are determined by each our partner, therefore the price of the same item may vary depending on your location and where you order an item from.',
        [
            [
                'WHICH CURRENCIES CAN I SHOP IN?',
                [
                    'At our online store, we accept payment in several different currencies to make shopping with us as convenient as possible for customers around the world. Currently, we accept payments in US dollars (USD), euros (EUR), British pounds (GBP), Canadian dollars (CAD), Australian dollars (AUD), and Japanese yen (JPY).',
                    "When you proceed to checkout, you'll have the option to select your preferred currency from the list provided. Once you select your currency, the prices of all items in your shopping cart will be automatically converted to that currency for your convenience.",
                    'Please note that the currency conversion rates are updated regularly, so the amount you see in your selected currency may be slightly different from the amount in another currency due to fluctuations in exchange rates. Also, your payment provider may charge a small conversion fee for processing the transaction in a different currency, so we recommend checking with your provider for details on any applicable fees.',
                    "If you have any questions or concerns about shopping in a specific currency, please don't hesitate to contact our customer support team for assistance. We're always here to help you have the best shopping experience possible.",
                ],
            ],
            [
                'WHEN WILL MY CARD BE CHARGED?',
                [
                    "At our online store, your card will be charged at the time of purchase. Once you've completed your order and entered your payment information, we'll immediately process the payment and charge your card for the total amount of your purchase, including any applicable taxes and shipping fees.",
                    "Please note that if you're using a debit card, the payment may be processed as a pending transaction, which means that the funds will be temporarily reserved in your account but won't be fully deducted until the transaction is cleared. The exact timing of when the funds will be deducted depends on your bank's policies and processing times, so we recommend checking with your bank for more information.",
                    "If you're using a credit card, the payment will be processed as a regular transaction and the funds will be immediately deducted from your available credit limit.",
                    "Once the payment has been processed, you'll receive a confirmation email with the details of your order and payment. If you have any questions or concerns about the payment process, please don't hesitate to contact our customer support team for assistance. We're always here to help you have the best shopping experience possible.",
                ],
            ],
            [
                'WHICH PAYMENT METHODS DO YOU ACCEPT?',
                [
                    'At our online store, we accept several different payment methods to make shopping with us as convenient as possible for our customers. Currently, we accept payments via credit cards, debit cards, PayPal, Apple Pay, and Google Pay.',
                    'If you choose to pay with a credit or debit card, we accept most major card brands, including Visa, Mastercard, American Express, and Discover. To ensure the security of your payment information, we use industry-standard encryption technology and follow strict data protection guidelines.',
                    'If you prefer to use PayPal, you can simply select the PayPal option at checkout and log in to your account to complete the payment. With PayPal, you can pay using your PayPal balance, linked bank account, or credit card.',
                    'For customers who use Apple Pay or Google Pay, simply select the appropriate option at checkout and follow the prompts to complete the payment using the saved payment information in your digital wallet.',
                    "Please note that some payment methods may not be available in certain countries or regions, and additional fees may apply depending on your chosen payment method. If you have any questions or concerns about payment options, please don't hesitate to contact our customer support team for assistance. We're always here to help you have the best shopping experience possible.",
                ],
            ],
            [
                'WILL MY PERSONAL DETAILS STAY SAFE?',
                [
                    "At our online store, we take the security and privacy of our customers' personal information very seriously. We use industry-standard encryption technology and follow strict data protection guidelines to ensure that your personal details stay safe and secure at all times.",
                    'When you shop with us, we collect only the information that we need to process your order and provide you with the best possible shopping experience. This may include your name, address, email address, phone number, and payment information.',
                    'We never sell or share your personal information with third-party companies for marketing purposes. Your information is used only for the purposes of fulfilling your order and providing you with updates and offers that may be of interest to you. If you choose to opt out of receiving marketing communications from us, you can easily do so at any time.',
                    "If you have any questions or concerns about the security of your personal information, please don't hesitate to contact our customer support team for assistance. We're always here to help you have the best shopping experience possible, and we're committed to keeping your personal details safe and secure.",
                ],
            ],
            [
                'HOW TO FIND PRODUCTS',
                [
                    "Finding products at our online store is easy and convenient. We offer several options to help you quickly locate the products you're looking for.",
                    'One way to find products is to use our search bar, located at the top of the page. Simply type in the name of the product or a relevant keyword, and our search algorithm will display a list of products that match your search criteria.',
                    "Another way to browse our products is to use our navigation menu, located at the top of the page or in the sidebar. You can browse products by category, such as clothing, accessories, or home goods, or by brand if you're looking for a specific brand.",
                    'Additionally, you can also use our filters to narrow down your search results by price, color, size, or other relevant attributes. This can help you quickly find the products that meet your specific needs and preferences.',
                    "Once you've found the product you're interested in, you can click on the product image to view more details, including product descriptions, photos, and customer reviews. From there, you can add the product to your shopping cart and proceed to checkout.",
                    "If you have any questions or concerns about finding products, please don't hesitate to contact our customer support team for assistance. We're always here to help you have the best shopping experience possible.",
                ],
            ],
            [
                'HOW TO ORDER & PAY',
                [
                    "Ordering and paying for products at our online store is easy and convenient. Here's a step-by-step guide on how to place an order and make a payment:",
                    "- Find the product you're interested in by browsing our categories or using the search bar.",
                    '- Click on the product image to view more details, including product descriptions, photos, and customer reviews.',
                    '- Select the desired size, color, or other relevant attributes, and then click the "Add to Cart" button.',
                    "- Once you've added all the products you want to your cart, click on the cart icon in the top right corner of the page to review your order.",
                    '- If you\'re satisfied with your order, click the "Checkout" button to proceed to the payment page.',
                    '- Fill in your personal information, including your name, shipping address, and contact details.',
                    '- Select your preferred payment method, such as credit card, debit card, PayPal, Apple Pay, or Google Pay.',
                    "- If you're paying with a credit or debit card, enter your card details, including the card number, expiration date, and security code.",
                    '- Review your order summary and make sure that all the information is correct.',
                    '- Click the "Place Order" button to complete your purchase.',
                    "Once your payment has been processed, you'll receive a confirmation email with the details of your order and payment. If you have any questions or concerns about the ordering or payment process, please don't hesitate to contact our customer support team for assistance. We're always here to help you have the best shopping experience possible.",
                ],
            ],
        ],
    ),

    getBlockItem('PRODUCT & STOCK', null, [
        [
            'STOCK NOTIFICATIONS',
            [
                'Stock notifications are an important tool for ensuring that you never run out of popular products and can quickly restock when inventory levels are running low. At our online store, we offer stock notifications for all of our products to help you stay on top of your inventory management.',
                'At our online store, we believe that effective inventory management is key to running a successful e-commerce business. Our stock notifications are just one of the many tools we offer to help you stay on top of your inventory and provide the best possible shopping experience for your customers.',
            ],
        ],
        [
            'PRODUCT VARIANTS',
            [
                "At our online store, we offer a wide variety of products, many of which come in multiple variants such as size, color, or material. We understand that it's important for customers to be able to find the exact product they're looking for, which is why we make it easy to manage and display product variants on our website.",
                "By offering product variants on our online store, we make it easy for customers to find and purchase the exact product they want. This not only improves the customer experience but can also increase sales by making it easier for customers to find the product that's right for them.",
            ],
        ],
        [
            'PRODUCT REVIEWS',
            [
                'Product reviews are an important tool for helping customers make informed purchasing decisions and for improving the quality of our products and customer service. At our online store, we encourage customers to leave product reviews and use that feedback to improve our products and services.',
            ],
        ],
    ]),

    getBlockItem('LEGAL POLICIES', null, [
        [
            'TERMS OF SERVICE',
            [
                'Ordering and Payment: When you place an order through our online store, you agree to pay for the products and services ordered at the time of purchase. We accept payment by credit card, debit card, and PayPal. All prices are in USD and do not include taxes or shipping fees.',
                'Shipping: We strive to process and ship orders within a reasonable timeframe. However, please note that shipping times may vary based on product availability and shipping destination. We are not responsible for any delays or damages caused by third-party shipping providers.',
                'Returns and Exchanges: We offer returns and exchanges for most products within 30 days of purchase. Returned items must be in their original condition and packaging. We reserve the right to refuse returns or exchanges for items that have been used, damaged, or tampered with.',
                'User Content: By submitting any user-generated content to our website, including reviews, comments, and images, you grant us a non-exclusive, royalty-free, perpetual, and irrevocable license to use, reproduce, modify, and distribute your content for any purpose.',
                'Limitation of Liability: We make every effort to ensure that the information on our website is accurate and up-to-date. However, we are not liable for any damages or losses arising from the use of our website or the products and services offered therein.',
            ],
        ],
        [
            'PRIVACY POLICY',
            [
                'Protecting your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our online store.',
                'Information We Collect: When you use our online store, we may collect personal information such as your name, email address, phone number, and billing information. We also collect non-personal information such as your IP address and browsing behavior.',
                'How We Use Your Information: We use your personal information to process and fulfill your orders, respond to your inquiries, and send you marketing communications. We also use non-personal information to improve our website and customer experience.',
                'Information Sharing: We may share your personal information with third-party service providers such as payment processors and shipping providers to facilitate your orders. We may also share your information in response to legal requests or to protect our rights and interests.',
                "Children's Privacy: Our website is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13.",
                'By using our website, you consent to the collection, use, and sharing of your personal information as outlined in this Privacy Policy. We reserve the right to modify this policy at any time without prior notice.',
            ],
        ],
        [
            'COOKIE POLICY',
            [
                'We use cookies and other tracking technologies to enhance your experience and collect data about your browsing behavior when you use our online store. This Cookie Policy explains how we use cookies and how you can manage your cookie preferences.',
                'What are Cookies? Cookies are small data files that are stored on your device when you visit our website. Cookies contain information about your browsing behavior and preferences.',
                'Cookie Preferences: You can manage your cookie preferences by adjusting your browser settings. You can choose to accept all cookies, reject all cookies, or receive a notification when a cookie is sent. Please note that some features of our website may not work properly if you disable cookies.',
                'Data Privacy: We take data privacy seriously and only use cookies to enhance your experience and collect data about your browsing behavior. We do not sell or share your data with third-party advertisers.',
                'By using our website, you consent to the use of cookies as outlined in this Cookie Policy. We reserve the right to modify this policy at any time without prior notice.',
            ],
        ],
    ]),
];

export default contentList;
