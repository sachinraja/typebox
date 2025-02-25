## [0.25.0](https://www.npmjs.com/package/@sinclair/typebox/v/0.25.0)

Updates:

- [271](https://github.com/sinclairzx81/typebox/pull/271) Adds a new non-standard `Type.Date()` type. This type joins the existing `Type.UInt8Array()` as a promoted extended type used to represent core JavaScript primitives. It's inclusion was prompted by end user requirements to validate Date objects prior to writing them to Date supported API's and where serialization of the Date object is handled internally by the API. 

- [271](https://github.com/sinclairzx81/typebox/pull/271) Redesign of Extended Type representations. Extended types been updated to provide external validators (such as Ajv) additional standard proporties to use when defining the custom schema. These properties are `instanceOf` (used for validating a class `object` instances), and `typeOf` (when validating `value` types). Information on configuring Ajv for these properties can be found in the Ajv section of the TypeBox readme.

## [0.24.49](https://www.npmjs.com/package/@sinclair/typebox/v/0.24.49)

Updates:

- [264](https://github.com/sinclairzx81/typebox/pull/264) TypeBox now provides preliminary support for non-boolean `additionalProperties`. This allows existing `TObject` schemas to be augmented with additional properties of a known type.

Additional:

- TypeBox provides an additional reference `codegen` module for generating raw JSON Schema from TypeScript types via the TS compiler API. This generator may be used in future tooling.

## [0.24.44](https://www.npmjs.com/package/@sinclair/typebox/v/0.24.44)

Updates:
- [189](https://github.com/sinclairzx81/typebox/pull/189) Both `Value.Error(T, value)` and `TypeCheck.Error(value)` now return an iterator for validation errors.
- [191](https://github.com/sinclairzx81/typebox/pull/191) TypeBox now provides a `TypeGuard` API that can be used to check the structural validity of TypeBox type. The TypeGuard can be used in reflection / code generation scenarios to resolve the appropriate inner `TSchema` type while traversing a outer type.
- [197](https://github.com/sinclairzx81/typebox/pull/197) TypeBox now implements conditional runtime type mapping. This functionality is offered as seperate import for the `0.24.0` release but may be provided as standard type in later releases. This API enables `type T = Foo extends Bar ? true : false` conditional checks to be implemented at runtime. This API also provides the `Exclude` and `Extract` utility types which are implemented through conditional types in TypeScript.
- [199](https://github.com/sinclairzx81/typebox/pull/199) TypeBox now provides better support for varidiac function and constructor signatures. Currently Variadics are mapped through `Tuple` types.
- [200](https://github.com/sinclairzx81/typebox/pull/200) The types `TPick` and `TOmit` now support types of `TUnion<TLiteral<string>[]>` to be used to select properties. Additionally, `KeyOf` now returns `TUnion<TLiteral<string>[]>`, allowing `KeyOf` schemas to be passed to `TPick` and `TOmit`.
- [214](https://github.com/sinclairzx81/typebox/pull/214) TypeBox now provides better support for i18n. To achieve this, TypeBox includes fixed mappable error codes on the `ValueError` type. These codes can be used by external implementors to create localized error messages. TypeBox may include localized error codes as an optional import in future releases.
- [288](https://github.com/sinclairzx81/typebox/pull/228) TypeBox now allows users to implement custom string validator formats. These formats are internally shared between the `Value` and `TypeCompiler` API's. TypeBox does not currently provide any built in formats, however the standard expected set (email, uuid, uri, etc) may be provided via optional import (inline with ajv-formats usage)
- [229](https://github.com/sinclairzx81/typebox/pull/229) The `Value.Cast()` function now implements automatic coersion of string, number and boolean types.
- [231](https://github.com/sinclairzx81/typebox/pull/231) TypeBox provides a new `Value.Diff<T>()` and `Value.Patch<T>()` utility API for JavaScript values. This API is intended to provide a basis for the efficient transmission of state updates across a network. This API can diff any JavaScript value (typed or untyped) but is recommended to be used in conjunction with a formal static type.
- [236](https://github.com/sinclairzx81/typebox/pull/236) TypeBox now implements the `TNever` type. This type is analogous to TypeScript's `never` type and is used in instances a composition results in a non-reconcilable type. Currently this type is implemented for empty `TUnion<[]>` types only. Future releases may utilize this type for planned updates to `TIntersect` (for example `string & number` resolves to `never`)
- [241](https://github.com/sinclairzx81/typebox/pull/241) [247](https://github.com/sinclairzx81/typebox/pull/247) TypeBox now exposes a ValuePointer API that can be used to mutate a value via an RFC6901 JSON Pointer. Previously this functionality was internally used by `Value.Diff()` and `Value.Patch()` functions but is now offered as an optional import for implementations that need to update values manually through pointer references.

Additional:

- This project now includes two reference code generation utilities that can be used in custom build tooling. The first is `TypeScriptCodeGen` which will remap TypeScript `interface` and `type` definitions to TypeBox types. The second is `TypeBoxCodeGen` which will map existing TypeBox types into TypeScript type definitions. These implementations are not expected to be part of the TypeBox package, but users are free to clone and enhance them in their existing tool chains. Reference implementations can be found https://github.com/sinclairzx81/typebox/tree/master/codegen



## [0.24.15](https://www.npmjs.com/package/@sinclair/typebox/v/0.24.15)

Added:
- `Conditional.Extends(...)` This enables TypeBox to conditionally map types inline with TypeScripts structural equivelence checks. Tested against TypeScript 4.7.4.
- `Conditional.Extract(...)` Which analogs TypeScripts `Extract<...>` utility type. Additional information [here](https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union) 
- `Conditional.Exclude(...)` Which analogs TypeScripts `Exclude<...>` utility type. Additional information [here](https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers)
- `Type.Parameters(...)` Returns the parameters of a `TFunction` as a `TTuple`
- `Type.ReturnType(...)` Returns the return type schema of a `TFunction`
- `Type.ConstructorParameters(...)` Returns the parameters of a `TConstructor` as a `TTuple`
- `Type.InstanceType(...)` Returns the instance type schema of a `TConstructor`
 
## [0.24.8](https://www.npmjs.com/package/@sinclair/typebox/v/0.24.8)

Added:
- `Value.Cast(T, value)` structurally casts a value into another form while retaining information within the original value.
- `Value.Check(T, value)` provides slow dynamic type checking for values. For performance, one should consider the `TypeCompiler` or `Ajv` validator.
- `Value.Errors(T, value)` returns an iterable iterator errors found in a given value.

## [0.24.6](https://www.npmjs.com/package/@sinclair/typebox/v/0.24.6)

Added:

- TypeBox now offers a `TypeGuard` module for structurally checking TypeBox schematics. This module can be used in runtime type reflection scenarios where it's helpful to test a schema is of a particular form. This module can be imported under the `@sinclair/typebox/guard` import path.

Example:

```typescript
import { TypeGuard } from '@sinclair/typebox/guard'

const T: any = {}                                    // T is any

const { type } = T                                   // unsafe: type is any

if(TypeGuard.TString(T)) {
    
  const { type } = T                                 // safe: type is 'string'
}

```

## [0.24.0](https://www.npmjs.com/package/@sinclair/typebox/v/0.24.0)

Changes:

- The `kind` and `modifier` keywords are now expressed as symbol keys. This change allows AJV to leverage TypeBox schemas directly without explicit configuration of `kind` and `modifier` in strict mode.
- `Type.Intersect([...])` now returns a composite `TObject` instead of a `allOf` schema representation. This change allows intersected types to be leveraged in calls to `Omit`, `Pick`, `Partial`, `Required`.
- `Type.Void(...)` now generates a `{ type: null }` schema representation. This is principally used for RPC implementations where a RPC target function needs to respond with a serializable value for `void` return.
- `Type.Rec(...)` renamed to `Type.Recursive(...)` and now supports non-mutual recursive type inference.

Added:

- `Type.Unsafe<T>(...)`. This type enables custom schema representations whose static type is informed by generic type T.
- `Type.Uint8Array(...)`. This is a non-standard schema that can be configured on AJV to enable binary buffer range validation.
- Added optional extended `design` property on all schema options. This property can be used to specify design time metadata when rendering forms.

Compiler:

- TypeBox now provides an optional experimental type compiler that can be used to validate types without AJV. This compiler is not a standard JSON schema compiler and will only compile TypeBox's known schema representations. For full JSON schema validation, AJV should still be the preference. This compiler is a work in progress.

Value:

- TypeBox now provides a value generator that can generate default values from TypeBox types.

Breaking Changes:

- `Type.Intersect(...)` is constrained to accept types of `TObject` only.
- `Type.Namespace(...)` has been removed.
- The types `TUnion`, `TEnum`, `KeyOf` and `TLiteral<TString>[]` are all now expressed via `allOf`. For Open API users, Please consider `Type.Unsafe()` to express `enum` string union representations. Documentation on using `Type.Unsafe()` can be found [here](https://github.com/sinclairzx81/typebox#Unsafe-Types)

## [0.23.3](https://www.npmjs.com/package/@sinclair/typebox/v/0.23.3)

Updates:

- Fix: Rename BoxKind to NamespaceKind

## [0.23.1](https://www.npmjs.com/package/@sinclair/typebox/v/0.23.1)

Updates:

- The `Type.KeyOf(...)` type can now accept references of `Type.Ref(TObject)`

## [0.23.0](https://www.npmjs.com/package/@sinclair/typebox/v/0.23.0)

Updates:

- The types `Type.Namespace(...)` and `Type.Ref(...)` are promoted to `Standard`.
- TypeBox now includes an additional type named `TRef<...>` that is returned on calls to `Type.Ref(...)`. The `TRef<...>` includes a new `RefKind` symbol for introspection of the reference type.
- TypeBox now maintains an internal dictionary of all schemas passed that contain an `$id` property. This dictionary is checked whenever a user attempts to reference a type and will throw if attempting to reference a target schema with no `$id`.
- The types `Type.Partial(...)`, `Type.Required(...)`, `Type.Omit()` and `Type.Pick(...)` now support reference types. Note that when using these functions with references, TypeBox will replicate the source schema and apply the nessasary modifiers to the replication.

## [0.22.0](https://www.npmjs.com/package/@sinclair/typebox/v/0.22.0)

Updates:

- The type `TSchema` is now expressed as an HKT compatible interface. All types now extend the `TSchema` interface and are themselves also expressed as interfaces. This work was undertaken to explore recursive type aliases in future releases.
- The phantom property `_infer` has been renamed to `$static`. Callers should not interact with this property as it will always be `undefined` and used exclusively for optimizing type inference in TypeScript 4.5 and above.
- TypeBox re-adds the feature to deeply introspect schema properties. This feature was temporarily removed on the `0.21.0` update to resolve deep instantiation errors on TypeScript 4.5.
- The `Type.Box(...)` and `Type.Rec(...)` functions internally rename the property `definitions` to `$defs` inline with JSON schema draft 2019-09 conventions. Reference [here](https://opis.io/json-schema/2.x/definitions.html).

## [0.21.2](https://www.npmjs.com/package/@sinclair/typebox/v/0.21.2)

Updates:

- TypeBox now correctly infers for nested union and intersect types.

Before

```typescript
const A = Type.Object({ a: Type.String() })
const B = Type.Object({ b: Type.String() })
const C = Type.Object({ c: Type.String() })
const T = Type.Intersect([A, Type.Union([B, C])])

// type T = { a: string } & { b: string } & { c: string } 
```
After

```typescript
const A = Type.Object({ a: Type.String() })
const B = Type.Object({ b: Type.String() })
const C = Type.Object({ c: Type.String() })
const T = Type.Intersect([A, Type.Union([B, C])])

// type T = { a: string } & ({ b: string } | { c: string })
```

## [0.21.0](https://www.npmjs.com/package/@sinclair/typebox/v/0.21.0)

Updates:

- TypeBox static inference has been updated inline with additional inference constraints added in TypeScript 4.5. All types now include a phantom `_infer` property which contains the inference TS type for a given schema. The type of this property is inferred at the construction of the schema, and referenced directly via `Static<T>`.
- `Type.Box(...)` has been renamed to `Type.Namespace(...)` to draw an analogy with XML's `xmlns` XSD types.

## [0.20.1](https://www.npmjs.com/package/@sinclair/typebox/v/0.20.1)

Updates:

- TypeBox mandates TypeScript compiler version `4.3.5` and above.

## [0.20.0](https://www.npmjs.com/package/@sinclair/typebox/v/0.20.0)

Updates:

- Function `Type.Rec(...)` signature change.
- Minor documentation updates.

Notes:

The `Type.Rec(...)` function signature has been changed to allow passing the `$id` as a custom option. This is to align `Type.Rec(...)` with other functions that accept `$id` as an option. `Type.Rec(...)` can work with or without an explicit `$id`, but it is recommend to specify one if the recursive type is nested in an outer schema.

```typescript
const Node = Type.Rec(Self => Type.Object({
    id: Type.String(),
    nodes: Type.Array(Self)
}), { $id: 'Node' })
```

## [0.19.0](https://www.npmjs.com/package/@sinclair/typebox/v/0.19.0)

Updates:

- Function `Type.Box(...)` removes `$id` parameter as first argument.
- Function `Type.Ref(...)` is now overloaded to support referencing `Type.Box(...)` and `TSchema`.

Notes:

This update changes the signature of `Type.Box(...)` and removes the explicit `$id` passing on the first parameter. The `$id` must be passed as an option if the caller wants to reference that type.

```typescript
const T = Type.String({ $id: 'T' })

const B = Type.Box({ T }, { $id: 'B' })

const R1 = Type.Ref(T)                   // const R1 = { $ref: 'T' }

const R2 = Type.Ref(B, 'T')              // const R2 = { $ref: 'B#/definitions/T' }
```

## [0.18.1](https://www.npmjs.com/package/@sinclair/typebox/v/0.18.1)

- Function `Type.Enum(...)` now expressed with `anyOf`. This to remove the `allowUnionTypes` configuration required to use `enum` with in AJV strict.
- Function `Type.Rec(...)` now takes a required `$id` as the first parameter.
- Function `Type.Strict(...)` no longer includes a `$schema`. Callers can now optionally pass `CustomOptions` on `Type.Strict(...)`

## [0.18.0](https://www.npmjs.com/package/@sinclair/typebox/v/0.18.0)

Changes:

- Function `Type.Intersect(...)` is now implemented with `allOf` and constrained with `unevaluatedProperties` (draft `2019-09`)
- Function `Type.Dict(...)` has been deprecated and replaced with `Type.Record(...)`.
- Function `Type.Strict(...)` now includes the `$schema` property referencing the `2019-09` draft.

### Type.Intersect(...)

TypeBox now targets JSON schema draft `2019-09` for expressing `Type.Intersect(...)`. This is now expressed via `allOf` with additionalProperties constrained with `unevaluatedProperties`. Note that `unevaluatedProperties` is a feature of the `2019-09` specification.

### Type.Record(K, V)

TypeBox has deprecated `Type.Dict(...)` in favor of the more generic `Type.Record(...)`. Where as `Type.Dict(...)` was previously expressed with `additionalProperties: { ... }`, `Type.Record(...)` is expressed with `patternProperties` and supports both `string` and `number` indexer keys. Additionally, `Type.Record(...)` supports string union arguments. This is analogous to TypeScript's utility record type `Record<'a' | 'b' | 'c', T>`.

## [0.17.7](https://www.npmjs.com/package/@sinclair/typebox/v/0.17.7)

Changes:

- Added optional `$id` argument on `Type.Rec()`.
- Documentation updates.

## [0.17.6](https://www.npmjs.com/package/@sinclair/typebox/v/0.17.6)

Changes:

- Added `Type.Rec(...)` function.

Notes:

This update introduces the `Type.Rec()` function for enabling Recursive Types. Please note that due to current inference limitations in TypeScript, TypeBox is unable to infer the type and resolves inner types to `any`. 

This functionality enables for complex self referential schemas to be composed. The following creates a binary expression syntax node with the expression self referential for left and right oprands.

```typescript
const Operator = Type.Union([
    Type.Literal('+'),
    Type.Literal('-'),
    Type.Literal('/'),
    Type.Literal('*')
])

type Expression = Static<typeof Expression>

// Defines a self referencing type.
const Expression = Type.Rec(Self => Type.Object({
    left:     Type.Union([Self, Type.Number()]), 
    right:    Type.Union([Self, Type.Number()]),
    operator: Operator
}))

function evaluate(expression: Expression): number {
    const left = typeof expression.left  !== 'number' 
        ? evaluate(expression.left as Expression)  // assert as Expression
        : expression.left
    const right = typeof expression.right  !== 'number' 
        ? evaluate(expression.right as Expression) // assert as Expression
        : expression.right
    switch(expression.operator) {
        case '+': return left + right
        case '-': return left - right
        case '*': return left * right
        case '/': return left / right
    }
}

const result = evaluate({
    left: {
        left: 10, 
        operator: '*',
        right: 4, 
    },
    operator: '+',
    right: 2,
}) // -> 42
```

This functionality is flagged as `EXPERIMENTAL` and awaits community feedback.

## [0.17.4](https://www.npmjs.com/package/@sinclair/typebox/v/0.17.4)

Changes:

- Added `Type.Box()` and `Type.Ref()` functions.

Notes:

This update provides the `Type.Box()` function to enable common related schemas to grouped under a common namespace; typically expressed as a `URI`. This functionality is primarily geared towards allowing one to define a common set of domain objects that may be shared across application domains running over a network. The `Type.Box()` is intended to be an analog to `XML` `xmlns` namespacing.

The `Type.Ref()` function is limited to referencing from boxes only. The following is an example.

```typescript
// Domain objects for the fruit service.
const Fruit = Type.Box('https://fruit.domain.com', {
    Apple:  Type.Object({ ... }),
    Orange: Type.Object({ ... }),
})

// An order referencing types of the fruit service.
const Order = Type.Object({
    id:       Type.String(),
    quantity: Type.Number(),
    item:     Type.Union([
        Type.Ref(Fruit, 'Apple'),
        Type.Ref(Fruit, 'Orange')
    ])
})
```
> Note: As of this release, the `Type.Omit()`, `Type.Pick()`, `Type.Partial()`, `Type.Readonly()` and `Type.Intersect()` functions do not work with Reference Types. This may change in later revisions.

For validation using `Ajv`, its possible to apply the `Box` directly as a schema.

```typescript
ajv.addSchema(Fruit) // makes all boxed types known to Ajv
```

This functionality is flagged as `EXPERIMENTAL` and awaits community feedback.

## [0.17.1](https://www.npmjs.com/package/@sinclair/typebox/v/0.17.1)

- Remove default `additionalProperties: false` constraint from all object schemas.

This update removes the `additionalProperties: false` constraint on all object schemas. This constraint was introduced on `0.16.x` but has resulted in significant downstream problems composing schemas whose types `intersect`. This is due to a JSON schema design principle where constraints should only be added (never removed), and that intersection types may require removal of the `additionalProperties` constraint in some cases, this had resulted in some ambiguity with respect to how TypeBox should handle such intersections. 

This update can also be seen as a precursor towards TypeBox potentially leveraging `unevaluatedProperties` for type intersection in future releases. Implementors should take note that in order to constrain the schema to known properties, one should apply the `additionalProperties: false` as the second argument to `Type.Object({...})`. 

```typescript
const T = Type.Object({
    a: Type.String(),
    b: Type.Number()
}, { 
    additionalProperties: false 
})
