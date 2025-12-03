function hello(name: string): string {
    console.log(typeof name);
    return `Hello, ${name}`;
}

console.log(hello("World"));
console.log(hello(42));
