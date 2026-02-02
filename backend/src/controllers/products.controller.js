import Product from "../models/product.model.js";

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.status(200).json({
      message: "Producto eliminado correctamente",
      product: deletedProduct
    });
  } catch (error) {
    res.status(400).json({ message: "ID inválido" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getProductId = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const getProducts = async (req, res) => {
  try {
    const { search } = req.query

    const filter = search ?
    {$or: [
      { nombre_producto: { $regex: search, $options: "i" } },
      { codigo_barras: { $regex: search, $options: "i" } }
    ]}
    : {}

    const products = await Product.find(filter)

    res.json(products)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}