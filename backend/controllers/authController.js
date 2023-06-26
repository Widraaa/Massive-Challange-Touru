import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import path from "path";
//  user register
export const register = async (req, res) => {
  // hashing password
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  console.log(req.files);
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      tgllahir: req.body.tgllahir,
      nohp: req.body.nohp,
      ktp: req.body.ktp,
      photo: req.body.photo,
    });
    await newUser.save();
    res.status(200).json({ success: true, message: "Successfully Created" });
    // let ktp;
    // let uploadPath;
    // if (!req.files || Object.keys(req.files).length === 0) {
    //   return res.status(400).send("No files were uploaded.");
    // }

    // // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    // ktp = req.files.ktp;
    // const ext = path.extname(ktp.name);
    // const fileName = ktp.md5 + ext;
    // uploadPath = "./public/ktp/" + fileName;
    // const url = `${req.protocol}://${req.get("host")}/ktp/${fileName}`;

    // Use the mv() method to place the file somewhere on your server
    // ktp.mv(uploadPath, function (err) {
    //   if (err) return res.status(500).send(err);

    //   const newUser = new User({
    //     username: req.body.username,
    //     email: req.body.email,
    //     password: hash,
    //     tgllahir: req.body.tgllahir,
    //     nohp: req.body.nohp,
    //     ktp: url,
    //     photo: req.body.photo,
    //   });

    //   newUser.save();
    //   res.status(200).json({ success: true, message: "Successfully Created" });
    // });
  } catch (err) {
    console.log(err);
    res
      .status(404)
      .json({ success: false, message: "Failed to Create. Try again" });
  }
};

//  user login
export const login = async (req, res) => {
  const email = req.body.email;
  try {
    const user = await User.findOne({ email });
    // if user doesn't exist
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    // if user is exist then check the password or compare the password
    const checkCorrectPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    // if password is incorrect
    if (!checkCorrectPassword) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect email or Password" });
    }

    const { Password, role, ...rest } = user._doc;

    // create jwt token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15d" }
    );

    // set token in the browser cookies and send the response to the client
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({
        token,
        data: { ...rest },
        role,
      });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to login" });
  }
};
