import { v1String, v1 } from 'uuid/interfaces'
import * as moment from 'moment'
type uid = ReturnType<v1String>  // unique id
interface Timestamps {
  createdAt: moment.Moment,
  lastUpdatedAt?: moment.Moment
}

export interface Account extends Timestamps {
  uid: string,
  name: string,
  balance: number,
  isClosed: boolean,
  type: 'checking' | 'saving'
  transactions?: Array<Transaction['uid']>,
}

export interface Transaction extends Timestamps {
  uid: uid,
  account: Account['uid'],
  amount: number,
  payee: string | Account['uid'],
  date: moment.Moment,
  category: Category['uid']
}

export interface Category {
  uid: uid,
  name: string,
  masterCategory: MasterCategory['uid']
}

export interface MasterCategory extends Timestamps {
  uid: uid,
  name: string,
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
