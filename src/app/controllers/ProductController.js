import Product from '../models/Product';

class ProductController {
    async store(req, res) {
        const { filename } = req.file;
        const {
            name,
            price,
            amount,
            category,
            brand,
            size,
            color,
            description,
        } = req.body;

        const product = await Product.create({
            image: filename,
            name,
            price,
            amount,
            category,
            brand,
            size,
            color,
            description,
        });
        return res.json(product);
    }

    async index(req, res) {
        const { id } = req.params;

        const product = await Product.findAll({ id });

        return res.json(product);

        // const {
        //     url,
        //     name,
        //     price,
        //     amount,
        //     category,
        //     brand,
        //     size,
        //     color,
        //     description,
        // } = await Product.findAll({ id });

        // return res.json({
        //     url,
        //     name,
        //     price,
        //     amount,
        //     category,
        //     brand,
        //     size,
        //     color,
        //     description,
        // });
    }

    async show(req, res) {
        const { id } = req.params;

        const amount = await Product.findByPk(id);

        return res.json(amount);
    }
}

export default new ProductController();
