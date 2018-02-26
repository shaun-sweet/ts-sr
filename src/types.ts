import { v1String, v1 } from 'uuid/interfaces'
import * as moment from 'moment'
type uid = ReturnType<v1String>  // unique id
interface Timestamps {
  createdAt: moment.Moment,
  lastUpdatedAt: moment.Moment
}

export namespace SaladRabbitTypes {
  export interface Account extends Timestamps {
    uid: string,
    displayName: string,
    balance: number,
    isClosed: boolean,
    transactions: Array<Transaction['uid']>,
  }

  export interface Transaction extends Timestamps {
    uid: uid,
    account: Account['uid'],
    amount: number,
    payee: string | Account['uid'],
    date: moment.Moment,
    category: Category['uid']
  }

  export interface Category extends Timestamps {
    uid: uid,
    displayName: string,
    masterCategory: MasterCategory['uid']
  }

  export interface MasterCategory extends Timestamps {
    uid: uid,
    displayName: string,
    categories: Array<Category['uid']>
  }

  export interface Entities {
    accounts: {
      [AccountUID: string]: Account
    },
    transactions: {
      [TransactionsUID: string]: Transaction
    },
    categories: {
      [CategoryUID: string]: Category
    },
    masterCategories: {
      [MasterCategoryUID: string]: MasterCategory
    }
  }

}
