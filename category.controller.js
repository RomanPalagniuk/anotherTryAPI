const db = require("./db");

const CreateCategory = async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO category (name) values ($1) returning *",
      [req.body.name]
    );

    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        category: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const GetAllCategories = async (req, res) => {
  try {
    const results = await db.query(
      "select * from category inner join zametky on category.id = zametky.category_id order by zametky.time"
    );

    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        categories: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const GetOneCategory = async (req, res) => {
  try {
    const results = await db.query(
      "select * from zametky where category_id = $1",
      [req.params.category_id]
    );

    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        category: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  CreateCategory,
  GetAllCategories,
  GetOneCategory,
};
