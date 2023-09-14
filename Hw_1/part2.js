// 2. С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:
var users = [
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
];
//2.1
var getUsersName = users.map(function (user) { return user.name; }).join(', ');
console.log(getUsersName);
// 2.2
var getUsersCars = function (users) {
    return users.reduce(function (acc, user) { return acc + (user.cars ? user.cars.length : 0); }, 0);
};
console.log(getUsersCars(users));
//2.3
var getEducateUser = function (users) {
    return users.filter(function (user) { return user.hasEducation; });
};
console.log(getEducateUser(users));
//2.4
var getUsersHaveAnimals = function (users) {
    return users.filter(function (user) { return user.animals && user.animals.length > 0; });
};
console.log(getUsersHaveAnimals(users));
//2.5
var getCars = function (users) {
    return users.reduce(function (acc, user) {
        if (user.cars && user.cars.length > 0) {
            acc.push.apply(acc, user.cars);
        }
        return acc;
    }, []).join(', ');
};
console.log(getCars(users));
