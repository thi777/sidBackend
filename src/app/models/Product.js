import Sequelize, { Model } from 'sequelize';

class Product extends Model {
    static init(sequelize) {
        super.init(
            {
                image: Sequelize.STRING,
                name: Sequelize.STRING,
                price: Sequelize.DECIMAL,
                amount: Sequelize.INTEGER,
                category: Sequelize.STRING,
                brand: Sequelize.STRING,
                size: Sequelize.STRING,
                color: Sequelize.STRING,
                description: Sequelize.STRING,
                url: {
                    type: Sequelize.VIRTUAL,
                    get() {
                        return `http://localhost:3333/products/${this.image}`;
                    },
                },
            },
            {
                sequelize,
            }
        );
        return this;
    }
}

export default Product;
