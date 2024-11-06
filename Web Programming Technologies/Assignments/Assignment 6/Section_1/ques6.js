const names = [
    "Sophia", "Jackson", "Olivia", "Liam", "Emma", "Noah", 
    "Ava", "Lucas", "Isabella", "Mason", "Mia", "Ethan", 
    "Amelia", "James", "Harper", "Benjamin", "Evelyn", 
    "Elijah", "Abigail", "Aiden", "Ella", "Logan", "Scarlett"
];

const res = names.map(func);

function func(n) {
    return n.length;
}

console.log(res);