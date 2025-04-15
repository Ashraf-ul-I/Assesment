import db from '../db/db.js';

export const getAllCategories = (req, res) => {
  db.all('SELECT * FROM category', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

export const getSubcategoriesByCategory = (req, res) => {
  const { categoryId } = req.query;
  db.all(
    'SELECT * FROM sub_category WHERE cat_id = ?',
    [categoryId],
    (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    }
  );
};

export const getDuasBySubcategory = (req, res) => {
  const { subcategoryId } = req.query;
  db.all(
    'SELECT * FROM dua WHERE subcat_id = ?',
    [subcategoryId],
    (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    }
  );
};
