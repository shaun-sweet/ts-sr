import { DropboxAccount } from 'features/Dropbox/redux'
import { Dropbox } from 'dropbox'
enum FilePaths { ROOT = '' }

export default class DropboxClient {
  private dbx: DropboxTypes.Dropbox
  constructor (dbx: DropboxTypes.Dropbox) {
    this.dbx = dbx
  }

  bootstrapEnvironment () {
    this.createAccountConfig()
  }

  addAccount () {
    console.log('test')
  }

  showFiles () {
    return this.dbx.filesListFolder({ recursive: true, path: FilePaths.ROOT })
    .then(response => response, console.error)
  }

  private createAccountConfig () {
    this.dbx.filesUpload({ path: '/accounsts.config', contents: JSON.stringify({ this: 'is', another: 'st' }) })
      .then(console.log, console.error)
  }
}
