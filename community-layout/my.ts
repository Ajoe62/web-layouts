type User = { name: string; email?: string };

const user: User = { name: "Ada" };
if (user.email) console.log(user.email.toLowerCase());
else console.log("No email");
