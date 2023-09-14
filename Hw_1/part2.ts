// 2. С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:

//     2.1. Создать строку из имен пользователей через запятую
//     2.2. Посчитать общее количество машин у пользователей
//     2.3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
//     2.4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
//     2.5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую*

interface User {
        name: string,
        phone: string,
        email: string,
        animals?: Array<string>,
        cars?: Array<string>,
        hasChildren: boolean,
        hasEducation: boolean

}

    const users: User[] = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
]

//2.1
const getUsersName: string = users.map((user) => user.name).join(', ')

console.log(getUsersName)
// 2.2
const getUsersCars = (users: User[]): number => {
    return users.reduce((acc, user) => acc + (user.cars ? user.cars.length : 0), 0)
}

console.log(getUsersCars(users));

//2.3

const getEducateUser = (users: User[]): User[] => {
    return users.filter(user => user.hasEducation)
}

console.log(getEducateUser(users));

//2.4
const getUsersHaveAnimals = (users: User[]): User[] => {
    return users.filter(user => user.animals && user.animals.length > 0)
}

console.log(getUsersHaveAnimals(users));

//2.5

const getCars = (users: User[]): string => {
    return users.reduce((acc: Array<string>, user: User) => {
        if(user.cars && user.cars.length > 0) {
            acc.push(...user.cars)
        }
        return acc;
    },[]).join(', ')
}

console.log(getCars(users));
