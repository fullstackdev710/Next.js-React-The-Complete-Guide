function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    // Add sever-side validation
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    console.log(email, name, text);
    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };
    res.status(201).json({ message: "Added comment." });
  }

  if (req.method === "GET") {
    const dummyList = [
      { id: "c1", name: "Max", comment: "Tetst commetn" },
      { id: "c2", name: "Michael", comment: "Second commetn" },
    ];

    res.status(200).json({ comments: dummyList });
  }
}

export default handler;
