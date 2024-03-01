import express from "express";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";

const __dirname = import.meta.dirname; // node -v 20.11

export default (app) => {
	app.use(cors());
	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());
	app.use(cookieParser());
	app.use("/", express.static(path.join(__dirname, "..", "public")));
};
