```javascript

const linearAlgebra = require('linear-algebra')();
const Matrix = linearAlgebra.Matrix; `
	
const ahp = require('ahp-lite');

```

# AHP Lite
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/139085c90fc34d399e24d192f84c9da3)](https://app.codacy.com/app/patelotech/ahp-lite?utm_source=github.com&utm_medium=referral&utm_content=patelotech/ahp-lite&utm_campaign=Badge_Grade_Dashboard)
[![npm version](https://badge.fury.io/js/recht.svg)](https://badge.fury.io/js/recht)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/dashersw/recht/master/LICENSE) [![Greenkeeper badge](https://badges.greenkeeper.io/patelotech/topsis.svg)](https://greenkeeper.io/)

<a href="https://www.patreon.com/join/patelotech?" target="_blank"><img src="https://c5.patreon.com/external/logo/become_a_patron_button.png" > </a>

This is a simplified implementation in Javascript for NodeJS of the algorithm AHP (Analytic Hierarchy Proccess) created by Saaty in 1986. This method is utilised in the field of prescriptive analytics, operations research, decision science and managerial accouting to methodically asign weighting to conflicting criteria based on systematic and hierchical subjective judgement.

## Installation

` npm i ahp `

## Example Usage

```javascript
const c = new Matrix([[1, 0.33, 0.2], [3, 1, 0.14], [5, 7, 1]]); // Criteria assessment matrix.

ahp.getWeights(c);
```

Returns:
```javascript
{ ev: [ 0.1, 0.19, 0.71 ], ci: 0.12, cr: 0.21 }
```


## Documentation


**INPUT**

| Argument      | Description                                                                                                                                                                                               | Mandatory  | Type                    |  Rules                                                                                                                                                                                                                 |
|:-------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------:|:-----------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| c             | **c** argument stands for 'criteria matrix' and is a matrix that contains the data from comparative judgement between criteria based on Saaty scale. **(READ BIBLIOGRAPHY)**                              | True       | Matrix of numeric data  | This argument **MUST** be a matrix object from linear-algebra module and **MUST** contain only numeric data.                                                                                                           | 


**OUTPUT**

| Property      | Description                                                                                                                                                                                               | Type                    |
|:-------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------:|
| ev            | **ev** property stands for 'eigenvector' and is an array that contains the weights of each criteria.                                                                                                      | Array of numeric data.  | 
| ci            | **ci** property stands for 'consistency index' this is an indicator of inconsistency.                                                                                                                     | Float number.           |
| cr            | **cr** property stands for 'consistency ratio' this is the standarised indicator of inconsistency, higher than 0.2 should be reviewed.                                                                    | Float number.           |
 
 
**NOTE:** Make sure to read through bibliography below of AHP to understand how the algorithm works.



## Package roadmap

-   [x] AHP.
-   [x] Support for Linear-Algebra matrices. 
-   [ ] Support for MathJS matrices.
-   [ ] Support for Group decision-making. 
-   [ ] (FAHP) Fuzzy AHP.
-   [ ] (IFAHP) Intuisionistic Fuzzy AHP.
-   [ ] (NAHP) Neutrosophic AHP.
-   [ ] (ANP) Analytic Network Process.
-   [ ] (NNP) Neural Network Process.

## Package Dependencies

-   linear-algebra

## License

MIT

## Contributing

<https://github.com/patelotech/ahp-lite>

## Linting

-   AIRBNB
[AIRBNB JS CODE STYLE](https://dev.mysql.com/doc/ "AIRBNB JS CODE STYLE")

### Configuration

-   Eslint v-5.11.1 // AIRBNB Configuration

### Linting scripts

-   Error checl: `npm run lint`
-   Error fix:  `npm run lint-fix` or `npm run lint -- --fix`

## Bibliography

-   Saaty, R. W. (1987). The analytic hierarchy process—what it is and how it is used. Mathematical Modelling, 9(3-5), 167. doi:10.1016/0270-0255(87)90473-8
-   Saaty, T. L. (1986). Axiomatic Foundation of the Analytic Hierarchy Process. Management Science, 32(7), 841. doi:10.1287/mnsc.32.7.841
-   Saaty, T. L. (1978). Exploring the interface between hierarchies, multiple objectives and fuzzy sets. Fuzzy Sets and Systems, 1(1), 57–68. doi:10.1016/0165-0114(78)90032-5
-   Saaty, T. L. (2008). Decision making with the analytic hierarchy process. International journal of services sciences, 1(1), 83-98.
-   Aczél, J., & Saaty, T. L. (1983). Procedures for synthesizing ratio judgements. Journal of Mathematical Psychology, 27(1), 97. doi:10.1016/0022-2496(83)90028-7
