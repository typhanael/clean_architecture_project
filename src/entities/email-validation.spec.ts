import { Email } from './email'

describe('Email validation', () => {
  test('should not accept null strings', () => {
    const email = null as any
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept empty strings', () => {
    const email: string = ''
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should accept valid email', () => {
    const email: string = 'any@email.com'
    expect(Email.validate(email)).toBeTruthy()
  })

  test('should not accept local part larger than 64 chars', () => {
    const email: string = 'l'.repeat(65) + '@mail.com'
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept strings larger than 320 chars', () => {
    const email: string = 'l'.repeat(64) + '@' + 'd'.repeat(128) + '.' + 'd'.repeat(127)
    expect(Email.validate(email)).toBeFalsy()
  })
})