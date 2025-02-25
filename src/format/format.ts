/*--------------------------------------------------------------------------

@sinclair/typebox/format

The MIT License (MIT)

Copyright (c) 2022 Haydn Paterson (sinclair) <haydn.developer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---------------------------------------------------------------------------*/

export type FormatValidationFunction = (value: string) => boolean

/** Provides functions to create custom string formats */
export namespace Format {
  const formats = new Map<string, FormatValidationFunction>()

  /** Clears all formats */
  export function Clear() {
    return formats.clear()
  }

  /** Returns true if the string format exists */
  export function Has(format: string) {
    return formats.has(format)
  }

  /** Sets a string format validation function */
  export function Set(format: string, func: FormatValidationFunction) {
    formats.set(format, func)
  }

  /** Gets a string format validation function */
  export function Get(format: string) {
    return formats.get(format)
  }
}
