// task 4A
let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

let addData = {
    name: "Zainul Muhammad Rofa",
    email: "zainrofa29@gmail.com",
    hobbies: ["Drawing", "Music", "Reading"]
}

const finalData = {
    ...data,
    ...addData
}
console.log(finalData)

// task 4B
const {
    street,
    city
} = data.address
console.log(street, city)