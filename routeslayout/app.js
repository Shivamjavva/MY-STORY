const express = require("express");
const app = express();

app.use(express.json());

// Fake user profile data
const profile = {
  username: "Shivamjavva",
  name: "Shivam Sharma",
  age: 20,
  email: "Shivam Sharma",
  bio: "I’m a developer who loves JavaScript!",
};

// Route to get profile
app.get("/profile", (req, res) => {
  res.json(profile);
});

// Route to update profile
app.post("/profile", (req, res) => {
  const { name, age, email, bio } = req.body;
  profile.name = name || profile.name;
  profile.age = age || profile.age;
  profile.email = email || profile.email;
  profile.bio = bio || profile.bio;

  res.json({ message: "Profile updated", profile });
});

app.listen(3000, () => console.log("Server running on port 3000"));
