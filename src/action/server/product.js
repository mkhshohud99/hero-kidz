"use server";

import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

const COLLECTION = "products";

// GET ALL PRODUCTS
export const getProducts = async () => {
  try {
    const products = await dbConnect(COLLECTION).find({}).toArray();

    // convert Mongo ObjectId → string (IMPORTANT FIX)
    return products.map((p) => ({
      ...p,
      _id: p._id.toString(),
    }));
  } catch (error) {
    console.log("getProducts error:", error);
    return [];
  }
};

// GET SINGLE PRODUCT
export const getSingleProduct = async (id) => {
  try {
    if (!id || id.length !== 24) return null;

    const product = await dbConnect(COLLECTION).findOne({
      _id: new ObjectId(id),
    });

    if (!product) return null;

    return {
      ...product,
      _id: product._id.toString(),
    };
  } catch (error) {
    console.log("getSingleProduct error:", error);
    return null;
  }
};