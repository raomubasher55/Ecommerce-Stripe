"use strict";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products } = ctx.request.body;

    try {

      const lineItems = await Promise.all(
        products.map(async (product) => {
          const item = await strapi
            .service("api::product.product")
            .findOne(product.id);

          if (!item) {
            throw new Error(`Product not found for ID: ${product.id}`);
          }

          return {
            price_data: {
              currency: "inr",
              product_data: {
                name: item.tittle,
              },
              unit_amount: Math.round(item.price * 100),
            },
            quantity: product.attributes.quantity,
          };
        })
      );

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        success_url: `${process.env.CLIENT_URL}/success`,
        cancel_url: `${process.env.CLIENT_URL}/?success=false`,
        line_items: lineItems,
      });

      await strapi.service('api::order.order').create({
        data: { products, stripeId: session.id }
      });

      return { stripeSession: session };
    } catch (error) {
      console.error("Stripe checkout session creation error:", error);
      ctx.response.status = 500;
      return { error: error.message };
    }
  },
}));
