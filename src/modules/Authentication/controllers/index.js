import {
  validationResult
} from 'express-validator/check'

const helthz = (req, res) => res.send('Hello Module :D')

const loginValidate = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: 'Invalid'
    });
  }
  return res.status(200).json(req.body);
}

export {
  helthz,
  loginValidate
}
