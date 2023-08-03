function modifier(strings, ...values) {
    const m = strings.reduce((previous, current) => {
        return previous + current + (values.length ? "Mr " + values.shift() : "");
    }, "");
    return m;
}
let player1 = "Sakib";
let player2 = "Tamim";

console.log(modifier`We have ${player1} and ${player2} in our cricket team.`);