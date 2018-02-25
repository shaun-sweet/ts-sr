declare namespace dbx {
  export interface DropboxAccount {
    accessToken: string, // dropbox API token
    uid: string, // dropbox users uid
    accountId: string // dropbox users account ID
  }
}

declare var DropboxAccount: dbx.DropboxAccount