import Joi, { ValidationResult } from 'joi'

interface CategoryInput {
  name: string
  description?: string | null
}

/**
 * Validate input data for creating/updating a category.
 * @param payload - The data to validate.
 * @returns Validation result with error and value.
 */
export const inputCategoryValidation = (
  payload: CategoryInput
): ValidationResult => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    description: Joi.string().max(255).allow(null, '').optional()
  })

  return schema.validate(payload)
}
