import * as CategoriesActionCreators from './categories';
import * as ProductsActionCreators from './products';

const ActionCreators = {
  ...CategoriesActionCreators,
  ...ProductsActionCreators,
}

export default ActionCreators