import { DropboxAccount } from 'features/Dropbox/redux'
import { Dropbox } from 'dropbox'
import { Dispatch } from 'react-redux'
import * as SR from 'types'
import { getFileJsonDispatchTypes } from './types'
import { ConfigFileNames } from './constants'
enum FilePaths { ROOT = '' }

const STARTING_ACCOUNT = {
  '6aa0cad0-24a0-11e8-a913-75765b466619': {
    uid: '6aa0cad0-24a0-11e8-a913-75765b466619',
    name: 'Starting Example Account (Delete Me)',
    balance: '100000',
    type: 'checking',
    isClosed: false,
    createdAt: '2018-03-10T13:20:03-07:00'
  }
}

export class DropboxWrapper {
  private dbx: DropboxTypes.Dropbox
  constructor (dbx: DropboxTypes.Dropbox) {
    this.dbx = dbx
  }

  async bootstrapEnvironment (dispatchCB: getFileJsonDispatchTypes) {
    await this.validateConfigurations()
    const accounts = await this.getAccountConfigFile()
    // @ts-ignore
    this.getFileJson(accounts.fileBlob, dispatchCB)
  }

  showFiles = () => this.dbx.filesListFolder({ recursive: true, path: FilePaths.ROOT })

  // dropbox's api needs a forward slash when getting file names
  getAccountConfigFile = () => this.dbx.filesDownload({ path: `/${ConfigFileNames.ACCOUNTS}` })

  validateConfigurations () {
    return this.showFiles()
      .then(res => {
        if (!this.validateAccountConfigFile(res)) return this.createAccountConfig()
      }, console.error)
  }

  getFileJson (file, dispatchCB: getFileJsonDispatchTypes) {
    // @ts-ignore
    const reader = new FileReader()
    reader.onload = () => {
      dispatchCB(JSON.parse(reader.result))
    }
    reader.readAsText(file)
  }

  private validateAccountConfigFile = (dbxFiles: DropboxTypes.files.ListFolderResult): boolean =>
    dbxFiles.entries.some(file => file.name === ConfigFileNames.ACCOUNTS)

  private createAccountConfig = () =>
    this.dbx.filesUpload({ path: '/accounts.salad', contents: JSON.stringify(STARTING_ACCOUNT) })
      .then(console.log, console.error)

}
