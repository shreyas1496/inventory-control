import AppStateActions from './AppStateActions';
import SellActions from './SellActions';

export default {
  ACTION: 'ACTION',
  ...AppStateActions,
  ...SellActions,
};
