import { RootState } from 'config/rootReducer'
import { Dropbox } from 'dropbox'
import { createSelector } from 'reselect'
import { DropboxWrapper } from 'lib/Dropbox'

// Determines in the user has a dropbox access token
export const isDropboxAuthed = (state: RootState): Boolean => Boolean(state.dropbox.accessToken)

// This is the dropbox client that should be used!
export const getDbxClient = createSelector(
    (state: RootState) => state.dropbox.accessToken,
    (accessToken): DropboxWrapper => new DropboxWrapper(new Dropbox({ accessToken }))
)
