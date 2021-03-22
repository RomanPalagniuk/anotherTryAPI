const db = require("./db");

const GetAllZametky = async (req, res) => {
  try {
    const results = await db.query("select * from zametky");

    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        zametky: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const GetOneZametka = async (req, res) => {
  try {
    const results = await db.query("select * from zametky where id = $1", [
      req.params.id,
    ]);

    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        zametka: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const CreateZametka = async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO zametky (title, description, time, category_id) values($1, $2, $3, $4) returning *",
      [
        req.body.title,
        req.body.description,
        req.body.time,
        req.body.category_id,
      ]
    );

    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        zametka: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const UpdateZametka = async (req, res) => {
  try {
    const results = await db.query(
      " UPDATE zametky SET title = $1, description = $2, time = $3, category_id = $4 where id = $5 returning *",
      [
        req.body.title,
        req.body.description,
        req.body.time,
        req.body.category_id,
        req.params.id,
      ]
    );

    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        zametka: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const DeleteZametka = async (req, res) => {
  try {
    const results = await db.query("DELETE FROM zametky  where id = $1", [
      req.params.id,
    ]);

    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  GetAllZametky,
  GetOneZametka,
  CreateZametka,
  UpdateZametka,
  DeleteZametka,
};
