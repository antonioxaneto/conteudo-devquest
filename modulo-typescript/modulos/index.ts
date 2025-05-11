import { paginationPerPage, Customer } from "./customer"; 

interface SpecialCustomer extends Customer {
    couponQuantity: number
}

const SpecialCustomer: SpecialCustomer = {
    couponQuantity: 10,
    name: "Neto",
    age: 32
}