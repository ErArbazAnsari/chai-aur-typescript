// in annotation types user need to explicitly explain what is the type

type UserRegistration = {
    name: string;
    password: string;
    address?: {
        location: string;
        nationality: string;
    };
};
const user: UserRegistration = {
    name: "arbaz",
    password: "123",
};
const user1: UserRegistration = {
    name: "arbaz",
    password: "123",
    address: {
        location: "india",
        nationality: "indian",
    },
};
