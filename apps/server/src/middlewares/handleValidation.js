/**
 * Middleware to throw error if the request is not valid
 * using express-validator to reduce boilerplate
 */

import { validationResult } from 'express-validator'

const handleValidation = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  next()
}

export default handleValidation
