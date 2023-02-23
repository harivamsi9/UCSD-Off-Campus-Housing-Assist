export const bedOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4+', label: '4+' }
];

export const locationOptions = [
    { value: 'La Jolla', label: 'La Jolla' },
    { value: 'Old Town', label: 'Old Town' },
    { value: 'Pacific Beach', label: 'Pacific Beach' },
    { value: 'Mission Beach', label: 'Mission Beach' },
    { value: 'Coronado Island', label: 'Coronado Island' },
    { value: 'Tijuana', label: 'Tijuana' },
    { value: 'Hillcrest', label: 'Hillcrest' }
];

export const bathOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4+', label: '4+' }
];
export const priceOptions = [
    { value: '-1000', label: '-1000' },
    { value: '1000-2000', label: '1000-2000' },
    { value: '2000-3000', label: '2000-3000' },
    { value: '3000-4000', label: '3000-4000' },
    { value: '4000+', label: '4000+' }
];
export const squareFeet = [
    { value: '300-600', label: '300-600' },
    { value: '600-1000', label: '600-1000' },
    { value: '1000-1500', label: '1000-1500' },
    { value: '1500+', label: '1500+' }
];

export const commuteTime = [
    { value: '-15min', label: '-15min' },
    { value: '15min-30min', label: '15min-30min' },
    { value: '30min+', label: '30min' }
];

export const testValues = [
    { bedroom: '1 bedroom', location: 'La Jolla', bathroom: '1 bathroom', price: 1230, squareFeet: 675, commuteTime: 10, url: "\\database\\images\\1_1.PNG" },
    { bedroom: '2 bedrooms', location: 'La Jolla', bathroom: '1 bathrooms', price: 1100, squareFeet: 650, commuteTime: 5, url: "\\UCSD-Off-Campus-Housing-Assist\\database\\images\\1_2.PNG" },
    { bedroom: '2 bedrooms', location: 'Old Town', bathroom: '2 bathrooms', price: 2700, squareFeet: 1150, commuteTime: 15, url: "\\UCSD-Off-Campus-Housing-Assist\\database\\images\\1_3.PNG" },
    { bedroom: '2 bedrooms', location: 'Old Town', bathroom: '2 bathrooms', price: 2550, squareFeet: 1125, commuteTime: 12, url: "\\UCSD-Off-Campus-Housing-Assist\\database\\images\\2_1.PNG" },
    { bedroom: '3 bedrooms', location: 'Pacific Beach', bathroom: '2 bathrooms', price: 3500, squareFeet: 1600, commuteTime: 8, url: "\\UCSD-Off-Campus-Housing-Assist\\database\\images\\2_2.PNG" },
    { bedroom: '1 bedroom', location: 'La Jolla', bathroom: '1 bathroom', price: 1230, squareFeet: 675, commuteTime: 10, url: "\\database\\images\\1_1.PNG" },
    { bedroom: '2 bedrooms', location: 'La Jolla', bathroom: '1 bathrooms', price: 1100, squareFeet: 650, commuteTime: 5, url: "\\UCSD-Off-Campus-Housing-Assist\\database\\images\\1_2.PNG" },
    { bedroom: '2 bedrooms', location: 'Old Town', bathroom: '2 bathrooms', price: 2700, squareFeet: 1150, commuteTime: 15, url: "\\UCSD-Off-Campus-Housing-Assist\\database\\images\\1_3.PNG" },
    { bedroom: '2 bedrooms', location: 'Old Town', bathroom: '2 bathrooms', price: 2550, squareFeet: 1125, commuteTime: 12, url: "\\UCSD-Off-Campus-Housing-Assist\\database\\images\\2_1.PNG" },
    { bedroom: '3 bedrooms', location: 'Pacific Beach', bathroom: '2 bathrooms', price: 3500, squareFeet: 1600, commuteTime: 8, url: "\\UCSD-Off-Campus-Housing-Assist\\database\\images\\2_2.PNG" }
];


// add url here
export const testDetail =
{
    propertyName: "apt1",
    bedroom: 1,
    bathroom: 1,
    price: 1550,
    squareFeet: 675,
    commuteTime: 10,
    rating: 4,
    location: "La Jolla",
    address: "111 Los Alamos Dr, San Diego, CA 92114",
    website: "wwww.apartment.com",
    phone: "212-234-9381",
    reviews: [
        {
            date: "07/28/2020",
            comment: "good",
            ranking: 4
        },
        {
            date: "05/20/2021",
            comment: "nice",
            ranking: 5
        },
        {
            date: "01/10/2020",
            comment: "not so bad, but I wish I could live in a better environment, and the leasing office can be nice to residents, repair time should be shorter",
            ranking: 3
        },
        {
            date: "02/15/2019",
            comment: "bad",
            ranking: 2
        },
        {
            date: "02/19/2019",
            comment: "bad",
            ranking: 1
        }
    ],
    historicRent: [
        {
            dateIn: "07/10/2019",
            dateOut: "06/28/2020",
            monthlyRent: 1500
        },
        {
            dateIn: "03/01/2020",
            dateOut: "02/20/2022",
            monthlyRent: 1550
        },
        {
            dateIn: "02/02/2016",
            dateOut: "05/10/2018",
            monthlyRent: 1600
        },
        {
            dateIn: "01/15/2020",
            dateOut: "06/20/2020",
            monthlyRent: 1450
        }
    ]
}


