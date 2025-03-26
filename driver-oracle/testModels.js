const UserModel = require("./userModel_oracle");
const ProductModel = require("./productModel_oracle");

async function testModels() {
  try {
    console.log("Criando usuário...");
    const userId = await UserModel.createUser("João Silva", "joao@email.com");
    console.log("Usuário criado com ID:", userId);

    console.log("Buscando usuário...");
    const user = await UserModel.getUserById(userId);
    console.log("Usuário encontrado:", user);

    console.log("Criando produto...");
    const productId = await ProductModel.createProduct("Notebook", 3500.0);
    console.log("Produto criado com ID:", productId);

    console.log("Buscando produto...");
    const product = await ProductModel.getProductById(productId);
    console.log("Produto encontrado:", product);
  } catch (err) {
    console.error("Erro nos testes:", err);
  }
}

testModels();
