function hello(name) {
    console.log(typeof name);
    return "Hello, ".concat(name);
}
console.log(hello("World"));
console.log(hello(42));
