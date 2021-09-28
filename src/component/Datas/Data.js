import { sidebar__data } from './sidebar__data'
import { user_menu } from './user_menu';

export const EN = {
    sidebar: sidebar__data.en,
    input: 'Search here...',
    pages: {
        dashboard: 'Dashboard',
        customer: 'Customers',
        products: 'Products',
        orders: 'Orders',
        setting: 'Settings'
    },
    selectProduct: 'Please Select Product',
    chooseMode: 'Choose Mode',
    chooseColor: 'Choose Color',
    statusCard: [
        {
            icon: "fas fa-shopping-bag",
            count: "1,995",
            title: "Total sales"
        },
        {
            icon: "fas fa-shopping-bag",
            count: "1,995",
            title: "Daily visits"
        },
        {
            icon: "fas fa-shopping-bag",
            count: "1,995",
            title: "Total income"
        },
        {
            icon: "fas fa-shopping-bag",
            count: "1,995",
            title: "Total orders"
        },
    ],
    topCustomer: ['User', 'Order', 'Spending'],
    latestCostumer: ['order id', 'user', 'data', 'total price', 'status'],
    footer: 'View All',
    customerListHead: ['','name','email','phone','total orders','total spend','location'],
    userMenu: user_menu.en,
    shortTableTitle: 'Top Costumers',
    longTableTitle: 'Latest Orders'
};
export const RU = {
    sidebar: sidebar__data.ru,
    input: 'Поищи здесь...',
    pages: {
        dashboard: 'Щиток приборов',
        customer: 'Клиенты',
        products: 'Продукты',
        orders: 'Заказы',
        setting: 'Настройки'
    },
    selectProduct: 'Пожалуйста, выберите продукт',
    chooseMode: 'Выберите режим',
    chooseColor: 'Выберите цвет',
    statusCard: [
        {
            icon: "fas fa-shopping-bag",
            count: "1,995",
            title: "Распродажа"
        },
        {
            icon: "fas fa-shopping-bag",
            count: "1,995",
            title: "Посещения"
        },
        {
            icon: "fas fa-shopping-bag",
            count: "1,995",
            title: "Прибыль"
        },
        {
            icon: "fas fa-shopping-bag",
            count: "1,995",
            title: "Заказов"
        },
    ],
    topCustomer: ['Пользоват', 'Порядок', 'Расходы'],
    latestCostumer: ['id', 'Пользователь', 'данные', 'цена', 'statuположение'],
    footer: 'Посмотреть все',
    customerListHead: ['','имя','Эл. адрес','Телефон','общее заказов',"общие расходы",'место'],
    userMenu: user_menu.ru,
    shortTableTitle: 'Лучшие клиенты',
    longTableTitle: 'Последние заказы'
};
export const UZ = {
    sidebar: sidebar__data.uz,
    input: 'Bu erda qidiring ...',
    pages: {
        dashboard: 'Boshqaruv paneli',
        customer: 'Xaridorlar',
        products: 'Mahsulotlar',
        orders: 'Buyurtmalar',
        setting: 'Sozlamalar'
    },
    selectProduct: 'Iltimos, Mahsulotni tanlang',
    chooseMode: 'Tartibni Tanlang',
    chooseColor: 'Rangni Tanlang',
    statusCard: [
        {
            icon: "fas fa-shopping-bag",
            count: "1,995",
            title: "Sotishlar"
        },
        {
            icon: "fas fa-shopping-bag",
            count: "1,995",
            title: "Tashriflar"
        },
        {
            icon: "fas fa-shopping-bag",
            count: "1,995",
            title: "Daromad"
        },
        {
            icon: "fas fa-shopping-bag",
            count: "1,995",
            title: "Buyurtmalar"
        },
    ],
    topCustomer: ['Mijoz', 'Buyurtma', 'Sarflash'],
    latestCostumer: ['id', 'foydalanuvchi', 'malumot', 'narx', 'status'],
    footer: 'Ko\'rish',
    customerListHead: ['',"ism","elektron pochta","telefon","Buyurtmalar","Xarajatlar",'Manzil'],
    userMenu: user_menu.uz,
    shortTableTitle: 'Top Mijoz',
    longTableTitle: 'Oxirgi Buyurtma'
};