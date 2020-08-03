const emailValidator = (
  { body: { name, lastName, email, message } },
  res,
  next
) => {
  try {
    if (name.trim().length < 2) {
      throw new Error("The name is invalid");
    }

    if (lastName.trim().length < 2) {
      throw new Error("The last name is invalid");
    }

    const emailValidation = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailValidation.test(email)) {
      throw new Error("The E-Mail is invalid");
    }

    next();
  } catch (e) {
    console.log(e);
    res.status(400).json({ status: false });
  }
};

module.exports = emailValidator;
