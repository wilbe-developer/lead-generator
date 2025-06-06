import express from 'express';
import handler from './find-emails';   // wherever your existing function lives

const app = express();
app.get(
  '/api/find-emails',
  (req, res, next) => {
    handler(req, res)
      .catch(next);
  }
);

// Railway will give you a PORT env var
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`📬 listening on ${port}`));
